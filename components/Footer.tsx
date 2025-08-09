import Link from "next/link";
import { Mail, Github, Linkedin, Twitter, Figma } from "lucide-react";
import profile from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 py-10 text-sm dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-neutral-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li className="sr-only"><a href={`mailto:${profile.email}`}>Email</a></li>
          <li><Link aria-label="GitHub" href={profile.social.github} className="hover:text-brand-500"><Github className="h-4 w-4" /></Link></li>
          <li><Link aria-label="LinkedIn" href={profile.social.linkedin} className="hover:text-brand-500"><Linkedin className="h-4 w-4" /></Link></li>
          <li><Link aria-label="X" href={profile.social.x} className="hover:text-brand-500"><Twitter className="h-4 w-4" /></Link></li>
          <li><Link aria-label="Figma" href={profile.social.figma} className="hover:text-brand-500"><Figma className="h-4 w-4" /></Link></li>
          <li className="flex items-center gap-1"><Mail className="h-4 w-4" /><a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a></li>
        </ul>
      </div>
    </footer>
  );
}

