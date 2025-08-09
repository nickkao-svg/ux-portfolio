export function absoluteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return new URL(path, base).toString();
}

