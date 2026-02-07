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
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((service, i) => (
                <AnimatedSection key={service.id} delay={i * 0.05}>
                  <div className="rounded-[20px] border border-gray-100 hover:shadow-lg hover:border-primary-light transition-all duration-300 overflow-hidden h-full flex flex-col bg-white">
                    {service.badge && (
                      <div className="bg-primary text-white text-center py-2 text-xs tracking-widest uppercase font-medium">
                        {service.badge}
                      </div>
                    )}

                    <div className="p-7 flex-1 flex flex-col">
                      <p className="text-primary text-xs tracking-widest uppercase mb-3">
                        {service.category}
                      </p>
                      <h3 className="font-display text-2xl text-dark mb-3">
                        {service.name}
                      </h3>

                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary font-semibold text-xl">
                          {service.price}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Clock size={13} /> {service.duration}
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

                      <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.benefits.map((b) => (
                          <span
                            key={b}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-cream text-gray-700 text-xs rounded-full"
                          >
                            <Check size={10} className="text-primary" /> {b}
                          </span>
                        ))}
                      </div>

                      <a
                        href="https://rozamassage.glossgenius.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-primary text-white py-3.5 rounded-full text-sm hover:bg-primary-dark transition-colors mt-auto"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              Enhance Your Visit
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-dark">
              Add-On Services
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon, i) => (
              <AnimatedSection key={addon.name} delay={i * 0.08}>
                <div className="flex items-center justify-between p-5 bg-white rounded-xl">
                  <div>
                    <p className="text-dark font-medium">{addon.name}</p>
                    <p className="text-gray-500 text-sm">{addon.duration}</p>
                  </div>
                  <span className="text-primary font-semibold text-lg">
                    +{addon.price}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-pink" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-10 max-w-md mx-auto">
              Not sure which treatment is right for you? Book a consultation and
              Roza will create a personalized plan.
            </p>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full text-sm font-medium hover:bg-cream transition-colors"
            >
              Book Appointment
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
