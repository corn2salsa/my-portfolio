import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-16">
      <section className="grid items-center gap-14 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Zach Wachtel
          </h1>

          <h2 className="max-w-xl text-lg text-gray-600">
            Computer Science & Communication double major at UNC–Chapel Hill
          </h2>

          <p className="max-w-xl text-lg text-gray-600">
            Welcome to my portfolio! I coded it myself. Isn&apos;t that cool?
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <div className="relative max-w-sm">
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 to-blue-500">
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-60" />

              <Image
                src="/images/zach.jpg"
                alt="Zach Portrait"
                width={500}
                height={800}
                className="w-full rounded-2xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
