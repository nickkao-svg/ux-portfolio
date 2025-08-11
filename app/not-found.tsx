'use client';

import Link from 'next/link';
import { AnimatedSection, AnimatedText, AnimatedCard } from '@/components/AnimatedComponents';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <AnimatedSection className="text-center space-y-8">
        <AnimatedText className="space-y-4" delay={0.2}>
          <h1 className="text-6xl lg:text-8xl font-bold text-text-primary">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-text-secondary">
            Page not found
          </h2>
          <p className="text-lg text-text-tertiary max-w-md mx-auto">
            The page you're looking for doesn't exist. Try browsing all work.
          </p>
        </AnimatedText>
        
        <AnimatedCard className="inline-block" delay={0.4}>
          <Link 
            href="/work" 
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-charcoal font-semibold rounded-2xl transition-all duration-300 hover:bg-accent-blueDark hover:scale-105 shadow-apple"
          >
            View all work
          </Link>
        </AnimatedCard>
      </AnimatedSection>
    </div>
  );
}

