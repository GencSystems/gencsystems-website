'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { AnimatedSection } from '@/components/animated-section';
import {
  Layers,
  Trophy,
  Zap,
  HeadphonesIcon,
  Globe,
  ShoppingCart,
  Bot,
  Shield,
  Code,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Star,
  ExternalLink,
  MessageSquare,
  Search,
  Rocket,
} from 'lucide-react';

const faqItems = [
  {
    q: 'How long does it take to build a website?',
    a: 'Most websites are completed in 3–6 weeks. Simple informational sites can be done in 2 weeks; more complex e-commerce or custom platforms take 6–10 weeks. We give you a detailed timeline before any work begins.',
  },
  {
    q: 'How much does a typical project cost?',
    a: 'Pricing depends on scope. A professional website starts around $2,500–$5,000. E-commerce platforms and custom software vary. We always provide a clear, itemized quote upfront — no hidden costs.',
  },
  {
    q: 'Do I need to be technical to work with you?',
    a: "Not at all. We handle everything technical and explain decisions in plain language. Many of our clients have no tech background — that's exactly why they work with us.",
  },
  {
    q: 'Do you offer ongoing support after the project is done?',
    a: 'Yes. We offer monthly support and maintenance packages covering updates, security patches, backups, and priority assistance. You can also reach us on an as-needed basis.',
  },
  {
    q: 'What makes you different from other web agencies?',
    a: "We focus exclusively on small and medium-sized businesses. We don't overpromise or oversell. Every recommendation is based on what will actually help your business, not on upselling the most expensive solution.",
  },
];

export default function Home() {
  return (
    <main className="bg-navy-950">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-electric-500 to-blue-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-electric-400 rounded-full mix-blend-screen opacity-15 blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 glass border border-blue-400/30 rounded-full px-4 py-2 text-sm text-blue-300 font-medium mx-auto mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Serving Small & Medium Businesses Across the United States
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 leading-tight">
              <span className="gradient-text">Technology Solutions</span>
              <br />
              That Help Businesses Grow
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-300 text-center mb-4 max-w-3xl mx-auto">
              We build websites, software, AI automation tools, and cybersecurity systems — so you can focus on running your business.
            </p>
            <p className="text-base text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              No jargon, no guesswork. Clear technology solutions tailored to your goals and budget.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-navy-950 font-bold px-8 py-6 text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 gap-2">
                  Get a Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="glass border-blue-400/50 text-blue-300 hover:bg-navy-800 px-8 py-6 text-lg">
                  See What We Offer
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              {['No contracts required', 'Free initial consultation', 'US-based team', 'Transparent pricing'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do — Clarity Section */}
      <section className="py-20 bg-navy-900/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who We Help & What We Do
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Genc Systems partners with small and medium-sized businesses that need reliable, modern technology but don't have an in-house tech team.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="glass rounded-xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-5">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">You need an online presence</h3>
                <p className="text-slate-400 leading-relaxed text-sm">From a simple professional site to a full e-commerce platform, we build sites that represent your brand and convert visitors into customers.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.15}>
              <div className="glass rounded-xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center mb-5">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">You want to work smarter</h3>
                <p className="text-slate-400 leading-relaxed text-sm">We implement AI tools and automation workflows that handle repetitive tasks — so your team spends time on what actually matters.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="glass rounded-xl p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-blue-400/15 border border-blue-300/20 flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">You need to protect your business</h3>
                <p className="text-slate-400 leading-relaxed text-sm">Our cybersecurity consulting identifies vulnerabilities and puts the right defenses in place before problems become costly incidents.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">How to Get Started</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Three simple steps from first conversation to live solution.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="glass rounded-xl p-8 border border-white/5 text-center hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="text-5xl font-bold gradient-text opacity-20 mb-4 leading-none">01</div>
                <div className="w-12 h-12 rounded-full bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-4 mx-auto">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Free Consultation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Tell us about your business and goals. We listen and explain what technology can realistically do for you — honestly.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.15}>
              <div className="glass rounded-xl p-8 border border-white/5 text-center hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="text-5xl font-bold gradient-text opacity-20 mb-4 leading-none">02</div>
                <div className="w-12 h-12 rounded-full bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center mb-4 mx-auto">
                  <Search className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Custom Proposal</h3>
                <p className="text-slate-400 text-sm leading-relaxed">You receive a clear, itemized proposal with timeline, deliverables, and pricing — no vague estimates or hidden fees.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="glass rounded-xl p-8 border border-white/5 text-center hover:border-blue-500/30 transition-all duration-300 h-full">
                <div className="text-5xl font-bold gradient-text opacity-20 mb-4 leading-none">03</div>
                <div className="w-12 h-12 rounded-full bg-blue-400/15 border border-blue-300/20 flex items-center justify-center mb-4 mx-auto">
                  <Rocket className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Build & Launch</h3>
                <p className="text-slate-400 text-sm leading-relaxed">We execute with regular updates and your input at every milestone, then provide post-launch support.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="text-center mt-10">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-navy-950 font-bold px-8 py-5 text-base hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 gap-2">
                  Book Your Free Consultation
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Genc Systems */}
      <section id="why-us" className="section-gradient py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Why Businesses Choose Us</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We are not an agency that disappears after delivery. We are a technology partner that grows with you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="glass glass-strong p-8 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">One team for everything</h3>
                <p className="text-slate-400 leading-relaxed">Design, development, security, and AI — all under one roof. No need to coordinate between multiple vendors.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="glass glass-strong p-8 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">SMB-focused expertise</h3>
                <p className="text-slate-400 leading-relaxed">We specialize in small and medium-sized businesses. We understand your constraints and build solutions that fit your budget and scale with your growth.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="glass glass-strong p-8 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Practical, not theoretical</h3>
                <p className="text-slate-400 leading-relaxed">We recommend technology that solves your actual problems today — not trend-driven tools that add complexity without value.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="glass glass-strong p-8 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5">
                  <HeadphonesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support after launch</h3>
                <p className="text-slate-400 leading-relaxed">When you go live, we don't disappear. We provide ongoing maintenance, updates, and priority support so your systems stay reliable.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Our Services</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every service is scoped to your business — not a template package.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="glass group p-7 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Website Development</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed flex-grow">Fast, mobile-first websites engineered for performance, SEO, and conversions. We build sites that bring in real business.</p>
                <p className="text-xs text-blue-400/70 italic mb-4">Ideal for: service businesses, restaurants, retail, professionals</p>
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="glass group p-7 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">E-Commerce Development</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed flex-grow">Full-featured online stores with secure checkout, inventory management, and mobile-optimized shopping experiences.</p>
                <p className="text-xs text-blue-400/70 italic mb-4">Ideal for: retail brands, product companies, boutiques</p>
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="glass group p-7 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">AI Automation</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed flex-grow">We identify repetitive tasks consuming your team's time and build intelligent workflows that handle them automatically.</p>
                <p className="text-xs text-blue-400/70 italic mb-4">Ideal for: operations, customer service, data entry, reporting</p>
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="glass group p-7 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Cybersecurity Consulting</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed flex-grow">Vulnerability assessments, threat monitoring, staff training, and compliance guidance to protect your business.</p>
                <p className="text-xs text-blue-400/70 italic mb-4">Ideal for: healthcare, finance, legal, data-sensitive businesses</p>
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <div className="glass group p-7 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Custom Software</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed flex-grow">When off-the-shelf tools don't fit, we build exactly what you need — dashboards, portals, booking systems, or custom platforms.</p>
                <p className="text-xs text-blue-400/70 italic mb-4">Ideal for: unique workflows, multi-location businesses, integrations</p>
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
              <div className="glass group p-7 rounded-xl border border-blue-500/15 hover:border-blue-400/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/15 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Technology Consulting</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed flex-grow">Not sure what you need? We assess your current setup, identify gaps, and give you a prioritized roadmap with honest recommendations.</p>
                <p className="text-xs text-blue-400/70 italic mb-4">Ideal for: businesses starting their digital transformation</p>
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center mt-10">
              <Link href="/services">
                <Button variant="outline" className="glass border-blue-400/50 text-blue-300 hover:bg-navy-800 px-8 py-5 text-base gap-2">
                  View All Services in Detail
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Review — Mixora (Real) */}
      <section className="py-20 md:py-28 bg-navy-900/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="gradient-text">What Our Clients Say</span>
              </h2>
              <p className="text-slate-400">Real feedback from real clients.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="scale" delay={0.1}>
            <div className="glass glass-strong rounded-2xl p-8 md:p-12 border border-blue-400/20 max-w-3xl mx-auto relative">
              <div className="absolute top-6 left-8 text-7xl text-blue-500/10 font-serif leading-none select-none">"</div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 relative z-10">
                "Genc Systems built our platform exactly the way we envisioned it. The team was professional, communicative, and delivered on every promise. Our users noticed the difference immediately — the performance and design are excellent. We would not hesitate to work with them again."
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-white text-sm">M</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Mixora Team</p>
                  <a
                    href="https://mixora.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center gap-1 w-fit"
                  >
                    mixora.org
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-center text-slate-500 text-sm mt-8">
              Want to be our next success story?{' '}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Let's talk
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-navy-950 to-navy-950" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection direction="up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="gradient-text">Ready to Get Started?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <p className="text-xl text-slate-300 mb-3 max-w-2xl mx-auto">
              Book a free 30-minute call. We'll learn about your business, answer your questions, and tell you honestly what technology can do for you.
            </p>
            <p className="text-slate-500 mb-10 text-sm">No sales pitch. No obligation. Just a real conversation.</p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-navy-950 font-bold px-10 py-6 text-lg hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 gap-2">
                  Get a Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="tel:+12163192695">
                <Button variant="outline" className="glass border-blue-400/40 text-blue-300 hover:bg-navy-800 px-8 py-6 text-base">
                  Call: +1 (216) 319-2695
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-navy-900/40 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Frequently Asked Questions</span>
              </h2>
              <p className="text-slate-400">Plain answers to common questions.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="glass border border-blue-500/15 rounded-xl overflow-hidden">
                  <AccordionTrigger className="hover:text-blue-400 px-6 py-5 text-base font-semibold text-left text-white [&>svg]:text-blue-400">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
