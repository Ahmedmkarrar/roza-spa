"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const galleryItems = [
  { id: 1, treatment: "TMJ Sculpt", category: "Facial Sculpting", image: "/buccal-massage.jpg" },
  { id: 2, treatment: "Buccal Massage", category: "Facial Sculpting", image: "/facial-massage.jpg" },
  { id: 3, treatment: "Facial Rejuvenation", category: "Facial Sculpting", image: "/facial-rf.jpg" },
  { id: 4, treatment: "Facial RF Treatment", category: "Facial Sculpting", image: "/facial-rf-candles.jpg" },
  { id: 5, treatment: "Facial Sculpting — Before & After", category: "Before & After", image: "/before-after-face.jpg" },
  { id: 6, treatment: "Body Contouring", category: "Body Contouring", image: "/body-cavitation.jpg" },
  { id: 7, treatment: "Body Sculpting", category: "Body Contouring", image: "/body-contouring-device.jpg" },
  { id: 8, treatment: "Cavitation + RF", category: "Body Contouring", image: "/body-contouring-legs.jpg" },
  { id: 9, treatment: "Body Contouring — Before & After", category: "Before & After", image: "/before-after-body.jpg" },
  { id: 10, treatment: "Green Mask Treatment", category: "Facial Sculpting", image: "/green-mask-treatment.jpg" },
  { id: 11, treatment: "Facial + Mask", category: "Facial Sculpting", image: "/facial-mask.jpg" },
  { id: 12, treatment: "doTERRA Essential Oils", category: "Luxury Packages", image: "/doterra-oils.jpg" },
  { id: 13, treatment: "5-in-1 Ritual", category: "Luxury Packages", image: "/decollete-massage.jpg" },
  { id: 14, treatment: "Skincare Products", category: "Luxury Packages", image: "/skincare-products.jpg" },
  { id: 15, treatment: "Body Massage", category: "Body Treatments", image: "/body-massage-moody.jpg" },
];

const filterOptions = ["All", "Facial Sculpting", "Body Contouring", "Before & After", "Body Treatments", "Luxury Packages"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 sm:pt-40 pb-20 sm:pb-24">
        <div className="absolute inset-0">
          <Image src="/facial-candles.jpg" alt="Treatment gallery" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-primary-dark/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary-light text-sm tracking-widest uppercase mb-4">Our Portfolio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-7xl text-white mb-5">Gallery</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
            A look inside our treatments and the beautiful results our clients experience.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {filterOptions.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-sm transition-all ${filter === cat ? "bg-primary text-white" : "text-text-light hover:bg-cream"}`}>{cat}</button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-pad bg-white">
        <div className="max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filtered.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => setSelected(item)}
                    className="group cursor-pointer rounded-2xl overflow-hidden relative aspect-[4/5] shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <Image src={item.image} alt={item.treatment} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-primary-light text-xs tracking-widest uppercase mb-1">{item.category}</p>
                      <p className="text-white font-display text-lg sm:text-xl">{item.treatment}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-dark/90 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="relative rounded-2xl overflow-hidden max-w-3xl w-full max-h-[80vh]">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"><X size={20} /></button>
              <div className="relative aspect-[3/4] sm:aspect-[4/3]">
                <Image src={selected.image} alt={selected.treatment} fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-6 sm:p-8">
                <p className="text-primary-light text-xs tracking-widest uppercase mb-1">{selected.category}</p>
                <p className="text-white font-display text-2xl sm:text-3xl mb-4">{selected.treatment}</p>
                <a href="https://rozamassage.glossgenius.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-pink text-white px-6 py-3 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
                  Book This Treatment <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-pink" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 text-center max-w-[800px] mx-auto px-6 sm:px-8">
          <AnimatedSection className="h-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">Your Transformation Awaits</h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-[600px] mx-auto">Join 500+ women who have experienced the power of expert facial sculpting.</p>
            <a href="https://rozamassage.glossgenius.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:-translate-y-0.5 transition-all shadow-lg">
              Book Now <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
