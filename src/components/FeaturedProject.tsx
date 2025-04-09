import { getFeaturedProject } from "@/services/project";
import { TProject } from "@/types/project.type";
import SectionTitle from "./shared/SectionTitle";

export default async function FeaturedProject() {
  const { data: projects }: { data: TProject[] } = await getFeaturedProject();

  return (
    <>
      <SectionTitle title="Feature project" />
      <h1>{projects.length}</h1>
    </>
  );
}
