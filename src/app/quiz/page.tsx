"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Star, Clock, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    question: "What's your primary skin concern?",
    subtitle: "Choose the one that matters most to you.",
    options: [
      { label: "Sagging & Loss of Firmness", value: "sagging" },
      { label: "Fine Lines & Wrinkles", value: "fine-lines" },
      { label: "Puffiness & Water Retention", value: "puffiness" },
      { label: "Dull, Tired-Looking Skin", value: "dullness" },
      { label: "Jaw Tension & TMJ", value: "tmj" },
      { label: "Body Sculpting & Contouring", value: "body" },
    ],
  },
  {
    question: "What's your skin type?",
    subtitle: "This helps us customize your treatment.",
    options: [
      { label: "Dry", value: "dry" },
      { label: "Oily", value: "oily" },
      { label: "Combination", value: "combination" },
      { label: "Sensitive", value: "sensitive" },
      { label: "Normal", value: "normal" },
      { label: "Not Sure", value: "unsure" },
    ],
  },
  {
    question: "How often do you get professional treatments?",
    subtitle: "This helps us recommend the right frequency.",
    options: [
      { label: "This would be my first time", value: "first" },
      { label: "A few times a year", value: "occasional" },
      { label: "Monthly", value: "monthly" },
      { label: "Weekly or bi-weekly", value: "frequent" },
    ],
  },
  {
    question: "What's your ideal treatment experience?",
    subtitle: "We want to match your perfect vibe.",
    options: [
      { label: "Quick & effective (30–60 min)", value: "quick" },
      { label: "Balanced session (60–90 min)", value: "balanced" },
      { label: "Full luxury ritual (90–150 min)", value: "luxury" },
      { label: "Just tell me what's best!", value: "expert" },
    ],
  },
];

interface Rec {
  name: string;
  price: string;
  duration: string;
  match: string;
  description: string;
}

function getRecommendations(answers: string[]): Rec[] {
  const concern = answers[0];
  const experience = answers[3];
  const recs: Rec[] = [];

  if (concern === "tmj") {
    recs.push({
      name: "TMJ Sculpt",
      price: "$180",
      duration: "90 min",
      match: "98%",
      description:
        "Your perfect match! Targets jaw tension while sculpting and lifting facial contours.",
    });
  }
  if (concern === "sagging" || concern === "fine-lines") {
    recs.push({
      name: "Facial + Buccal Massage",
      price: "$160",
      duration: "60 min",
      match: "96%",
      description:
        "The buccal technique works from within to lift and tone facial muscles — incredible for firmness.",
    });
  }
  if (concern === "puffiness") {
    recs.push({
      name: "Facial Massage + Mask + Hands",
      price: "$110",
      duration: "60 min",
      match: "94%",
      description:
        "Lymphatic-focused facial to dramatically reduce puffiness and leave you glowing.",
    });
  }
  if (concern === "dullness") {
    recs.push({
      name: "Facial + Rejuvenation Care",
      price: "$155",
      duration: "90 min",
      match: "95%",
      description:
        "Intensive rejuvenation combining sculpting with targeted skincare for radiance.",
    });
  }
  if (concern === "body") {
    recs.push({
      name: "Cavitation + RF Lifting",
      price: "$160",
      duration: "120 min",
      match: "97%",
      description:
        "Our most powerful body contouring treatment combining four technologies.",
    });
  }
  if (experience === "luxury" || experience === "expert") {
    recs.push({
      name: "5-in-1 Luxury Ritual",
      price: "$290",
      duration: "150 min",
      match: "92%",
      description:
        "The ultimate experience — five treatments in one session for complete transformation.",
    });
  }
  if (recs.length < 2) {
    recs.push({
      name: "Facial + Buccal + Skincare",
      price: "$200",
      duration: "120 min",
      match: "90%",
      description:
        "Comprehensive facial combining buccal massage, sculpting, and complete skincare.",
    });
  }
  if (recs.length < 3) {
    recs.push({
      name: "4-in-1 Complex",
      price: "$260",
      duration: "150 min",
      match: "88%",
      description: "Face, body, buccal, and rejuvenation in one package — save $20!",
    });
  }
  return recs.slice(0, 3);
}

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (value: string) => {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    if (step < steps.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setDone(true), 300);
    }
  };

  const recs = done ? getRecommendations(answers) : [];

  // Start screen
  if (!started) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6 sm:px-8 pt-24">
        <AnimatedSection className="max-w-xl text-center h-auto">
          <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-pink flex items-center justify-center mx-auto mb-8 shadow-[0_4px_15px_rgba(196,120,139,0.3)]">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Personalized Recommendations
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
            Find Your Perfect Treatment
          </h1>
          <p className="text-text-light text-base sm:text-lg leading-relaxed mb-3">
            Answer 4 quick questions and we&apos;ll recommend the treatments
            perfectly matched to your goals.
          </p>
          <p className="text-text-light text-sm mb-10">
            Takes less than 60 seconds
          </p>
          <button
            onClick={() => setStarted(true)}
            className="inline-flex items-center gap-2 bg-gradient-pink text-white px-10 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)]"
          >
            Start Quiz
            <ArrowRight size={16} />
          </button>
        </AnimatedSection>
      </main>
    );
  }

  // Results screen
  if (done) {
    return (
      <main className="min-h-screen bg-white pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-14 h-auto">
            <div className="w-14 h-14 rounded-full bg-gradient-pink flex items-center justify-center mx-auto mb-6">
              <Check className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-dark section-title-underline">
              Perfect Treatments for You
            </h2>
            <p className="text-text-light text-base sm:text-lg max-w-[600px] mx-auto mt-5">
              Based on your answers, here are our top recommendations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
            {recs.map((rec, i) => (
              <AnimatedSection key={rec.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className={`group rounded-2xl overflow-hidden h-full flex flex-col bg-white shadow-sm hover:shadow-lg transition-all duration-300 relative ${
                    i === 0 ? "border-2 border-primary" : "border border-gray-200/60 hover:border-primary/40"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {i === 0 && (
                    <div className="absolute top-4 right-4 bg-gradient-pink text-white px-3 py-1 rounded-full text-[0.7rem] font-semibold uppercase tracking-wide z-10 flex items-center gap-1">
                      <Star size={10} className="fill-white" /> Best Match
                    </div>
                  )}

                  <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col">
                    <span className="text-sm bg-gray-100 text-text-dark px-3 py-1 rounded-full w-fit mb-4 font-medium">
                      {rec.match} match
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-dark mb-3">
                      {rec.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="gradient-text-pink font-display text-3xl sm:text-[2rem] font-extrabold">
                        {rec.price}
                      </span>
                      <span className="text-text-light text-sm flex items-center gap-1">
                        <Clock size={14} /> {rec.duration}
                      </span>
                    </div>
                    <p className="text-text-light text-sm leading-relaxed mb-6 flex-1">
                      {rec.description}
                    </p>
                    <a
                      href="https://rozamassage.glossgenius.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gradient-pink text-white py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(196,120,139,0.3)] hover:shadow-[0_6px_25px_rgba(196,120,139,0.4)] mt-auto"
                    >
                      Book Now
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setDone(false);
                setStep(0);
                setAnswers([]);
              }}
              className="text-text-light text-sm hover:text-primary transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Quiz screen
  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <main className="min-h-screen flex flex-col bg-white pt-24">
      {/* Progress */}
      <div className="w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-gradient-pink"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 py-16">
        <div className="max-w-xl w-full">
          <p className="text-primary text-xs tracking-widest uppercase text-center mb-8">
            Question {step + 1} of {steps.length}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-[2rem] font-bold text-dark text-center mb-2">
                {current.question}
              </h2>
              <p className="text-text-light text-center text-sm sm:text-base mb-10">
                {current.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.options.map((opt) => (
                  <motion.button
                    key={opt.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(opt.value)}
                    className={`p-4 sm:p-5 text-left rounded-xl border-2 transition-all text-sm ${
                      answers[step] === opt.value
                        ? "border-primary bg-primary/5"
                        : "border-gray-200/60 hover:border-primary/40 bg-white"
                    }`}
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-8 mx-auto flex items-center gap-2 text-text-light text-sm hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
