'use client';

import { allCaseStudies } from 'contentlayer/generated';
import { AnimatedSection, AnimatedContainer, AnimatedCard, AnimatedText } from '@/components/AnimatedComponents';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="py-24">
      <AnimatedSection className="space-y-16">
        <AnimatedText className="text-center space-y-12" delay={0.2}>
          <h1 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tight">
            All Work
          </h1>
          <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            A collection of case studies and projects showcasing my design process and outcomes
          </p>
        </AnimatedText>
        
        <AnimatedContainer className="space-y-16">
          {allCaseStudies.map((item, index) => (
            <AnimatedCard 
              key={item._id} 
              className="group relative overflow-hidden"
              delay={index * 0.1}
            >
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 p-10 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-6 right-6 text-8xl font-black text-accent-blue">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                
                <div className="lg:col-span-7 relative">
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
                
                <div className="lg:col-span-5 space-y-6 relative">
                  {/* Project number and year */}
                  <div className="flex justify-between items-start">
                    <div className="text-2xl font-black text-accent-blue/30 group-hover:text-accent-blue/50 transition-colors duration-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="text-2xl font-black text-accent-blue/30 group-hover:text-accent-blue/50 transition-colors duration-300">
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-accent-blue/10 px-4 py-2 text-sm font-bold text-accent-blue border border-accent-blue/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-3xl font-black text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                    <Link href={item.url as any}>
                      {item.title}
                    </Link>
                  </h2>
                  
                  {/* Animated line */}
                  <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  
                  {/* Subtitle */}
                  <p className="text-lg text-text-secondary leading-relaxed font-light">
                    {item.subtitle}
                  </p>
                  
                  {/* Impact */}
                  {item.impact && item.impact.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-sm text-text-tertiary font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Key Outcomes
                      </div>
                      <ul className="space-y-2 text-text-tertiary">
                        {item.impact.slice(0, 2).map((line) => (
                          <li key={line} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0"></span>
                            <span className="text-sm font-medium">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedContainer>
      </AnimatedSection>
    </div>
  );
}

