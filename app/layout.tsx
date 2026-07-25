import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, IBM_Plex_Sans } from 'next/font/google';
import { author, siteUrl } from '@/lib/site';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const description =
  'Gregory Li — Computer Science student at UCLA. Full-stack, security, game dev, and AI research projects.';

export const metadata: Metadata = {
  // metadataBase makes the relative URLs below resolve to absolute ones,
  // which OpenGraph and Twitter cards require.
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gregory Li — CS @ UCLA',
    template: '%s · Gregory Li',
  },
  description,
  applicationName: 'Gregory Li — Portfolio',
  authors: [{ name: author.name, url: siteUrl }],
  creator: author.name,
  keywords: [
    'Gregory Li',
    'UCLA',
    'computer science',
    'software engineer',
    'full-stack',
    'cybersecurity',
    'game development',
    'AI research',
    'neurosymbolic',
    'internship',
  ],
  // These are spelled out absolutely rather than as '/'-relative paths:
  // metadataBase resolution drops the deploy subpath (new URL('/x', '…/portfolio')
  // is '…/x'), which silently produces wrong share URLs on GitHub Pages.
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/`,
    siteName: 'Gregory Li',
    title: 'Gregory Li — CS @ UCLA',
    description,
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Gregory Li — B.S. Computer Science, UCLA, Class of 2029',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gregory Li — CS @ UCLA',
    description,
    images: [`${siteUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: '#0D0F12',
  colorScheme: 'dark',
};

// Structured data so search engines can connect the name, school, and
// profile links rather than guessing from page text.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: author.name,
  url: siteUrl,
  email: `mailto:${author.email}`,
  jobTitle: 'Computer Science Student',
  description: author.tagline,
  alumniOf: { '@type': 'CollegeOrUniversity', name: author.school },
  sameAs: [author.linkedin, author.github],
  knowsAbout: [
    'Full-stack web development',
    'Cybersecurity',
    'Game development',
    'Neurosymbolic AI',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body className="font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:border focus:border-fullstack focus:bg-surface focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
