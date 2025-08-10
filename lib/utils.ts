import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to conditionally join class names together
 * @param inputs - Class values to be joined
 * @returns Combined class string
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

