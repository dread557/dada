import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please add your name").max(100),
  email: z.string().email("Please add a valid email"),
  subject: z.string().max(160).optional().default(""),
  topic: z.string().max(60).optional().default(""),
  message: z.string().min(10, "Tell me a little more").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const to = process.env["CONTACT_EMAIL"] ?? "dadaolawunmi09@gmail.com";

    if (!apiKey) {
      console.error(
        "[contact] RESEND_API_KEY is missing. Add it to .env.local and restart the dev server.",
      );
      throw new Error("Email provider is not configured");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: data.subject || `New message from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nTopic: ${data.topic}\n\n${data.message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend error", res.status, detail);
      throw new Error("Email delivery failed");
    }

    return { ok: true as const, delivered: true as const };
  });
