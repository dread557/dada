"use client";

import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { Parallax, ProjectVisual, Reveal, SectionHead } from "@/components/site/primitives";

function Meta({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
      <div>
        <dt className="meta">Role</dt>
        <dd className="mt-2 text-sm">{project.role}</dd>
      </div>
      <div>
        <dt className="meta">Year</dt>
        <dd className="mt-2 text-sm">{project.year}</dd>
      </div>
      <div>
        <dt className="meta">Category</dt>
        <dd className="mt-2 text-sm">{project.category}</dd>
      </div>
      <div>
        <dt className="meta">Stack</dt>
        <dd className="mt-2 text-sm">{project.technologies.join(" · ")}</dd>
      </div>
    </dl>
  );
}

function Title({ project }: { project: Project }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      data-cursor="View"
      className="group inline-flex items-start gap-4"
    >
      <span className="meta pt-3">{project.number}</span>
      <span>
        <span className="display-lg block uppercase transition-transform duration-500 group-hover:translate-x-2">
          {project.title}
        </span>
        <span className="mt-3 block text-base text-muted-foreground">{project.subtitle}</span>
      </span>
      <span className="meta pt-3 transition-transform duration-500 group-hover:translate-x-2">→</span>
    </Link>
  );
}

function Highlight({ project }: { project: Project }) {
  if (!project.metrics?.length) return null;
  return (
    <div className="mt-8 flex flex-wrap gap-10">
      {project.metrics.map((m) => (
        <div key={m.label}>
          <p className="font-display text-5xl tracking-tight text-accent">{m.value}</p>
          <p className="meta mt-2 max-w-[16ch]">{m.label}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  const visualVariant =
    project.layout === "centered" ? "flow" : project.layout === "row" ? "table" : "dashboard";

  const visual = (
    <Parallax distance={30}>
      <ProjectVisual
        hue={project.accentHue}
        label={`${project.title} — illustrative interface`}
        variant={visualVariant}
        className="aspect-[4/3] w-full transition-transform duration-700 hover:scale-[1.02] md:aspect-[16/10]"
      />
    </Parallax>
  );

  if (project.layout === "split-left" || project.layout === "split-right") {
    const infoFirst = project.layout === "split-left";
    return (
      <article className="grid items-center gap-10 border-t border-border py-20 md:grid-cols-12 md:py-32">
        <Reveal className={`md:col-span-5 ${infoFirst ? "" : "md:order-2 md:col-start-8"}`}>
          <Title project={project} />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <Highlight project={project} />
        </Reveal>
        <div className={`md:col-span-6 ${infoFirst ? "md:col-start-7" : "md:order-1"}`}>{visual}</div>
        <div className="md:col-span-12">
          <Meta project={project} />
        </div>
      </article>
    );
  }

  if (project.layout === "centered") {
    return (
      <article className="border-t border-border py-20 text-center md:py-32">
        <Reveal className="flex justify-center">
          <Title project={project} />
        </Reveal>
        <div className="mx-auto mt-12 max-w-4xl">{visual}</div>
        <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-10 text-left">
          <Meta project={project} />
        </div>
      </article>
    );
  }

  if (project.layout === "row") {
    return (
      <article className="grid gap-8 border-t border-border py-20 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-7">
          <Title project={project} />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </Reveal>
        <div className="md:col-span-4 md:col-start-9">
          <Highlight project={project} />
          <div className="mt-8">{visual}</div>
        </div>
        <div className="md:col-span-12">
          <Meta project={project} />
        </div>
      </article>
    );
  }

  return (
    <article className="border-t border-border py-20 md:py-32">
      <div className="-mx-5 md:-mx-10 xl:-mx-16">{visual}</div>
      <Reveal className="mt-12 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <Title project={project} />
        </div>
        <p className="text-base leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
          {project.description}
        </p>
        <div className="md:col-span-12">
          <Meta project={project} />
        </div>
      </Reveal>
    </article>
  );
}

function WorkIndex() {
  const [active, setActive] = useState<Project | null>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  return (
    <div
      className="relative mt-8"
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <p className="meta border-b border-border pb-4">Index</p>
      <ul>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              onMouseEnter={() => setActive(p)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(null)}
              className="grid grid-cols-12 items-center gap-4 border-b border-border py-5 transition-colors hover:text-accent"
            >
              <span className="meta col-span-2 md:col-span-1">{p.number}</span>
              <span className="col-span-7 font-display text-lg uppercase md:col-span-7 md:text-2xl">
                {p.title}
              </span>
              <span className="meta col-span-3 text-right md:col-span-4">{p.category}</span>
            </Link>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active && !reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 z-30 hidden w-72 md:block"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectVisual
              hue={active.accentHue}
              label={`${active.title} preview`}
              variant="dashboard"
              className="aspect-[4/3] w-full shadow-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function WorkSection() {
  return (
    <section className="shell py-16 md:py-24">
      <SectionHead id="work" index="01" label="Work" title="Selected work" />
      <div className="mt-16">
        {projects.map((p) => (
          <ProjectBlock key={p.slug} project={p} />
        ))}
      </div>
      <WorkIndex />
      <p className="mt-10">
        <a href="#contact" className="meta link-underline text-foreground" data-cursor="Talk">
          Let's talk →
        </a>
      </p>
    </section>
  );
}
