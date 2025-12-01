import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Zach Wachtel
        </h1>
        <h2 className="text-lg text-gray-600 max-w-xl">
          Computer Science & Communication double major at UNC–Chapel Hill
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
         Welcome to my portfolio! I coded it myself. Isn't that cool? 
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center">
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-60 -z-10" />
          <Image src="/images/zach.jpg" alt="Zach Portrait" width={500} height={800} className="w-full max-w-sm rounded-2xl object-cover shadow-xl" priority/>
          </div>
      </div>
    </div>
  );
}
