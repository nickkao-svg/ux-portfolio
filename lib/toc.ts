export type TocItem = { id: string; text: string; level: number };

export function extractTocFromHeadings(headings: HTMLHeadingElement[]): TocItem[] {
  return headings.map((h) => ({
    id: h.id,
    text: h.textContent || "",
    level: Number(h.tagName.replace("H", "")),
  }));
}

