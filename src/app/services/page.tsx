"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Star, ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { services, addOns, categories } from "@/lib/services";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbec6a?w=1920&q=80"
            alt="Spa treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-primary-dark/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-light text-sm tracking-widest uppercase mb-4"
          >
            Our Treatments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Services & Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl mx-auto"
          >
            From targeted facial sculpting to luxury rituals — find the perfect
            treatment for your goals.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "text-text-light hover:bg-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((service, i) => (
                <AnimatedSection key={service.id} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="group rounded-[20px] overflow-hidden bg-white shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 h-full flex flex-col relative"
                  >
                    {/* Top gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    {service.badge && (
                      <div className="absolute top-4 right-4 bg-gradient-pink text-white px-4 py-1.5 rounded-full text-[0.75rem] font-semibold uppercase z-10">
                        {service.badge}
                      </div>
                    )}

                    <div className="p-8 flex-1 flex flex-col">
                      <p className="text-primary text-xs tracking-widest uppercase mb-3">
                        {service.category}
                      </p>
                      <h3 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                        {service.name}
                      </h3>

                      <div className="flex items-center gap-3 mb-4">
                        <span className="gradient-text-pink font-display text-[2rem] font-extrabold">
                          {service.price}
                        </span>
                        <span className="text-text-light text-[0.9rem] flex items-center gap-1">
                          <Clock size={14} /> {service.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={11}
                            className="fill-primary text-primary"
                          />
                        ))}
                      </div>

                      <p className="text-text-light leading-[1.6] mb-5 flex-1">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.benefits.map((b) => (
                          <span
                            key={b}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-cream text-text-dark text-xs rounded-full"
                          >
                            <Check size={10} className="text-primary" /> {b}
                          </span>
                        ))}
                      </div>

                      <a
                        href="https://rozamassage.glossgenius.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-gradient-pink text-white py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)] mt-auto"
                      >
                        Book Now
                      </a>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 px-5 bg-gray-100">
        <div className="max-w-[800px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-6">
              Add-On Services
            </h2>
            <p className="text-text-light text-[1.1rem] max-w-[600px] mx-auto mt-6">
              Enhance any treatment with these extras.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon, i) => (
              <AnimatedSection key={addon.name} delay={i * 0.08}>
                <div className="flex items-center justify-between p-6 bg-white rounded-[12px] shadow-sm hover:shadow-md transition-all">
                  <div>
                    <p className="text-dark font-semibold text-[1.05rem]">{addon.name}</p>
                    <p className="text-text-light text-[0.9rem]">{addon.duration}</p>
                  </div>
                  <span className="gradient-text-pink font-display text-[1.5rem] font-extrabold">
                    +{addon.price}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-pink" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 text-center max-w-[800px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-extrabold text-white mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-[1.25rem] leading-[1.8] mb-10 max-w-[600px] mx-auto">
              Not sure which treatment is right for you? Book a consultation and
              Roza will create a personalized plan.
            </p>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-dark px-10 py-5 rounded-full text-[1.1rem] font-bold hover:-translate-y-0.5 transition-all shadow-lg"
            >
              Book Appointment
              <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
