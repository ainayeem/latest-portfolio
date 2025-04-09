import { getFeaturedProject } from "@/services/project";
import { TProject } from "@/types/project.type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./shared/SectionTitle";
import MainButton from "./ui/MainButton";

export default async function FeaturedProject() {
  const { data: projects }: { data: TProject[] } = await getFeaturedProject();

  return (
    <>
      <SectionTitle title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href={"/projects"}>
          <MainButton title="View All Projects" icon={<ArrowRight />} position="right" otherClasses="w-full md:w-60" />
        </Link>
      </div>
    </>
  );
}
