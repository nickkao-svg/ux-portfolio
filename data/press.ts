interface PressItem {
  title: string;
  outlet: string;
  year: number;
  link: string;
}

export const press: readonly PressItem[] = [
  {
    title: 'Designing with AI: Systems over screens',
    outlet: 'Config Community',
    year: 2024,
    link: 'https://example.com/talk',
  },
  {
    title: 'Operationalizing UX metrics in AI tooling',
    outlet: 'UX Matters Podcast',
    year: 2023,
    link: 'https://example.com/podcast',
  },
] as const;

