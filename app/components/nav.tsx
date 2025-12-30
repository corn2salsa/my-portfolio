import Link from "next/link";

export function Nav() {
  return (
    <header className="w-full bg-white">
      <nav className="grid w-full grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[72px_56px] border-b-2 border-black">
        <div className="row-span-2 flex items-center justify-center border-r-2 border-black">
          <Link
            href="/"
            className="text-lg font-medium uppercase tracking-wide hover:underline"
          >
            Zach Wachtel
          </Link>
        </div>

        <div className="row-span-2 flex items-center justify-center border-r-2 border-black">
          <Link
            href="/experience"
            className="text-lg font-medium uppercase tracking-wide hover:underline"
          >
            Experience
          </Link>
        </div>

        <div className="row-span-2 flex items-center justify-center border-r-2 border-black">
          <Link
            href="/projects"
            className="text-lg font-medium uppercase tracking-wide hover:underline"
          >
            Projects
          </Link>
        </div>

        <div className="flex items-center justify-center border-b-2 border-black">
          <Link
            href="/about"
            className="text-lg font-medium uppercase tracking-wide hover:underline"
          >
            About
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Link
            href="/contact"
            className="text-lg font-medium uppercase tracking-wide hover:underline"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
