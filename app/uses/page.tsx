'use client';

import { 
  AnimatedSection, 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedText 
} from '@/components/AnimatedComponents';
import { 
  Monitor, 
  Palette, 
  Code, 
  Laptop, 
  MousePointer, 
  Zap 
} from 'lucide-react';

const categories = [
  {
    title: "Hardware",
    icon: Monitor,
    items: [
      "MacBook Air M2, 24GB",
      "LG 5K2K 34\" UltraWide",
      "Apple Magic Mouse",
      "AirPods Pro"
    ]
  },
  {
    title: "Design",
    icon: Palette,
    items: [
      "Figma, FigJam",
      "Framer",
      "Protopie",
      "Notion"
    ]
  },
  {
    title: "Development",
    icon: Code,
    items: [
      "VS Code, Cursor",
      "Raycast",
      "GitHub",
      "Terminal"
    ]
  }
];

export default function UsesPage() {
  return (
    <div className="py-24">
      <AnimatedSection className="space-y-16">
        <AnimatedText className="text-center space-y-12" delay={0.2}>
          <h1 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tight">
            What I use
          </h1>
          <p className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            Tools, hardware, and software that help me create better experiences
          </p>
        </AnimatedText>
        
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <AnimatedCard 
              key={category.title}
              className="group relative overflow-hidden"
              delay={0.4 + index * 0.1}
            >
              <div className="relative p-10 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-6 right-6 text-6xl font-black text-accent-blue">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors duration-300">
                      <category.icon className="h-6 w-6 text-accent-blue" />
                    </div>
                    <h2 className="text-2xl font-black text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                      {category.title}
                    </h2>
                  </div>
                  
                  {/* Animated line */}
                  <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={item} className="flex items-center gap-3 text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0"></span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedContainer>
      </AnimatedSection>
    </div>
  );
}

