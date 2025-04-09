"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { TProject } from "@/types/project.type";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface FeaturedProjectCardProps {
  project: TProject;
}

const ProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <>
      <CardContainer className="inter-var w-full max-w-md">
        <CardBody className="relative border border-indigo-800/30 bg-gradient-to-b from-gray-950 to-indigo-950/10 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-auto">
          {/* Project Image */}
          <CardItem className="w-full mb-4">
            <CardItem translateZ="100" className="relative w-full h-40 overflow-hidden rounded-lg">
              <Image
                src={project?.thumbnail || "/placeholder.svg"}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                alt={`${project?.title} Thumbnail`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
            </CardItem>
          </CardItem>

          {/* Title and Subtitle */}
          <CardItem className="text-lg font-bold text-white">{project?.title}</CardItem>

          {/* Category Badge */}
          <div className="mt-3">
            <Badge className="bg-indigo-600/90 text-white text-xs font-medium px-2 py-1">{project?.projectRole}</Badge>
          </div>

          {/* Technologies */}
          <CardItem className="mt-4">
            <div className="flex flex-wrap gap-2">
              {project?.technologiesUsed?.slice(0, 4).map((tech, id) => (
                <Badge key={id} variant="outline" className="flex items-center gap-1 bg-gray-900/80 text-xs border-indigo-800/50 px-2 py-1">
                  {/* {tech.icon && (
                  <div className="h-3 w-3 relative flex-shrink-0">
                    <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                  </div>
                )} */}
                  <span className=" text-gray-200">{tech}</span>
                </Badge>
              ))}
              {project?.technologiesUsed?.length > 4 && (
                <Badge variant="outline" className=" bg-gray-900/80 text-xs border-indigo-800/50">
                  +{project?.technologiesUsed?.length - 4}
                </Badge>
              )}
            </div>
          </CardItem>

          {/* Buttons */}
          <CardItem className="mt-6 w-full">
            <div className="flex flex-col gap-3">
              <Button asChild variant="default" size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href={`/projects/${project?._id}`}>
                  <ExternalLink className="mr-2 h-4 w-4" /> View Details
                </Link>
              </Button>
              <div className="flex justify-center gap-3">
                {project?.frontendSourceCode && (
                  <Button asChild variant="outline" size="sm" className="flex-1 border-indigo-800/50 hover:bg-indigo-900/30">
                    <Link href={project.frontendSourceCode} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2 h-4 w-4" /> Frontend
                    </Link>
                  </Button>
                )}
                {project?.backendSourceCode && (
                  <Button asChild variant="outline" size="sm" className="flex-1 border-indigo-800/50 hover:bg-indigo-900/30">
                    <Link href={project.frontendSourceCode} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2 h-4 w-4" /> Backend
                    </Link>
                  </Button>
                )}
                {project?.liveLink && (
                  <Button asChild variant="outline" size="sm" className="flex-1 border-indigo-800/50 hover:bg-indigo-900/30">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" /> Visit
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default ProjectCard;
