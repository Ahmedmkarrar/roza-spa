"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  Plus,
  Minus,
  Sparkles,
  Shield,
  Heart,
  Award,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials, faqs } from "@/lib/services";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
          alt="Luxury spa treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/50 to-dark/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-sm tracking-widest uppercase mb-6"
          >
            Luxury Facial Sculpting in Charlotte, NC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Where Science
            <br />
            Meets <span className="italic text-accent">Beauty</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Expert facial sculpting, buccal massage, facial & head massage, and
            advanced cosmetology treatments — designed to lift, contour, and
            reveal your natural radiance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-accent-light transition-colors inline-flex items-center gap-2"
            >
              Book Your Treatment
              <ArrowRight size={16} />
            </a>
            <Link
              href="/services"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5.0", label: "Star Rating" },
            { value: "25+", label: "Treatments" },
            { value: "8+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="font-display text-xl md:text-2xl text-white">{s.value}</span>
              <span className="text-white/50 text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES PREVIEW ─── */
const featuredServices = [
  {
    name: "TMJ Sculpt",
    price: "$180",
    duration: "90 min",
    description:
      "Advanced facial sculpting targeting the jaw. Relieves tension while contouring and lifting facial muscles for a visibly sculpted appearance.",
    badge: "Signature",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
  {
    name: "Buccal Facial Massage",
    price: "$130",
    duration: "60 min",
    description:
      "The celebrity-favourite intraoral technique that sculpts cheekbones, defines the jawline, and reduces puffiness from within.",
    badge: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80",
  },
  {
    name: "5-in-1 Luxury Ritual",
    price: "$290",
    duration: "150 min",
    description:
      "Our most comprehensive experience — five expertly combined treatments for the ultimate head-to-toe transformation.",
    badge: "Ultimate",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
  },
];

function Services() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            Our Treatments
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-4">
            Signature Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Each treatment is meticulously designed to deliver visible results
            through advanced cosmetology techniques.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className="fill-accent text-accent"
                      />
                    ))}
                    <span className="text-gray-500 text-xs ml-1">5.0</span>
                  </div>

                  <h3 className="font-display text-2xl text-dark mb-2">
                    {service.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary font-semibold text-lg">
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Clock size={13} />
                      {service.duration}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <a
                    href="https://rozamassage.glossgenius.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-dark text-white py-3.5 rounded-full text-sm hover:bg-primary transition-colors block"
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
            className="inline-flex items-center gap-2 text-dark text-sm font-medium border-b-2 border-dark pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── ABOUT PREVIEW ─── */
function About() {
  return (
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1560750588-73b555deaddd?w=800&q=80"
                  alt="Roza performing facial treatment"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-[240px]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-dark text-sm font-medium">
                  &ldquo;Roza&apos;s hands are truly magical!&rdquo;
                </p>
                <p className="text-gray-500 text-xs mt-1">— Jessica M.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection>
              <p className="text-accent text-sm tracking-widest uppercase mb-4">
                About Roza
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-dark mb-6 leading-tight">
                Expert Care,
                <br />
                <span className="italic">Visible Results</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Roza Baidavletova is a licensed cosmetologist and the founder of
                Spa & Sculpting by Roza — Charlotte&apos;s premier destination
                for luxury facial sculpting and advanced cosmetology treatments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Specializing in buccal facial massage, facial massage, head
                massage, and facial contouring, Roza combines years of expertise
                with a deep understanding of facial anatomy to deliver
                transformative results — naturally, without needles or fillers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Licensed Cosmetologist" },
                  { icon: Award, text: "Buccal Massage Certified" },
                  { icon: Sparkles, text: "Facial & Head Massage" },
                  { icon: Heart, text: "Body Contouring Trained" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <item.icon size={18} className="text-accent shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-dark text-white px-7 py-3.5 rounded-full text-sm hover:bg-primary transition-colors"
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

/* ─── VIDEO SHOWCASE ─── */
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
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            See It in Action
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-4">
            Watch Our Techniques
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Get a glimpse of Roza&apos;s expert facial massage, TMJ treatment,
            and sculpting techniques that deliver real, visible results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.08}>
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[9/16]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
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
        "No needles, no fillers, no downtime. We harness the body's own ability to rejuvenate.",
    },
    {
      icon: Award,
      title: "Premium Experience",
      description:
        "From the moment you walk in, every detail is designed for your comfort and transformation.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-4">
            The Roza Difference
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            What sets us apart in Charlotte&apos;s beauty landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8 rounded-2xl bg-cream hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <r.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-xl text-dark mb-3">
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
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-dark">
              Real Results
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-dark text-sm font-medium border-b-2 border-dark pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View Full Gallery
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Treatment result ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300" />
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
  const [current, setCurrent] = useState(0);
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 md:py-32 px-6 bg-dark text-white">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl text-white/90 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <p className="text-white font-medium text-sm">
                {testimonials[current].name}
              </p>
              <p className="text-white/40 text-sm mt-1">
                {testimonials[current].treatment}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-accent w-8" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80"
          alt="Spa ambiance"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
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
              className="bg-white text-dark px-8 py-4 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Book Appointment
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:7049499962"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2"
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
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-dark mb-4">
            Common Questions
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-colors">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-lg text-dark pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      open === i
                        ? "bg-accent text-white"
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
                      <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
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
    <section className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-accent text-sm tracking-widest uppercase mb-4">
              Visit Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-dark mb-6">
              Find Our Studio
            </h2>
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-dark font-medium">10614 Providence Rd, Room #10</p>
                  <p className="text-gray-500 text-sm">Charlotte, NC 28277</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-dark font-medium">(704) 949-9962</p>
                  <p className="text-gray-500 text-sm">Call or text anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-accent mt-1 shrink-0" />
                <div>
                  <p className="text-dark font-medium">Mon–Fri 9AM–5:30PM</p>
                  <p className="text-gray-500 text-sm">Saturday 8AM–1PM</p>
                </div>
              </div>
            </div>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full text-sm hover:bg-primary transition-colors"
            >
              Book Your Visit
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Spa studio interior"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
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
    </main>
  );
}
