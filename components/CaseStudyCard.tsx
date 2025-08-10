import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/Badge';
import { type CaseStudy } from 'contentlayer/generated';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  item: CaseStudy;
  className?: string;
}

function CaseStudyImage({ item }: { item: CaseStudy }) {
  return (
    <Link 
      href={item.url as any} 
      className="relative aspect-[16/9] overflow-hidden rounded-lg md:col-span-7"
    >
      <Image
        src={item.heroImage}
        alt={`${item.title} hero image`}
        fill
        className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </Link>
  );
}

function CaseStudyContent({ item }: { item: CaseStudy }) {
  const displayTags = item.tags.slice(0, 3);
  const displayImpact = item.impact?.slice(0, 2) ?? [];

  return (
    <div className="md:col-span-5">
      <div className="flex flex-wrap gap-2">
        {displayTags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">
        <Link href={item.url as any} className="hover:underline">
          {item.title}
        </Link>
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300">
        {item.subtitle}
      </p>
      {displayImpact.length > 0 && (
        <ul className="mt-3 list-inside list-disc text-sm text-neutral-600 dark:text-neutral-300">
          {displayImpact.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CaseStudyCard({ item, className }: CaseStudyCardProps) {
  return (
    <article className={cn('group grid grid-cols-1 gap-4 md:grid-cols-12', className)}>
      <CaseStudyImage item={item} />
      <CaseStudyContent item={item} />
    </article>
  );
}

