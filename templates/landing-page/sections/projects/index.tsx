'use client'

import Link from "next/link";
import { useState } from "react";

import { projects, type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <section
      id="projects"
      className="container-spacing relative py-32 overflow-hidden"
    >
      <div className="max-w-(--max-content) mx-auto">
        <div
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-inter-700-56 text-inter-700-56 text-foreground mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-inter-400-16 text-muted-foreground mx-auto">
            Uma seleção dos meus trabalhos mais recentes e relevantes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {hasMore && (
          <div className="sm:mt-12 mt-8 text-center">
            <Button variant="link" asChild>
              <Link href="/all-projects">Mostrar todos os projetos →</Link>
            </Button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </section>
  );
}
