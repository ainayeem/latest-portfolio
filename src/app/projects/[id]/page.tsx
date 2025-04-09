import SectionTitle from "@/components/shared/SectionTitle";
import { getProjectById } from "@/services/project";

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data: project } = await getProjectById(id);

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <SectionTitle title="Project Details" />
      {/* <ProjectDetails project={project} /> */}
    </div>
  );
}
