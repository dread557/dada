# Dada Olawunmi — Portfolio

Personal portfolio site for **Dada Olawunmi**, a frontend engineer based in Lagos, Nigeria.

The site is an editorial, motion-led presentation of selected product work across fintech, payments, education, and commerce — with experience, process, and a contact form for new opportunities.

## Stack

- React 19 + TypeScript
- TanStack Start / Router / Query
- Vite + Nitro (Cloudflare)
- Tailwind CSS
- Motion (Framer Motion)
- Resend (contact form delivery)

## Features

- Selected work with live project links
- Experience timeline and tech stack
- Contact form with server-side email delivery
- Dynamic `sitemap.xml` and `robots.txt`
- Open Graph / Twitter preview metadata

## Local development

Requires Node.js and [pnpm](https://pnpm.io) (enable with `corepack enable`).

```sh
pnpm install
pnpm dev
```

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format with Prettier |

### Environment

Create a `.env.local` file for contact email delivery:

```sh
RESEND_API_KEY=re_...
CONTACT_EMAIL=your@email.com
```

Without `RESEND_API_KEY`, contact submissions will fail by design.
