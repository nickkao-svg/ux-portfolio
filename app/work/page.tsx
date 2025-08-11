'use client';

import { allCaseStudies } from 'contentlayer/generated';
import { AnimatedSection, AnimatedContainer, AnimatedCard, AnimatedText } from '@/components/AnimatedComponents';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="py-20">
      <AnimatedSection className="space-y-12">
        <AnimatedText className="text-center space-y-4" delay={0.2}>
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary">
            All Work
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A collection of case studies and projects showcasing my design process and outcomes
          </p>
        </AnimatedText>
        
        <AnimatedContainer className="space-y-16">
          {allCaseStudies.map((item, index) => (
            <AnimatedCard 
              key={item._id} 
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 p-8"
              delay={index * 0.1}
            >
              <div className="lg:col-span-7">
                <Link 
                  href={item.url as any} 
                  className="relative aspect-[16/9] block overflow-hidden rounded-2xl"
                >
                  <Image
                    src={item.heroImage}
                    alt={`${item.title} hero image`}
                    fill
                    className="object-cover transition-transform duration-500 ease-apple group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </Link>
              </div>
              
              <div className="lg:col-span-5 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-charcoal-100/50 px-3 py-1 text-xs font-medium text-text-secondary border border-charcoal-200/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-text-primary">
                  <Link href={item.url as any} className="hover:text-accent-blue transition-colors">
                    {item.title}
                  </Link>
                </h2>
                
                <p className="text-text-secondary leading-relaxed text-lg">
                  {item.subtitle}
                </p>
                
                {item.impact && item.impact.length > 0 && (
                  <ul className="space-y-2 text-text-tertiary">
                    {item.impact.slice(0, 2).map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0"></span>
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedCard>
          ))}
        </AnimatedContainer>
      </AnimatedSection>
    </div>
  );
}

