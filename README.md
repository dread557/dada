# Dada's Studio

# Dada Olawunmi — Frontend Engineer Portfolio

## 1. Project Overview

Build a highly polished personal portfolio website for **Dada Olawunmi**, a Frontend Engineer with 5+ years of experience building scalable, performant, and intuitive web and mobile applications.

The website should feel like the portfolio of a **senior/product-minded frontend engineer who cares deeply about interaction, performance, product UX, and visual quality**.

This should NOT look like a generic developer portfolio with:

* a centered hero
* a profile picture
* a grid of GitHub projects
* generic "I am a passionate developer" copy
* excessive gradients
* generic SaaS-style cards
* a giant list of technologies

Instead, create an **editorial, immersive, experimental portfolio** that makes the engineering work feel like a visual experience.

The website should communicate:

> "I build products, not just interfaces."

The visual language should sit somewhere between a creative developer portfolio and a premium digital product studio.

---

# 2. Inspiration

Use the following websites strictly as **design inspiration**, not as templates to copy.

### Marimba.Design

Primary inspiration for:

* Works / Projects section
* Project presentation
* Editorial hierarchy
* Large visual project previews
* Work storytelling
* Minimal navigation

### Irina Moi

Primary inspiration for:

* Bold typography
* Editorial layout
* Personal voice
* Large section headings
* Strong whitespace
* Work index
* Personality

### Valentin Gassend

Primary inspiration for:

* Scroll experience
* Motion
* Project transitions
* Creative developer positioning
* Navigation
* Project metadata
* Experimental interactions

### Portfolio by Shruti

Primary inspiration for:

* Overall content structure
* Dense but intentional information architecture
* About/experience presentation
* Combining personality with professional content
* Experimental sections

### Frontend Woman

Primary inspiration for:

* Contact section
* Interactive contact form
* Playful copy
* Making the contact experience feel like part of the website rather than a boring form

### Laugon

Primary inspiration for:

* Content presentation
* Personality
* Human storytelling
* Editorial writing

### Dylan Brouwer

Primary inspiration for:

* Motion
* Scroll-driven interactions
* Creative developer positioning
* Typography
* Project presentation
* Micro-interactions

### Douglus

Primary inspiration for:

* Experimental art direction
* Conceptual interactions
* Breaking conventional portfolio layouts

---

# 3. Core Design Direction

## Overall Feel

The website should feel:

* Experimental
* Editorial
* Minimal
* Confident
* Technical
* Human
* Slightly playful
* Premium
* Fast
* Intentional

Avoid making everything look overly polished in a corporate way.

There should be moments where the site feels like a digital playground.

---

# 4. Design Principles

## Principle 1 — Typography is the UI

Typography should carry a significant portion of the design.

Use:

* Very large display typography
* Small technical metadata
* Mixed font sizes
* Strong hierarchy
* Tight headlines
* Occasional oversized text that extends beyond normal container boundaries

Avoid relying heavily on cards.

---

## Principle 2 — Motion should communicate hierarchy

Animations should not exist simply because animation is possible.

Use animation for:

* Page entrance
* Section transitions
* Project reveals
* Image movement
* Text reveals
* Hover states
* Navigation
* Scroll progress
* Cursor interactions
* Project metadata

Animations should feel smooth and intentional.

Avoid:

* excessive bouncing
* unnecessary 3D
* constant movement
* distracting particle effects
* animation that hurts readability

---

## Principle 3 — Engineering should influence the design

The site should subtly communicate that this is built by an engineer.

Possible details:

* small technical labels
* coordinates
* timestamps
* viewport information
* tiny system messages
* stack labels
* performance indicators
* interactive UI details
* code-inspired microcopy

But do not turn the entire portfolio into a "developer terminal" website.

---

# 5. Technology

Use:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion
* GSAP where scroll-driven animation provides real value
* Lenis or an equivalent smooth-scroll implementation
* Lucide icons if icons are required

Prefer CSS and Framer Motion for most interactions.

Use GSAP only where it provides meaningful control over complex scroll animations.

Do NOT introduce unnecessary libraries.

---

# 6. Technical Requirements

Use:

* Next.js App Router
* TypeScript
* Server Components where appropriate
* Client Components only where interaction is required
* Responsive CSS
* Semantic HTML
* Accessible interactive elements
* Optimized images using `next/image`
* Proper metadata
* Open Graph metadata
* Sitemap
* robots.txt

The site must be production-ready.

---

# 7. Primary Navigation

Create a minimal fixed navigation.

Desktop:

```text
DADA OL.
                       
WORK     ABOUT     CONTACT
```

Alternative layout:

```text
DADA OL.                    MENU
FRONTEND ENGINEER           01 / 03
```

The navigation should remain visually subtle.

On scroll:

* navigation can reduce in size
* background can become slightly opaque
* typography can change subtly
* avoid a large traditional navbar

Mobile:

```text
DADA OL.                       MENU
```

Open a fullscreen navigation overlay.

Navigation links:

```text
01 — WORK
02 — ABOUT
03 — EXPERIENCE
04 — CONTACT
```

Include GitHub and LinkedIn in the menu.

---

# 8. HERO SECTION

The hero should immediately establish who Dada is.

Do NOT use a generic:

> "Hi, I'm Dada, a frontend developer."

Instead create a strong editorial statement.

Suggested content:

```text
DADA OLAWUNMI

FRONTEND ENGINEER
BUILDING PRODUCTS
FOR THE WEB.

I turn complex product ideas into fast,
accessible and intuitive digital experiences.
```

Potential alternative large statement:

```text
I BUILD THE
INTERFACE
BETWEEN IDEAS
AND PEOPLE.
```

Use a very large headline.

The hero should occupy most of the first viewport.

---

## Hero Metadata

Add small information around the hero:

```text
FRONTEND ENGINEER
LAGOS, NIGERIA

5+ YEARS EXPERIENCE

REACT / NEXT.JS / TYPESCRIPT
```

Also include:

```text
SCROLL TO EXPLORE ↓
```

Animate this subtly.

---

# 9. Hero Interaction

On initial page load:

1. Background appears.
2. Navigation fades/slides in.
3. Main typography reveals line by line.
4. Supporting metadata follows.
5. Scroll indicator appears last.

Do not delay the page unnecessarily.

The page must remain usable even if animations fail.

---

# 10. INTRODUCTION SECTION

After the hero, create a short editorial introduction.

Large statement:

```text
I BUILD DIGITAL
PRODUCTS, NOT JUST
INTERFACES.
```

Then:

```text
I'm a Frontend Engineer with 5+ years of experience
working across fintech, payments, education, commerce,
and enterprise applications.

I care about the space where product thinking,
engineering and interaction meet.
```

Add a small "Currently" section:

```text
CURRENTLY

Frontend Engineer
FSDH Group

Previously:
Raiz
Qataloog
Nupat
Kaybill
Local Navistar
HNG
```

---

# 11. SELECTED WORK SECTION

This is one of the most important sections.

Title:

```text
SELECTED
WORK
```

or:

```text
01 / WORK
```

Use an editorial project list rather than a standard card grid.

Projects should appear large and visually dominant.

Each project should contain:

```text
PROJECT NUMBER

PROJECT NAME

DESCRIPTION

ROLE

TECHNOLOGY

YEAR

VIEW PROJECT →
```

---

# 12. Featured Projects

Use the following projects as the initial portfolio content.

## Project 01 — NRS TMS

Title:

```text
NRS TMS
```

Subtitle:

```text
VAT Transactions Monitoring System
```

Description:

```text
An enterprise transaction monitoring platform built for
payment processors, transforming large volumes of financial
data into actionable operational insights.
```

Role:

```text
Frontend Engineer
```

Technology:

```text
Next.js
TypeScript
WebSockets
Zustand
Tailwind CSS
```

Visual direction:

Large dashboard screenshot.

Show:

* charts
* transaction tables
* filters
* financial metrics
* data visualization

If screenshots are not available, create a tasteful placeholder visual that represents the product. Do NOT fabricate actual product screenshots and present them as real screenshots.

---

## Project 02 — Raiz Finance

Title:

```text
RAIZ
```

Subtitle:

```text
Payments & Merchant Infrastructure
```

Description:

```text
A multi-currency payment experience helping businesses
accept, manage and understand payments across fiat and
crypto.
```

Role:

```text
Frontend Developer
```

Technology:

```text
Next.js
TypeScript
React
WebSockets
REST APIs
TanStack Query
```

Highlight:

```text
Payment links reduced merchant onboarding time by 80%.
```

Show the 80% metric prominently but tastefully.

Visual direction:

Merchant dashboard / transaction interface.

---

## Project 03 — Dailybills

Title:

```text
DAILYBILLS
```

Subtitle:

```text
Multilingual Bill Payments Platform
```

Description:

```text
A multilingual digital payments platform for airtime,
data, insurance, utilities and wallet services.
```

Technology:

```text
Next.js
TypeScript
i18next
```

Focus on:

* multilingual UI
* payment flow
* dashboard
* utility payments

---

## Project 04 — School Management Platform

Title:

```text
SCHOOL MANAGEMENT
```

Description:

```text
A school management platform serving thousands of users
across teachers, administrators and students.
```

Technology:

```text
React
Redux
Material UI
REST APIs
```

Highlight:

```text
5,000+ users
```

---

## Project 05 — SalesTrack

Title:

```text
SALESTRACK
```

Subtitle:

```text
Store Management Platform
```

Description:

```text
A store management platform focused on inventory,
transactions and operational workflows.
```

Technology:

```text
React
TanStack Query
SCSS
Bootstrap
```

Highlight:

```text
POS flow redesigned to reduce payment processing time by 70%.
```

---

# 13. Project Layout

Do NOT use identical cards for every project.

Alternate layouts:

Project 01:

```text
Large image
Project information below
```

Project 02:

```text
Information left
Large visual right
```

Project 03:

```text
Large centered visual
Metadata underneath
```

Project 04:

```text
Split layout
```

Project 05:

```text
Horizontal project row
```

This keeps the page visually dynamic.

---

# 14. Project Hover Interactions

Desktop project items should respond to hover.

Possible effects:

* image scales slightly
* image moves subtly
* project title shifts
* arrow moves
* metadata fades in
* cursor changes

Keep movement subtle.

Example:

```text
SALESTRACK                         →
Store Management Platform

React · TanStack Query · SCSS
```

On hover:

```text
SALESTRACK                    →→
Store Management Platform

React · TanStack Query · SCSS
```

---

# 15. Project Details

If project links are available, clicking a project should navigate to:

```text
/work/[slug]
```

Create reusable project detail pages.

Each project detail page should include:

```text
PROJECT TITLE

CATEGORY
ROLE
YEAR
TECHNOLOGY

INTRODUCTION

THE PROBLEM

THE APPROACH

THE BUILD

KEY CHALLENGES

OUTCOME

TECH STACK

NEXT PROJECT →
```

Do not invent project-specific facts that aren't provided.

Where information is unavailable, structure the page so content can easily be added later.

---

# 16. Work Index

Add a compact index near the projects.

Example:

```text
01    NRS TMS                 FINTECH
02    RAIZ                    PAYMENTS
03    DAILYBILLS              FINTECH
04    SCHOOL MANAGEMENT      EDTECH
05    SALESTRACK              COMMERCE
```

Each row should be interactive.

Hovering over a row can reveal the project image.

This interaction should feel similar to a creative agency project index.

---

# 17. Numbers / Impact Section

Create a visually strong section with a few real metrics.

Use only verified information.

```text
5+
YEARS BUILDING

5,000+
USERS SERVED

80%
FASTER MERCHANT ONBOARDING

70%
FASTER POS FLOW
```

Do not invent additional numbers.

Animate numbers when they enter the viewport.

---

# 18. EXPERIENCE SECTION

Create:

```text
02 / EXPERIENCE
```

Use an editorial timeline.

Do NOT use conventional resume cards.

Example:

```text
2026 — NOW

FSDH GROUP
Frontend Engineer

Building financial infrastructure and
enterprise dashboards for the Nigerian market.
```

Then:

```text
2025 — NOW

RAIZ DIGITAL SERVICES
Frontend Developer

Building payment experiences,
merchant dashboards and real-time transaction flows.
```

Then:

```text
2024

QATALOOG
Frontend Developer
```

Then:

```text
2024

NUPAT TECHNOLOGY
Frontend Developer
```

Then:

```text
2023 — 2024

KAYBILL TECHNOLOGY
Frontend Developer
```

Then:

```text
2023

LOCAL NAVISTAR
Frontend Developer
```

Then:

```text
2021

HNG
Frontend Intern
```

---

# 19. Experience Interaction

Desktop:

* timeline can reveal details as the user scrolls
* active job gets highlighted
* year remains sticky while content changes

Mobile:

* simple vertical timeline
* no complicated sticky behavior

The experience section should be easy to scan.

---

# 20. ABOUT SECTION

Title:

```text
03 / ABOUT
```

Main statement:

```text
I LIKE MAKING
COMPLEX THINGS
FEEL SIMPLE.
```

Body:

```text
I'm Dada Olawunmi, a Frontend Engineer based in Nigeria.

Over the last 5+ years, I've worked on products across
fintech, payments, education, commerce and enterprise
software.

My work sits at the intersection of product thinking,
interface design and frontend engineering.

I enjoy taking complicated workflows and turning them
into experiences that feel obvious to the person using them.
```

---

# 21. About — Engineering Philosophy

Create a horizontal or vertical list:

```text
01
PRODUCT THINKING

02
ACCESSIBILITY

03
PERFORMANCE

04
DESIGN SYSTEMS

05
INTERACTION

06
RELIABLE ENGINEERING
```

Each item can expand/reveal a short explanation.

---

# 22. TECH STACK SECTION

Do NOT create a huge wall of logos.

Instead create a typographic technology cloud/list.

Example:

```text
REACT
NEXT.JS
TYPESCRIPT
JAVASCRIPT
REACT NATIVE
VUE
GRAPHQL
TANSTACK QUERY
REDUX
ZUSTAND
TAILWIND
SASS
MUI
CHAKRA UI
FRAMER MOTION
GSAP
JEST
REACT TESTING LIBRARY
GIT
WEBSOCKETS
```

Add subtle hover interactions.

Hovering a technology can:

* enlarge it
* show category
* reveal a tiny description

Example:

```text
NEXT.JS
Framework

Used extensively for production web applications,
routing, server rendering and API integrations.
```

---

# 23. "HOW I WORK" SECTION

Create a concise process section.

```text
01 — UNDERSTAND

Understand the product, users and problem.

02 — STRUCTURE

Translate requirements into flows,
components and information architecture.

03 — BUILD

Build scalable interfaces with reusable
components and predictable state.

04 — POLISH

Refine interactions, accessibility,
responsiveness and performance.

05 — SHIP

Test, collaborate and ship.
```

This should feel like an engineer's process rather than a design agency process.

---

# 24. PLAYGROUND / EXPERIMENTS

Optional section.

Title:

```text
PLAYGROUND
```

Purpose:

Show small experiments and frontend explorations.

Potential items:

```text
Animation Experiments
Interactive UI
Micro-interactions
Data Visualization
Frontend Experiments
Creative Coding
```

This section should not require finished commercial projects.

It can contain experimental cards with exaggerated interactions.

If no real experiments are available, create the section structure but populate it with placeholders marked clearly for future content.

---

# 25. PERSONALITY SECTION

Add one smaller section that makes the portfolio feel human.

Potential heading:

```text
WHEN I'M NOT
WRITING TYPESCRIPT
```

Content:

```text
Football.
Games.
Music.
Curiosity.

And probably another browser tab I forgot to close.
```

Keep this playful but concise.

Do not make the portfolio feel like a social media profile.

---

# 26. CONTACT SECTION

This should be one of the strongest parts of the website.

Title:

```text
LET'S BUILD
SOMETHING.
```

Supporting copy:

```text
Have a product that needs a frontend?
Building something interesting?
Just want to talk shop?

Let's connect.
```

Then an interactive contact form.

---

# 27. Contact Form

Fields:

```text
YOUR NAME
YOUR EMAIL
WHAT ARE WE TALKING ABOUT?
MESSAGE
```

Optional project type:

```text
PROJECT
COLLABORATION
FREELANCE
FULL-TIME
JUST SAYING HI
```

Submit button:

```text
SEND MESSAGE →
```

After submission:

```text
MESSAGE SENT.

Thanks — I'll get back to you soon.
```

Error:

```text
Something went wrong.

Please try again or email me directly.
```

---

# 28. Contact Form Implementation

Create a proper API endpoint or server action.

Preferred:

```text
POST /api/contact
```

Validate:

* name
* email
* message

Use environment variables for email delivery.

If an email provider is configured, send the message through it.

If no email provider is configured yet, implement the frontend and API structure cleanly with a clear environment variable requirement.

Never expose private API keys in client-side code.

---

# 29. Contact Information

Use:

```text
Dada Olawunmi

dadaolawunmi09@gmail.com

Lagos, Nigeria
```

Social links:

```text
GitHub
LinkedIn
```

GitHub:

```text
https://github.com/dread557
```

LinkedIn:

```text
https://www.linkedin.com/in/olawunmi-dada-113ab9183
```

Phone:

```text
+234 813 612 9105
```

The phone number should not necessarily be the primary CTA. Email should be the main contact method.

---

# 30. Footer

Keep the footer minimal.

Example:

```text
DADA OLAWUNMI
FRONTEND ENGINEER

LAGOS, NIGERIA

GITHUB
LINKEDIN
EMAIL

© 2026 Dada Olawunmi
```

Add a small playful line:

```text
Built with React, TypeScript & an unreasonable number of browser tabs.
```

---

# 31. Cursor Interaction

Desktop only.

Consider a custom cursor for interactive elements.

Default:

```text
small dot
```

On project hover:

```text
VIEW
```

On links:

```text
↗
```

On images:

```text
EXPLORE
```

Disable custom cursor on:

* touch devices
* reduced-motion environments

Do not let the custom cursor interfere with usability.

---

# 32. Scroll Experience

The website should have a smooth scrolling experience.

Use Lenis or an equivalent solution if appropriate.

Scrolling should reveal:

* typography
* images
* project metadata
* timeline elements
* metrics
* section transitions

Potential effects:

```text
Image parallax
Text reveal
Mask reveal
Horizontal movement
Scale transitions
Sticky project metadata
```

Do not animate every element.

---

# 33. Scroll Progress

Add a very subtle page progress indicator.

Possible implementation:

```text
01
───────
```

or a tiny progress line at the edge of the screen.

It should not dominate the UI.

---

# 34. Page Transitions

If the portfolio has multiple pages:

Use a subtle transition between:

```text
Home
Work
Project
About
```

Avoid long loading animations.

The user should never feel blocked by the animation.

---

# 35. Typography

Typography is extremely important.

Use a combination of:

### Display font

Choose a modern grotesk or expressive sans-serif.

Potential choices:

* Geist
* Inter Tight
* DM Sans
* Space Grotesk
* Instrument Sans
* Neue Montreal-like alternative

### Body font

Use:

* Inter
* Geist
* DM Sans

Do not use too many fonts.

Recommended:

```text
Display: Geist / Instrument Sans
Body: Geist
Mono: Geist Mono
```

Use a monospace font only for metadata.

---

# 36. Color System

Avoid generic purple/blue gradients.

Use a restrained palette.

Suggested starting direction:

```text
Background: warm off-white / very light neutral
Primary text: near-black
Secondary text: muted gray
Accent: one bold color
```

The accent can be something distinctive such as:

* electric green
* vivid orange
* cobalt
* acid yellow

But use the accent sparingly.

The website should remain primarily monochrome.

Create CSS variables:

```text
--background
--foreground
--muted
--border
--accent
--surface
```

Make it easy to change the theme later.

---

# 37. Responsive Design

The site must be designed for:

```text
Mobile
Tablet
Laptop
Large Desktop
```

Do not simply shrink the desktop layout.

Mobile should have its own composition.

---

# 38. Mobile Design

Mobile priorities:

1. Typography
2. Project content
3. Navigation
4. Readability
5. Performance

Avoid:

* horizontal overflow
* excessive animation
* oversized images that make scrolling painful
* desktop-only interactions
* custom cursor
* complicated sticky elements

Mobile project layout:

```text
01

NRS TMS

VAT Transactions
Monitoring System

[IMAGE]

Next.js · TypeScript · WebSockets
```

---

# 39. Accessibility

The portfolio must meet strong accessibility standards.

Implement:

* semantic headings
* semantic navigation
* proper buttons
* keyboard navigation
* visible focus states
* alt text
* sufficient contrast
* accessible forms
* `aria-label` where appropriate
* reduced motion support

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled:

* disable smooth scrolling
* disable large parallax
* disable cursor effects
* simplify transitions
* preserve all content

---

# 40. Performance

Performance is part of the portfolio itself.

Target:

```text
Lighthouse Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

Optimize:

* images
* fonts
* JavaScript
* animations
* client components
* third-party scripts

Avoid loading heavy animation libraries on every page if unnecessary.

Do not use video backgrounds unless there is a compelling reason.

---

# 41. SEO

Metadata:

```text
Title:
Dada Olawunmi — Frontend Engineer

Description:
Frontend Engineer building fast, accessible and intuitive
digital products with React, Next.js and TypeScript.
```

Open Graph:

```text
Dada Olawunmi — Frontend Engineer
```

Create an appropriate OG image.

Include:

* title
* description
* author
* canonical URL
* OpenGraph
* Twitter metadata

---

# 42. Component Architecture

Use reusable components.

Suggested structure:

```text
components/
├── navigation/
│   ├── Navbar.tsx
│   ├── MobileMenu.tsx
│   └── NavigationLink.tsx
│
├── hero/
│   ├── Hero.tsx
│   └── ScrollIndicator.tsx
│
├── work/
│   ├── WorkSection.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectList.tsx
│   ├── ProjectIndex.tsx
│   └── ProjectPreview.tsx
│
├── experience/
│   ├── Experience.tsx
│   └── ExperienceItem.tsx
│
├── about/
│   ├── About.tsx
│   ├── Philosophy.tsx
│   └── TechStack.tsx
│
├── contact/
│   ├── Contact.tsx
│   └── ContactForm.tsx
│
├── motion/
│   ├── Reveal.tsx
│   ├── Parallax.tsx
│   └── PageTransition.tsx
│
└── ui/
    ├── MagneticButton.tsx
    ├── CustomCursor.tsx
    └── SectionLabel.tsx
```

Do not over-componentize simple text.

---

# 43. Data Architecture

Projects should be stored as structured data rather than hardcoded repeatedly inside JSX.

Example concept:

```ts
type Project = {
  slug: string
  number: string
  title: string
  subtitle: string
  description: string
  year: string
  role: string
  category: string
  technologies: string[]
  metrics?: {
    value: string
    label: string
  }[]
  image?: string
  featured?: boolean
}
```

Experience should similarly be represented as structured data.

This makes the portfolio easy to maintain.

---

# 44. Content Rules

Very important:

Do NOT fabricate:

* awards
* clients
* companies
* project results
* revenue
* user numbers
* performance statistics
* testimonials
* job titles
* responsibilities

Only use information supplied in this specification.

If content is missing, use a clear placeholder.

Do not create fake case-study outcomes.

---

# 45. Visual Assets

If actual project screenshots are available, use them.

If screenshots are not available:

Create elegant visual placeholders using:

* abstract UI compositions
* browser windows
* charts
* tables
* typography
* gradients only where appropriate
* product UI fragments

Clearly structure these so they can later be replaced with real screenshots.

Do not present fabricated UI as an actual production screenshot.

---

# 46. Micro-interactions

Add subtle interactions throughout.

Examples:

### Links

Underline or arrow movement.

### Buttons

Slight magnetic movement or directional arrow.

### Project images

Scale:

```text
1 → 1.03
```

### Navigation

Active section indicator.

### Text

Reveal animation.

### Project rows

Image preview follows cursor on desktop.

Use these carefully.

---

# 47. Experimental Interaction

Add one memorable interaction to make the site stand out.

Preferred idea:

## Project Preview Cursor

When hovering over a project in the project index:

* floating project image appears
* image follows cursor with slight lag
* project title remains fixed
* preview disappears when cursor leaves

Another option:

## Scroll-driven Project

As the user scrolls through the featured work:

```text
project title
↓
project image
↓
project metadata
↓
project result
```

The project image subtly moves while the metadata remains anchored.

This should feel premium rather than gimmicky.

---

# 48. Loading Experience

Do NOT create a long splash screen.

The website should become usable immediately.

If an intro animation is implemented:

Maximum perceived duration:

```text
~1 second
```

The user should never wait several seconds just to see the homepage.

---

# 49. Error States

Contact form should have proper:

```text
loading
success
error
validation
```

Project pages should have a sensible 404.

Create a custom 404 page consistent with the portfolio style.

Example:

```text
404

Looks like this page
took a wrong turn.

BACK HOME →
```

---

# 50. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* no parallax
* no smooth scrolling
* no cursor animations
* no large page transitions
* minimal reveal animations

All content must remain accessible.

---

# 51. Desktop Layout System

Use a strong grid.

Suggested:

```text
12-column grid
```

with generous margins.

Use:

```text
max-width: 1440px
```

or similar.

Allow certain headings and images to intentionally break outside the main content width.

This creates the editorial feel.

---

# 52. Section Spacing

Use generous vertical spacing.

Major sections should feel like distinct chapters.

Example:

```text
Hero
↓
Introduction
↓
Work
↓
Impact
↓
Experience
↓
About
↓
Stack
↓
Playground
↓
Contact
↓
Footer
```

Do not cram everything together.

---

# 53. Navigation Behavior

Navigation should support anchor navigation:

```text
#work
#experience
#about
#contact
```

When clicking a navigation item:

* smoothly scroll
* update active section
* close mobile menu
* preserve browser history where appropriate

---

# 54. Contact CTA Throughout Website

Do not wait until the footer to ask users to contact Dada.

Include subtle CTAs after major sections:

```text
See the work →
```

```text
More about me →
```

```text
Let's talk →
```

Do not overdo CTAs.

---

# 55. Final Homepage Structure

The final page should roughly follow:

```text
┌──────────────────────────────────┐
│ NAVIGATION                       │
├──────────────────────────────────┤
│                                  │
│ HERO                             │
│                                  │
│ DADA OLAWUNMI                    │
│ FRONTEND ENGINEER                │
│ BUILDING PRODUCTS FOR THE WEB.  │
│                                  │
├──────────────────────────────────┤
│ INTRO                            │
│                                  │
│ I BUILD DIGITAL PRODUCTS...      │
│                                  │
├──────────────────────────────────┤
│                                  │
│ 01 / WORK                        │
│                                  │
│ NRS TMS                          │
│ LARGE PROJECT VISUAL             │
│                                  │
│ RAIZ                             │
│ LARGE PROJECT VISUAL             │
│                                  │
│ DAILYBILLS                       │
│                                  │
│ SCHOOL MANAGEMENT                │
│                                  │
│ SALESTRACK                       │
│                                  │
├──────────────────────────────────┤
│ IMPACT                           │
│                                  │
│ 5+       5,000+     80%     70% │
│                                  │
├──────────────────────────────────┤
│ EXPERIENCE                       │
│                                  │
│ FSDH                             │
│ RAIZ                             │
│ QATALOOG                         │
│ NUPAT                            │
│ KAYBILL                          │
│ LOCAL NAVISTAR                   │
│ HNG                              │
│                                  │
├──────────────────────────────────┤
│ ABOUT                            │
│                                  │
│ I LIKE MAKING                    │
│ COMPLEX THINGS FEEL SIMPLE.      │
│                                  │
├──────────────────────────────────┤
│ ENGINEERING PHILOSOPHY           │
│                                  │
├──────────────────────────────────┤
│ TECHNOLOGY                       │
│                                  │
│ REACT · NEXT.JS · TYPESCRIPT... │
│                                  │
├──────────────────────────────────┤
│ PLAYGROUND                       │
│                                  │
├──────────────────────────────────┤
│ PERSONAL                         │
│                                  │
├──────────────────────────────────┤
│ CONTACT                          │
│                                  │
│ LET'S BUILD SOMETHING.           │
│                                  │
│ CONTACT FORM                     │
│                                  │
├──────────────────────────────────┤
│ FOOTER                           │
└──────────────────────────────────┘
```

---

# 56. Tone of Voice

Copy should sound:

* confident
* intelligent
* straightforward
* slightly playful
* human

Avoid:

```text
I am a passionate developer who loves turning ideas into reality.
```

Avoid:

```text
I leverage cutting-edge technologies to deliver innovative solutions.
```

Prefer:

```text
I build interfaces for products people actually have to use.
```

Or:

```text
I turn complicated product flows into interfaces that feel obvious.
```

---

# 57. Personal Brand

The name should consistently appear as:

```text
Dada Olawunmi
```

Short visual mark:

```text
DADA OL.
```

Primary title:

```text
Frontend Engineer
```

Secondary positioning:

```text
Product-minded frontend engineer building digital products
across fintech, payments, education and commerce.
```

Do not position Dada primarily as a "creative developer" or "designer".

The visual experience can be creative while the professional positioning remains:

**Frontend Engineer.**

---

# 58. Resume Content

Use the following verified professional information.

## Professional Summary

```text
Frontend Engineer with 5 years of experience building scalable,
performant, and intuitive user interfaces. Skilled in delivering
enterprise-grade web and mobile applications with React, Next.js,
and TypeScript. Passionate about crafting seamless user experiences,
collaborating across teams, and pushing the boundaries of front-end
performance and accessibility.
```

---

# 59. Skills

## Languages & Frameworks

```text
TypeScript
JavaScript
React.js
Next.js
Vue.js
React Native
GraphQL
Firebase
```

## State Management

```text
Redux
Redux Toolkit
RTK Query
Zustand
React Query
TanStack Query
```

## Testing & Debugging

```text
Jest
React Testing Library
```

## Styling

```text
Shadcn
SASS
Styled Components
Tailwind CSS
Material UI
Chakra UI
Bootstrap
Framer Motion
GSAP
```

## Development Tools

```text
Git
Axios
PWAs
Micro-Frontend Services
WebSockets
```

## Project Management

```text
Jira
Asana
Linear
ClickUp
Agile Methodologies
```

## Additional

```text
Google OAuth
Data Structures & Algorithms
Accessibility Standards
```

---

# 60. Experience Data

## FSDH Group

```text
Frontend Engineer
March 2026 — Present
Hybrid
```

Responsibilities:

```text
Implemented the back office admin dashboard for a Nigerian
stock market trading system.

Designed interactive financial dashboards with Recharts,
transforming complex API responses into actionable
visualizations for asset distribution and performance tracking.

Engineered automated KYC workflows and asynchronous data
export features (CSV/PDF) using TanStack Query, optimizing
the processing of thousands of investment records.

Implemented a secure, cross-tab synchronized auto-logout
system using Zustand and idle timer logic to protect sensitive
administrative sessions.
```

---

# 61. Raiz Digital Services

```text
Frontend Developer
January 2025 — Present
Remote
```

Responsibilities:

```text
Developed a multi-currency payment interface, enabling
businesses to seamlessly accept and manage global payments
across fiat and crypto.

Implemented intelligent payment link systems for clients
to receive revenue without direct integration, reducing
onboarding time for new businesses by 80%.

Redesigned the merchant dashboard UX to include real-time
analytics, transaction breakdowns, and currency insights.

Collaborated cross-functionally with product, design and
backend teams to deliver secure, real-time transaction flows
using WebSockets and REST APIs.
```

---

# 62. Qataloog

```text
Frontend Developer
August 2024 — December 2024
Remote
```

Responsibilities:

```text
Developed a feature-rich chat application for seamless
communication between users and admins.

Integrated real-time push notifications to enhance user
engagement and platform responsiveness.

Designed and optimized an 18+ page multi-language landing
page with responsiveness and SEO performance in mind.

Implemented multi-language support for the edutech system.
```

---

# 63. Nupat Technology

```text
Frontend Developer
March 2024 — September 2024
Remote
```

Responsibilities:

```text
Contributed to a school management application serving
5,000+ users.

Collaborated with backend teams to integrate RESTful APIs
for real-time data synchronization.

Delivered regular updates and features based on user feedback.

Conducted training sessions to onboard teachers and
administrative staff.
```

---

# 64. Kaybill Technology

```text
Frontend Developer
December 2023 — April 2024
Remote
```

Responsibilities:

```text
Implemented barcode functionality for a sales management
application.

Developed custom desktop and push notifications.

Built a new POS flow, reducing payment processing time by 70%.

Ensured technical feasibility for 60+ UI/UX pages.
```

---

# 65. Local Navistar

```text
Frontend Developer
January 2023 — October 2023
Remote
```

Responsibilities:

```text
Built a merchant hospitality services web application
covering events, hotels and tours.

Bridged the gap between graphic design and technical
implementation.

Optimized web performance and ensured compliance with
accessibility standards.
```

---

# 66. HNG Internship

```text
Frontend Intern
September 2021 — November 2021
Remote
```

Responsibilities:

```text
Designed and deployed four pixel-perfect websites and
landing pages.

Used a mobile-first approach to create responsive interfaces.

Collaborated with over 35 team members including backend
developers to integrate APIs and launch features.
```

---

# 67. Important Design Constraint

Do NOT copy any referenced website directly.

The final design should be an original combination of:

* editorial typography
* creative developer aesthetics
* engineering-focused content
* project storytelling
* smooth interaction
* strong visual hierarchy

The inspiration websites are references for **principles**, not templates.

---

# 68. Avoid These Design Patterns

Do NOT create:

* generic developer portfolio template
* glassmorphism everywhere
* purple gradients
* huge 3D spinning objects
* excessive terminal UI
* generic laptop mockups for every project
* skill percentage bars
* star ratings for technologies
* "10+ technologies" style marketing
* fake client logos
* fake testimonials
* fake awards
* fake metrics
* excessive shadows
* excessive rounded cards
* stock photography

---

# 69. Quality Bar

Before considering the implementation complete, check:

### Visual

* Does this feel like a premium creative developer portfolio?
* Does the typography feel intentional?
* Are there enough visual moments?
* Is the work section memorable?
* Does the site have a recognizable visual identity?

### UX

* Is navigation obvious?
* Are interactions understandable?
* Does the site work without animations?
* Is mobile experience excellent?
* Does contact actually work?

### Engineering

* Is TypeScript clean?
* Are components reusable?
* Are unnecessary client components avoided?
* Are images optimized?
* Is the site accessible?
* Is reduced motion supported?
* Is there no console noise?
* Are loading/error states handled?

### Performance

* Avoid unnecessary JavaScript.
* Avoid enormous assets.
* Avoid blocking animations.
* Lazy load below-the-fold media.
* Optimize fonts.
* Keep the initial bundle small.

---

# 70. Final Instruction to the Agent

Build this as if you are creating a **real award-quality frontend engineer portfolio**, not completing a generic portfolio tutorial.

The most important priorities are:

```text
1. TYPOGRAPHY
2. PROJECT STORYTELLING
3. SCROLL EXPERIENCE
4. INTERACTION
5. CONTENT HIERARCHY
6. PERFORMANCE
7. ACCESSIBILITY
8. RESPONSIVENESS
```

The website should make someone think:

> "This person clearly knows frontend engineering."

before they even reach the technology list.

It should demonstrate frontend skill through the website itself.

The portfolio is the first project.

Build it accordingly.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8cdf977c-9f80-4136-bdf1-ef29476bb7ad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
