'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import {
  Globe,
  ShoppingCart,
  Bot,
  Shield,
  Code,
  Cpu,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaHref: string;
  index: number;
}

function ServiceCard({
  icon,
  title,
  description,
  benefits,
  ctaText,
  ctaHref,
  index,
}: ServiceCardProps) {
  const isEven = index % 2 === 0;
  const gradientColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-blue-500',
    'from-rose-500 to-pink-500',
  ];

  return (
    <AnimatedSection
      direction={isEven ? 'left' : 'right'}
      delay={0.1}
      className="w-full"
    >
      <div
        className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center py-12`}
      >
        {/* Icon and Description Section */}
        <div className="flex-1 w-full">
          <div className="glass card-shine rounded-xl p-8 h-full">
            {/* Gradient accent bar */}
            <div
              className={`h-1 w-16 bg-gradient-to-r ${gradientColors[index % 6]} rounded-full mb-6`}
            />

            <div className="flex items-start gap-4 mb-6">
              <div className="text-electric-400 flex-shrink-0">{icon}</div>
              <h3 className="text-2xl font-bold gradient-text">{title}</h3>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              {description}
            </p>

            <Link href={ctaHref}>
              <Button className="gap-2 bg-gradient-to-r from-electric-500 to-blue-500 hover:from-electric-400 hover:to-blue-400">
                {ctaText}
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="flex-1 w-full">
          <div className="glass card-shine rounded-xl p-8 h-full">
            <h4 className="text-xl font-semibold mb-6 text-electric-400">
              Key Benefits
            </h4>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ChevronRight className="text-electric-400 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProcessStep({
  number,
  title,
  description,
  index,
}: {
  number: number;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <AnimatedSection
      direction={index % 2 === 0 ? 'left' : 'right'}
      delay={index * 0.15}
      className="relative flex-1"
    >
      <div className="glass card-shine rounded-xl p-8 text-center h-full flex flex-col justify-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-electric-500 to-blue-500 text-white font-bold text-xl mx-auto mb-4">
          {number}
        </div>
        <h4 className="text-xl font-semibold mb-3 text-electric-400">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      {/* Connector arrow - only show for first 3 steps */}
      {index < 3 && (
        <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
          <ArrowRight className="text-electric-400" size={32} />
        </div>
      )}
    </AnimatedSection>
  );
}

export default function ServicesPage() {
  const services: ServiceCardProps[] = [
    {
      icon: <Globe size={40} />,
      title: 'Website Development',
      description:
        'We build professional, responsive websites that do more than look great — they convert visitors into loyal customers. Every site is engineered for speed, SEO performance, and seamless user experience across all devices.',
      benefits: [
        'Custom responsive design',
        'SEO optimization',
        'Fast load times',
        'CMS integration',
        'Analytics setup',
      ],
      ctaText: 'Start Your Website Project',
      ctaHref: '/contact',
      index: 0,
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-Commerce Development',
      description:
        'Launch online stores that drive revenue. Our e-commerce solutions combine beautiful product showcases with secure payment processing and intuitive shopping experiences that keep customers coming back.',
      benefits: [
        'Secure payment processing',
        'Inventory management',
        'Mobile-optimized shopping',
        'Cart abandonment recovery',
        'Multi-channel selling',
      ],
      ctaText: 'Build Your Online Store',
      ctaHref: '/contact',
      index: 1,
    },
    {
      icon: <Bot size={40} />,
      title: 'AI Automation',
      description:
        'Harness the power of artificial intelligence to automate repetitive tasks, generate insights from your data, and create intelligent workflows that save time and reduce errors across your organization.',
      benefits: [
        'Process automation',
        'Intelligent chatbots',
        'Data-driven insights',
        'Workflow optimization',
        'Predictive analytics',
      ],
      ctaText: 'Explore AI Solutions',
      ctaHref: '/contact',
      index: 2,
    },
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity Consulting',
      description:
        'Protect your business from evolving digital threats with our comprehensive cybersecurity services. We assess vulnerabilities, implement robust defenses, and ensure compliance with industry standards.',
      benefits: [
        'Vulnerability assessments',
        'Threat monitoring',
        'Compliance support',
        'Incident response',
        'Security training',
      ],
      ctaText: 'Secure Your Business',
      ctaHref: '/contact',
      index: 3,
    },
    {
      icon: <Code size={40} />,
      title: 'Software Development',
      description:
        'From internal tools to customer-facing platforms, we develop custom software solutions that address your unique business challenges and scale with your growth.',
      benefits: [
        'Custom architecture',
        'API development',
        'Cloud deployment',
        'Scalable solutions',
        'Ongoing maintenance',
      ],
      ctaText: 'Discuss Your Project',
      ctaHref: '/contact',
      index: 4,
    },
    {
      icon: <Cpu size={40} />,
      title: 'Business Technology Solutions',
      description:
        'Align your technology strategy with your business objectives. We provide comprehensive consulting and implementation services that streamline operations and drive measurable results.',
      benefits: [
        'Technology strategy',
        'Digital transformation',
        'System integration',
        'Process optimization',
        'Vendor management',
      ],
      ctaText: 'Transform Your Operations',
      ctaHref: '/contact',
      index: 5,
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery',
      description:
        'We understand your business, goals, and challenges through detailed consultation and research.',
    },
    {
      number: 2,
      title: 'Strategy',
      description:
        'We develop a comprehensive roadmap and proposal tailored to your specific requirements.',
    },
    {
      number: 3,
      title: 'Development',
      description:
        'Our expert team builds and implements your solution with continuous communication and quality assurance.',
    },
    {
      number: 4,
      title: 'Launch & Support',
      description:
        'We deploy your solution and provide ongoing support, maintenance, and optimization.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900">
      {/* Hero Section */}
      <section className="section-gradient pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <AnimatedSection direction="up" delay={0} className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-electric-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={16} />
              <span className="text-electric-400">Services</span>
            </div>
          </AnimatedSection>

          {/* Hero Content */}
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service) => (
            <ServiceCard key={service.index} {...service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" delay={0} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-300">
              A proven process that delivers results
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="scale" delay={0.1}>
          <div className="max-w-4xl mx-auto glass card-shine rounded-2xl p-12 sm:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project requirements
              and discover how we can help your business grow.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-electric-500 to-blue-500 hover:from-electric-400 hover:to-blue-400 text-white font-semibold">
                Schedule Free Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
