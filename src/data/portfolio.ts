export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  role: string;
  category: string;
  technologies: string[];
  metrics?: { value: string; label: string }[];
  layout: "stacked" | "split-left" | "centered" | "split-right" | "row";
  accentHue: number;
};

export const projects: Project[] = [
  {
    slug: "nrs-tms",
    number: "01",
    title: "NRS TMS",
    subtitle: "VAT Transactions Monitoring System",
    description:
      "An enterprise transaction monitoring platform built for payment processors, transforming large volumes of financial data into actionable operational insights.",
    year: "2025",
    role: "Frontend Engineer",
    category: "Fintech",
    technologies: ["Next.js", "TypeScript", "WebSockets", "Zustand", "Tailwind CSS"],
    layout: "stacked",
    accentHue: 42,
  },
  {
    slug: "raiz",
    number: "02",
    title: "RAIZ",
    subtitle: "Payments & Merchant Infrastructure",
    description:
      "A multi-currency payment experience helping businesses accept, manage and understand payments across fiat and crypto.",
    year: "2025",
    role: "Frontend Developer",
    category: "Payments",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "WebSockets",
      "REST APIs",
      "TanStack Query",
    ],
    metrics: [{ value: "80%", label: "Faster merchant onboarding" }],
    layout: "split-left",
    accentHue: 150,
  },
  {
    slug: "dailybills",
    number: "03",
    title: "DAILYBILLS",
    subtitle: "Multilingual Bill Payments Platform",
    description:
      "A multilingual digital payments platform for airtime, data, insurance, utilities and wallet services.",
    year: "2024",
    role: "Frontend Developer",
    category: "Fintech",
    technologies: ["Next.js", "TypeScript", "i18next"],
    layout: "centered",
    accentHue: 250,
  },
  {
    slug: "school-management",
    number: "04",
    title: "SCHOOL MANAGEMENT",
    subtitle: "Education Operations Platform",
    description:
      "A school management platform serving thousands of users across teachers, administrators and students.",
    year: "2024",
    role: "Frontend Developer",
    category: "Edtech",
    technologies: ["React", "Redux", "Material UI", "REST APIs"],
    metrics: [{ value: "5,000+", label: "Users served" }],
    layout: "split-right",
    accentHue: 20,
  },
  {
    slug: "salestrack",
    number: "05",
    title: "SALESTRACK",
    subtitle: "Store Management Platform",
    description:
      "A store management platform focused on inventory, transactions and operational workflows.",
    year: "2024",
    role: "Frontend Developer",
    category: "Commerce",
    technologies: ["React", "TanStack Query", "SCSS", "Bootstrap"],
    metrics: [{ value: "70%", label: "Faster POS flow" }],
    layout: "row",
    accentHue: 200,
  },
];

export const experience = [
  {
    period: "2026 — Now",
    company: "FSDH Group",
    role: "Frontend Engineer",
    mode: "Hybrid",
    points: [
      "Implemented the back office admin dashboard for a Nigerian stock market trading system.",
      "Designed interactive financial dashboards with Recharts, transforming complex API responses into actionable visualizations for asset distribution and performance tracking.",
      "Engineered automated KYC workflows and asynchronous data export features (CSV/PDF) using TanStack Query, optimizing the processing of thousands of investment records.",
      "Implemented a secure, cross-tab synchronized auto-logout system using Zustand and idle timer logic to protect sensitive administrative sessions.",
    ],
  },
  {
    period: "2025 — Now",
    company: "Raiz Digital Services",
    role: "Frontend Developer",
    mode: "Remote",
    points: [
      "Developed a multi-currency payment interface, enabling businesses to seamlessly accept and manage global payments across fiat and crypto.",
      "Implemented intelligent payment link systems for clients to receive revenue without direct integration, reducing onboarding time for new businesses by 80%.",
      "Redesigned the merchant dashboard UX to include real-time analytics, transaction breakdowns, and currency insights.",
      "Collaborated cross-functionally with product, design and backend teams to deliver secure, real-time transaction flows using WebSockets and REST APIs.",
    ],
  },
  {
    period: "2024",
    company: "Qataloog",
    role: "Frontend Developer",
    mode: "Remote",
    points: [
      "Developed a feature-rich chat application for seamless communication between users and admins.",
      "Integrated real-time push notifications to enhance user engagement and platform responsiveness.",
      "Designed and optimized an 18+ page multi-language landing page with responsiveness and SEO performance in mind.",
      "Implemented multi-language support for the edutech system.",
    ],
  },
  {
    period: "2024",
    company: "Nupat Technology",
    role: "Frontend Developer",
    mode: "Remote",
    points: [
      "Contributed to a school management application serving 5,000+ users.",
      "Collaborated with backend teams to integrate RESTful APIs for real-time data synchronization.",
      "Delivered regular updates and features based on user feedback.",
      "Conducted training sessions to onboard teachers and administrative staff.",
    ],
  },
  {
    period: "2023 — 2024",
    company: "Kaybill Technology",
    role: "Frontend Developer",
    mode: "Remote",
    points: [
      "Implemented barcode functionality for a sales management application.",
      "Developed custom desktop and push notifications.",
      "Built a new POS flow, reducing payment processing time by 70%.",
      "Ensured technical feasibility for 60+ UI/UX pages.",
    ],
  },
  {
    period: "2023",
    company: "Local Navistar",
    role: "Frontend Developer",
    mode: "Remote",
    points: [
      "Built a merchant hospitality services web application covering events, hotels and tours.",
      "Bridged the gap between graphic design and technical implementation.",
      "Optimized web performance and ensured compliance with accessibility standards.",
    ],
  },
  {
    period: "2021",
    company: "HNG",
    role: "Frontend Intern",
    mode: "Remote",
    points: [
      "Designed and deployed four pixel-perfect websites and landing pages.",
      "Used a mobile-first approach to create responsive interfaces.",
      "Collaborated with over 35 team members including backend developers to integrate APIs and launch features.",
    ],
  },
];

export const philosophy = [
  {
    n: "01",
    title: "Product Thinking",
    body: "Understanding the product and the person using it before writing a single component.",
  },
  {
    n: "02",
    title: "Accessibility",
    body: "Semantics, keyboard paths and contrast are requirements, not a final pass.",
  },
  {
    n: "03",
    title: "Performance",
    body: "Fast is a feature. Bundles, images and rendering work get the same attention as UI.",
  },
  {
    n: "04",
    title: "Design Systems",
    body: "Reusable primitives and predictable tokens so interfaces stay consistent as teams grow.",
  },
  {
    n: "05",
    title: "Interaction",
    body: "Motion that explains hierarchy and state, never motion for its own sake.",
  },
  {
    n: "06",
    title: "Reliable Engineering",
    body: "Typed contracts, predictable state and tested flows that survive real production traffic.",
  },
];

export const stack: { name: string; category: string; note?: string }[] = [
  { name: "React", category: "Library" },
  { name: "Next.js", category: "Framework", note: "Production web apps, routing, server rendering and API integration." },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "React Native", category: "Mobile" },
  { name: "Vue.js", category: "Framework" },
  { name: "GraphQL", category: "Data" },
  { name: "TanStack Query", category: "Data" },
  { name: "React Query", category: "Data" },
  { name: "Redux Toolkit", category: "State" },
  { name: "RTK Query", category: "Data" },
  { name: "Zustand", category: "State" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "SASS", category: "Styling" },
  { name: "Styled Components", category: "Styling" },
  { name: "Material UI", category: "Styling" },
  { name: "Chakra UI", category: "Styling" },
  { name: "Shadcn", category: "Styling" },
  { name: "Framer Motion", category: "Motion" },
  { name: "GSAP", category: "Motion" },
  { name: "Jest", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },
  { name: "WebSockets", category: "Realtime" },
  { name: "Firebase", category: "Platform" },
  { name: "PWAs", category: "Platform" },
  { name: "Micro-Frontends", category: "Architecture" },
  { name: "Git", category: "Tooling" },
];

export const process = [
  { n: "01", title: "Understand", body: "Understand the product, users and problem." },
  {
    n: "02",
    title: "Structure",
    body: "Translate requirements into flows, components and information architecture.",
  },
  {
    n: "03",
    title: "Build",
    body: "Build scalable interfaces with reusable components and predictable state.",
  },
  {
    n: "04",
    title: "Polish",
    body: "Refine interactions, accessibility, responsiveness and performance.",
  },
  { n: "05", title: "Ship", body: "Test, collaborate and ship." },
];

export const impact = [
  { value: "5+", label: "Years building" },
  { value: "5,000+", label: "Users served" },
  { value: "80%", label: "Faster merchant onboarding" },
  { value: "70%", label: "Faster POS flow" },
];

export const contactInfo = {
  name: "Dada Olawunmi",
  email: "dadaolawunmi09@gmail.com",
  location: "Lagos, Nigeria",
  phone: "+234 813 612 9105",
  github: "https://github.com/dread557",
  linkedin: "https://www.linkedin.com/in/olawunmi-dada-113ab9183",
};
