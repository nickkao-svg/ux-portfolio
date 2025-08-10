import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { absoluteUrl } from '@/lib/seo';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
  display: 'swap' 
});

export const metadata: Metadata = {
  title: {
    default: 'Avery Lee — Product/UX Designer at OpenAI',
    template: '%s — Avery Lee',
  },
  description:
    'Avery Lee is a product/UX designer focused on AI tooling, safety workflows, and systems. Minimal, modern portfolio.',
  metadataBase: new URL(absoluteUrl('/')),
  openGraph: {
    title: 'Avery Lee — Product/UX Designer',
    description: 'Designing systems that make AI safer, clearer, and more helpful.',
    url: absoluteUrl('/'),
    siteName: 'Avery Lee — UX',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avery Lee — Product/UX Designer',
    description: 'Designing systems that make AI safer, clearer, and more helpful.',
    images: ['/og-default.png'],
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { color: '#ffffff' }, 
    { color: '#0A84FF', media: '(prefers-color-scheme: dark)' }
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <Header />
          <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
