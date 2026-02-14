import { Badge } from "@/components/ui/badge";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
];

export function BadgeTech() {
  return (
    <div className="flex flex-wrap gap-2 sm:justify-start justify-center">
      {technologies.map((tech, i) => (
        <div key={tech}>
          <Badge variant="secondary" className="text-inter-500-14 px-3 py-1">
            {tech}
          </Badge>
        </div>
      ))}
    </div>
  );
}
