import { Code2, Zap, Palette, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    desc: "Arquitetura organizada, escalável e pensada para longo prazo.",
  },
  {
    icon: Palette,
    title: "Experiência Moderna",
    desc: "Interfaces consistentes e focadas em usabilidade real.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Aplicações rápidas e otimizadas.",
  },
  {
    icon: Heart,
    title: "Compromisso",
    desc: "Entrega responsável e visão de produto.",
  },
];

export function Highlights() {
  return (
    <div className="mt-10 grid md:grid-cols-4 sm:gap-6 gap-3">
      {highlights.map((item, i) => (
        <div
          key={item.title}
          className="rounded-xl border bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all"
        >
          <item.icon className="w-6 h-6 text-primary mb-3" />
          <h4 className="text-inter-700-14 text-foreground mb-2">
            {item.title}
          </h4>
          <p className="text-inter-400-16 text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
