"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Project } from "@/data/projects";

import { Player } from "../player";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          min-w-full
          md:min-w-[50vw]
          p-0
          overflow-hidden
          bg-card
          border
          shadow-2xl
        "
      >
        {/* Video */}
        <AspectRatio ratio={16 / 9}>
          <Player
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
          />
        </AspectRatio>

        <div className="p-8 pt-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="font-play text-2xl font-semibold text-foreground">
              {project.title}
            </DialogTitle>

            <DialogDescription className="font-sans text-base text-muted-foreground leading-relaxed mt-3 line-clamp-6">
              {project.fullDescription}
            </DialogDescription>
          </DialogHeader>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="sm:flex flex-col sm:flex-row gap-4 hidden">
            <Button asChild>
              <Link href="#">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Demonstração
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="#">
                <Github className="w-4 h-4 mr-2" />
                Ver Código
              </Link>
            </Button>
          </div>

          <div className="flex gap-3 sm:hidden">
            <Button size="sm" className="flex-1 text-xs font-medium" asChild>
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
