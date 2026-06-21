import { Clapperboard } from "lucide-react";

type Video = {
  title: string;
  role: string;
  description: string;
  youtubeId: string;
};

const videos: Video[] = [
  {
    title: "Untitled",
    role: "Director, Editor, Cinematographer",
    description:
      "After not seeing my father for three years, I documented our reunion. This short explores our relationship through the footage of our encounter, reflecting on memory, absence, and what remains unsaid.",
    youtubeId: "SXxfyP7zVnw",
  },
  {
    title: "Looking 4",
    role: "Co-Director, Co-Editor, Actor",
    description: "A short documentary on what it means to be known.",
    youtubeId: "PUbw7sJLMYk",
  },
  {
    title: "A Dad's Dream",
    role: "Actor, Co-Writer, Co-Director, Co-Editor",
    description:
      "A raunchy sketch about a dad and son.",
    youtubeId: "Lq10XOaAXig",
  },
  {
    title: "Coming Soon",
    role: "",
    description: "",
    youtubeId: "",
  },
];
<Clapperboard className="h-8 w-8 text-[#805ad5]" />
export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-16 text-[#d8c3ff]">
      <div className="space-y-3">
          <div className="flex items-center gap-3">
<Clapperboard className="h-8 w-8 text-[#805ad5]" />

            <h2 className="text-3xl font-bold tracking-tight text-[#805ad5]">
              Shorts & Sketches
            </h2>
          </div>
        </div>

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        {videos.map((video) => (
          <article key={video.title} className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-2xl border border-[#3b235c] bg-black shadow-sm">
              {video.youtubeId ? (
                <iframe
                  className="h-full w-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm font-medium text-[#b794f4]">
                  Video coming soon
                </div>
              )}
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-[#805ad5]">
                {video.title}
              </h2>

              <p className="text-sm font-medium text-[#d8c3ff]">
                Role:{" "}
                <span className="font-normal text-[#c4a7ff]">
                  {video.role}
                </span>
              </p>

              <p className="text-[#d8c3ff]">{video.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}