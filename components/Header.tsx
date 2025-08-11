'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
        'rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/50',
        isActive
          ? 'text-text-primary bg-charcoal-100/20'
          : 'text-text-secondary hover:text-text-primary hover:bg-charcoal-100/10'
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
    <motion.header 
      className="sticky top-0 z-40 backdrop-blur-md bg-charcoal/80 border-b border-charcoal-200/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[var(--header-height)] w-full max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/" className="font-bold text-xl tracking-tight">
          <span className="sr-only">Home</span>
          <span className="text-text-primary">Avery Lee</span>
        </Link>

        <ul className="flex items-center gap-2">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavigationLink
                href={item.href}
                label={item.label}
                isActive={isActiveLink(item.href)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

