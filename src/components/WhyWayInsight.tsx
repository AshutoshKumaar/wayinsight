"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronRight, Eye, ShieldAlert, Cpu, Sparkles, LineChart } from "lucide-react";

const problems = [
  {
    id: "p1",
    title: "Low Classroom Engagement",
    description: "Traditional text-heavy blackboards lead to distractions and low attendance in government school classrooms.",
    metric: "45% average student attention span",
    icon: AlertCircle,
  },
  {
    id: "p2",
    title: "Poor Concept Retention",
    description: "Rote learning techniques without practical application result in students forgetting science and math theories quickly.",
    metric: "80% content forgotten in 30 days",
    icon: ShieldAlert,
  },
  {
    id: "p3",
    title: "Lack of Practical Exposure",
    description: "Schools rarely have functioning science laboratories or expensive equipment, leaving learning purely theoretical.",
    metric: "Less than 10% schools have fully equipped labs",
    icon: AlertCircle,
  },
];

const solutions = [
  {
    id: "s1",
    title: "AR Learning Modules",
    description: "Turns textbooks into interactive 3D structures. Students scan diagrams to see human organs or engines come to life.",
    metric: "3x increase in classroom interaction",
    icon: Eye,
  },
  {
    id: "s2",
    title: "VR Virtual Labs",
    description: "High-end physics and chemistry experiments inside headsets. Safe, cost-effective, and resource-independent.",
    metric: "Zero recurring laboratory setup costs",
    icon: Cpu,
  },
  {
    id: "s3",
    title: "Interactive Simulations",
    description: "Gamified learning activities for math and science. Students learn abstract equations through spatial touch.",
    metric: "95% student comprehension rate",
    icon: Sparkles,
  },
  {
    id: "s4",
    title: "Analytics Dashboard",
    description: "Tracks student progress, attendance, and conceptual clarity. Generates automated reports for school management.",
    metric: "Real-time updates for teachers & principals",
    icon: LineChart,
  },
];

export default function WhyWayInsight() {
  const [activeProblem, setActiveProblem] = useState<string | null>(null);

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
            The Classroom Revolution
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-primary">
            Why Traditional Classrooms Need Immersive Tech
          </h3>
          <p className="text-base text-slate-600 font-sans">
            Government schools face infrastructure limits. WayInsight bypasses physical constraints to deliver high-quality, practical STEM education using immersive AR/VR labs.
          </p>
        </div>

        {/* Side-by-side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Problems */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-6 bg-red-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                  The Challenges
                </span>
              </div>
              <h4 className="text-2xl font-bold font-heading text-primary mb-8">
                Traditional Learning Limits
              </h4>
            </div>

            <div className="space-y-4 flex-1">
              {problems.map((problem) => {
                const Icon = problem.icon;
                const isActive = activeProblem === problem.id;
                return (
                  <motion.div
                    key={problem.id}
                    onHoverStart={() => setActiveProblem(problem.id)}
                    onHoverEnd={() => setActiveProblem(null)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                      isActive
                        ? "bg-slate-50 border-red-200 shadow-sm"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl ${isActive ? "bg-red-50 text-red-500" : "bg-slate-100 text-slate-500"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-slate-800 font-heading">
                          {problem.title}
                        </h5>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          {problem.description}
                        </p>
                        <p className="text-[11px] font-semibold text-red-500 flex items-center gap-1 pt-1">
                          <span>⚠️</span> {problem.metric}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Center Connector Indicator for large screens */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <motion.div
              animate={{ x: activeProblem ? [0, 5, 0] : 0 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-xs font-semibold uppercase tracking-widest rotate-90 my-6">
                Bridge
              </span>
              <ChevronRight className="w-6 h-6 text-secondary" />
            </motion.div>
          </div>

          {/* Right Column: Solutions */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-6 bg-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  The WayInsight Advantage
                </span>
              </div>
              <h4 className="text-2xl font-bold font-heading text-primary mb-8">
                Immersive Learning Solutions
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary w-fit">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-800 font-heading text-sm">
                        {solution.title}
                      </h5>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100/50 mt-4">
                      <p className="text-[11px] font-semibold text-secondary flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {solution.metric}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
