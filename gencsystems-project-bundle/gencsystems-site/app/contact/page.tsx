"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }
    if (!formData.details.trim()) {
      newErrors.details = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: value,
    }));
    if (errors.projectType) {
      setErrors((prev) => ({
        ...prev,
        projectType: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setSubmitError("");
        const response = await fetch(
          "https://formspree.io/f/xlgkvjed",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            company: "",
            phone: "",
            projectType: "",
            details: "",
          });
          setSubmitted(false);
        }, 3000);
      } catch {
        setSubmitError("Something went wrong. Please try again or email us directly at info@gencsystems.com.");
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      contact: "info@gencsystems.com",
      subtitle: "Typically respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      contact: "+1 (216) 319-2695",
      subtitle: "Mon-Fri 9am-6pm EST",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      contact: "Book a 30-minute discovery call",
      subtitle: "Find a time that works for you",
      hasButton: true,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      contact: "Cleveland, OH",
      subtitle: "By appointment only",
    },
  ];

  const faqItems = [
    {
      question: "What happens after I submit the form?",
      answer:
        "Our team reviews your inquiry within 24 hours and reaches out to schedule an initial consultation. During this free consultation, we discuss your project scope, timeline, and provide a preliminary estimate.",
    },
    {
      question: "Is the consultation really free?",
      answer:
        "Absolutely. Our initial consultation is completely free with no obligations. We believe in building trust first, which means giving you valuable insights before any commitment.",
    },
    {
      question: "Do you work with businesses outside the US?",
      answer:
        "While our primary focus is serving US businesses, we do work with international clients on select projects. Contact us to discuss your specific needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <AnimatedSection direction="down" delay={0} className="section-gradient">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's start a conversation about
              your technology needs.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="glass rounded-2xl p-8 md:p-10">
              <div className="mb-8 p-4 bg-electric-500/10 border border-electric-500/30 rounded-lg">
                <p className="text-sm text-slate-300">
                  We respect your privacy. Your information will never be shared
                  with third parties.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-electric-500 mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-300">
                    We've received your message and will be in touch within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white">
                      Full Name <span className="text-electric-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="bg-navy-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-electric-500 focus:ring-electric-500/20"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address <span className="text-electric-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-navy-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-electric-500 focus:ring-electric-500/20"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">
                      Company Name <span className="text-electric-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-navy-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-electric-500 focus:ring-electric-500/20"
                    />
                    {errors.company && (
                      <p className="text-sm text-red-400">{errors.company}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number <span className="text-electric-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-navy-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-electric-500 focus:ring-electric-500/20"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-white">
                      Project Type{" "}
                      <span className="text-electric-500">*</span>
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="bg-navy-900 border-slate-700 text-white focus:border-electric-500 focus:ring-electric-500/20">
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy-900 border-slate-700">
                        <SelectItem value="website">
                          Website Development
                        </SelectItem>
                        <SelectItem value="ecommerce">
                          E-Commerce Development
                        </SelectItem>
                        <SelectItem value="ai">AI Automation</SelectItem>
                        <SelectItem value="cybersecurity">
                          Cybersecurity Consulting
                        </SelectItem>
                        <SelectItem value="software">
                          Software Development
                        </SelectItem>
                        <SelectItem value="business">
                          Business Technology Solutions
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p className="text-sm text-red-400">
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="details" className="text-white">
                      Project Details{" "}
                      <span className="text-electric-500">*</span>
                    </Label>
                    <Textarea
                      id="details"
                      name="details"
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={4}
                      value={formData.details}
                      onChange={handleInputChange}
                      className="bg-navy-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-electric-500 focus:ring-electric-500/20 resize-none"
                    />
                    {errors.details && (
                      <p className="text-sm text-red-400">{errors.details}</p>
                    )}
                  </div>

                  {/* Submit Error */}
                  {submitError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-sm text-red-400">{submitError}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-electric-500 to-electric-400 text-navy-950 font-semibold py-3 rounded-lg hover:from-electric-400 hover:to-electric-300 transition-all duration-300 flex items-center justify-center gap-2 glow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Right Column - Contact Info */}
          <AnimatedSection direction="left" delay={0.3}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-8 hover:border-electric-500/50 transition-all duration-300 group glow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-electric-500 to-electric-400">
                          <Icon className="w-6 h-6 text-navy-950" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {info.title}
                        </h3>
                        <p className="text-electric-400 font-medium mb-1">
                          {info.contact}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {info.subtitle}
                        </p>
                        {info.hasButton && (
                          <Button
                            variant="link"
                            className="mt-4 p-0 h-auto text-electric-400 hover:text-electric-300"
                          >
                            Schedule a Call →
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* FAQ Section */}
      <AnimatedSection direction="up" delay={0.4} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-4">
                Common Questions
              </h2>
            </div>

            <div className="glass rounded-2xl p-8">
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-slate-700 data-[state=open]:border-electric-500/50"
                  >
                    <AccordionTrigger className="text-white hover:text-electric-400 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
