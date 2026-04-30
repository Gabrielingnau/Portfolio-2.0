"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Para um fade-in suave na entrada

import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import { Content } from "@prismicio/client";

interface AllProjectsProps {
  data: Content.ProjectGallerySlice;
}

export default function AllProjects({ data }: AllProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Content.ProjectGallerySliceDefaultPrimaryProjectsItem | null>(null);

  return (
    <section className="container-spacing w-full py-12 md:py-20">
      <div className="mx-auto flex w-full max-w-(--max-content) flex-col justify-center gap-12 px-6">
        
        {/* Header da Seção */}
        <div className="max-w-2xl text-left">
          <h1 className="font-play text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Todos os <span className="text-primary">Projetos</span>
          </h1>
          <p className="mt-4 font-inter text-lg text-muted-foreground/80">
            Uma vitrine detalhada das soluções que desenvolvi, focando em performance, 
            design e experiência do usuário.
          </p>
        </div>

        {/* Grid de Projetos com Animação de Entrada */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.primary.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} // Efeito cascata suave
            >
              <ProjectCard
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal gerenciado pelo estado local */}
      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      />
    </section>
  );
}