"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Player } from "../player"
import { asLink, Content } from "@prismicio/client"
import { PrismicText } from "@prismicio/react"

interface ProjectCardProps {
  project: Content.ProjectGallerySliceDefaultPrimaryProjectsItem
  index: number
  onClick: () => void
}


const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const previewUrl = asLink(project.preview_link) ?? "#";
  const codeUrl = asLink(project.code_link) ?? "#";
  return (
    <Card
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden border-border bg-card transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)] dark:hover:shadow-[0_0_40px_-12px_rgba(var(--primary),0.3)]"
    >
      {/* Efeito de brilho de fundo no hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader className="p-0">
        <div className="relative">
          <Player
            src={`${project.media}`} // URL do vídeo de demonstração
            title={` ${project.title}`}
          />
          {/* Overlay sutil para o vídeo não "brigar" com as bordas */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 dark:ring-white/5" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col p-6">
        <div className="space-y-1.5">
          <h3 className="line-clamp-1 font-play text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          
          <p className="line-clamp-2 min-h-[2.5rem] font-inter text-sm leading-relaxed text-muted-foreground/80">
            <PrismicText field={project.summary} />
          </p>
        </div>

        {/* Badges Reimaginados */}
        <div className="my-6 flex flex-wrap gap-2">
          {project.badges.slice(0, 3).map((tech) => (
            <Badge
              key={tech.text}
              variant="secondary"
              className="rounded-md border-border/50 bg-secondary/30 px-2 py-0.5 text-[11px] font-medium tracking-wide text-foreground backdrop-blur-md transition-colors group-hover:border-primary/20 group-hover:bg-secondary/50"
            >
              {tech.text}
            </Badge>
          ))}

          {project.badges.length > 3 && (
            <Badge 
              variant="outline" 
              className="rounded-md border-dashed border-border px-2 py-0.5 text-[11px] font-semibold text-muted-foreground"
            >
              +{project.badges.length - 3}
            </Badge>
          )}
        </div>

        {/* Botões de Ação com Estilo Mais Robusto */}
        <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
          <Button
            variant="outline"
            size="sm"
            className="h-10 flex-1 gap-2 border-border/60 bg-background/50 font-semibold shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95"
            asChild
          >
            <Link href={previewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              <span className="text-xs uppercase tracking-wider">Preview</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-10 w-12 border-border/60 bg-background/50 transition-all hover:border-foreground hover:bg-foreground hover:text-foreground active:scale-95"
            asChild
          >
            <Link href={codeUrl} target="_blank" rel="noopener noreferrer" title="Ver Código">
              <Github className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard