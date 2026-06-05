"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Landmark, ShieldCheck } from "lucide-react";

const caseStudies = [
  {
    tag: "Government Partnership",
    title: "State-wide STEM Upliftment in Haryana",
    location: "Gurugram & Faridabad Districts",
    schoolsCount: "120 Government Schools",
    problem: "Low enrollment in science streams and lack of physical labs in rural high schools led to declining test scores in Grade 10 board exams.",
    solution: "Deployed 120 VR Science Labs containing physics and chemistry simulations, coupled with localized Hindi instruction models and teacher certifications.",
    results: [
      "Board exam passing percentage in Science rose by 18%.",
      "94% active student attendance during laboratory hours.",
      "75 certified government teachers successfully managing labs independently.",
    ],
    beforeMetric: "52% average science score",
    afterMetric: "74% average science score",
    icon: Landmark,
    accent: "text-secondary border-secondary/20 bg-secondary/5",
    color: "from-teal-500 to-emerald-500",
  },
  {
    tag: "CSR Collaboration",
    title: "NTPC CSR Digital Literacy Campaign",
    location: "Singrauli & Ramagundam Districts",
    schoolsCount: "85 Government Schools",
    problem: "Limited access to interactive educational tools for underprivileged students. Regional language content was unavailable.",
    solution: "Rolled out offline-enabled AR modules mapped to Telugu and Hindi state board curricula, plus custom rugged charging carts for schools with erratic power supply.",
    results: [
      "85 classroom smart labs operational with zero power interruption issues.",
      "12,000+ active student profiles regularly using modules.",
      "Highly appreciated by District Education Officers (DEO) in impact audit reports.",
    ],
    beforeMetric: "35% student engagement rate",
    afterMetric: "92% student engagement rate",
    icon: ShieldCheck,
    accent: "text-accent border-accent/20 bg-accent/5",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
            Proof of Success
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-primary">
            Featured Case Studies
          </h3>
          <p className="text-base text-slate-600 font-sans">
            Read how we work together with state ministries and CSR partners to implement cost-effective, high-yield digital classrooms.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-slate-50/50 rounded-3xl p-8 lg:p-12 border transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${
                  hoveredIndex === idx ? "border-slate-200 bg-white shadow-xl shadow-slate-100" : "border-slate-100"
                }`}
              >
                {/* Info Text Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${study.accent}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {study.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">• {study.schoolsCount}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl lg:text-3xl font-extrabold font-heading text-primary leading-snug">
                      {study.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500">{study.location}</p>
                  </div>

                  {/* Problem & Solution block */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div>
                      <h5 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">The Problem</h5>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">The Solution</h5>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics and Results Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0 lg:border-l lg:border-slate-100 lg:pl-12">
                  {/* Before / After box */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-secondary" />
                      Performance Comparison
                    </h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-bold uppercase">Before</span>
                        <p className="text-sm font-extrabold text-slate-500 line-through">{study.beforeMetric.split(" ")[0]}</p>
                        <p className="text-xs text-slate-500 font-medium">{study.beforeMetric.split(" ").slice(1).join(" ")}</p>
                      </div>
                      <div className="space-y-1 border-l border-slate-100 pl-4">
                        <span className="text-[10px] text-secondary font-bold uppercase">After</span>
                        <p className="text-lg font-extrabold text-secondary">{study.afterMetric.split(" ")[0]}</p>
                        <p className="text-xs text-slate-600 font-semibold">{study.afterMetric.split(" ").slice(1).join(" ")}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results Bullet Points */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Key Outcomes</h5>
                    <ul className="space-y-2.5">
                      {study.results.map((res, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
