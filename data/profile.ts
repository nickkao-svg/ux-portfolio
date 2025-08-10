interface SocialLinks {
  github: string;
  linkedin: string;
  x: string;
  figma: string;
}

interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  social: SocialLinks;
  resumeUrl: string;
}

const profile: Profile = {
  name: 'Avery Lee',
  title: 'Product/UX Designer at OpenAI',
  bio: 'I design systems that make AI safer, clearer, and more helpful. My work spans problem framing, flows, and high-fidelity prototyping—always grounded in evidence.',
  location: 'Austin, TX',
  email: 'avery.lee@example.com',
  social: {
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com',
    x: 'https://x.com',
    figma: 'https://www.figma.com',
  },
  resumeUrl: '/Avery_Lee_Resume.pdf',
} as const;

export default profile;

