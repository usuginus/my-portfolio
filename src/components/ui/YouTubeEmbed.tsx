export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="aspect-video w-full max-w-xl">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
