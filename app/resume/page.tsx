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
        className="group relative inline-flex items-center gap-2 px-4 py-2 border-2 border-charcoal-200 text-text-primary font-bold text-sm tracking-wide transition-all duration-500 hover:border-accent-blue hover:bg-charcoal-50/20 overflow-hidden border-l-4 border-charcoal-200 group-hover:border-l-accent-blue"
        onClick={handlePrint}
      >
        <Download className="h-3 w-3" />
        Download PDF
      </button>
    </AnimatedCard>
  );
}

function ContactSection() {
  return (
    <AnimatedSection className="space-y-8" delay={0.6}>
      <h2 className="text-3xl font-black text-text-primary tracking-tight">Contact</h2>
      <div className="space-y-6">
        <div className="group relative overflow-hidden">
          <div className="relative p-6 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
            <a 
              className="flex items-center gap-3 text-text-secondary hover:text-accent-blue transition-colors duration-300" 
              href={`mailto:${resume.email}`}
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">{resume.email}</span>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          {resume.links.map((link, index) => (
            <div key={link.url} className="group relative overflow-hidden">
              <div className="relative p-6 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
                <a 
                  className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors duration-300 text-sm font-medium"
                  href={link.url}
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function SkillsSection() {
  return (
    <AnimatedSection className="space-y-8" delay={0.8}>
      <h2 className="text-3xl font-black text-text-primary tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {resume.skills.map((skill, index) => (
          <AnimatedCard 
            key={skill} 
            className="group relative overflow-hidden"
            delay={1.0 + index * 0.05}
          >
            <div className="relative px-4 py-2 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
              <span className="text-sm font-bold text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                {skill}
              </span>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

function ExperienceSection() {
  return (
    <AnimatedSection className="space-y-12" delay={1.0}>
      <h2 className="text-3xl font-black text-text-primary tracking-tight">Experience</h2>
      <div className="space-y-12">
        {resume.experience.map((experience, index) => (
          <AnimatedCard 
            key={experience.company} 
            className="group relative overflow-hidden"
            delay={1.2 + index * 0.1}
          >
            <div className="relative p-10 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-6 right-6 text-6xl font-black text-accent-blue">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
              
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                      {experience.role}
                    </h3>
                    <p className="text-xl text-accent-blue font-bold">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-sm text-text-tertiary font-medium uppercase tracking-wider">
                    {experience.period}
                  </div>
                </div>
                
                {/* Animated line */}
                <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                
                <ul className="space-y-3">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={highlight} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0"></span>
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

function EducationSection() {
  return (
    <AnimatedSection className="space-y-8" delay={1.4}>
      <h2 className="text-3xl font-black text-text-primary tracking-tight">Education</h2>
      <div className="space-y-6">
        {resume.education.map((education, index) => (
          <AnimatedCard 
            key={education.school} 
            className="group relative overflow-hidden"
            delay={1.6 + index * 0.1}
          >
            <div className="relative p-8 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
              <div className="relative space-y-4">
                <h3 className="text-xl font-black text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                  {education.degree}
                </h3>
                
                {/* Animated line */}
                <div className="h-0.5 bg-gradient-to-r from-accent-blue to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                
                <p className="text-text-secondary font-medium uppercase tracking-wider">
                  {education.school} • {education.year}
                </p>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function ResumePage() {
  return (
    <div className="py-24">
      <AnimatedSection className="space-y-16">
        <div className="flex items-baseline justify-between">
          <AnimatedText className="space-y-8" delay={0.2}>
            <h1 className="text-5xl lg:text-7xl font-bold text-text-primary tracking-tight">
              {resume.name}
            </h1>
            <p className="text-2xl text-accent-blue font-bold">
              {resume.title}
            </p>
          </AnimatedText>
          <PrintButton />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-16">
            <ContactSection />
            <SkillsSection />
          </aside>

          <div className="lg:col-span-8 space-y-16">
            <AnimatedSection className="space-y-8" delay={0.4}>
              <h2 className="text-3xl font-black text-text-primary tracking-tight">Summary</h2>
              <AnimatedCard className="group relative overflow-hidden">
                <div className="relative p-10 border-l-4 border-charcoal-200 hover:border-accent-blue transition-all duration-500">
                  <p className="text-text-secondary leading-relaxed text-lg font-light">
                    {resume.summary}
                  </p>
                </div>
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

