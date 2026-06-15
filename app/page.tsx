import {
  ExternalLink,
  Figma,
  Github,
  Globe,
} from "lucide-react";

type Website = {
  title: string;
  description: string;
  href: string;
  image?: string;
};

type FigmaDesign = {
  title: string;
  description: string;
  href: string;
  image?: string;
  prototypeHref?: string;
};

const websites: Website[] = [
  {
    title: "Bread Budgeting",
    description:
      "Real time personal and household budgeting tracker with pie chart visualization, and editable groupings.",
    href: "",
    image: "",
  },
  {
    title: "Nice Log",
    description:
      "Personal Weekly Tracker with each day being tied to a real date and a grade system based on set goals.",
    href: "https://nice-log.vercel.app/index.html",
    image: "/images/nice.png",
  },
];

const figmaDesigns: FigmaDesign[] = [
  {
    title: "Stay Connected App",
    description:
      "Figma prototype of an app designed to keep track of your contacts with a reminder system and prompts. Includes audience analysis, persona posters, journey maps, style guide, and usability testing",
    href: "https://www.figma.com/design/SEfnIWWShMK9zPhmcgfx1C/wachtel_final?t=ndNbukAgDFinw7to-0",
    prototypeHref: "https://www.figma.com/proto/OC7n41COl54xsXEDwJUDjB/Stay-Connected?t=pSbkpUDA3rbbG6TH-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
    image: "/images/scf2.jpeg",
  },
  {
    title: "About Me",
    description:
      "Short and fun about me design.",
    href: "https://www.figma.com/proto/1eyzR43oKP9HcVp1fNgtbT?node-id=0-1&t=oU9lvdFOQiUcqJN0-6",
    image: "/images/figma.jpeg",
  },
];

export default function CodingProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-16 text-[#d8c3ff]">
      {/* PAGE INTRODUCTION */}

      {/* WEBSITES */}
      <section>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Globe className="h-8 w-8 text-[#805ad5]" />

            <h2 className="text-3xl font-bold tracking-tight text-[#805ad5]">
              Websites
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {websites.map((website, index) => (
            <article
              key={`${website.title}-${index}`}
              className="space-y-4"
            >
              <div className="aspect-video overflow-hidden rounded-2xl border border-[#3b235c] bg-[#100a18] shadow-sm">
                {website.image ? (
                  <img
                    src={website.image}
                    alt={`${website.title} preview`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm font-medium text-[#b794f4]">
                    Website screenshot coming soon
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-[#805ad5]">
                  {website.title}
                </h3>

                <p className="leading-relaxed text-[#d8c3ff]">
                  {website.description}
                </p>

                {website.href ? (
                  <a
                    href={website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#c4a7ff] underline underline-offset-4 transition hover:text-[#e1d2ff]"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[#b794f4]">
                    Website link coming soon
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="my-16 border-t border-[#3b235c]" />

      {/* FIGMA DESIGNS */}
      <section>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Figma className="h-8 w-8 text-[#805ad5]" />

            <h2 className="text-3xl font-bold tracking-tight text-[#805ad5]">
              Figma Designs
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {figmaDesigns.map((design, index) => (
            <article
              key={`${design.title}-${index}`}
              className="rounded-2xl border border-[#3b235c] bg-[#100a18] p-6 shadow-sm transition hover:border-[#805ad5] hover:shadow-[0_0_16px_rgba(128,90,213,0.25)]"
            >
              <div className="aspect-video overflow-hidden rounded-2xl border border-[#3b235c] bg-[#100a18] shadow-sm">
                {design.image ? (
                  <img
                    src={design.image}
                    alt={`${design.title} preview`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm font-medium text-[#b794f4]">
                    Design screenshot coming soon
                  </div>
                )}
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-[#805ad5]">
                  {design.title}
                </h3>

                <p className="leading-relaxed text-[#d8c3ff]">
                  {design.description}
                </p>

                <div className="flex flex-col items-start gap-2">
                  {design.prototypeHref !== undefined &&
                    (design.prototypeHref ? (
                      <a
                        href={design.prototypeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#c4a7ff] underline underline-offset-4 transition hover:text-[#e1d2ff]"
                      >
                        View Interactive Prototype
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#b794f4]">
                        Prototype link coming soon
                      </p>
                    ))}


                {design.href ? (
                  <a
                    href={design.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#c4a7ff] underline underline-offset-4 transition hover:text-[#e1d2ff]"
                  >
                    View Figma Design
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[#b794f4]">
                    Figma link coming soon
                  </p>
                )}
              </div>
              </div>
            </article>
            ))}
          
        </div>
      </section>

            <div className="my-16 border-t border-[#3b235c]" />


      {/* GITHUB */}
      <section className="mt-14 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Github className="h-8 w-8 text-[#805ad5]" />

          <h2 className="text-3xl font-bold tracking-tight text-[#805ad5]">
            GitHub
          </h2>
        </div>

        <p className="max-w-2xl text-[#d8c3ff]">
          Additional full-stack applications, React and Next.js projects, and
          software engineering coursework can be found on my GitHub.
        </p>

        <a
          href="https://github.com/corn2salsa?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#805ad5] bg-[#100a18] px-6 py-3 text-sm font-medium text-[#d8c3ff] transition hover:border-[#b794f4] hover:bg-[#180f24] hover:shadow-[0_0_14px_rgba(128,90,213,0.35)]"
        >
          <Github className="h-4 w-4" />
          View My GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

    </main>
  );
}