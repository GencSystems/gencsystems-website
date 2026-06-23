'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-slate-100 overflow-hidden">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600"></div>

      {/* Main footer content */}
      <div className="relative backdrop-blur-3xl bg-gradient-to-b from-slate-900/40 to-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Column */}
            <div className="space-y-4">
              <div className="inline-block">
                <Image
                  src="/TesseractGENC-removebg-preview.webp"
                  alt="Genc Systems"
                  width={140}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transforming businesses through innovative technology solutions and digital excellence.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#services"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Cybersecurity Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Software Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Mail size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@gencsystems.com"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    info@gencsystems.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+12163192695"
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    +1 (216) 319-2695
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <address className="text-slate-400 text-sm not-italic">
                    Cleveland, OH
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs sm:text-sm">
              &copy; {currentYear} Genc Systems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-500 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
