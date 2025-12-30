import { Clapperboard, FileText, Github } from "lucide-react";
type Script = {
  title: string;
  href: string;
};

const scripts: Script[] = [
  {
    title: "father's day",
    href: "/scripts/father's day.pdf",
  },
  {
    title: "squire",
    href: "/scripts/squire.pdf",
  },
  {
    title: "voter registration",
    href: "/scripts/voter registration.pdf",
  },
];

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
    <main className="mx-auto max-w-6xl px-8 py-16">
      <section className="space-y-4">
        
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl flex items-center gap-3">
          <Clapperboard className="h-8 w-8 text-purple-600" />
          Projects
        </h1>

        <p className="max-w-2xl text-lg text-gray-600">
          A few films I was a main contributor for:
        </p>
      </section>

      {/* FILMS */}
      <section className="mt-12 grid gap-10 md:grid-cols-2">
        {videos.map((video) => (
          <article key={video.youtubeId} className="space-y-4">
            <div className="aspect-video rounded-2xl border border-gray-200 shadow-sm bg-black overflow-hidden">
              <iframe
                className="h-full w-full rounded-2xl"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight">
                {video.title}
              </h2>

              <p className="text-sm font-medium text-gray-800">
                Role: <span className="font-normal text-gray-600">{video.role}</span>
              </p>

              <p className="text-gray-600">{video.description}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="my-16 border-t border-gray-200" />

      {/* SCRIPTS */}
<section className="space-y-4">
  <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
    <FileText className="h-7 w-7 text-blue-600" />
    Scripts I’ve Written
  </h2>

  <p className="max-w-2xl text-lg text-gray-600">
    A collection of comedy sketches and short films:
  </p>

  <ul className="space-y-3 pt-2">
    {scripts.map((script) => (
      <li key={script.href}>
        <a
          href={script.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col"
        >
          <span className="text-blue-600 underline underline-offset-4 group-hover:text-blue-800">
            {script.title}
          </span>
        </a>
      </li>
    ))}
  </ul>
</section>


      <div className="my-16 border-t border-gray-200" />

      {/* GITHUB */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <Github className="h-7 w-7 text-gray-800" />
          My GitHub
        </h2>

        <p className="max-w-2xl text-lg text-gray-600">
          I also work on full-stack applications, React/Next.js projects, and
          software engineering coursework:
        </p>

        <a
          href="https://github.com/corn2salsa?tab=repositories"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
        >
          <Github className="h-4 w-4" />
          Visit My GitHub →
        </a>
      </section>
    </main>
  );
}
