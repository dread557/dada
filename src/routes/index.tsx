import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { CustomCursor, ScrollProgress, SmoothScroll } from "@/components/site/Chrome";
import {
  About,
  Experience,
  Footer,
  Hero,
  Impact,
  Intro,
  Personality,
  Playground,
  Process,
  Stack,
} from "@/components/sections/Sections";
import { WorkSection } from "@/components/work/WorkSection";
import { Contact } from "@/components/contact/Contact";

const title = "Dada Olawunmi — Frontend Engineer";
const description =
  "Frontend Engineer building fast, accessible and intuitive digital products with React, Next.js and TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Dada Olawunmi" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/dada.JPG" },
      { property: "og:image:alt", content: "Selected interface work by Dada Olawunmi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/images/dada.JPG" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <WorkSection />
        {/* <Impact /> */}
        <Experience />
        <About />
        <Stack />
        <Process />
        {/* <Playground /> */}
        <Personality />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
