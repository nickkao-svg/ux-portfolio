'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AnimatedSection, AnimatedText, AnimatedCard } from '@/components/AnimatedComponents';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <AnimatedSection className="text-center space-y-8">
        <AnimatedText className="space-y-4" delay={0.2}>
          <h1 className="text-6xl lg:text-8xl font-bold text-text-primary">
            Oops!
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-text-secondary">
            Something went wrong
          </h2>
          <p className="text-lg text-text-tertiary max-w-md mx-auto">
            We encountered an unexpected error. Please try again or contact us if the problem persists.
          </p>
        </AnimatedText>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedCard className="inline-block" delay={0.4}>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-charcoal font-semibold rounded-2xl transition-all duration-300 hover:bg-accent-blueDark hover:scale-105 shadow-apple"
            >
              Try again
            </button>
          </AnimatedCard>
          
          <AnimatedCard className="inline-block" delay={0.6}>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-8 py-4 border border-charcoal-200/30 text-text-primary font-semibold rounded-2xl transition-all duration-300 hover:bg-charcoal-100/20 hover:scale-105 glass"
            >
              Go home
            </Link>
          </AnimatedCard>
        </div>
      </AnimatedSection>
    </div>
  );
} 