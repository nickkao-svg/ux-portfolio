import { cn } from "@/lib/utils";

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "prose prose-neutral max-w-none dark:prose-invert prose-img:rounded-lg",
        "prose-headings:scroll-mt-24",
        className
      )}
    >
      {children}
    </article>
  );
}

