"use client";
import { useEffect, useMemo, useState } from "react";
import { extractTocFromHeadings, type TocItem } from "@/lib/toc";
import { cn } from "@/lib/utils";

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("article.prose h2, article.prose h3")
    ) as HTMLHeadingElement[];
    setItems(extractTocFromHeadings(headings));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: [0, 1] }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const grouped = useMemo(() => items, [items]);

  return (
    <nav aria-label="Table of contents" className="sticky top-[calc(var(--header-height)+1rem)]">
      <ul className="space-y-1 text-sm">
        {grouped.map((item) => (
          <li key={item.id} className={cn(item.level === 3 ? "ml-3" : "")}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block rounded px-2 py-1 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
                activeId === item.id && "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

