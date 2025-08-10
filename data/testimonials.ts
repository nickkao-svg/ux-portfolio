interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote: 'Avery has an exceptional ability to translate complex AI concepts into intuitive user experiences. Their work on our support tooling directly improved agent efficiency and customer satisfaction.',
    author: 'Sarah Chen',
    role: 'VP of Customer Success',
    company: 'OpenAI'
  },
  {
    quote: 'Working with Avery was transformative for our team. They brought rigorous research methods and a systems-thinking approach that elevated our entire design practice.',
    author: 'Marcus Rodriguez',
    role: 'Head of Product',
    company: 'Acme Systems'
  },
  {
    quote: 'Avery\'s designs consistently balance user needs with technical constraints. Their prototypes communicate ideas clearly and their attention to accessibility sets the standard for our team.',
    author: 'Dr. Elena Vasquez',
    role: 'Senior Engineering Manager',
    company: 'OpenAI'
  }
] as const;