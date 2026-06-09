"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "Projects",
    href: "/",
  },
  {
    label: "Film",
    href: "/film",
  },
  {
    label: "About Me",
    href: "/about",
  },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#08050d] px-6 pb-8 pt-8 text-[#b794f4]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Link
            href="/"
            className="inline-block text-3xl font-semibold tracking-tight text-[#d8c3ff] transition-opacity hover:opacity-75 md:text-4xl"
          >
            Zach Wachtel
          </Link>
        </div>

        <nav className="mx-auto mt-8 flex w-full max-w-xl items-center justify-between gap-6">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm font-medium uppercase tracking-[0.16em] text-[#b794f4]",
                  "underline decoration-[#b794f4] underline-offset-[10px]",
                  "transition-all duration-200",
                  "hover:decoration-2 hover:drop-shadow-[0_0_6px_rgba(183,148,244,0.55)]",
                  isActive
                    ? "decoration-[3px] drop-shadow-[0_0_8px_rgba(183,148,244,0.9)]"
                    : "decoration-1",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}