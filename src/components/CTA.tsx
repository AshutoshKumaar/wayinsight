"use client";

import React from "react";
import { Calendar, Mail, Sparkles } from "lucide-react";

import Link from "next/link";

interface CTAProps {
  onOpenDemoModal: () => void;
}

export default function CTA({ onOpenDemoModal }: CTAProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Banner with gradient backdrop */}
        <div className="relative rounded-3xl overflow-hidden bg-primary px-8 py-16 md:p-16 lg:p-20 shadow-2xl border border-white/5">
          {/* Ornaments */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-slate-900 to-slate-950 opacity-90 z-0" />
          <div className="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-[90px] z-0" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[90px] z-0" />

          {/* Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold border border-white/10 uppercase tracking-widest w-fit mx-auto lg:mx-0">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>Transform Today</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
                Ready to Transform learning?
              </h3>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
                Bring immersive VR labs and interactive AR simulations to your district or school. Partner with us to shape the future of Indian education.
              </p>
            </div>

            {/* Action buttons column */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto bg-secondary hover:bg-teal-600 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-secondary/20 hover:shadow-secondary/35 hover:scale-102 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 group-hover:scale-115 transition-transform duration-200" />
                Book a Demo
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Mail className="w-5 h-5 group-hover:scale-115 transition-transform duration-200" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
