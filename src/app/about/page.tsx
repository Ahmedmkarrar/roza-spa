"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Award, ArrowRight } from "lucide-react";
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
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-primary-dark/40" />
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
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1560750588-73b555deaddd?w=800&q=80"
                  alt="Roza - Licensed Cosmetologist"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection>
                <p className="text-primary text-sm tracking-widest uppercase mb-4">
                  About Roza
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-dark mb-6 leading-tight">
                  Passion Meets
                  <br />
                  <span className="italic">Precision</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Roza Baidavletova is a licensed cosmetologist and the founder of
                  Spa & Sculpting by Roza, Charlotte&apos;s premier destination
                  for luxury facial sculpting and advanced cosmetology treatments.
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">
                  With a deep passion for facial anatomy and a meticulous approach
                  to every treatment, Roza has built a reputation for delivering
                  transformative results. Her specialties include buccal facial
                  massage, facial massage, head massage, and TMJ treatment —
                  advanced techniques that sculpt, lift, and relieve tension from
                  within.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Beyond facial sculpting, Roza offers a comprehensive range of
                  body contouring treatments using the latest technology. With
                  500+ happy clients aged 18 and older, every session is
                  personalized to deliver a complete wellness experience.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, text: "Licensed Cosmetologist" },
                    { icon: Award, text: "Buccal Massage Certified" },
                    { icon: Sparkles, text: "Facial & Head Massage" },
                    { icon: Heart, text: "Body Contouring Trained" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 p-3 bg-cream rounded-xl text-sm text-gray-700"
                    >
                      <item.icon size={18} className="text-primary shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-display text-3xl md:text-4xl text-dark italic leading-relaxed mb-6">
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
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              Our Approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-dark">
              What We Believe
            </h2>
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
                <div className="rounded-2xl overflow-hidden bg-cream h-full">
                  <div className="relative h-56">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-dark mb-3">
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Experience the Difference
            </h2>
            <p className="text-white/70 mb-10 max-w-md mx-auto">
              Book your first appointment and see why 500+ clients trust
              Roza with their skin.
            </p>
            <a
              href="https://rozamassage.glossgenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full text-sm font-medium hover:bg-cream transition-colors"
            >
              Book Your Treatment
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
