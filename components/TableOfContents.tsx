'use client';

import { useEffect, useMemo, useState } from 'react';
import { extractTocFromHeadings, type TocItem } from '@/lib/toc';
import { cn } from '@/lib/utils';

const HEADING_SELECTORS = 'article.prose h2, article.prose h3';
const INTERSECTION_OPTIONS = { 
  rootMargin: '0px 0px -60% 0px', 
  threshold: [0, 1] 
};

function TocItem({ item, isActive }: { item: TocItem; isActive: boolean }) {
  return (
    <li className={cn(item.level === 3 && 'ml-3')}>
      <a
        href={`#${item.id}`}
        className={cn(
          'block rounded px-2 py-1 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white',
          isActive && 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white'
        )}
      >
        {item.text}
      </a>
    </li>
  );
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll(HEADING_SELECTORS)
    ) as HTMLHeadingElement[];
    
    setItems(extractTocFromHeadings(headings));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      INTERSECTION_OPTIONS
    );
    
    headings.forEach((heading) => observer.observe(heading));
    
    return () => observer.disconnect();
  }, []);

  const groupedItems = useMemo(() => items, [items]);

  return (
    <nav aria-label="Table of contents" className="sticky top-[calc(var(--header-height)+1rem)]">
      <ul className="space-y-1 text-sm">
        {groupedItems.map((item) => (
          <TocItem 
            key={item.id} 
            item={item} 
            isActive={activeId === item.id} 
          />
        ))}
      </ul>
    </nav>
  );
}

