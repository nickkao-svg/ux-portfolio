"use client";
import resume from "@/data/resume.json";

export default function ResumePage() {
  return (
    <div className="py-10">
      <div className="mb-6 flex items-baseline justify-between">
        <div>
          <h1 className="text-3xl font-semibold">{resume.name}</h1>
          <p className="text-neutral-600 dark:text-neutral-300">{resume.title}</p>
        </div>
        <button
          className="no-print rounded-md border px-3 py-1 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
          onClick={() => window.print()}
        >
          Download PDF
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <aside className="md:col-span-4">
          <section className="mb-6">
            <h2 className="mb-2 font-semibold">Contact</h2>
            <p className="text-sm">
              <a className="hover:underline" href={`mailto:${resume.email}`}>{resume.email}</a>
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              {resume.links.map((l) => (
                <li key={l.url}>
                  <a className="hover:underline" href={l.url}>{l.label}</a>
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="mb-2 font-semibold">Skills</h2>
            <ul className="flex flex-wrap gap-2">
              {resume.skills.map((s) => (
                <li key={s} className="rounded-md border px-2 py-0.5 text-xs">{s}</li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="md:col-span-8 space-y-8">
          <section>
            <h2 className="mb-2 text-xl font-semibold">Summary</h2>
            <p className="text-neutral-700 dark:text-neutral-200">{resume.summary}</p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Experience</h2>
            <div className="space-y-6">
              {resume.experience.map((e) => (
                <div key={e.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="font-medium">{e.role} — {e.company}</div>
                    <div className="text-sm text-neutral-500">{e.period}</div>
                  </div>
                  <ul className="mt-2 list-inside list-disc text-neutral-700 dark:text-neutral-200">
                    {e.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">Education</h2>
            <ul className="space-y-1">
              {resume.education.map((ed) => (
                <li key={ed.school} className="text-neutral-700 dark:text-neutral-200">
                  {ed.degree}, {ed.school} — {ed.year}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

