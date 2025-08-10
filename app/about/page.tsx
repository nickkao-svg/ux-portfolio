import Image from 'next/image';
import profile from '@/data/profile';
import { press } from '@/data/press';

export const metadata = { title: 'About' };

const principles = [
  'Clarity over cleverness',
  'Evidence beats ego',
  'Design the system, not just the screen',
  'Accessibility is non-negotiable'
] as const;

function ProfileImage() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
      <Image 
        src="/images/headshot.svg" 
        alt="Portrait of Avery Lee" 
        fill 
        className="object-cover" 
      />
    </div>
  );
}

function PrinciplesSection() {
  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">Principles</h2>
      <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-200">
        {principles.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ul>
    </section>
  );
}

function PressSection() {
  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold">Talks & press</h2>
      <ul className="space-y-2">
        {press.map((item) => (
          <li key={item.title} className="text-neutral-600 dark:text-neutral-300">
            <a className="hover:underline" href={item.link}>
              {item.title}
            </a>{' '}
            — {item.outlet} ({item.year})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <ProfileImage />
        </div>
        <div className="space-y-6 md:col-span-8">
          <h1 className="text-3xl font-semibold">
            About {profile.name}
          </h1>
          <p className="max-w-prose text-neutral-700 dark:text-neutral-200">
            I'm a product/UX designer focused on AI tooling and safety workflows. I care deeply about clarity over cleverness, evidence over opinion, and crafting systems that scale.
          </p>
          <PrinciplesSection />
          <PressSection />
        </div>
      </div>
    </div>
  );
}

