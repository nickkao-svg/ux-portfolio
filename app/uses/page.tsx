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
    <div className="py-20">
      <AnimatedSection className="space-y-16">
        <AnimatedText className="text-center space-y-4" delay={0.2}>
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary">
            What I use
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tools, hardware, and software that help me create better experiences
          </p>
        </AnimatedText>
        
        <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <AnimatedCard 
              key={category.title}
              className="p-8 space-y-6"
              delay={0.4 + index * 0.1}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10">
                  <category.icon className="h-6 w-6 text-accent-blue" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">
                  {category.title}
                </h2>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </AnimatedContainer>
      </AnimatedSection>
    </div>
  );
}

