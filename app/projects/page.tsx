import { Clapperboard, FileText, Github } from "lucide-react";

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
      "Documentary on my relationship with my father. It's pretty good but probably not a great representation of me as a person.",
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
      "A silly sketch about a dad and son. Hopefully, you aren't seeing a theme.",
    youtubeId: "Lq10XOaAXig",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-20">
      {/* ---------- FILM SECTION ---------- */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Clapperboard className="w-7 h-7 text-purple-600" />
          Projects
        </h1>
        <p className="text-gray-600 max-w-2xl">
          A few films I was a main contributor for:
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {videos.map((video) => (
          <article key={video.youtubeId} className="space-y-3">
            <div className="aspect-video overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold">{video.title}</h2>

              <p className="text-sm font-medium text-gray-800">
                Role: <span className="text-gray-600">{video.role}</span>
              </p>

              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* ---------- SCRIPTS SECTION ---------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          Scripts I’ve Written
        </h2>
        <p className="text-gray-600 max-w-2xl">
          A collection of comedy sketches, short films, and narrative pieces I've
          written or co-written:
        </p>

        <ul className="space-y-2 text-gray-700">
          <li>
            <a
              href="#"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
            >
              • Script Title 1
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
            >
              • Script Title 2
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
            >
              • Script Title 3
            </a>
          </li>
        </ul>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* ---------- GITHUB SECTION ---------- */}
      <section className="space-y-4 pb-10">
        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Github className="w-6 h-6 text-gray-800" />
          My GitHub
        </h2>

        <p className="text-gray-600 max-w-2xl">
          I also work on full-stack applications, React/Next.js projects, and software
          engineering coursework:
        </p>

        <a
          href="https://github.com/corn2salsa?tab=repositories"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-900 transition"
        >
          <Github className="w-4 h-4" />
          Visit My GitHub →
        </a>
      </section>
    </div>
  );
}
