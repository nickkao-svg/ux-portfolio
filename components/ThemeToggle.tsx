'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        aria-label="Toggle theme" 
        className="h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800" 
      />
    );
  }

  const isDark = resolvedTheme === 'dark' || theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-neutral-800 dark:hover:bg-neutral-900"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

