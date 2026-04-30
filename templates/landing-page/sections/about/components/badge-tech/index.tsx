import { Badge } from "@/components/ui/badge";
import { KeyTextField } from "@prismicio/client";

// Adicione as chaves { tech } para desestruturar o objeto de props
export function BadgeTech({ tech }: { tech: KeyTextField }) {
  return (
    <Badge variant="secondary" className="text-inter-500-14 px-3 py-1">
      {tech}
    </Badge>
  );
}
