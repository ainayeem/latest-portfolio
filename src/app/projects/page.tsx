import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { getAllProjects } from "@/services/project";
import { TProject } from "@/types/project.type";

export default async function ProjectsPage() {
  const { data: projects } = await getAllProjects();
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto pt-20">
      <SectionTitle title="Projects" />
      {/* <Projects projects={projects} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
