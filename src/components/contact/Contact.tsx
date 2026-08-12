"use client";

import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "@/lib/contact.functions";
import { contactInfo } from "@/data/portfolio";
import { Reveal } from "@/components/site/primitives";

const topics = ["Project", "Collaboration", "Freelance", "Full-time", "Just saying hi"];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [topic, setTopic] = useState(topics[0] as string);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      subject: String(form.get("subject") ?? ""),
      topic,
      message: String(form.get("message") ?? ""),
    };

    const nextErrors: Record<string, string> = {};
    if (payload.name.trim().length < 2) nextErrors["name"] = "Please add your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email))
      nextErrors["email"] = "Please add a valid email";
    if (payload.message.trim().length < 10) nextErrors["message"] = "Tell me a little more";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      await send({ data: payload });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="shell scroll-mt-24 py-24 md:py-40">
      <div className="rule flex items-baseline justify-between pt-6">
        <span className="meta">06 / Contact</span>
        <span className="meta">{contactInfo.location}</span>
      </div>

      <Reveal className="mt-14">
        <h2 className="display-lg uppercase">
          Let's build
          <br />
          something.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-base leading-relaxed text-muted-foreground">
            Have a product that needs a frontend? Building something interesting? Just want to
            talk shop?
          </p>
          <p className="mt-4 text-base">Let's connect.</p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="link-underline block text-lg break-all"
              data-cursor="Email"
            >
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="meta block">
              {contactInfo.phone}
            </a>
            <div className="flex gap-6 pt-2">
              <a className="meta link-underline" href={contactInfo.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className="meta link-underline" href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {status === "success" ? (
            <div className="border-t border-border pt-10">
              <p className="display-md uppercase">Message sent.</p>
              <p className="mt-4 text-muted-foreground">
                Thanks — I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-10">
              <Field label="Your name" name="name" error={errors["name"]} />
              <Field label="Your email" name="email" type="email" error={errors["email"]} />
              <Field label="What are we talking about?" name="subject" />

              <fieldset>
                <legend className="meta">Project type</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      aria-pressed={topic === t}
                      className={`meta border px-4 py-2 transition-colors ${
                        topic === t
                          ? "border-foreground bg-ink text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="meta">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-lg outline-none focus:border-foreground"
                  aria-invalid={Boolean(errors["message"])}
                />
                {errors["message"] && (
                  <p className="mt-2 text-xs text-destructive">{errors["message"]}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-cursor="Send"
                  className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-background disabled:opacity-60"
                >
                  {status === "loading" ? "Sending" : "Send message"}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={name} className="meta">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none focus:border-foreground"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
