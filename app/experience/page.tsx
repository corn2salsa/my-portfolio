// pages/experience.tsx
import Head from "next/head";
import type { ReactNode } from "react";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string | ReactNode;
};

const experiences: ExperienceItem[] = [
  {
    role: "Marketing Coordinator",
    company: "Eats2Seats",
    location: "Chapel Hill, NC",
    dates: "Aug 2025 – Present",
    description:
      "I currently manage a team of interns across 8 college campuses country-wide. I lead weekly progress meetings to align company marketing objectives. Mainly, I serve as the liaison between interns and the Head of Marketing, delegating assignments and overseeing social media campaigns, outreach initiatives, and growth strategies. Notably, my interns have gained 3,000 instagram followers, put on 7 on-campus partnerships with clubs, and created 450+ users in the company's app.",
  },
  {
    role: "Communications Intern",
    company: "Eats2Seats",
    location: "Chapel Hill, NC",
    dates: "May 2025 – Aug 2025",
    description:
      "I developed and executed marketing strategies to secure partnerships with local non-profits, on-campus clubs, and social media communities on Instagram, Reddit, and FaceBook. I put on several on-campus events, and created a marketing strategy for the upcoming months."
,
  },
  {
    role: "Social Media Intern",
    company: "SciSport Performance",
    location: "Wilmington, NC",
    dates: "May 2025 – Aug 2025",
    description:
      "I planned and produced short and long form social media content in order to boost brand recognition in Wilmington, NC."
,
  },
];

// NEW extracurricular section
const extracurriculars: ExperienceItem[] = [
  {
    role: "President",
    company: "Comedy, Inc., UNC Chapel Hill",
    location: "Chapel Hill, NC",
    dates: "Aug 2022 – Present",
    description:
      "I oversee all club operations including budgeting, university communication, show planning, rehearsals, recruitment, and performance execution. The main aspect is leading biweekly meetings for writers and performers in developing original sketches and digital shorts for campus shows.",
  },
  {
    role: "Writer",
    company: "The Oh Well (UNC Satire Publication)",
    location: "Chapel Hill, NC",
    dates: "Aug 2024 – Present",
    description: (
  <>
    I write satire pieces and headlines pertaining to campus culture. I help my
    buddy Shane with videos as well.
    <br />
    <br />
    Work:{" "}
    <a
      href="https://theohwellunc.com/author/zach-wachtel/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      https://theohwellunc.com/author/zach-wachtel/
    </a>
  </>
),

  },
  {
    role: "Summer Writer",
    company: "DIS: Copenhagen Study Abroad",
    location: "Copenhagen, Denmark",
    dates: "May 2024 – Jul 2024",
    description:
      "I authored weekly articles based on my own personal cultural immersion and researched history of Scandinavia. I collaborated with editors and designers to produce polished and engaging written content.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience | Zach Wachtel</title>
      </Head>

      <main className="min-h-screen bg-white">

        <div className="mx-auto max-w-5xl px-4 py-12">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Work and Internships
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Relevant experiences that I'm proud of:
            </p>
          </header>

          {/* Work & Internships */}
          <section className="space-y-6">
            {experiences.map((exp) => (
              <article
                key={`${exp.role}-${exp.company}`}
                className="relative rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:shadow-md"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {exp.role}
                    </h2>
                    <p className="text-sm font-medium text-gray-700">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right md:text-right">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {exp.dates}
                    </p>
                    <p className="text-xs text-gray-400">{exp.location}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {exp.description}
                </p>
              </article>
            ))}
          </section>

          {/* Extracurricular Header */}
          <header className="mt-16 mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Extracurricular
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-600">
              Fun stuff:
            </p>
          </header>

          {/* Extracurricular list */}
          <section className="space-y-6">
            {extracurriculars.map((exp) => (
              <article
                key={`${exp.role}-${exp.company}`}
                className="relative rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:shadow-md"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {exp.role}
                    </h2>
                    <p className="text-sm font-medium text-gray-700">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right md:text-right">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {exp.dates}
                    </p>
                    <p className="text-xs text-gray-400">{exp.location}</p>
                  </div>
                </div>

                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-700">
                  {exp.description}
                </p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
