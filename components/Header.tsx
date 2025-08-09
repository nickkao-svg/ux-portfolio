"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[var(--header-height)] w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/" className="font-semibold tracking-tight">
          <span className="sr-only">Home</span>
          <span className="text-neutral-900 dark:text-white">Avery Lee</span>
        </Link>

        <ul className="flex items-center gap-5">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href as any}
                  className={cn(
                    "rounded-md px-2 py-1 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500",
                    active
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="theme-toggle">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

