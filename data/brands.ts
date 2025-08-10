interface Brand {
  name: string;
  logo: string;
  alt: string;
}

export const brands: readonly Brand[] = [
  {
    name: 'OpenAI',
    logo: '/images/brands/openai.svg',
    alt: 'OpenAI logo'
  },
  {
    name: 'Microsoft',
    logo: '/images/brands/microsoft.svg',
    alt: 'Microsoft logo'
  },
  {
    name: 'Google',
    logo: '/images/brands/google.svg',
    alt: 'Google logo'
  },
  {
    name: 'Meta',
    logo: '/images/brands/meta.svg',
    alt: 'Meta logo'
  },
  {
    name: 'Apple',
    logo: '/images/brands/apple.svg',
    alt: 'Apple logo'
  },
  {
    name: 'Stripe',
    logo: '/images/brands/stripe.svg',
    alt: 'Stripe logo'
  },
  {
    name: 'Figma',
    logo: '/images/brands/figma.svg',
    alt: 'Figma logo'
  },
  {
    name: 'Notion',
    logo: '/images/brands/notion.svg',
    alt: 'Notion logo'
  }
] as const;