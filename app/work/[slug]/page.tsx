import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allCaseStudies } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Prose } from '@/components/Prose';
import TableOfContents from '@/components/TableOfContents';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { absoluteUrl } from '@/lib/seo';
import type { Metadata } from 'next';
import Callout from '@/components/mdx/Callout';
import Figure from '@/components/mdx/Figure';
import Grid from '@/components/mdx/Grid';
import Quote from '@/components/mdx/Quote';
import Metric from '@/components/mdx/Metric';
import { cn } from '@/lib/utils';

export const dynamicParams = false;

export function generateStaticParams() {
  return allCaseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doc = allCaseStudies.find((caseStudy) => caseStudy.slug === params.slug);
  if (!doc) return {};
  
  const title = doc.title;
  const description = doc.subtitle;
  const url = absoluteUrl(`/work/${doc.slug}`);
  const images = [{ url: doc.heroImage }];
  
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images, type: 'article' },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

const mdxComponents = {
  Callout,
  Figure,
  Grid,
  Quote,
  Metric,
  hr: (props: React.ComponentProps<'hr'>) => (
    <hr className="my-10 border-neutral-200 dark:border-neutral-800" {...props} />
  ),
  table: (props: React.ComponentProps<'table'>) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-left" {...props} />
    </div>
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a {...props} className={cn('underline underline-offset-4', props.className)} />
  ),
};

function CaseStudyHeader({ doc }: { doc: any }) {
  return (
    <header className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-12">
      <div className="md:col-span-7">
        <h1 className="text-3xl font-semibold">{doc.title}</h1>
        <p className="text-neutral-600 dark:text-neutral-300">{doc.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800">
            Role: {doc.role}
          </span>
          <span className="rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800">
            Team: {doc.team}
          </span>
          <span className="rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800">
            Year: {doc.year}
          </span>
          <span className="rounded-md border border-neutral-200 px-2 py-1 dark:border-neutral-800">
            Duration: {doc.duration}
          </span>
        </div>
        {doc.tools?.length > 0 && (
          <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Tools: {doc.tools.join(', ')}
          </div>
        )}
        {doc.impact?.length > 0 && (
          <ul className="mt-3 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-200">
            {doc.impact.map((impact: string) => (
              <li key={impact}>{impact}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="md:col-span-5">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Image 
            src={doc.heroImage} 
            alt={`${doc.title} hero`} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>
      </div>
    </header>
  );
}

function CaseStudyNavigation({ prev, next }: { prev: any; next: any }) {
  return (
    <nav className="flex items-center justify-between text-sm">
      {prev ? (
        <a className="hover:underline" href={prev.url}>
          ← {prev.title}
        </a>
      ) : <span />}
      {next ? (
        <a className="hover:underline" href={next.url}>
          {next.title} →
        </a>
      ) : <span />}
    </nav>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const doc = allCaseStudies.find((caseStudy) => caseStudy.slug === params.slug);
  if (!doc) notFound();
  
  const MDX = useMDXComponent(doc.body.code);

  const currentIndex = allCaseStudies.findIndex((caseStudy) => caseStudy.slug === doc.slug);
  const prev = allCaseStudies[currentIndex - 1];
  const next = allCaseStudies[currentIndex + 1];

  return (
    <div className="py-10">
      <Breadcrumbs 
        items={[
          { href: '/work', label: 'Work' }, 
          { label: doc.title }
        ]} 
      />

      <CaseStudyHeader doc={doc} />

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
        <aside className="md:col-span-3">
          <div className="hidden md:block">
            <TableOfContents />
          </div>
        </aside>
        <Prose className="md:col-span-9">
          <MDX components={mdxComponents as any} />
        </Prose>
      </div>

      <hr className="my-12 border-neutral-200 dark:border-neutral-800" />

      <CaseStudyNavigation prev={prev} next={next} />
    </div>
  );
}

