"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Project } from "@/data/projects";

import { Player } from "../player";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <div>
      <Card
        onClick={onClick}
        className="
          group
          cursor-pointer
          overflow-hidden
          border
          bg-card
          hover:shadow-xl
          hover:border-primary/40
          hover:scale-103
          transition-all
          duration-300
          pt-0
          min-w-0
        "
      >
        <CardHeader className="p-0">
          <Player
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
          />
        </CardHeader>

        <CardContent className="p-6">
          <h3 className="font-play text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="font-sans text-sm text-muted-foreground mb-5 line-clamp-2 min-w-10">
            {project.description}
          </p>

          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-5 min-w-0">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium min-w-0 shrink"
              >
                <span className="truncate block">{tech}</span>
              </Badge>
            ))}

            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs font-medium shrink">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs font-medium"
              asChild
            >
              <Link href="#">
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-xs font-medium"
              asChild
            >
              <Link href="#">
                <Github className="w-4 h-4 mr-1" />
                Código
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
