'use client';

import Link from 'next/link';
import { allCaseStudies } from 'contentlayer/generated';
import profile from '@/data/profile';
import { testimonials } from '@/data/testimonials';
import { brands } from '@/data/brands';
import { 
  AnimatedSection, 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedText, 
  PageTransition 
} from '@/components/AnimatedComponents';

// Sort case studies by year (newest first)
const sortedCaseStudies = allCaseStudies.sort((a, b) => b.year - a.year);

// Component for the hero section
function HeroSection() {
  return (
    <AnimatedSection className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedText className="text-center space-y-12" delay={0.2}>
          {/* Main heading with dramatic typography */}
                      <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-text-primary leading-[0.8]">
              {profile.name.split(' ').map((name, index) => (
                <span key={index} className="block">
                  {name}
                </span>
              ))}
            </h1>
            
            {/* Subtitle with editorial typography */}
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl font-light text-accent-blue tracking-wide">
                {profile.title}
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-accent-blue to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* Bio with refined typography */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed font-light">
              {profile.bio}
            </p>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/work"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-charcoal font-bold text-base tracking-wide transition-all duration-500 hover:bg-accent-blueDark overflow-hidden border-l-4 border-accent-blue"
            >
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-blueDark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            <a
              href={profile.resumeUrl}
              className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-charcoal-200 text-text-primary font-bold text-base tracking-wide transition-all duration-500 hover:border-accent-blue hover:bg-charcoal-50/20 overflow-hidden border-l-4 border-charcoal-200 group-hover:border-l-accent-blue"
            >
              <span className="relative z-10">Download Résumé</span>
            </a>
          </div>
          
          {/* Contact info with editorial typography */}
          <div className="flex items-center justify-center gap-6 text-text-tertiary text-sm pt-12">
            <span className="font-medium uppercase tracking-wider">{profile.location}</span>
            <span aria-hidden="true" className="text-2xl">•</span>
            <a 
              className="hover:text-accent-blue transition-colors font-medium uppercase tracking-wider underline decoration-1 underline-offset-4" 
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </div>
        </AnimatedText>
      </div>
    </AnimatedSection>
  );
}

// Component for the work section
function WorkSection() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-b from-transparent to-charcoal-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          <AnimatedText className="text-center space-y-8" delay={0.2}>
            <h2 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tight">
              Selected Work
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
              Case studies showcasing my approach to product design and user experience
            </p>
          </AnimatedText>
          
          <AnimatedContainer className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {sortedCaseStudies.map((item, index) => (
              <AnimatedCard 
                key={item._id} 
                className="group relative overflow-hidden"
                delay={index * 0.1}
              >
                <div className="relative p-8 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 text-6xl font-black text-accent-blue">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="relative space-y-4">
                    {/* Project number and year */}
                    <div className="flex justify-between items-start">
                      <div className="text-2xl font-black text-accent-blue/30 group-hover:text-accent-blue/50 transition-colors duration-300">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <div className="text-2xl font-black text-accent-blue/30 group-hover:text-accent-blue/50 transition-colors duration-300">
                        {item.year}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-black text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                      <Link href={item.url as any}>
                        {item.title}
                      </Link>
                    </h3>
                    
                    {/* Animated line */}
                    <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                    
                    {/* Subtitle */}
                    <p className="text-base text-text-secondary leading-relaxed font-light">
                      {item.subtitle}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-bold text-accent-blue border border-accent-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Impact - always visible */}
                    {item.impact?.[0] && (
                      <div className="text-sm text-text-tertiary font-medium uppercase tracking-wider pt-2 border-t border-charcoal-200/30">
                        {item.impact[0]}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Component for the brands section
function BrandsSection() {
  return (
    <AnimatedSection className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <AnimatedText className="text-center space-y-8" delay={0.2}>
            <h2 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tight">
              Brands I've worked with
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
              Collaborating with teams to create exceptional user experiences
            </p>
          </AnimatedText>
          
          <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <AnimatedCard 
                key={brand.name}
                className="group relative overflow-hidden"
                delay={index * 0.1}
              >
                <div className="relative p-8 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 text-8xl font-black text-accent-blue">
                      {brand.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="relative space-y-4">
                    <div className="text-3xl font-black text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                      {brand.name}
                    </div>
                    
                    {/* Animated line */}
                    <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                    
                    {/* Category label */}
                    <div className="text-sm text-text-tertiary font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Technology Partner
                    </div>
                  </div>
                  
                  {/* Floating number */}
                  <div className="absolute bottom-4 right-4 text-4xl font-black text-accent-blue/10 group-hover:text-accent-blue/30 transition-colors duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Component for the testimonials section
function TestimonialsSection() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-b from-charcoal-50/20 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
                  <div className="space-y-16">
          <AnimatedText className="text-center space-y-12" delay={0.2}>
            <h2 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tight">
              What people say
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
              Feedback from colleagues and collaborators
            </p>
          </AnimatedText>
          
          <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard 
                key={index} 
                className="group relative overflow-hidden"
                delay={index * 0.1}
              >
                <div className="relative p-10 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-6 right-6 text-8xl font-black text-accent-blue">
                      "
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="relative space-y-6">
                    <blockquote className="text-xl text-text-secondary leading-relaxed font-light">
                      {testimonial.quote}
                    </blockquote>
                    
                    {/* Animated line */}
                    <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                    
                    {/* Author info */}
                    <footer className="space-y-3">
                      <div className="font-bold text-lg text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-text-tertiary font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </footer>
                  </div>
                  
                  {/* Floating number */}
                  <div className="absolute bottom-6 right-6 text-4xl font-black text-accent-blue/10 group-hover:text-accent-blue/30 transition-colors duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      <div className="space-y-0">
        <HeroSection />
        <WorkSection />
        <BrandsSection />
        <TestimonialsSection />
      </div>
    </PageTransition>
  );
}
