'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Résumé' }
] as const;

interface NavigationLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function NavigationLink({ href, label, isActive }: NavigationLinkProps) {
  return (
    <Link
      href={href as any}
      className={cn(
        'rounded-md px-2 py-1 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500',
        isActive
          ? 'text-neutral-900 dark:text-white'
          : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[var(--header-height)] w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/" className="font-semibold tracking-tight">
          <span className="sr-only">Home</span>
          <span className="text-neutral-900 dark:text-white">Avery Lee</span>
        </Link>

        <ul className="flex items-center gap-5">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavigationLink
                href={item.href}
                label={item.label}
                isActive={isActiveLink(item.href)}
              />
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

