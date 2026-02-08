"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Star,
  Clock,
  Phone,
  MapPin,
  Plus,
  Minus,
  Sparkles,
  Shield,
  Heart,
  Award,
  CalendarCheck,
  Gem,
  HandHeart,
  Leaf,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials, faqs } from "@/lib/services";

/* ════════════════════════════════════════════
   HERO
   ════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Floating orbs */}
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full opacity-60 pointer-events-none" style={{ background: "rgba(196,120,139,0.5)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out" }} />
      <div className="absolute -bottom-[150px] -right-[150px] w-[400px] h-[400px] rounded-full opacity-60 pointer-events-none" style={{ background: "rgba(212,137,158,0.5)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out 5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-60 pointer-events-none" style={{ background: "rgba(232,181,197,0.5)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out 10s" }} />

      <div className="relative z-10 max-w-[900px] mx-auto text-center px-6 sm:px-8 py-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-[10px] border border-white/30 rounded-full px-5 sm:px-6 py-2 mb-8"
        >
          <Sparkles size={14} className="text-accent-light" />
          <span className="text-white font-medium text-sm sm:text-[0.9rem]">
            Luxury Facial Sculpting in Charlotte, NC
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-[4rem] font-extrabold text-white leading-[1.1] mb-6"
        >
          Where Science Meets{" "}
          <span className="gradient-text">Beauty</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-[700px] mx-auto"
        >
          Expert facial sculpting, buccal massage, facial &amp; head massage,
          and advanced cosmetology treatments — designed to lift, contour,
          and reveal your natural radiance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <a
            href="https://rozamassage.glossgenius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-pink text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
          >
            Book Your Treatment
            <ArrowRight size={18} />
          </a>
          <Link
            href="/services"
            className="border-2 border-white/40 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all text-center"
          >
            View Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5.0", label: "Star Rating" },
            { value: "25+", label: "Treatments" },
            { value: "8+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-extrabold text-white">{s.value}</p>
              <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wider mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/80 hidden sm:flex"
        style={{ animation: "bounce-gentle 2s infinite" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-white rounded-full relative" style={{ animation: "scroll-dot 1.5s ease-in-out infinite" }} />
        </div>
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════
   SERVICES
   ════════════════════════════════════════════ */
const featuredServices = [
  { name: "TMJ Sculpt", price: "$180", duration: "90 min", description: "Advanced facial sculpting targeting the jaw. Relieves tension while contouring and lifting facial muscles for a sculpted look.", badge: "Signature", icon: Gem },
  { name: "Buccal Facial Massage", price: "$130", duration: "60 min", description: "The celebrity-favourite intraoral technique that sculpts cheekbones, defines the jawline, and reduces puffiness from within.", badge: "Most Popular", icon: HandHeart },
  { name: "Facial Massage", price: "$100", duration: "60 min", description: "A deeply relaxing facial massage that stimulates circulation, relieves tension, and promotes a radiant, youthful glow.", badge: null, icon: Sparkles },
  { name: "Head Massage", price: "$80", duration: "45 min", description: "Therapeutic head massage targeting scalp, temples, and neck to relieve stress and promote deep relaxation.", badge: null, icon: Leaf },
  { name: "Body Contouring", price: "$160", duration: "120 min", description: "Powerful body sculpting combining cavitation, RF lifting, vacuum therapy, and vibration massage for visible results.", badge: null, icon: Award },
  { name: "5-in-1 Luxury Ritual", price: "$290", duration: "150 min", description: "Our most comprehensive experience — five expertly combined treatments for the ultimate head-to-toe transformation.", badge: "Ultimate", icon: CalendarCheck },
];

function Services() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12 md:mb-16 h-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline">
            Signature Services
          </h2>
          <p className="text-text-light text-base sm:text-lg max-w-[600px] mx-auto mt-5">
            Each treatment is meticulously designed to deliver visible results
            through advanced cosmetology techniques.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg border border-gray-200/60 hover:border-primary/40 transition-all duration-300 h-full flex flex-col relative"
              >
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {service.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-pink text-white px-3 py-1 rounded-full text-[0.7rem] font-semibold uppercase tracking-wide z-10">
                    {service.badge}
                  </div>
                )}

                <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-pink flex items-center justify-center mb-5 shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
                    <service.icon size={22} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-dark mb-3">{service.name}</h3>

                  {/* Price */}
                  <p className="gradient-text-pink font-display text-3xl sm:text-[2rem] font-extrabold mb-1">{service.price}</p>

                  {/* Duration */}
                  <p className="text-text-light text-sm flex items-center gap-1.5 mb-4">
                    <Clock size={14} /> {service.duration}
                  </p>

                  {/* Description */}
                  <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6 flex-1">{service.description}</p>

                  {/* Button */}
                  <a
                    href="https://rozamassage.glossgenius.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gradient-pink text-white py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12 h-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   ABOUT
   ════════════════════════════════════════════ */
function About() {
  return (
    <section className="section-pad bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <AnimatedSection className="h-auto">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                <Image
                  src="/roza.png"
                  alt="Roza Baidavletova - Licensed Cosmetologist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="hidden md:flex absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-lg max-w-[220px] flex-col gap-2 border border-primary/15">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-dark text-sm font-medium leading-snug">
                  &ldquo;Roza&apos;s hands are truly magical!&rdquo;
                </p>
                <p className="text-text-light text-xs">— Jessica M.</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection className="h-auto">
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark mb-6 leading-tight">
                Expert Care,<br />
                <span className="italic gradient-text-pink">Visible Results</span>
              </h2>
              <p className="text-text-light text-base leading-relaxed mb-4">
                Roza Baidavletova is a licensed cosmetologist and the founder of
                Spa &amp; Sculpting by Roza — Charlotte&apos;s premier destination
                for luxury facial sculpting and advanced cosmetology treatments.
              </p>
              <p className="text-text-light text-base leading-relaxed mb-8">
                Specializing in buccal facial massage, facial massage, head
                massage, and facial contouring, Roza combines years of expertise
                with a deep understanding of facial anatomy to deliver
                transformative results — naturally, without needles or fillers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="h-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Shield, text: "Licensed Cosmetologist" },
                  { icon: Award, text: "Buccal Massage Certified" },
                  { icon: Sparkles, text: "Facial & Head Massage" },
                  { icon: Heart, text: "Body Contouring Trained" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-gradient-pink flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(196,120,139,0.25)]">
                      <item.icon size={18} className="text-white" />
                    </div>
                    <span className="text-text-dark font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-pink text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   VIDEOS
   ════════════════════════════════════════════ */
const videos = [
  { id: "9gpBV56WNiE", title: "Facial Massage Technique", desc: "Expert sculpting in action" },
  { id: "RTHqa73F-Hw", title: "Sculpting Session", desc: "Real client transformation" },
  { id: "8EtBqeHfP-E", title: "Treatment in Action", desc: "Watch the process" },
  { id: "Vpbfxaptn-s", title: "Buccal Massage", desc: "Celebrity-favourite technique" },
  { id: "-wRXPwJq6ms", title: "TMJ Treatment", desc: "Jaw relief & sculpting" },
  { id: "tMJ6Dqx1LRA", title: "Relaxation Ritual", desc: "Full luxury experience" },
];

function VideoShowcase() {
  return (
    <section className="section-pad bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="text-center mb-10 md:mb-14 h-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline">
            Watch Our Techniques
          </h2>
          <p className="text-text-light text-base sm:text-lg max-w-[600px] mx-auto mt-5">
            Get a glimpse of Roza&apos;s expert facial massage, TMJ treatment,
            and sculpting techniques.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold text-primary mb-0.5">{video.title}</h3>
                  <p className="text-text-light text-sm">{video.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   WHY CHOOSE
   ════════════════════════════════════════════ */
function WhyChoose() {
  const reasons = [
    { icon: Sparkles, title: "Visible Results", description: "See the difference from your very first session. Immediate, measurable improvements." },
    { icon: Shield, title: "Licensed & Certified", description: "Fully licensed cosmetologist with advanced certifications in sculpting." },
    { icon: Heart, title: "Natural Approach", description: "No needles, no fillers, no downtime. We harness the body\u2019s own ability to rejuvenate." },
    { icon: Award, title: "Premium Experience", description: "Every detail is designed for your comfort and total transformation." },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="text-center mb-10 md:mb-14 h-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline">
            The Roza Difference
          </h2>
          <p className="text-text-light text-base sm:text-lg max-w-[600px] mx-auto mt-5">
            What sets us apart in Charlotte&apos;s beauty landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="text-center p-6 sm:p-7 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-200/60 hover:border-primary/40 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-pink flex items-center justify-center mx-auto mb-5 shadow-[0_4px_15px_rgba(196,120,139,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <r.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-dark mb-3">{r.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   GALLERY PREVIEW
   ════════════════════════════════════════════ */
function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
  ];

  return (
    <section className="section-pad bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4 h-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline">
            Real Results
          </h2>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-gradient-pink text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)]"
          >
            View Full Gallery <ArrowRight size={14} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Treatment result ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   TESTIMONIALS
   ════════════════════════════════════════════ */
function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="text-center mb-10 md:mb-14 h-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline">
            What Our Clients Say
          </h2>
          <p className="text-text-light text-base sm:text-lg max-w-[600px] mx-auto mt-5">
            Join 500+ satisfied clients who trust Roza with their beauty journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-2xl p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 relative border border-gray-200/60"
              >
                {/* Quote mark */}
                <span className="absolute top-4 left-6 font-display text-5xl text-primary/15 leading-none select-none">&ldquo;</span>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 mt-2 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-primary" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-text-light italic leading-relaxed mb-6 flex-1 text-sm sm:text-base">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-pink flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-dark">{t.name}</h4>
                    <p className="text-text-light text-xs">{t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection className="h-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 sm:p-10 md:p-12 bg-gray-100 rounded-2xl text-center">
            {[
              { value: "5.0", label: "Average Rating" },
              { value: "500+", label: "Happy Clients" },
              { value: "100%", label: "Would Recommend" },
            ].map((s) => (
              <div key={s.label}>
                <p className="gradient-text-pink font-display text-4xl sm:text-5xl font-extrabold mb-1">{s.value}</p>
                <p className="text-text-light text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CTA BANNER
   ════════════════════════════════════════════ */
function CTABanner() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-pink" />
      <div className="absolute inset-0 dot-pattern" />

      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none" style={{ background: "rgba(255,255,255,0.15)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out" }} />
      <div className="absolute -bottom-[150px] -right-[150px] w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none" style={{ background: "rgba(232,181,197,0.3)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out 5s" }} />

      <div className="relative z-10 max-w-[800px] mx-auto text-center px-6 sm:px-8">
        <AnimatedSection className="h-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready for Your <span className="italic">Transformation?</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-[600px] mx-auto">
            Book your appointment today and discover why Charlotte&apos;s most
            discerning clients trust Roza with their skin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Book Appointment <ArrowRight size={18} />
            </a>
            <a
              href="tel:7049499962"
              className="border-2 border-white/40 text-white px-8 py-4 sm:py-5 rounded-full text-base font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} /> (704) 949-9962
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FAQ
   ════════════════════════════════════════════ */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-gray-100">
      <div className="max-w-[800px] mx-auto">
        <AnimatedSection className="text-center mb-10 md:mb-14 h-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline">
            Common Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.04} className="h-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-7 py-5 text-left hover:text-primary transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-dark pr-4">{faq.question}</span>
                  <span className={`text-primary transition-transform duration-300 shrink-0 ${open === i ? "rotate-180" : ""}`}>
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-7 pb-5 text-text-light text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   LOCATION
   ════════════════════════════════════════════ */
function Location() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <AnimatedSection className="h-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline mb-8 sm:mb-10">
              Find Our Studio
            </h2>
            <div className="flex flex-col gap-5 mb-8 sm:mb-10">
              {[
                { icon: MapPin, title: "10614 Providence Rd, Room #10", sub: "Charlotte, NC 28277" },
                { icon: Phone, title: "(704) 949-9962", sub: "Call or text anytime" },
                { icon: Clock, title: "Mon\u2013Fri 9AM\u20135:30PM", sub: "Saturday 8AM\u20131PM" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-pink flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-dark font-semibold text-base">{item.title}</p>
                    <p className="text-text-light text-sm mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-pink text-white px-8 py-4 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
            >
              Book Your Visit <ArrowRight size={16} />
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="h-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Spa studio interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FLOATING BUTTONS
   ════════════════════════════════════════════ */
function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://rozamassage.glossgenius.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-gradient-pink text-white flex items-center justify-center shadow-[0_4px_20px_rgba(196,120,139,0.4)] hover:scale-110 transition-all"
        style={{ animation: "pulse-glow 2s infinite" }}
        aria-label="Book Now"
      >
        <CalendarCheck size={22} />
      </a>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-[999] w-12 h-12 rounded-full bg-gradient-pink text-white flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

/* ════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <VideoShowcase />
      <WhyChoose />
      <GalleryPreview />
      <TestimonialsSection />
      <CTABanner />
      <FAQSection />
      <Location />
      <FloatingButtons />
    </main>
  );
}
