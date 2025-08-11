'use client';

import resume from '@/data/resume.json';
import { 
  AnimatedSection, 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedText 
} from '@/components/AnimatedComponents';
import { Download, Mail, ExternalLink } from 'lucide-react';

function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatedCard className="no-print inline-flex items-center gap-2 px-6 py-3" delay={0.4}>
      <button
        className="flex items-center gap-2 text-text-primary hover:text-accent-blue transition-colors font-medium"
        onClick={handlePrint}
      >
        <Download className="h-4 w-4" />
        Download PDF
      </button>
    </AnimatedCard>
  );
}

function ContactSection() {
  return (
    <AnimatedSection className="space-y-6" delay={0.6}>
      <h2 className="text-2xl font-bold text-text-primary">Contact</h2>
      <div className="space-y-4">
        <a 
          className="flex items-center gap-3 text-text-secondary hover:text-accent-blue transition-colors" 
          href={`mailto:${resume.email}`}
        >
          <Mail className="h-5 w-5" />
          {resume.email}
        </a>
        <div className="space-y-2">
          {resume.links.map((link, index) => (
            <a 
              key={link.url}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors text-sm"
              href={link.url}
            >
              <ExternalLink className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function SkillsSection() {
  return (
    <AnimatedSection className="space-y-6" delay={0.8}>
      <h2 className="text-2xl font-bold text-text-primary">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {resume.skills.map((skill, index) => (
          <AnimatedCard 
            key={skill} 
            className="px-4 py-2 text-sm font-medium"
            delay={1.0 + index * 0.05}
          >
            {skill}
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

function ExperienceSection() {
  return (
    <AnimatedSection className="space-y-8" delay={1.0}>
      <h2 className="text-3xl font-bold text-text-primary">Experience</h2>
      <div className="space-y-8">
        {resume.experience.map((experience, index) => (
          <AnimatedCard 
            key={experience.company} 
            className="p-8 space-y-6"
            delay={1.2 + index * 0.1}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-text-primary">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-accent-blue font-medium">
                    {experience.company}
                  </p>
                </div>
                <div className="text-sm text-text-tertiary font-medium">
                  {experience.period}
                </div>
              </div>
              
              <ul className="space-y-3">
                {experience.highlights.map((highlight, highlightIndex) => (
                  <li key={highlight} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

function EducationSection() {
  return (
    <AnimatedSection className="space-y-6" delay={1.4}>
      <h2 className="text-3xl font-bold text-text-primary">Education</h2>
      <div className="space-y-4">
        {resume.education.map((education, index) => (
          <AnimatedCard 
            key={education.school} 
            className="p-6"
            delay={1.6 + index * 0.1}
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-text-primary">
                {education.degree}
              </h3>
              <p className="text-text-secondary">
                {education.school} • {education.year}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function ResumePage() {
  return (
    <div className="py-20">
      <AnimatedSection className="space-y-16">
        <div className="flex items-baseline justify-between">
          <AnimatedText className="space-y-4" delay={0.2}>
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary">
              {resume.name}
            </h1>
            <p className="text-xl text-accent-blue font-medium">
              {resume.title}
            </p>
          </AnimatedText>
          <PrintButton />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-12">
            <ContactSection />
            <SkillsSection />
          </aside>

          <div className="lg:col-span-8 space-y-12">
            <AnimatedSection className="space-y-6" delay={0.4}>
              <h2 className="text-3xl font-bold text-text-primary">Summary</h2>
              <AnimatedCard className="p-8">
                <p className="text-text-secondary leading-relaxed text-lg">
                  {resume.summary}
                </p>
              </AnimatedCard>
            </AnimatedSection>

            <ExperienceSection />
            <EducationSection />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

