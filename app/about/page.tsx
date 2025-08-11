'use client';

import Image from 'next/image';
import profile from '@/data/profile';
import { press } from '@/data/press';
import { 
  AnimatedSection, 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedImage 
} from '@/components/AnimatedComponents';

const principles = [
  'Clarity over cleverness',
  'Evidence beats ego',
  'Design the system, not just the screen',
  'Accessibility is non-negotiable'
] as const;

function ProfileImage() {
  return (
    <AnimatedImage className="relative aspect-square overflow-hidden rounded-3xl glass" delay={0.4}>
      <Image 
        src="/images/headshot.svg" 
        alt="Portrait of Avery Lee" 
        fill 
        className="object-cover" 
      />
    </AnimatedImage>
  );
}

function PrinciplesSection() {
  return (
    <AnimatedSection className="space-y-6" delay={0.6}>
      <h2 className="text-2xl font-bold text-text-primary">Design Principles</h2>
      <ul className="space-y-4">
        {principles.map((principle, index) => (
          <AnimatedCard 
            key={principle} 
            className="p-6"
            delay={0.8 + index * 0.1}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/10 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
              </div>
              <p className="text-text-secondary leading-relaxed font-medium">
                {principle}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </ul>
    </AnimatedSection>
  );
}

function PressSection() {
  return (
    <AnimatedSection className="space-y-6" delay={1.0}>
      <h2 className="text-2xl font-bold text-text-primary">Talks & Press</h2>
      <div className="space-y-4">
        {press.map((item, index) => (
          <AnimatedCard 
            key={item.title} 
            className="p-6"
            delay={1.2 + index * 0.1}
          >
            <a 
              className="block space-y-2 hover:text-accent-blue transition-colors" 
              href={item.link}
            >
              <h3 className="font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-text-tertiary text-sm">
                {item.outlet} • {item.year}
              </p>
            </a>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <AnimatedSection className="space-y-16">
        <AnimatedText className="text-center space-y-4" delay={0.2}>
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary">
            About {profile.name}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            I'm a product/UX designer focused on AI tooling and safety workflows. I care deeply about clarity over cleverness, evidence over opinion, and crafting systems that scale.
          </p>
        </AnimatedText>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <ProfileImage />
          </div>
          <div className="space-y-12 lg:col-span-8">
            <PrinciplesSection />
            <PressSection />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

