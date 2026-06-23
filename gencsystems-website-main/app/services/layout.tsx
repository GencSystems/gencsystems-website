import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive technology services including website development, e-commerce, AI automation, cybersecurity consulting, and custom software development.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
