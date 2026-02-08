"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Award, ArrowRight, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80"
            alt="Spa ambiance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-primary-dark/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-light text-sm tracking-widest uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            Meet Roza
          </motion.h1>
        </div>
      </section>

      {/* Main about */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                <div className="relative rounded-[20px] overflow-hidden aspect-[3/4] shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1560750588-73b555deaddd?w=800&q=80"
                    alt="Roza - Licensed Cosmetologist"
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
                  Passion Meets
                  <br />
                  <span className="italic gradient-text-pink">Precision</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-text-light text-[1rem] leading-[1.8] mb-5">
                  Roza Baidavletova is a licensed cosmetologist and the founder of
                  Spa &amp; Sculpting by Roza, Charlotte&apos;s premier destination
                  for luxury facial sculpting and advanced cosmetology treatments.
                </p>
                <p className="text-text-light text-[1rem] leading-[1.8] mb-5">
                  With a deep passion for facial anatomy and a meticulous approach
                  to every treatment, Roza has built a reputation for delivering
                  transformative results. Her specialties include buccal facial
                  massage, facial massage, head massage, and TMJ treatment —
                  advanced techniques that sculpt, lift, and relieve tension from
                  within.
                </p>
                <p className="text-text-light text-[1rem] leading-[1.8] mb-8">
                  Beyond facial sculpting, Roza offers a comprehensive range of
                  body contouring treatments using the latest technology. With
                  500+ happy clients aged 18 and older, every session is
                  personalized to deliver a complete wellness experience.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Shield, text: "Licensed Cosmetologist" },
                    { icon: Award, text: "Buccal Massage Certified" },
                    { icon: Sparkles, text: "Facial & Head Massage" },
                    { icon: Heart, text: "Body Contouring Trained" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 bg-white rounded-[12px] p-4 shadow-sm"
                    >
                      <div className="w-[44px] h-[44px] rounded-[12px] bg-gradient-pink flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <span className="text-text-dark font-medium text-[0.95rem]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-5 bg-gray-100">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <p className="font-display text-[2rem] md:text-[2.5rem] text-dark italic leading-[1.4] mb-6">
              &ldquo;Every face is a canvas. I don&apos;t change who you are — I
              reveal the beauty that&apos;s already there.&rdquo;
            </p>
            <p className="text-primary text-sm tracking-widest uppercase">
              — Roza Baidavletova
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-[2.5rem] font-bold text-dark section-title-underline mb-6">
              What We Believe
            </h2>
            <p className="text-text-light text-[1.1rem] max-w-[600px] mx-auto mt-6">
              Our approach to beauty is rooted in care, science, and natural results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Results",
                description:
                  "No needles, no fillers, no downtime. We harness advanced manual techniques and the body's own ability to rejuvenate for results that look and feel natural.",
                image:
                  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
              },
              {
                title: "Personalized Care",
                description:
                  "Every treatment is customized to your unique facial structure, skin concerns, and personal goals. Because true beauty isn't one-size-fits-all.",
                image:
                  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
              },
              {
                title: "Continuous Growth",
                description:
                  "Staying at the forefront of cosmetology means constant training, research, and mastery of the latest techniques to deliver the best possible results.",
                image:
                  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
              },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group rounded-[20px] overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 h-full border-2 border-transparent hover:border-primary"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="relative h-56">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-[1.5rem] font-bold text-dark mb-3">
                      {v.title}
                    </h3>
                    <p className="text-text-light leading-[1.6]">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
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
              Experience the Difference
            </h2>
            <p className="text-white/90 text-[1.25rem] leading-[1.8] mb-10 max-w-[600px] mx-auto">
              Book your first appointment and see why 500+ clients trust
              Roza with their skin.
            </p>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-dark px-10 py-5 rounded-full text-[1.1rem] font-bold hover:-translate-y-0.5 transition-all shadow-lg"
            >
              Book Your Treatment
              <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
