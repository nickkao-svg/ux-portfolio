/**
 * Creates an absolute URL by combining the base URL with the provided path
 * @param path - The path to append to the base URL
 * @returns The complete absolute URL
 */
export function absoluteUrl(path = ''): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  return new URL(path, baseUrl).toString();
}

