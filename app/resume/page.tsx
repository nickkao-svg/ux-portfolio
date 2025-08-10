'use client';

import resume from '@/data/resume.json';

function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      className="no-print rounded-md border px-3 py-1 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
      onClick={handlePrint}
    >
      Download PDF
    </button>
  );
}

function ContactSection() {
  return (
    <section className="mb-6">
      <h2 className="mb-2 font-semibold">Contact</h2>
      <p className="text-sm">
        <a className="hover:underline" href={`mailto:${resume.email}`}>
          {resume.email}
        </a>
      </p>
      <ul className="mt-2 space-y-1 text-sm">
        {resume.links.map((link) => (
          <li key={link.url}>
            <a className="hover:underline" href={link.url}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="mb-6">
      <h2 className="mb-2 font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {resume.skills.map((skill) => (
          <li key={skill} className="rounded-md border px-2 py-0.5 text-xs">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Experience</h2>
      <div className="space-y-6">
        {resume.experience.map((experience) => (
          <div key={experience.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="font-medium">
                {experience.role} — {experience.company}
              </div>
              <div className="text-sm text-neutral-500">
                {experience.period}
              </div>
            </div>
            <ul className="mt-2 list-inside list-disc text-neutral-700 dark:text-neutral-200">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Education</h2>
      <ul className="space-y-1">
        {resume.education.map((education) => (
          <li key={education.school} className="text-neutral-700 dark:text-neutral-200">
            {education.degree}, {education.school} — {education.year}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="py-10">
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{resume.name}</h1>
          <p className="text-neutral-600 dark:text-neutral-300">{resume.title}</p>
        </div>
        <PrintButton />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <aside className="md:col-span-4">
          <ContactSection />
          <SkillsSection />
        </aside>

        <div className="md:col-span-8 space-y-8">
          <section>
            <h2 className="mb-2 text-xl font-semibold">Summary</h2>
            <p className="text-neutral-700 dark:text-neutral-200">{resume.summary}</p>
          </section>

          <ExperienceSection />
          <EducationSection />
        </div>
      </div>
    </div>
  );
}

