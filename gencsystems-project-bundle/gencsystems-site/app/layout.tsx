import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gencsystems.com'),
  title: {
    default: 'Genc Systems | Technology Solutions That Help Businesses Grow',
    template: '%s | Genc Systems',
  },
  description:
    'Custom websites, software, AI automation, and cybersecurity services built for modern businesses. Genc Systems delivers technology solutions that drive growth.',
  keywords: [
    'website development',
    'software development',
    'AI automation',
    'cybersecurity',
    'e-commerce development',
    'business technology solutions',
    'custom software',
    'web development company',
  ],
  authors: [{ name: 'Genc Systems' }],
  creator: 'Genc Systems',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gencsystems.com',
    siteName: 'Genc Systems',
    title: 'Genc Systems | Technology Solutions That Help Businesses Grow',
    description:
      'Custom websites, software, AI automation, and cybersecurity services built for modern businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genc Systems | Technology Solutions That Help Businesses Grow',
    description:
      'Custom websites, software, AI automation, and cybersecurity services built for modern businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
