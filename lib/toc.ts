export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractTocFromHeadings(headings: HTMLHeadingElement[]): TocItem[] {
  return headings.map((heading) => ({
    id: heading.id,
    text: heading.textContent ?? '',
    level: Number(heading.tagName.replace('H', '')),
  }));
}

