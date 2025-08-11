'use client';

import Link from 'next/link';
import Image from 'next/image';
import { allCaseStudies } from 'contentlayer/generated';
import profile from '@/data/profile';
import { testimonials } from '@/data/testimonials';
import { brands } from '@/data/brands';
import { 
  AnimatedSection, 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedImage,
  PageTransition 
} from '@/components/AnimatedComponents';

// Sort case studies by year (newest first)
const sortedCaseStudies = allCaseStudies.sort((a, b) => b.year - a.year);

// Component for the hero section
function HeroSection() {
  return (
    <AnimatedSection className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <AnimatedText className="lg:col-span-7 space-y-8" delay={0.2}>
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[0.9]">
              {profile.name}
            </h1>
            <p className="text-xl lg:text-2xl text-accent-blue font-medium">
              {profile.title}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              {profile.bio}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-charcoal font-semibold rounded-2xl transition-all duration-300 hover:bg-accent-blueDark hover:scale-105 shadow-apple"
            >
              View Work
            </Link>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center px-8 py-4 border border-charcoal-200/30 text-text-primary font-semibold rounded-2xl transition-all duration-300 hover:bg-charcoal-100/20 hover:scale-105 glass"
            >
              Download Résumé
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-text-tertiary text-sm pt-4">
            <span>{profile.location}</span>
            <span aria-hidden="true">•</span>
            <a 
              className="hover:text-accent-blue transition-colors" 
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </div>
        </AnimatedText>
        
        <AnimatedImage className="lg:col-span-5" delay={0.4}>
          <div className="relative aspect-square overflow-hidden rounded-3xl glass">
            <Image 
              src="/images/headshot.svg" 
              alt="Portrait of Avery Lee" 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        </AnimatedImage>
      </div>
    </AnimatedSection>
  );
}

// Component for the work section
function WorkSection() {
  return (
    <AnimatedSection className="py-20">
      <div className="space-y-12">
        <AnimatedText className="text-center space-y-4" delay={0.2}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            Selected Work
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Case studies showcasing my approach to product design and user experience
          </p>
        </AnimatedText>
        
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedCaseStudies.map((item, index) => (
            <AnimatedCard 
              key={item._id} 
              className="group space-y-6 p-6"
              delay={index * 0.1}
            >
              <Link 
                href={item.url as any} 
                className="relative aspect-[4/3] block overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.heroImage}
                  alt={`${item.title} hero image`}
                  fill
                  className="object-cover transition-transform duration-500 ease-apple group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                />
              </Link>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-charcoal-100/50 px-3 py-1 text-xs font-medium text-text-secondary border border-charcoal-200/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold leading-tight text-text-primary">
                  <Link href={item.url as any} className="hover:text-accent-blue transition-colors">
                    {item.title}
                  </Link>
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {item.subtitle}
                </p>
                
                {item.impact?.[0] && (
                  <div className="text-sm text-text-tertiary">
                    {item.impact[0]}
                  </div>
                )}
              </div>
            </AnimatedCard>
          ))}
        </AnimatedContainer>
      </div>
    </AnimatedSection>
  );
}

// Component for the brands section
function BrandsSection() {
  return (
    <AnimatedSection className="py-20">
      <div className="space-y-12">
        <AnimatedText className="text-center space-y-4" delay={0.2}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            Brands I've worked with
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Collaborating with teams to create exceptional user experiences
          </p>
        </AnimatedText>
        
        <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
          {brands.map((brand, index) => (
            <AnimatedCard 
              key={brand.name}
              className="flex flex-col items-center gap-4 text-center p-6"
              delay={index * 0.05}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl glass">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain filter brightness-0 invert opacity-80"
                />
              </div>
              <span className="text-sm text-text-tertiary font-medium">
                {brand.name}
              </span>
            </AnimatedCard>
          ))}
        </AnimatedContainer>
      </div>
    </AnimatedSection>
  );
}

// Component for the testimonials section
function TestimonialsSection() {
  return (
    <AnimatedSection className="py-20">
      <div className="space-y-12">
        <AnimatedText className="text-center space-y-4" delay={0.2}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            What people say
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Feedback from colleagues and collaborators
          </p>
        </AnimatedText>
        
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard 
              key={index} 
              className="p-8 space-y-6"
              delay={index * 0.1}
            >
              <blockquote className="text-text-secondary leading-relaxed text-lg">
                "{testimonial.quote}"
              </blockquote>
              <footer className="space-y-2">
                <div className="font-semibold text-text-primary">
                  {testimonial.author}
                </div>
                <div className="text-sm text-text-tertiary">
                  {testimonial.role}, {testimonial.company}
                </div>
              </footer>
            </AnimatedCard>
          ))}
        </AnimatedContainer>
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
