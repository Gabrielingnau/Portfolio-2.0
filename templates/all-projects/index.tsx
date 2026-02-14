"use client";

import { useState } from "react";

import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section className="container-spacing flex items-center justify-center w-full mt-10 sm:mt-0">
      <div className="flex flex-col justify-center gap-10 max-w-(--max-content) w-full">
        <div className="text-start">
          <h1 className="text-4xl sm:text-5xl md:text-inter-700-56 text-inter-700-56 mb-4">
            Todos os <span className="gradient-text">Projetos</span>
          </h1>
          <p className="text-muted-foreground">
            Aqui estão todos os meus trabalhos desenvolvidos até agora.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </section>
  );
}
