import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectById } from "@/services/project";
import { TProject } from "@/types/project.type";
import { Globe, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data: project } = (await getProjectById(id)) as { data: TProject };
  if (!project) {
    return <div className="text-center">Project not found</div>;
  }

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto pt-30">
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{project?.title}</h1>
      </div>

      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex items-center text-sm sm:text-base bg-gray-900/60 px-4 py-2 rounded-full shadow-sm">
          <span>
            {new Date(project?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center text-sm sm:text-base bg-gray-900/60 px-4 py-2 rounded-full shadow-sm">
          <Server className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" />
          <span className="capitalize">{project?.projectRole}</span>
        </div>
      </div>

      <div className="mb-12">
        <Card className="overflow-hidden border-0 shadow-xl rounded-xl bg-custom-black-100">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image src={project?.thumbnail || "/placeholder.svg"} alt={project?.title} fill className="object-cover rounded-md" priority />
          </div>
        </Card>
      </div>

      {/* Technologies */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project?.technologiesUsed?.map((tech: string, id) => (
            <Badge key={id} variant="secondary" className="flex items-center gap-2 px-3 py-2 shadow-sm bg-gray-900/80 text-xs border-indigo-800/50">
              {/* {tech.icon && (
                  <div className="h-5 w-5 relative flex-shrink-0">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )} */}
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <Card className="border-0 backdrop-blur-sm bg-custom-black-100">
          <CardContent className="py-6 md:py-8 px-0">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-800 dark:text-indigo-300">Project Overview</h2>
            <div className="" dangerouslySetInnerHTML={{ __html: project?.description || "" }} />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        {project?.liveLink && (
          <Button asChild size="lg" className="flex-1 mb-4 sm:mb-0 bg-indigo-600 hover:bg-indigo-700 text-white">
            <Link href={project?.liveLink} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-5 w-5" />
              View Live Site
            </Link>
          </Button>
        )}

        {project?.frontendSourceCode && (
          <Button asChild variant="outline" size="lg" className="flex-1 border-indigo-800 hover:bg-indigo-700">
            <Link href={project?.frontendSourceCode} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-5 w-5" />
              Frontend
            </Link>
          </Button>
        )}
        {project?.backendSourceCode && (
          <Button asChild variant="outline" size="lg" className="flex-1 border-indigo-800 hover:bg-indigo-700">
            <Link href={project?.backendSourceCode} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-5 w-5" />
              Backend
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
