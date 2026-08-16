import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, type Project } from "@/data/portfolio";
import { Nav } from "@/components/site/Nav";
import { CustomCursor, ScrollProgress, SmoothScroll } from "@/components/site/Chrome";
import { Footer } from "@/components/sections/Sections";
import { ProjectVisual, Reveal } from "@/components/site/primitives";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Dada Olawunmi" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Dada Olawunmi`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: project.image },
        { property: "og:image:alt", content: `${project.title} interface` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: project.image },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <main className="shell flex min-h-screen flex-col justify-center">
      <h1 className="display-lg uppercase">404</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Looks like this page took a wrong turn.
      </p>
      <Link to="/" className="meta link-underline mt-8 text-foreground">
        Back home →
      </Link>
    </main>
  );
}

const sections = [
  { key: "introduction", title: "Introduction" },
  { key: "problem", title: "The problem" },
  { key: "approach", title: "The approach" },
  { key: "build", title: "The build" },
  { key: "challenges", title: "Key challenges" },
  { key: "outcome", title: "Outcome" },
];

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length]!;

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main className="pt-32 md:pt-40">
        <header className="shell">
          <Link to="/" className="meta link-underline">
            ← Back
          </Link>
          <h1 className="display-xl mt-10 uppercase">{project.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{project.subtitle}</p>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            <div>
              <dt className="meta">Category</dt>
              <dd className="mt-2 text-sm">{project.category}</dd>
            </div>
            <div>
              <dt className="meta">Role</dt>
              <dd className="mt-2 text-sm">{project.role}</dd>
            </div>
            <div>
              <dt className="meta">Year</dt>
              <dd className="mt-2 text-sm">{project.year}</dd>
            </div>
            <div>
              <dt className="meta">Technology</dt>
              <dd className="mt-2 text-sm">{project.technologies.join(" · ")}</dd>
            </div>
          </dl>
        </header>

        <div className="shell mt-16">
          <ProjectVisual
            src={project.image}
            label={`${project.title} interface`}
            className="aspect-[16/9] w-full"
          />
        </div>

        <div className="shell mt-24 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-4">
            {sections.map((s) => (
              <Reveal key={s.key} className="border-t border-border py-10">
                <h2 className="meta">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed">
                  {s.key === "introduction" ? (
                    project.description
                  ) : (
                    <span className="text-muted-foreground">
                      Placeholder — case study content to be added.
                    </span>
                  )}
                </p>
                {s.key === "outcome" && project.metrics?.length ? (
                  <div className="mt-8 flex flex-wrap gap-10">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-4xl tracking-tight text-accent">
                          {m.value}
                        </p>
                        <p className="meta mt-2">{m.label}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            ))}

            <div className="border-t border-border py-10">
              <h2 className="meta">Tech stack</h2>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {project.technologies.map((t) => (
                  <li key={t} className="font-display text-2xl uppercase">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="shell py-24">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            data-cursor="View"
            className="group block border-t border-border pt-10"
          >
            <span className="meta">Next project</span>
            <span className="display-lg mt-4 block uppercase transition-transform duration-500 group-hover:translate-x-3">
              {next.title} →
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
