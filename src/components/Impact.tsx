"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Percent, ThumbsUp } from "lucide-react";

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
            Proven Outcomes
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-primary">
            Empirical Educational Impact
          </h3>
          <p className="text-base text-slate-600 font-sans">
            Our results are verified through third-party educational research in partnership with state research councils (SCERT). We measure real learning growth.
          </p>
        </div>

        {/* Impact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Metrics Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5"
            >
              <div className="p-4 rounded-xl bg-secondary/10 text-secondary">
                <Percent className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-primary font-heading">+42%</h4>
                <p className="text-sm font-semibold text-slate-800 font-sans">Learning Improvement</p>
                <p className="text-xs text-slate-500 font-medium">In STEM conceptual testing scores</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5"
            >
              <div className="p-4 rounded-xl bg-accent/10 text-accent">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-primary font-heading">96%</h4>
                <p className="text-sm font-semibold text-slate-800 font-sans">Teacher Satisfaction</p>
                <p className="text-xs text-slate-500 font-medium">Reported easier explanation of abstract ideas</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-primary font-heading">150,000+</h4>
                <p className="text-sm font-semibold text-slate-800 font-sans">Assessed Lessons Completed</p>
                <p className="text-xs text-slate-500 font-medium">Across science, mathematics, and geography</p>
              </div>
            </motion.div>
          </div>

          {/* Interactive Chart Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-8">
            <div>
              <h4 className="text-lg font-bold font-heading text-primary">STEM Concept Clarity Index</h4>
              <p className="text-xs text-slate-500 font-medium">Comparing classroom performance before and after VR deployments</p>
            </div>

            {/* Chart illustration with SVGs */}
            <div className="space-y-6">
              {/* Category 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Physics: Light & Refraction</span>
                  <span className="text-secondary font-bold">82% vs 40% (Traditional)</span>
                </div>
                <div className="relative h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                  {/* Traditional score */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-slate-400 rounded-full"
                  />
                  {/* VR score overlay */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-teal-400 opacity-90 rounded-full"
                  />
                </div>
              </div>

              {/* Category 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Chemistry: Atomic Bonds</span>
                  <span className="text-secondary font-bold">78% vs 35% (Traditional)</span>
                </div>
                <div className="relative h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-slate-400 rounded-full"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-teal-400 opacity-90 rounded-full"
                  />
                </div>
              </div>

              {/* Category 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Biology: Human Circulatory System</span>
                  <span className="text-secondary font-bold">85% vs 44% (Traditional)</span>
                </div>
                <div className="relative h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "44%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-slate-400 rounded-full"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-teal-400 opacity-90 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Legend indicators */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-teal-400" />
                <span>WayInsight AR/VR Lab</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-3 h-3 rounded-full bg-slate-400" />
                <span>Traditional Textbook Classroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
