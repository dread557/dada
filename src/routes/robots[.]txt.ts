import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const robots = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;

        return new Response(robots, {
          headers: {
            "cache-control": "public, max-age=3600",
            "content-type": "text/plain; charset=utf-8",
          },
        });
      },
    },
  },
});
