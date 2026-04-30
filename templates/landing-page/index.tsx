
import { createClient } from "@/lib/prismicio";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/projects";
import { Content } from "@prismicio/client";

export async function LandingPage() {
    const client = createClient();
  const page = await client.getSingle("index");

  const heroIntroSlice = page.data.slices.find((slice) => slice.slice_type === "hero_intro");
  const bioHighlightedFeaturesSlice = page.data.slices.find((slice) => slice.slice_type === "bio_highlighted_features");
  const projectGallerySlice = page.data.slices.find((slice) => slice.slice_type === "project_gallery");
  const contactGatewaySlice = page.data.slices.find((slice) => slice.slice_type === "contact_gateway");

  return (
    <article className={`flex flex-col`}>
      <Hero data={heroIntroSlice as Content.HeroIntroSlice} />
      <About data={bioHighlightedFeaturesSlice as Content.BioHighlightedFeaturesSlice} />
      <Projects data={projectGallerySlice as Content.ProjectGallerySlice} />
      <Contact data={contactGatewaySlice as Content.ContactGatewaySlice} />
    </article>
  );
}
