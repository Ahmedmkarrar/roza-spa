"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const galleryItems = [
  {
    id: 1,
    treatment: "TMJ Sculpt",
    category: "Facial Sculpting",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: 2,
    treatment: "Buccal Massage",
    category: "Facial Sculpting",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
  },
  {
    id: 3,
    treatment: "Facial Rejuvenation",
    category: "Facial Sculpting",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
  },
  {
    id: 4,
    treatment: "Lymphatic Drainage",
    category: "Facial Sculpting",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
  },
  {
    id: 5,
    treatment: "Body Contouring",
    category: "Body Contouring",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  },
  {
    id: 6,
    treatment: "Pressotherapy",
    category: "Body Contouring",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6a?w=800&q=80",
  },
  {
    id: 7,
    treatment: "Cavitation + RF",
    category: "Body Contouring",
    image: "https://images.unsplash.com/photo-1560750588-73b555deaddd?w=800&q=80",
  },
  {
    id: 8,
    treatment: "5-in-1 Ritual",
    category: "Luxury Packages",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
  },
  {
    id: 9,
    treatment: "Hot Stone Treatment",
    category: "Body Treatments",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
  },
  {
    id: 10,
    treatment: "Facial + Mask",
    category: "Facial Sculpting",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
  },
  {
    id: 11,
    treatment: "4-in-1 Complex",
    category: "Luxury Packages",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 12,
    treatment: "Full Body Treatment",
    category: "Body Treatments",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },
];

const filterOptions = [
  "All",
  "Facial Sculpting",
  "Body Contouring",
  "Body Treatments",
  "Luxury Packages",
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=1920&q=80"
            alt="Gallery"
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
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl mx-auto"
          >
            A look inside our treatments and the beautiful results our clients
            experience.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {filterOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm transition-all ${
                filter === cat
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.05}>
                  <div
                    onClick={() => setSelected(item)}
                    className="group cursor-pointer rounded-2xl overflow-hidden relative aspect-[4/5]"
                  >
                    <Image
                      src={item.image}
                      alt={item.treatment}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-primary-light text-xs tracking-widest uppercase mb-1">
                        {item.category}
                      </p>
                      <p className="text-white font-display text-xl">
                        {item.treatment}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-2xl overflow-hidden max-w-3xl w-full max-h-[80vh]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="relative aspect-[3/4] sm:aspect-[4/3]">
                <Image
                  src={selected.image}
                  alt={selected.treatment}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-8">
                <p className="text-primary-light text-xs tracking-widest uppercase mb-1">
                  {selected.category}
                </p>
                <p className="text-white font-display text-3xl mb-4">
                  {selected.treatment}
                </p>
                <a
                  href="https://rozamassage.glossgenius.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm hover:bg-primary-light transition-colors"
                >
                  Book This Treatment
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Your Transformation Awaits
            </h2>
            <p className="text-white/70 mb-10 max-w-md mx-auto">
              Join 500+ clients who have experienced the power of expert
              facial sculpting.
            </p>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full text-sm font-medium hover:bg-cream transition-colors"
            >
              Book Now
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
