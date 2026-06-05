"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "WayInsight has completely changed how science is taught in our school. Students who used to dread chemistry equations are now eagerly asking for the VR session. Their interest and attendance have spiked.",
    name: "Dr. Ramesh Chandra",
    designation: "Principal",
    institution: "Govt. Boys Sr. Sec. School, Gurugram",
    avatar: "👨‍🏫",
  },
  {
    quote: "As CSR partners, transparency is crucial. WayInsight's Learning Analytics Dashboard allows us to track real-time hardware usage and student performance metrics directly. It makes auditing our impact seamless.",
    name: "Meera Deshmukh",
    designation: "Head of CSR",
    institution: "Vanguard Infra Group",
    avatar: "👩‍💼",
  },
  {
    quote: "Integrating AR modules into the state curriculum has made teacher training incredibly simple. The technology aligns with our textbook chapters, so teachers don't need to change their daily routines.",
    name: "K. R. Kumar",
    designation: "Joint Director (Academic)",
    institution: "State Council of Educational Research & Training",
    avatar: "👨‍💼",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Quote Ornament */}
        <div className="flex justify-center mb-6 text-secondary/20">
          <Quote className="w-16 h-16 fill-secondary/10" />
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[250px] flex flex-col justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <blockquote className="text-xl md:text-2xl font-medium text-slate-800 font-sans italic leading-relaxed">
                &ldquo;{testimonials[index].quote}&rdquo;
              </blockquote>

              <div className="space-y-1">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm border border-slate-100 mx-auto mb-3">
                  {testimonials[index].avatar}
                </div>
                <cite className="not-italic font-bold text-slate-800 font-heading text-base block">
                  {testimonials[index].name}
                </cite>
                <span className="text-xs font-semibold text-slate-500 block">
                  {testimonials[index].designation}, {testimonials[index].institution}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-200/50">
          {/* Dot Indicators */}
          <div className="flex gap-2.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  idx === index ? "w-8 bg-secondary" : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevStep}
              className="p-3 bg-white hover:bg-slate-100 rounded-full border border-slate-200 text-slate-700 shadow-sm transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextStep}
              className="p-3 bg-white hover:bg-slate-100 rounded-full border border-slate-200 text-slate-700 shadow-sm transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
