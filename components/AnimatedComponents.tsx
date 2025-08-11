'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

// Animated section wrapper
export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.section
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={prefersReducedMotion ? {} : fadeInUp}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay 
      }}
    >
      {children}
    </motion.section>
  );
}

// Animated container for staggered children
export function AnimatedContainer({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? {} : staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

// Animated card component
export function AnimatedCard({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className={`glass magnetic-hover ${className}`}
      variants={prefersReducedMotion ? {} : scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay 
      }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}

// Animated text component
export function AnimatedText({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={prefersReducedMotion ? {} : slideInLeft}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated image component
export function AnimatedImage({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={prefersReducedMotion ? {} : slideInRight}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}

// Page transition wrapper
export function PageTransition({ 
  children 
}: { 
  children: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      animate={prefersReducedMotion ? {} : { opacity: 1 }}
      exit={prefersReducedMotion ? {} : { opacity: 0 }}
      transition={{ 
        duration: 0.3, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {children}
    </motion.div>
  );
} 