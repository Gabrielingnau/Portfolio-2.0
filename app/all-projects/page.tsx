import { createClient } from "@/lib/prismicio";
import AllProjects from "@/templates/all-projects";
import { Content } from "@prismicio/client";

export default async function Page() {
   const client = createClient();
    const page = await client.getSingle("index");

    const projectGallerySlice = page.data.slices.find((slice) => slice.slice_type === "project_gallery");
  return <AllProjects data={projectGallerySlice as Content.ProjectGallerySlice}/>;
}
