"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Check, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 sm:pt-40 pb-20 sm:pb-24">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" alt="Spa interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-primary-dark/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary-light text-sm tracking-widest uppercase mb-4">Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-7xl text-white mb-5">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
            Ready for your transformation? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact info */}
            <div>
              <AnimatedSection className="h-auto">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark section-title-underline mb-8 sm:mb-10">
                  We&apos;re Here for You
                </h2>
              </AnimatedSection>

              <div className="flex flex-col gap-4 mb-8 sm:mb-10">
                {[
                  { icon: MapPin, label: "Studio Location", primary: "10614 Providence Rd, Room #10", secondary: "Charlotte, NC 28277", href: "https://maps.google.com/?q=10614+Providence+Rd+Room+10+Charlotte+NC+28277" },
                  { icon: Phone, label: "Phone", primary: "(704) 949-9962", secondary: "Call or text anytime", href: "tel:7049499962" },
                  { icon: Mail, label: "Email", primary: "rozab0909@gmail.com", secondary: "We reply within 24 hours", href: "mailto:rozab0909@gmail.com" },
                  { icon: Clock, label: "Hours", primary: "Mon\u2013Fri 9AM\u20135:30PM", secondary: "Saturday 8AM\u20131PM  \u2022  Sunday Closed" },
                ].map((item, i) => (
                  <AnimatedSection key={item.label} delay={i * 0.08} className="h-auto">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 p-4 sm:p-5 bg-gray-100 rounded-xl hover:shadow-md transition-all group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-gradient-pink flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(196,120,139,0.25)] group-hover:scale-110 transition-transform">
                          <item.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-primary tracking-widest uppercase mb-0.5">{item.label}</p>
                          <p className="text-dark font-semibold text-base">{item.primary}</p>
                          <p className="text-text-light text-sm">{item.secondary}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 sm:p-5 bg-gray-100 rounded-xl">
                        <div className="w-11 h-11 rounded-xl bg-gradient-pink flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(196,120,139,0.25)]">
                          <item.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-primary tracking-widest uppercase mb-0.5">{item.label}</p>
                          <p className="text-dark font-semibold text-base">{item.primary}</p>
                          <p className="text-text-light text-sm">{item.secondary}</p>
                        </div>
                      </div>
                    )}
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.4} className="h-auto">
                <a
                  href="https://rozamassage.glossgenius.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-pink text-white px-8 py-4 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)] w-full justify-center sm:w-auto"
                >
                  Book Online Instantly <ArrowRight size={16} />
                </a>
              </AnimatedSection>
            </div>

            {/* Form */}
            <AnimatedSection delay={0.2} className="h-auto">
              <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 border border-primary/10">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-dark mb-2">Send a Message</h3>
                <p className="text-text-light text-sm mb-6 sm:mb-8">Questions about treatments? We&apos;ll get back to you soon.</p>

                {submitted ? (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-14 sm:py-16">
                    <div className="w-14 h-14 rounded-full bg-gradient-pink flex items-center justify-center mx-auto mb-5">
                      <Check className="text-white" size={24} />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-dark mb-2">Message Sent!</h3>
                    <p className="text-text-light text-sm">Thank you! We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="text-xs font-semibold text-text-dark mb-1.5 block">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your name" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-text-dark mb-1.5 block">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="you@email.com" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-text-dark mb-1.5 block">Phone</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="(xxx) xxx-xxxx" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-text-dark mb-1.5 block">Interested In</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                        <option value="">Select a treatment...</option>
                        <option>TMJ Sculpt</option>
                        <option>Facial + Buccal Massage</option>
                        <option>Facial Massage</option>
                        <option>Head Massage</option>
                        <option>Facial + Mask + Hands</option>
                        <option>Facial Rejuvenation</option>
                        <option>Body Contouring</option>
                        <option>Pressotherapy</option>
                        <option>4-in-1 Complex</option>
                        <option>5-in-1 Luxury Ritual</option>
                        <option>Not Sure / Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-text-dark mb-1.5 block">Message *</label>
                      <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Tell us about your goals..." />
                    </div>
                    <button type="submit" className="w-full bg-gradient-pink text-white py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]">
                      Send Message <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map area */}
      <section className="relative h-[350px] sm:h-[400px]">
        <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" alt="Studio location" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-dark/50 flex items-center justify-center px-6">
          <div className="text-center text-white">
            <MapPin className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-3 text-primary-light" />
            <p className="font-display text-xl sm:text-2xl font-bold mb-2">10614 Providence Rd, Room #10</p>
            <p className="text-white/70 text-sm sm:text-base mb-4">Charlotte, NC 28277</p>
            <a href="https://maps.google.com/?q=10614+Providence+Rd+Room+10+Charlotte+NC+28277" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-dark px-6 py-3 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-lg">
              Open in Google Maps <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
