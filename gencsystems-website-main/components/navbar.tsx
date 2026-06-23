"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Sticky Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/5"
            : "bg-navy-950/40 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "py-2" : "py-3"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/TesseractGENC-removebg-preview.webp"
                alt="Genc Systems"
                width={120}
                height={48}
                className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-gray-300 text-sm font-medium transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-navy-950 font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 gap-2"
              >
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={24} className="text-blue-400" />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-navy-950/60 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
            style={{
              animation: "fadeIn 0.3s ease-out",
            }}
          />

          {/* Mobile Menu Content */}
          <div
            className="fixed top-16 left-0 right-0 bg-navy-950/95 backdrop-blur-xl border-b border-white/5 z-40 md:hidden"
            style={{
              animation: "slideDown 0.3s ease-out",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 text-sm font-medium group relative"
                    style={{
                      animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}

                {/* Mobile CTA Button */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-navy-950 font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 gap-2"
                    onClick={closeMenu}
                  >
                    <Link href="/contact">
                      Get a Free Consultation
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
