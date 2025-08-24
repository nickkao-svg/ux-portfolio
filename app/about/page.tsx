'use client';

import profile from '@/data/profile';
import { press } from '@/data/press';
import { 
  AnimatedSection, 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedText 
} from '@/components/AnimatedComponents';

const principles = [
  'Clarity over cleverness',
  'Evidence beats ego',
  'Design the system, not just the screen',
  'Accessibility is non-negotiable'
] as const;

function PrinciplesSection() {
  return (
    <AnimatedSection className="space-y-8" delay={0.6}>
      <h2 className="text-3xl font-black text-text-primary tracking-tight">Design Principles</h2>
      <ul className="space-y-6">
        {principles.map((principle, index) => (
          <AnimatedCard 
            key={principle} 
            className="group relative overflow-hidden"
            delay={0.8 + index * 0.1}
          >
            <div className="relative p-8 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-6xl font-black text-accent-blue">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
              
              <div className="relative space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg text-text-secondary leading-relaxed font-medium group-hover:text-text-primary transition-colors duration-300">
                      {principle}
                    </p>
                    {/* Animated line */}
                    <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </ul>
    </AnimatedSection>
  );
}

function PressSection() {
  return (
    <AnimatedSection className="space-y-8" delay={1.0}>
      <h2 className="text-3xl font-black text-text-primary tracking-tight">Talks & Press</h2>
      <div className="space-y-6">
        {press.map((item, index) => (
          <AnimatedCard 
            key={item.title} 
            className="group relative overflow-hidden"
            delay={1.2 + index * 0.1}
          >
            <div className="relative p-8 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-6xl font-black text-accent-blue">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
              
              <div className="relative space-y-4">
                <a 
                  className="block space-y-2 group-hover:text-accent-blue transition-colors duration-300" 
                  href={item.link}
                >
                  <h3 className="text-xl font-black text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Animated line */}
                  <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  
                  <p className="text-sm text-text-tertiary font-medium uppercase tracking-wider">
                    {item.outlet} • {item.year}
                  </p>
                </a>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function AboutPage() {
  return (
    <div className="py-24">
      <AnimatedSection className="space-y-16">
        <AnimatedText className="text-center space-y-12" delay={0.2}>
          <h1 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tight">
            About {profile.name}
          </h1>
          <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            I'm a product/UX designer focused on AI tooling and safety workflows. I care deeply about clarity over cleverness, evidence over opinion, and crafting systems that scale.
          </p>
        </AnimatedText>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <PrinciplesSection />
          <PressSection />
        </div>
      </AnimatedSection>
    </div>
  );
}

