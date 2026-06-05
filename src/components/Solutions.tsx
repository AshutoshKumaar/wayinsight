"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Cpu, Award, Library, LineChart, ShieldCheck, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "AR Learning Modules",
    description: "Interactive 3D overlays mapped directly to State Board and CBSE textbooks. Students scan codes to interact with models.",
    icon: BookOpen,
    ctaText: "Explore Modules",
    color: "from-teal-400 to-emerald-500",
    shadow: "shadow-teal-500/10",
  },
  {
    title: "VR Learning Labs",
    description: "Virtual laboratories that enable students to perform complex and dangerous science experiments in a simulated 3D environment.",
    icon: Cpu,
    ctaText: "Explore VR Labs",
    color: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/10",
  },
  {
    title: "Teacher Training Programs",
    description: "Comprehensive capacity-building workshops to train government school teachers in digital pedagogy and AR/VR integration.",
    icon: Award,
    ctaText: "View Program details",
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/10",
  },
  {
    title: "Digital Content Library",
    description: "Over 5,000+ K-12 learning objects, interactive animations, and worksheets mapped in regional languages like Hindi and Kannada.",
    icon: Library,
    ctaText: "Browse Catalog",
    color: "from-secondary to-teal-600",
    shadow: "shadow-secondary/10",
  },
  {
    title: "Learning Analytics Dashboard",
    description: "Web-based portal for department officials, principals, and CSR donors to monitor equipment usage and student performance.",
    icon: LineChart,
    ctaText: "Request Demo Access",
    color: "from-accent to-pink-500",
    shadow: "shadow-accent/10",
  },
  {
    title: "Implementation Support",
    description: "End-to-end management, including local hardware support, classroom redesign, power backup, and quarterly impact assessments.",
    icon: ShieldCheck,
    ctaText: "Learn about Support",
    color: "from-slate-700 to-slate-900",
    shadow: "shadow-slate-900/10",
  },
];

interface SolutionsProps {
  onOpenDemoModal: () => void;
}

export default function Solutions({ onOpenDemoModal }: SolutionsProps) {
  return (
    <section id="solutions" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[20%] right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
            Our Offerings
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-primary">
            End-to-End AR/VR Education Suite
          </h3>
          <p className="text-base text-slate-600 font-sans">
            We provide a complete ecosystem comprising curated regional content, certified teacher training, high-end hardware, and data dashboards to ensure successful long-term impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:scale-102 hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon with gradient border/background */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-10`} />
                    <Icon className="w-6 h-6 text-slate-800 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-extrabold font-heading text-primary group-hover:text-secondary transition-colors duration-200">
                      {sol.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-50">
                  <button
                    onClick={onOpenDemoModal}
                    className="text-xs font-bold text-slate-800 group-hover:text-secondary flex items-center gap-1.5 transition-colors duration-200 focus:outline-none"
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
