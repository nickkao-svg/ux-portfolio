import Link from 'next/link';
import { Mail, Github, Linkedin, Twitter, Figma } from 'lucide-react';
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
    <ul className="flex items-center gap-4">
      <li className="sr-only">
        <a href={`mailto:${profile.email}`}>Email</a>
      </li>
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <Link 
            aria-label={label} 
            href={href as any} 
            className="hover:text-brand-500"
          >
            <Icon className="h-4 w-4" />
          </Link>
        </li>
      ))}
      <li className="flex items-center gap-1">
        <Mail className="h-4 w-4" />
        <a 
          href={`mailto:${profile.email}`} 
          className="hover:underline"
        >
          {profile.email}
        </a>
      </li>
    </ul>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-neutral-200 py-10 text-sm dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-neutral-500">
          © {currentYear} {profile.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

