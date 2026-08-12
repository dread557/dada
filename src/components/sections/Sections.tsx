"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  experience,
  impact,
  philosophy,
  process,
  stack,
  contactInfo,
} from "@/data/portfolio";
import { LineReveal, Reveal, SectionHead } from "@/components/site/primitives";

export function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Africa/Lagos",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] pt-32 pb-12 md:pt-40">
      <div className="shell flex min-h-[calc(100svh-11rem)] flex-col justify-between">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-border pb-6">
          <span className="meta">Dada Olawunmi</span>
          <span className="meta">Frontend Engineer — Lagos, Nigeria</span>
          <span className="meta hidden md:block">Local time {time || "--:--:--"}</span>
        </div>

        <h1 className="display-xl mt-12 uppercase">
          <LineReveal
            delay={0.15}
            lines={["I build the", "interface", "between ideas", "and people."]}
          />
        </h1>

        <div className="mt-14 grid gap-10 border-t border-border pt-6 md:grid-cols-12">
          <Reveal delay={0.6} className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              I turn complex product ideas into fast, accessible and intuitive digital
              experiences — across fintech, payments, education and commerce.
            </p>
          </Reveal>
          <Reveal delay={0.7} className="md:col-span-3 md:col-start-7">
            <p className="meta">5+ years experience</p>
            <p className="meta mt-2">React / Next.js / TypeScript</p>
          </Reveal>
          <Reveal delay={0.8} className="md:col-span-2 md:col-start-11 md:text-right">
            <a href="#work" className="meta link-underline text-foreground" data-cursor="View">
              Scroll to explore ↓
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="shell py-24 md:py-40">
      <Reveal>
        <h2 className="display-lg uppercase">
          I build digital
          <br />
          products, not just
          <br />
          <span className="text-accent">interfaces.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <Reveal delay={0.1} className="md:col-span-6 md:col-start-4">
          <p className="text-lg leading-relaxed md:text-xl">
            I'm a Frontend Engineer with 5+ years of experience working across fintech,
            payments, education, commerce and enterprise applications.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I care about the space where product thinking, engineering and interaction meet.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="md:col-span-2 md:col-start-11">
          <p className="meta">Currently</p>
          <p className="mt-3 text-sm font-medium">Frontend Engineer</p>
          <p className="text-sm text-muted-foreground">FSDH Group</p>
          <p className="meta mt-6">Previously</p>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {["Raiz", "Qataloog", "Nupat", "Kaybill", "Local Navistar", "HNG"].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : value.replace(/\d/g, "0"));

  useEffect(() => {
    if (!inView || reduced) {
      if (reduced) setDisplay(value);
      return;
    }
    const target = Number(value.replace(/[^\d]/g, ""));
    const suffix = value.replace(/[\d,]/g, "");
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(target * eased).toLocaleString() + suffix);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

export function Impact() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid grid-cols-2 gap-x-6 gap-y-14 border-t border-border pt-10 md:grid-cols-4">
        {impact.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.06}>
            <p className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight">
              <Counter value={m.value} />
            </p>
            <p className="meta mt-4">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="shell py-24 md:py-40">
      <SectionHead id="experience" index="02" label="Experience" title="Where I've built" />

      <div className="mt-20 grid gap-12 md:grid-cols-12">
        <div className="hidden md:col-span-3 md:block">
          <div className="sticky top-32">
            <p className="meta">Timeline</p>
            <p className="font-display mt-4 text-3xl tracking-tight">
              {experience[activeIdx]?.period}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {experience[activeIdx]?.mode}
            </p>
          </div>
        </div>

        <ol className="md:col-span-9">
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              className="group border-t border-border py-10"
              onViewportEnter={() => setActiveIdx(i)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
            >
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                  <h3 className="display-md uppercase">{job.company}</h3>
                  <span className="meta">{job.period}</span>
                </div>
                <p className="mt-3 text-sm font-medium">{job.role}</p>
                <ul className="mt-5 grid max-w-3xl gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                  {job.points.map((p) => (
                    <li key={p} className="border-l border-border pl-4">
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  const [open, setOpen] = useState<string | null>(philosophy[0]?.n ?? null);

  return (
    <section className="shell py-24 md:py-40">
      <SectionHead id="about" index="03" label="About" />

      <Reveal className="mt-16">
        <h2 className="display-lg uppercase">
          I like making
          <br />
          complex things
          <br />
          feel simple.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5 md:col-start-7">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              I'm Dada Olawunmi, a Frontend Engineer based in Nigeria.
            </p>
            <p>
              Over the last 5+ years, I've worked on products across fintech, payments,
              education, commerce and enterprise software.
            </p>
            <p>
              My work sits at the intersection of product thinking, interface design and
              frontend engineering.
            </p>
            <p>
              I enjoy taking complicated workflows and turning them into experiences that feel
              obvious to the person using them.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-28">
        <p className="meta">Engineering philosophy</p>
        <ul className="mt-8">
          {philosophy.map((p) => {
            const isOpen = open === p.n;
            return (
              <li key={p.n} className="border-t border-border last:border-b">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : p.n)}
                  aria-expanded={isOpen}
                  className="flex w-full items-baseline gap-6 py-6 text-left"
                >
                  <span className="meta">{p.n}</span>
                  <span className="display-md flex-1 uppercase transition-colors group-hover:text-accent">
                    {p.title}
                  </span>
                  <span className="meta">{isOpen ? "—" : "+"}</span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-8 pl-12 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Stack() {
  const [hovered, setHovered] = useState<string | null>(null);
  const current = stack.find((s) => s.name === hovered);

  return (
    <section className="shell py-24 md:py-32">
      <div className="rule flex items-baseline justify-between pt-6">
        <span className="meta">04 / Technology</span>
        <span className="meta">{current ? current.category : `${stack.length} tools`}</span>
      </div>

      <ul className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 md:gap-x-10">
        {stack.map((s) => (
          <li key={s.name}>
            <button
              type="button"
              onMouseEnter={() => setHovered(s.name)}
              onFocus={() => setHovered(s.name)}
              onMouseLeave={() => setHovered(null)}
              onBlur={() => setHovered(null)}
              className={`font-display text-[clamp(1.5rem,4.2vw,3.25rem)] leading-[1.05] tracking-tight uppercase transition-all duration-300 ${
                hovered === s.name ? "text-accent" : hovered ? "text-muted-foreground/50" : ""
              }`}
            >
              {s.name}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-10 h-10 max-w-lg text-sm text-muted-foreground">
        {current?.note ?? (current ? `${current.name} — ${current.category}` : "")}
      </p>
    </section>
  );
}

export function Process() {
  return (
    <section className="shell py-24 md:py-32">
      <p className="meta">How I work</p>
      <ol className="mt-10 grid gap-px border border-border bg-border md:grid-cols-5">
        {process.map((p) => (
          <li key={p.n} className="bg-background p-6">
            <span className="meta">{p.n}</span>
            <h3 className="mt-6 text-xl uppercase">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const playground = [
  { title: "Animation Experiments", note: "Placeholder — content coming soon" },
  { title: "Interactive UI", note: "Placeholder — content coming soon" },
  { title: "Micro-interactions", note: "Placeholder — content coming soon" },
  { title: "Data Visualization", note: "Placeholder — content coming soon" },
];

export function Playground() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="rule flex items-baseline justify-between pt-6">
        <span className="meta">05 / Playground</span>
        <span className="meta">Experiments</span>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {playground.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.05}>
            <div className="group h-56 border border-border bg-surface p-5 transition-colors duration-300 hover:bg-ink hover:text-background">
              <span className="meta transition-colors group-hover:text-background/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 text-2xl uppercase">{item.title}</h3>
              <p className="meta mt-4 transition-colors group-hover:text-background/60">
                {item.note}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Personality() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h2 className="display-md uppercase">
            When I'm not
            <br />
            writing TypeScript
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
          <p className="text-lg leading-snug">Football. Games. Music. Curiosity.</p>
          <p className="mt-4 text-sm text-muted-foreground">
            And probably another browser tab I forgot to close.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="shell border-t border-border py-14">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl uppercase">Dada Olawunmi</p>
          <p className="meta mt-2">Frontend Engineer</p>
          <p className="meta mt-1">{contactInfo.location}</p>
        </div>
        <nav aria-label="Footer" className="flex gap-8 md:col-span-4">
          <a className="meta link-underline" href={contactInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="meta link-underline" href={contactInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="meta link-underline" href={`mailto:${contactInfo.email}`}>
            Email
          </a>
        </nav>
        <div className="md:col-span-3 md:text-right">
          <p className="meta">© 2026 Dada Olawunmi</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Built with React, TypeScript &amp; an unreasonable number of browser tabs.
          </p>
        </div>
      </div>
    </footer>
  );
}
