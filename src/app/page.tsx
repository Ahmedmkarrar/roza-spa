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
  Quote,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials, faqs } from "@/lib/services";

/* ═══════════════════════════════════════════════════
   HERO — matches NurasBeauty: gradient bg, orbs, centered
   padding-top: 80px, min-height: 100vh
   hero-title: 4rem, hero-subtitle: 1.25rem
   hero-stats gap: 4rem, stat-number: 2.5rem
   ═══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Floating orbs — NurasBeauty: 500px, 400px, 350px, blur(80px), opacity 0.6 */}
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full opacity-60 pointer-events-none" style={{ background: "rgba(196,120,139,0.5)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out" }} />
      <div className="absolute -bottom-[150px] -right-[150px] w-[400px] h-[400px] rounded-full opacity-60 pointer-events-none" style={{ background: "rgba(212,137,158,0.5)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out 5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-60 pointer-events-none" style={{ background: "rgba(232,181,197,0.5)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out 10s" }} />

      {/* Content — NurasBeauty: max-width 900px, padding 2rem, text-center */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center px-8 py-8">
        {/* Badge — NurasBeauty: bg white/20, backdrop-blur, px 1.5rem, py 0.5rem, rounded-full, 0.9rem, mb 2rem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-[10px] border border-white/30 rounded-full px-6 py-2 mb-8"
        >
          <Sparkles size={14} className="text-accent-light" />
          <span className="text-white font-medium text-[0.9rem]">
            Luxury Facial Sculpting in Charlotte, NC
          </span>
        </motion.div>

        {/* Title — NurasBeauty: 4rem, weight 800, mb 1.5rem */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-extrabold text-white leading-[1.1] mb-6"
        >
          Where Science Meets{" "}
          <span className="gradient-text">Beauty</span>
        </motion.h1>

        {/* Subtitle — NurasBeauty: 1.25rem, white/90, mb 2.5rem, max-w 700px, line-height 1.8 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/90 text-[1.1rem] md:text-[1.25rem] leading-[1.8] mb-10 max-w-[700px] mx-auto"
        >
          Expert facial sculpting, buccal massage, facial &amp; head massage,
          and advanced cosmetology treatments — designed to lift, contour,
          and reveal your natural radiance.
        </motion.p>

        {/* Buttons — NurasBeauty: btn padding 1rem 2rem, btn-lg 1.25rem 2.5rem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="https://rozamassage.glossgenius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-pink text-white px-10 py-5 rounded-full text-[1.1rem] font-semibold hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
          >
            Book Your Treatment
            <ArrowRight size={18} />
          </a>
          <Link
            href="/services"
            className="border-2 border-white/40 text-white px-10 py-5 rounded-full text-[1rem] font-semibold hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all"
          >
            View Services
          </Link>
        </motion.div>

        {/* Stats — NurasBeauty: gap 4rem, stat-number 2.5rem weight 800, stat-label 0.9rem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex justify-center gap-8 md:gap-16 flex-wrap"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5.0", label: "Star Rating" },
            { value: "25+", label: "Treatments" },
            { value: "8+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-[2.5rem] font-extrabold text-white">{s.value}</p>
              <p className="text-white/80 text-[0.9rem] uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — NurasBeauty: bottom 2rem */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
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

/* ═══════════════════════════════════════════════════
   SERVICES — NurasBeauty: padding 6rem 0, grid gap 2rem,
   card padding 2rem, border-radius 20px, icon 60x60 15px-radius,
   h3 1.5rem, price 2rem gradient, hover translateY(-10px)
   ═══════════════════════════════════════════════════ */
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
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header — NurasBeauty: mb 4rem, title 2.5rem, subtitle 1.1rem max-w 600px */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-6">
            Signature Services
          </h2>
          <p className="text-text-light text-[1.1rem] max-w-[600px] mx-auto mt-6">
            Each treatment is meticulously designed to deliver visible results
            through advanced cosmetology techniques.
          </p>
        </AnimatedSection>

        {/* Grid — NurasBeauty: minmax(300px, 1fr), gap 2rem */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="group rounded-[20px] overflow-hidden bg-white shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 h-full flex flex-col relative"
              >
                {/* Top gradient bar — NurasBeauty: 4px, scaleX(0) -> scaleX(1) on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {service.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-pink text-white px-4 py-1.5 rounded-full text-[0.75rem] font-semibold uppercase z-10">
                    {service.badge}
                  </div>
                )}

                {/* Card body — NurasBeauty: padding 2rem */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon — NurasBeauty: 60x60, border-radius 15px, gradient bg */}
                  <div className="w-[60px] h-[60px] rounded-[15px] bg-gradient-pink flex items-center justify-center mb-6 shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
                    <service.icon size={24} className="text-white" />
                  </div>

                  {/* Title — NurasBeauty: 1.5rem, mb 1rem */}
                  <h3 className="font-display text-[1.5rem] font-bold text-dark mb-4">{service.name}</h3>

                  {/* Price — NurasBeauty: 2rem, gradient text, font-display weight 800 */}
                  <p className="gradient-text-pink font-display text-[2rem] font-extrabold mb-2">{service.price}</p>

                  {/* Duration — NurasBeauty: 0.9rem, text-light */}
                  <p className="text-text-light text-[0.9rem] flex items-center gap-1.5 mb-4">
                    <Clock size={14} /> {service.duration}
                  </p>

                  {/* Description — NurasBeauty: text-light, line-height 1.6, mb 1.5rem */}
                  <p className="text-text-light leading-[1.6] mb-6 flex-1">{service.description}</p>

                  {/* Button — NurasBeauty: py 0.75rem, px 2rem, rounded-full, gradient, weight 600 */}
                  <a
                    href="https://rozamassage.glossgenius.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-gradient-pink text-white py-3 px-8 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-14">
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

/* ═══════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════ */
function About() {
  return (
    <section className="py-24 px-5 bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560750588-73b555deaddd?w=800&q=80"
                  alt="Roza performing facial treatment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="hidden md:flex absolute -bottom-6 -right-6 bg-white rounded-[20px] p-6 shadow-lg max-w-[240px] flex-col gap-2 border-2 border-primary/20">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-dark text-[0.95rem] font-medium leading-snug">
                  &ldquo;Roza&apos;s hands are truly magical!&rdquo;
                </p>
                <p className="text-text-light text-[0.85rem]">— Jessica M.</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <h2 className="font-display text-[2.5rem] font-bold text-dark mb-6 leading-tight">
                Expert Care,<br />
                <span className="italic gradient-text-pink">Visible Results</span>
              </h2>
              <p className="text-text-light text-[1rem] leading-[1.8] mb-5">
                Roza Baidavletova is a licensed cosmetologist and the founder of
                Spa &amp; Sculpting by Roza — Charlotte&apos;s premier destination
                for luxury facial sculpting and advanced cosmetology treatments.
              </p>
              <p className="text-text-light text-[1rem] leading-[1.8] mb-8">
                Specializing in buccal facial massage, facial massage, head
                massage, and facial contouring, Roza combines years of expertise
                with a deep understanding of facial anatomy to deliver
                transformative results — naturally, without needles or fillers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Shield, text: "Licensed Cosmetologist" },
                  { icon: Award, text: "Buccal Massage Certified" },
                  { icon: Sparkles, text: "Facial & Head Massage" },
                  { icon: Heart, text: "Body Contouring Trained" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white rounded-[12px] p-4 shadow-sm">
                    <div className="w-[44px] h-[44px] rounded-[12px] bg-gradient-pink flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <span className="text-text-dark font-medium text-[0.95rem]">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-pink text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
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

/* ═══════════════════════════════════════════════════
   VIDEOS — NurasBeauty: padding 6rem, grid minmax(320px,1fr) gap 2rem,
   video-card: radius 20px, shadow-md, hover translateY(-10px),
   video-wrapper: padding-bottom 177.78% (9:16),
   video-info: padding 1.5rem, h3 1.25rem primary, p 0.95rem text-light
   ═══════════════════════════════════════════════════ */
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
    <section className="py-24 px-5 bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-6">
            Watch Our Techniques
          </h2>
          <p className="text-text-light text-[1.1rem] max-w-[600px] mx-auto mt-6">
            Get a glimpse of Roza&apos;s expert facial massage, TMJ treatment,
            and sculpting techniques.
          </p>
        </AnimatedSection>

        {/* NurasBeauty: grid minmax(320px, 1fr), gap 2rem */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-[20px] overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* NurasBeauty: padding-bottom 177.78% for 9:16 */}
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* NurasBeauty: video-info padding 1.5rem */}
                <div className="p-6 text-center">
                  <h3 className="font-display text-[1.25rem] font-bold text-primary mb-1">{video.title}</h3>
                  <p className="text-text-light text-[0.95rem]">{video.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   WHY CHOOSE — same card pattern as services
   ═══════════════════════════════════════════════════ */
function WhyChoose() {
  const reasons = [
    { icon: Sparkles, title: "Visible Results", description: "See the difference from your very first session. Immediate, measurable improvements." },
    { icon: Shield, title: "Licensed & Certified", description: "Fully licensed cosmetologist with advanced certifications in sculpting." },
    { icon: Heart, title: "Natural Approach", description: "No needles, no fillers, no downtime. We harness the body\u2019s own ability to rejuvenate." },
    { icon: Award, title: "Premium Experience", description: "Every detail is designed for your comfort and total transformation." },
  ];

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-6">
            The Roza Difference
          </h2>
          <p className="text-text-light text-[1.1rem] max-w-[600px] mx-auto mt-6">
            What sets us apart in Charlotte&apos;s beauty landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="text-center p-8 rounded-[20px] bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full border-2 border-transparent hover:border-primary group"
              >
                <div className="w-[60px] h-[60px] rounded-[15px] bg-gradient-pink flex items-center justify-center mx-auto mb-6 shadow-[0_4px_15px_rgba(196,120,139,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <r.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-[1.35rem] font-bold text-dark mb-4">{r.title}</h3>
                <p className="text-text-light leading-[1.6]">{r.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   GALLERY
   ═══════════════════════════════════════════════════ */
function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
  ];

  return (
    <section className="py-24 px-5 bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline">
              Real Results
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-gradient-pink text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)]"
          >
            View Full Gallery <ArrowRight size={14} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative aspect-[3/4] rounded-[20px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
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

/* ═══════════════════════════════════════════════════
   TESTIMONIALS — NurasBeauty: padding 6rem, bg light-bg,
   grid minmax(300px,1fr) gap 2rem, card padding 2.5rem radius 20px,
   review-text italic line-height 1.8, quote " 4rem primary/20,
   author avatar 50x50, stats grid 3rem gradient, p 1rem
   ═══════════════════════════════════════════════════ */
function TestimonialsSection() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-6">
            What Our Clients Say
          </h2>
          <p className="text-text-light text-[1.1rem] max-w-[600px] mx-auto mt-6">
            Join 500+ satisfied clients who trust Roza with their beauty journey.
          </p>
        </AnimatedSection>

        {/* NurasBeauty: grid minmax(300px, 1fr), gap 2rem, card padding 2.5rem */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-[20px] p-10 h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 relative"
              >
                {/* NurasBeauty: quote mark 4rem, primary opacity 0.2 */}
                <span className="absolute top-6 left-8 font-display text-[4rem] text-primary/20 leading-none">&ldquo;</span>

                {/* Stars — NurasBeauty: gold 1.25rem */}
                <div className="flex items-center gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={20} className="fill-primary" />
                  ))}
                </div>

                {/* NurasBeauty: italic, text-light, line-height 1.8, mb 2rem */}
                <p className="text-text-light italic leading-[1.8] mb-8 flex-1 text-[1rem]">
                  {t.text}
                </p>

                {/* Author — NurasBeauty: avatar 50x50, h4 1.1rem, p 0.9rem */}
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-gradient-pink flex items-center justify-center text-white text-[0.9rem] font-bold shrink-0 border-2 border-primary/30">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-display text-[1.1rem] font-bold text-dark">{t.name}</h4>
                    <p className="text-text-light text-[0.9rem]">{t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats — NurasBeauty: padding 3rem, radius 20px, shadow-md, stat-value 3rem gradient */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-12 bg-white rounded-[20px] shadow-md text-center">
            {[
              { value: "5.0", label: "Average Rating" },
              { value: "500+", label: "Happy Clients" },
              { value: "100%", label: "Would Recommend" },
            ].map((s) => (
              <div key={s.label}>
                <p className="gradient-text-pink font-display text-[3rem] font-extrabold mb-2">{s.value}</p>
                <p className="text-text-light text-[1rem] uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CTA — NurasBeauty: gradient bg + dot pattern
   ═══════════════════════════════════════════════════ */
function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-pink" />
      <div className="absolute inset-0 dot-pattern" />

      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none" style={{ background: "rgba(255,255,255,0.15)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out" }} />
      <div className="absolute -bottom-[150px] -right-[150px] w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none" style={{ background: "rgba(232,181,197,0.3)", filter: "blur(80px)", animation: "float 20s infinite ease-in-out 5s" }} />

      <div className="relative z-10 max-w-[800px] mx-auto text-center px-8">
        <AnimatedSection>
          <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-extrabold text-white mb-6 leading-tight">
            Ready for Your <span className="italic">Transformation?</span>
          </h2>
          <p className="text-white/90 text-[1.25rem] leading-[1.8] mb-10 max-w-[600px] mx-auto">
            Book your appointment today and discover why Charlotte&apos;s most
            discerning clients trust Roza with their skin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-dark px-10 py-5 rounded-full text-[1.1rem] font-bold hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Book Appointment <ArrowRight size={18} />
            </a>
            <a
              href="tel:7049499962"
              className="border-2 border-white/40 text-white px-8 py-5 rounded-full text-[1rem] font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              <Phone size={18} /> (704) 949-9962
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FAQ — NurasBeauty: padding 6rem, bg light-bg,
   faq-item radius 12px shadow-sm, question 1.5rem 2rem padding 1.1rem weight 600
   answer padding 0 2rem 1.5rem
   ═══════════════════════════════════════════════════ */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-5 bg-gray-100">
      <div className="max-w-[800px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-6">
            Common Questions
          </h2>
        </AnimatedSection>

        {/* NurasBeauty: faq-item radius 12px, shadow-sm, mb 1rem */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <div className="bg-white rounded-[12px] shadow-sm overflow-hidden">
                {/* NurasBeauty: padding 1.5rem 2rem, font-size 1.1rem, weight 600 */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left hover:text-primary transition-colors"
                >
                  <span className="font-semibold text-[1.1rem] text-dark pr-6">{faq.question}</span>
                  <span className={`text-primary transition-transform duration-300 shrink-0 ${open === i ? "rotate-180" : ""}`}>
                    {open === i ? <Minus size={20} /> : <Plus size={20} />}
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
                      {/* NurasBeauty: padding 0 2rem 1.5rem */}
                      <p className="px-8 pb-6 text-text-light leading-[1.8]">
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

/* ═══════════════════════════════════════════════════
   LOCATION
   ═══════════════════════════════════════════════════ */
function Location() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-10">
              Find Our Studio
            </h2>
            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: MapPin, title: "10614 Providence Rd, Room #10", sub: "Charlotte, NC 28277" },
                { icon: Phone, title: "(704) 949-9962", sub: "Call or text anytime" },
                { icon: Clock, title: "Mon\u2013Fri 9AM\u20135:30PM", sub: "Saturday 8AM\u20131PM" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-[50px] h-[50px] rounded-[15px] bg-gradient-pink flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-dark font-semibold text-[1.05rem]">{item.title}</p>
                    <p className="text-text-light text-[0.95rem] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-pink text-white px-10 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
            >
              Book Your Visit <ArrowRight size={16} />
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] shadow-lg">
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

/* ═══════════════════════════════════════════════════
   FLOATING BUTTONS — NurasBeauty: 60px book, 50px scroll-top
   ═══════════════════════════════════════════════════ */
function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NurasBeauty: 60px, bottom 2rem, right 2rem */}
      <a
        href="https://rozamassage.glossgenius.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[999] w-[60px] h-[60px] rounded-full bg-gradient-pink text-white flex items-center justify-center shadow-[0_4px_20px_rgba(196,120,139,0.4)] hover:scale-110 transition-all"
        style={{ animation: "pulse-glow 2s infinite" }}
        aria-label="Book Now"
      >
        <CalendarCheck size={24} />
      </a>

      {/* NurasBeauty: 50px, bottom 2rem, left 2rem */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 left-8 z-[999] w-[50px] h-[50px] rounded-full bg-gradient-pink text-white flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
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
