export type PlayerProps = {
    src: string;
    title: string
}
export function Player({title, src}: PlayerProps) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}