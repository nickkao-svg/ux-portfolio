import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-neutral-200 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300',
        className
      )}
    >
      {children}
    </span>
  );
}

