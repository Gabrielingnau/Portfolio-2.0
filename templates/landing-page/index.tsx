import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/projects";

export function LandingPage() {
  return (
    <article className={`flex flex-col`}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </article>
  );
}
