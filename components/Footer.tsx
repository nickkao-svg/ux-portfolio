'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin, Twitter, Figma } from 'lucide-react';
import { motion } from 'framer-motion';
import profile from '@/data/profile';

const socialLinks = [
  { 
    href: profile.social.github, 
    label: 'GitHub', 
    icon: Github 
  },
  { 
    href: profile.social.linkedin, 
    label: 'LinkedIn', 
    icon: Linkedin 
  },
  { 
    href: profile.social.x, 
    label: 'X', 
    icon: Twitter 
  },
  { 
    href: profile.social.figma, 
    label: 'Figma', 
    icon: Figma 
  }
] as const;

function SocialLinks() {
  return (
    <ul className="flex items-center gap-6">
      <li className="sr-only">
        <a href={`mailto:${profile.email}`}>Email</a>
      </li>
      {socialLinks.map(({ href, label, icon: Icon }, index) => (
        <motion.li 
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.1 
          }}
        >
          <Link 
            aria-label={label} 
            href={href as any} 
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal-100/20 border border-charcoal-200/20 text-text-secondary hover:text-accent-blue hover:bg-charcoal-100/30 transition-all duration-300 hover:scale-105"
          >
            <Icon className="h-5 w-5" />
          </Link>
        </motion.li>
      ))}
      <motion.li 
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.4 
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal-100/20 border border-charcoal-200/20">
          <Mail className="h-5 w-5 text-text-secondary" />
        </div>
        <a 
          href={`mailto:${profile.email}`} 
          className="text-text-secondary hover:text-accent-blue transition-colors font-medium"
        >
          {profile.email}
        </a>
      </motion.li>
    </ul>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="mt-20 border-t border-charcoal-200/10 py-12 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
        <motion.p 
          className="text-text-tertiary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          © {currentYear} {profile.name}. All rights reserved.
        </motion.p>
        <SocialLinks />
      </div>
    </motion.footer>
  );
}

