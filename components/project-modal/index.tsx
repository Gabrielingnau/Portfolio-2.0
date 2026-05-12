"use client";

import { useState } from "react"; // Adicionado para controlar o alerta de NDA
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { asLink, Content } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

import { Player } from "../player";
import { NoPreviewModal } from "../no-preview-modal"; // Importando o alerta

interface ProjectModalProps {
  project: Content.ProjectGallerySliceDefaultPrimaryProjectsItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal ({ project, open, onOpenChange }: ProjectModalProps) {
  const [showNdaAlert, setShowNdaAlert] = useState(false);

  if (!project) return null;

  const previewUrl = asLink(project.preview_link);
  const codeUrl = asLink(project.code_link) ?? "#";

  // Função para validar o clique no Preview dentro do modal
  const handlePreviewClick = (e: React.MouseEvent) => {
    if (!previewUrl || previewUrl === "#") {
      e.preventDefault();
      setShowNdaAlert(true);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[95vw] overflow-hidden border-border bg-card p-0 shadow-2xl md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="relative w-full">
            <AspectRatio ratio={16 / 9}>
              <Player
                src={`${project.media}`}
                title={` ${project.title}`}
              />
            </AspectRatio>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/5" />
          </div>

          <div className="p-6 md:p-8">
            <DialogHeader className="space-y-3 text-left">
              <DialogTitle className="font-play text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="font-inter text-sm leading-relaxed text-muted-foreground/90 md:text-base">
                <PrismicText field={project.summary} />
              </DialogDescription>
            </DialogHeader>

            <div className="my-6 flex flex-wrap gap-2">
              {project.badges.map((tech) => (
                <Badge
                  key={tech.text}
                  variant="secondary"
                  className="rounded-md border-border/50 bg-secondary/30 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground backdrop-blur-md"
                >
                  {tech.text}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="h-11 flex-1 gap-2 border-border/60 font-semibold shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95"
                asChild
                onClick={handlePreviewClick} // Validação adicionada aqui
              >
                <Link
                  href={previewUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-4" />
                  <span className="text-xs uppercase tracking-wider">
                    Preview Projeto
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="h-11 flex-1 gap-2 border-border/60 bg-background/50 font-semibold transition-all hover:border-foreground hover:bg-foreground hover:text-white active:scale-95"
                asChild
              >
                <Link
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  <span className="text-xs uppercase tracking-wider">
                    Ver Código
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Alerta de NDA que aparece sobre o modal principal se necessário */}
      <NoPreviewModal 
        isOpen={showNdaAlert} 
        onOpenChange={setShowNdaAlert} 
      />
    </>
  );
};