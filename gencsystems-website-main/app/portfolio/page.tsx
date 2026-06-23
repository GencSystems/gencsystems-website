'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';

const portfolioProjects = [
  {
    id: 1,
    title: 'Premium Florist Website',
    category: 'Website Development',
    description:
      'A mobile-first website for a local florist, built to showcase their arrangements and drive online orders. Features an interactive product catalog, custom bouquet builder, and same-day delivery scheduling integrated with their operations.',
    features: [
      'Custom product catalog with filtering',
      'Online ordering with Stripe payments',
      'Same-day delivery scheduling system',
      'Mobile-optimized experience',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Stripe'],
    gradient: 'from-pink-600 via-pink-400 to-rose-300',
    pattern: '🌸',
  },
  {
    id: 2,
    title: 'Restaurant Website & Online Ordering',
    category: 'Website Development + E-Commerce',
    description:
      'A full-featured website and online ordering system for a local restaurant. Built to reduce reliance on third-party delivery apps by giving the owner a direct customer channel with zero commission fees.',
    features: [
      'Real-time menu management',
      'Online ordering with direct payment',
      'Table reservation system',
      'Order management dashboard',
    ],
    tech: ['React', 'Node.js', 'Square API'],
    gradient: 'from-amber-600 via-amber-400 to-yellow-300',
    pattern: '🍜',
  },
  {
    id: 3,
    title: 'Local Home Services Website',
    category: 'Website Development',
    description:
      'A lead-generating website for a home services company, built to convert local search traffic into booked appointments. Includes an instant quote calculator, service area map, and customer review integration.',
    features: [
      'Instant quote calculator',
      'Service area map integration',
      'Review syndication widget',
      'SEO-optimized local pages',
    ],
    tech: ['Next.js', 'Google Maps API', 'Tailwind CSS'],
    gradient: 'from-blue-600 via-blue-400 to-cyan-300',
    pattern: '🏠',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 section-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Examples of the types of projects we build. Each one is designed to solve a specific business problem — not just look good.
            </p>
            <p className="text-sm text-foreground/50 mt-3 max-w-xl mx-auto">
              These are representative project examples. Contact us to see work specific to your industry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Projects Grid */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                direction="up"
                delay={index * 0.15}
                className="h-full"
              >
                <div className="glass card-shine rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  {/* Image Placeholder with Gradient */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,.02)_10px,rgba(255,255,255,.02)_20px)]" />
                    </div>
                    <span className="text-7xl opacity-25 group-hover:scale-110 transition-transform duration-300">
                      {project.pattern}
                    </span>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs text-white/50 font-mono bg-black/30 px-2 py-1 rounded">
                        Sample project
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-sm text-foreground/65 mb-5 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-5 space-y-2">
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Features Built</p>
                      {project.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-1 rounded text-xs font-medium bg-secondary/50 text-foreground/70 border border-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-base text-foreground/65 mb-8 leading-relaxed max-w-2xl mx-auto">
              Tell us what you're trying to build. We'll let you know if we're a good fit and give you a clear, honest proposal.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-navy-950 font-bold hover:shadow-lg hover:shadow-blue-500/40 px-8"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
