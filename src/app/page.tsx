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
  Play,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials, faqs } from "@/lib/services";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />

      {/* Floating orbs */}
      <div
        className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #e8b5c5, transparent 70%)",
          animation: "float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[8%] w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #d9a0ad, transparent 70%)",
          animation: "float 15s ease-in-out infinite 3s",
        }}
      />
      <div
        className="absolute top-[50%] right-[30%] w-48 h-48 rounded-full opacity-10 blur-2xl"
        style={{
          background: "radial-gradient(circle, #ffffff, transparent 70%)",
          animation: "float 10s ease-in-out infinite 6s",
        }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-32 pb-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 mb-8"
        >
          <Sparkles size={14} className="text-accent-light" />
          <span className="text-white/90 text-sm tracking-wide">
            Luxury Facial Sculpting in Charlotte, NC
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-8"
        >
          Where Science
          <br />
          Meets <span className="gradient-text italic">Beauty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Expert facial sculpting, buccal massage, facial &amp; head massage,
          and advanced cosmetology treatments — designed to lift, contour,
          and reveal your natural radiance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a
            href="https://rozamassage.glossgenius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark px-10 py-4 rounded-full text-sm font-semibold hover:bg-cream transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Book Your Treatment
            <ArrowRight size={16} />
          </a>
          <Link
            href="/services"
            className="border border-white/30 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            View Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5.0", label: "Star Rating" },
            { value: "25+", label: "Treatments" },
            { value: "8+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-white mb-1">
                {s.value}
              </p>
              <p className="text-white/50 text-xs tracking-wider uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "bounce-gentle 2s ease-in-out infinite" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div
            className="w-1.5 h-1.5 bg-white rounded-full relative"
            style={{ animation: "scroll-dot 1.5s ease-in-out infinite" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ─── SERVICES ─── */
const featuredServices = [
  {
    name: "TMJ Sculpt",
    price: "$180",
    duration: "90 min",
    description:
      "Advanced facial sculpting targeting the jaw. Relieves tension while contouring and lifting facial muscles for a sculpted look.",
    badge: "Signature",
    icon: Gem,
  },
  {
    name: "Buccal Facial Massage",
    price: "$130",
    duration: "60 min",
    description:
      "The celebrity-favourite intraoral technique that sculpts cheekbones, defines the jawline, and reduces puffiness from within.",
    badge: "Most Popular",
    icon: HandHeart,
  },
  {
    name: "Facial Massage",
    price: "$100",
    duration: "60 min",
    description:
      "A deeply relaxing facial massage that stimulates circulation, relieves tension, and promotes a radiant, youthful glow.",
    badge: null,
    icon: Sparkles,
  },
  {
    name: "Head Massage",
    price: "$80",
    duration: "45 min",
    description:
      "Therapeutic head massage targeting scalp, temples, and neck to relieve stress and promote deep relaxation.",
    badge: null,
    icon: Leaf,
  },
  {
    name: "Body Contouring",
    price: "$160",
    duration: "120 min",
    description:
      "Powerful body sculpting combining cavitation, RF lifting, vacuum therapy, and vibration massage for visible results.",
    badge: null,
    icon: Award,
  },
  {
    name: "5-in-1 Luxury Ritual",
    price: "$290",
    duration: "150 min",
    description:
      "Our most comprehensive experience — five expertly combined treatments for the ultimate head-to-toe transformation.",
    badge: "Ultimate",
    icon: CalendarCheck,
  },
];

function Services() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
            Our Treatments
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-5">
            Signature Services
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-base">
            Each treatment is meticulously designed to deliver visible results
            through advanced cosmetology techniques.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group rounded-[20px] overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500 h-full flex flex-col relative"
              >
                {/* Gradient top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {service.badge && (
                  <div className="bg-gradient-pink text-white text-center py-2.5 text-xs tracking-widest uppercase font-medium">
                    {service.badge}
                  </div>
                )}

                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-pink flex items-center justify-center mb-5 shadow-md">
                    <service.icon size={24} className="text-white" />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl text-dark mb-3">
                    {service.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary font-bold text-xl">
                      {service.price}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock size={13} />
                      {service.duration}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-7 flex-1">
                    {service.description}
                  </p>

                  <a
                    href="https://rozamassage.glossgenius.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-primary text-white py-3.5 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors block"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-pink text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-[20px] overflow-hidden aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1560750588-73b555deaddd?w=800&q=80"
                  alt="Roza performing facial treatment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating review card */}
              <div className="hidden md:block absolute -bottom-5 -right-5 bg-white rounded-[16px] p-5 shadow-xl max-w-[220px] border border-gray-50">
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-dark text-sm font-medium leading-snug">
                  &ldquo;Roza&apos;s hands are truly magical!&rdquo;
                </p>
                <p className="text-gray-400 text-xs mt-1.5">— Jessica M.</p>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
                About Roza
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-6 leading-tight">
                Expert Care,
                <br />
                <span className="italic text-primary">Visible Results</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                Roza Baidavletova is a licensed cosmetologist and the founder of
                Spa &amp; Sculpting by Roza — Charlotte&apos;s premier destination
                for luxury facial sculpting and advanced cosmetology treatments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                Specializing in buccal facial massage, facial massage, head
                massage, and facial contouring, Roza combines years of expertise
                with a deep understanding of facial anatomy to deliver
                transformative results — naturally, without needles or fillers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Shield, text: "Licensed Cosmetologist" },
                  { icon: Award, text: "Buccal Massage Certified" },
                  { icon: Sparkles, text: "Facial & Head Massage" },
                  { icon: Heart, text: "Body Contouring Trained" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 bg-white rounded-xl p-3.5 text-sm text-gray-700 border border-gray-50"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-pink flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-[13px]">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-pink text-white px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── VIDEO SHOWCASE (thumbnails, not iframes) ─── */
const videos = [
  { id: "9gpBV56WNiE", title: "Facial Massage Technique" },
  { id: "RTHqa73F-Hw", title: "Sculpting Session" },
  { id: "8EtBqeHfP-E", title: "Treatment in Action" },
  { id: "Vpbfxaptn-s", title: "Buccal Massage" },
  { id: "-wRXPwJq6ms", title: "TMJ Treatment" },
  { id: "tMJ6Dqx1LRA", title: "Relaxation Ritual" },
];

function VideoShowcase() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
            See It in Action
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-5">
            Watch Our Techniques
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-base">
            Get a glimpse of Roza&apos;s expert facial massage, TMJ treatment,
            and sculpting techniques that deliver real results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.06}>
              <a
                href={`https://youtube.com/shorts/${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-[20px] overflow-hidden bg-gray-100 aspect-[9/14] shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play size={20} className="text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{video.title}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE ─── */
function WhyChoose() {
  const reasons = [
    {
      icon: Sparkles,
      title: "Visible Results",
      description:
        "See the difference from your very first session. Our treatments deliver immediate, measurable improvements.",
    },
    {
      icon: Shield,
      title: "Licensed & Certified",
      description:
        "Fully licensed cosmetologist with advanced certifications in facial sculpting and body contouring.",
    },
    {
      icon: Heart,
      title: "Natural Approach",
      description:
        "No needles, no fillers, no downtime. We harness the body\u2019s own ability to rejuvenate naturally.",
    },
    {
      icon: Award,
      title: "Premium Experience",
      description:
        "From the moment you walk in, every detail is designed for your comfort and transformation.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-5">
            The Roza <span className="text-primary italic">Difference</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            What sets us apart in Charlotte&apos;s beauty landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center p-7 md:p-8 rounded-[20px] bg-white hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-pink flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <r.icon size={28} className="text-white" />
                </div>
                <h3 className="font-display text-lg md:text-xl text-dark mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY PREVIEW ─── */
function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-dark">
              Real Results
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-gradient-pink text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
          >
            View Full Gallery
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {images.map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden group cursor-pointer">
                <Image
                  src={src}
                  alt={`Treatment result ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-5">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            Join 500+ satisfied clients who trust Roza with their beauty journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.06}>
              <div className="bg-white rounded-[20px] p-6 md:p-7 h-full flex flex-col border border-gray-100 hover:shadow-lg hover:border-primary/15 transition-all duration-300 relative">
                <Quote
                  size={28}
                  className="text-primary/10 absolute top-5 right-5"
                />

                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-pink flex items-center justify-center text-white text-xs font-semibold shrink-0">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-dark text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.treatment}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats bar */}
        <AnimatedSection>
          <div className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl text-dark">5.0</span>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-0.5">Average Rating</p>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <p className="font-display text-3xl text-dark">500+</p>
              <p className="text-gray-400 text-xs">Happy Clients</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <p className="font-display text-3xl text-dark">100%</p>
              <p className="text-gray-400 text-xs">Would Recommend</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-pink" />
      <div className="absolute inset-0 dot-pattern" />

      <div
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #ffffff, transparent 70%)",
          animation: "float 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-48 h-48 rounded-full opacity-10 blur-2xl"
        style={{
          background: "radial-gradient(circle, #e8b5c5, transparent 70%)",
          animation: "float 12s ease-in-out infinite 4s",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready for Your
            <br />
            <span className="italic">Transformation?</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Book your appointment today and discover why Charlotte&apos;s most
            discerning clients trust Roza with their skin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-dark px-10 py-4 rounded-full text-sm font-semibold hover:bg-cream transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              Book Appointment
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:7049499962"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2 backdrop-blur-sm"
            >
              <Phone size={16} />
              (704) 949-9962
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark">
            Common Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <div className="border border-gray-100 rounded-[16px] overflow-hidden hover:border-primary/20 transition-colors bg-white">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="font-display text-base md:text-lg text-dark pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      open === i
                        ? "bg-gradient-pink text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
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
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-500 text-sm leading-relaxed -mt-1">
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

/* ─── LOCATION ─── */
function Location() {
  return (
    <section className="py-20 md:py-28 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <p className="text-primary text-xs font-medium tracking-widest uppercase mb-4">
              Visit Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-dark mb-8">
              Find Our Studio
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: MapPin,
                  title: "10614 Providence Rd, Room #10",
                  sub: "Charlotte, NC 28277",
                },
                {
                  icon: Phone,
                  title: "(704) 949-9962",
                  sub: "Call or text anytime",
                },
                {
                  icon: Clock,
                  title: "Mon\u2013Fri 9AM\u20135:30PM",
                  sub: "Saturday 8AM\u20131PM",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-pink flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-dark font-medium text-[15px]">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-pink text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-md"
            >
              Book Your Visit
              <ArrowRight size={16} />
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

/* ─── FLOATING BUTTONS ─── */
function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Book Now — bottom right */}
      <a
        href="https://rozamassage.glossgenius.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-pink text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
        aria-label="Book Now"
      >
        <CalendarCheck size={22} />
      </a>

      {/* Scroll to top — bottom left */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-white border border-gray-200 text-primary flex items-center justify-center shadow-lg hover:bg-cream hover:scale-110 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── PAGE ─── */
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
