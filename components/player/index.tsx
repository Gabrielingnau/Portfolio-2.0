export type PlayerProps = {
  src: string;
  title: string;
};

export function Player({ title, src }: PlayerProps) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        loading="lazy" // Essencial para performance
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Overlay sutil para integração com o layout Shadcn */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5" />
    </div>
  );
}
