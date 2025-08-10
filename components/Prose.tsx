import { cn } from '@/lib/utils';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <article
      className={cn(
        'prose prose-neutral max-w-none dark:prose-invert prose-img:rounded-lg',
        'prose-headings:scroll-mt-24',
        className
      )}
    >
      {children}
    </article>
  );
}

