'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  Handshake,
  ShieldCheck,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-navy-950">
      {/* Hero Section */}
      <section className="section-gradient min-h-[60vh] flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-electric-500 to-blue-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-electric-400 rounded-full mix-blend-screen opacity-15 blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" delay={0}>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
              <span className="gradient-text">About Genc Systems</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-navy-200 text-center max-w-3xl mx-auto">
              We're on a mission to help businesses grow through innovative technology solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Story</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="glass glass-strong p-8 md:p-12 rounded-2xl border border-electric-500/20">
                <p className="text-lg text-navy-200 leading-relaxed">
                  Genc Industries was founded by Ege Genc with a vision of building innovative technology solutions that help businesses grow. What started as a passion for software development, robotics, cybersecurity, and engineering evolved into a company focused on creating modern websites, digital solutions, and future technology projects. Genc Industries believes in combining innovation, quality, and long-term thinking to deliver professional results for every client. Our mission is to help businesses establish a strong digital presence while continuously expanding into new areas of technology and engineering.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-gradient py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Mission & Vision</span>
              </h2>
              <p className="text-xl text-navy-300 max-w-2xl mx-auto">
                The driving force behind everything we do.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="glass glass-strong p-8 rounded-lg border border-l-4 border-electric-400/40 hover:border-electric-400/60 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-navy-200 leading-relaxed text-lg">
                    To empower businesses with accessible, innovative technology solutions that drive measurable growth and create lasting competitive advantages in an increasingly digital world.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="glass glass-strong p-8 rounded-lg border border-l-4 border-blue-400/40 hover:border-blue-400/60 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-navy-200 leading-relaxed text-lg">
                    A future where every business, regardless of size, has the technology infrastructure to compete and thrive in the global digital economy.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-32 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Our Core Values</span>
              </h2>
              <p className="text-xl text-navy-300 max-w-2xl mx-auto">
                The principles that guide our decisions and shape our culture.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="glass glass-strong p-8 rounded-lg border border-electric-500/20 hover:border-electric-400/40 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-electric-500/20">
                <div className="w-14 h-14 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-navy-300">
                  We continuously explore emerging technologies and creative approaches to solve complex business challenges.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="glass glass-strong p-8 rounded-lg border border-electric-500/20 hover:border-electric-400/40 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-electric-500/20">
                <div className="w-14 h-14 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-navy-300">
                  We hold ourselves to the highest standards in every line of code, every design decision, and every client interaction.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="glass glass-strong p-8 rounded-lg border border-electric-500/20 hover:border-electric-400/40 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-electric-500/20">
                <div className="w-14 h-14 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Partnership</h3>
                <p className="text-navy-300">
                  We build lasting relationships with our clients, treating their success as our own and their challenges as our mission.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="glass glass-strong p-8 rounded-lg border border-electric-500/20 hover:border-electric-400/40 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-electric-500/20">
                <div className="w-14 h-14 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-navy-300">
                  We operate with transparency and honesty, providing realistic expectations and delivering on every promise we make.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Commitment to Innovation Section */}
      <section className="section-gradient py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="glass glass-strong p-8 rounded-lg border border-electric-500/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text">Our Commitment to Innovation</span>
                </h2>
                <p className="text-navy-200 leading-relaxed text-lg mb-6">
                  Innovation isn't just a buzzword at Genc Systems — it's the foundation of everything we do. We invest continuously in research and development, staying at the forefront of AI, cybersecurity, cloud computing, and web technology advancements. This commitment ensures our clients always receive solutions built on the most effective and reliable technologies available.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-electric-400 font-bold">✓</span>
                    <span className="text-navy-200">Continuous R&D investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-electric-400 font-bold">✓</span>
                    <span className="text-navy-200">Emerging technology adoption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-electric-400 font-bold">✓</span>
                    <span className="text-navy-200">Industry best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-electric-400 font-bold">✓</span>
                    <span className="text-navy-200">Thought leadership</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="glass glass-strong p-8 rounded-lg border border-electric-500/20">
                <div className="space-y-8">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Continuous Learning</h4>
                    <p className="text-navy-300">
                      We stay ahead of industry trends and emerging technologies.
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Proven Solutions</h4>
                    <p className="text-navy-300">
                      We test and implement technologies only after thorough evaluation.
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Client Success</h4>
                    <p className="text-navy-300">
                      Every innovation we adopt is chosen with your success in mind.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Let's Build Something Great Together</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl text-navy-300 mb-10 max-w-2xl mx-auto">
              Ready to see how Genc Systems can transform your business?
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-navy-950 font-semibold px-8 py-6 text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="glass border-electric-400 text-electric-300 hover:bg-navy-800 px-8 py-6 text-lg">
                  View Our Work →
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
