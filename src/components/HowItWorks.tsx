"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Wrench, GraduationCap, CloudLightning, Compass, BarChart4 } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "School Assessment",
    description: "Conduct infrastructural checks for electrical support, room sizing, security, and teacher readiness.",
    icon: Search,
    color: "bg-teal-500",
  },
  {
    step: "02",
    title: "Hardware Installation",
    description: "Set up premium VR headsets, custom secure charging carts, and projector installations.",
    icon: Wrench,
    color: "bg-purple-500",
  },
  {
    step: "03",
    title: "Teacher Training",
    description: "Provide certified workshops covering VR operations, integration with lesson plans, and classroom management.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    step: "04",
    title: "Content Deployment",
    description: "Load curriculum-mapped local-language interactive animations and offline content libraries.",
    icon: CloudLightning,
    color: "bg-amber-500",
  },
  {
    step: "05",
    title: "Student Experience",
    description: "Launch classroom learning where students interact with spatial simulations of STEM concepts.",
    icon: Compass,
    color: "bg-emerald-500",
  },
  {
    step: "06",
    title: "Performance Tracking",
    description: "Analyze monthly reports containing app usage statistics, attendance rates, and progress metrics.",
    icon: BarChart4,
    color: "bg-slate-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
            Deployment Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-primary">
            How WayInsight is Implemented
          </h3>
          <p className="text-base text-slate-600 font-sans">
            We follow a structured, state-tested onboarding roadmap to convert a traditional government school classroom into an active immersive lab in less than 3 weeks.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop connecting SVG line */}
          <div className="hidden lg:block absolute top-[48px] left-[5%] right-[5%] h-[2px] bg-slate-100 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-secondary via-accent to-secondary"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center relative z-10 group-hover:border-secondary group-hover:bg-white transition-all duration-300 shadow-sm">
                      <Icon className="w-8 h-8 text-slate-700 group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    {/* Step Number Tag */}
                    <div className="absolute top-[-5px] right-[-5px] w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-md relative z-20">
                      {item.step}
                    </div>
                  </div>

                  {/* Copy Details */}
                  <div className="space-y-2 px-2">
                    <h4 className="text-base font-bold font-heading text-primary group-hover:text-secondary transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
