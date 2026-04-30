"use client";

import { Content } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import * as LucideIcons from "lucide-react"; // Importa tudo para mapear o ícone

// Tipagem correta para Props de um componente React
interface HighlightsProps {
  item: Content.BioHighlightedFeaturesSliceWithVideoAndFeaturesPrimaryFeatureListItem;
}

export function Highlights({ item }: HighlightsProps) {
  // Mapeia a string do Prismic para o componente do Lucide
  // Se item.feature_icon for "Code2", ele pega o componente Code2
  const Icon = (LucideIcons[item.feature_icon as keyof typeof LucideIcons] || LucideIcons.Zap) as LucideIcons.LucideIcon;

  return (
    <div className="rounded-xl border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all">
      {/* Agora Icon é um componente válido */}
      <Icon className="w-6 h-6 text-primary mb-3" />
      
      <h4 className="text-inter-700-14 text-foreground mb-2">
        <PrismicText field={item.feature_title} />
      </h4>
      
      <div className="text-inter-400-16 text-muted-foreground">
        <PrismicText field={item.feature_description} />
      </div>
    </div>
  );
}