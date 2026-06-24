"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolarSystemCanvas from "@/components/SolarSystemCanvas";

import { 
  CheckCircle2, 
  Database, 
  FileText, 
  ShieldAlert, 
  LineChart, 
  Clock, 
  Layers 
} from "lucide-react";

export default function ServicesClient() {
  const [sunColor, setSunColor] = useState("#f59e0b");

  const vrModules = [
    { name: "Solar System Exploration", desc: "Travel across orbit planes in real time.", color: "#f59e0b" },
    { name: "Deep Sea Diving", desc: "Interact with marine life ecosystems.", color: "#15a37e" },
    { name: "Volcanic Eruptions", desc: "Witness magma layers inside a volcano.", color: "#dc2626" },
    { name: "Journey to Mars", desc: "Walk on the red surface of Mars.", color: "#ea580c" },
  ];

  const aiFeatures = [
    {
      title: "AI Bilingual Tutor",
      desc: "Students ask questions in Hindi or English during or after VR/AR sessions. AI gives instant, curriculum-relevant explanations tied to what they just experienced. Works offline after initial sync.",
      icon: LanguagesIcon,
    },
    {
      title: "Adaptive Quizzes",
      desc: "AI-generated quizzes that adjust difficulty in real time based on each student's performance history. No two students see the same quiz.",
      icon: Sparkles,
    },
    {
      title: "Concept Gap Detection",
      desc: "AI analyses quiz responses and engagement data to identify exactly which concepts each student struggles with — and flags them for the teacher automatically.",
      icon: ShieldAlert,
    },
    {
      title: "Teacher Dashboard",
      desc: "Real-time class performance data, concept mastery heatmaps, auto-generated weekly reports. A teacher can read the full report in under 5 minutes.",
      icon: LineChart,
    },
    {
      title: "Session Reports",
      desc: "After every session, AI generates a structured report — topics covered, engagement observations, class-level and student-level insights, recommended follow-up activities.",
      icon: FileText,
    },
    {
      title: "School Admin Portal",
      desc: "School principals and education officers get school-wide analytics: usage tracking, learning outcome trends, and compliance reports for government schemes.",
      icon: Database,
    },
  ];

  const subjectCards = [
    {
      subject: "Science",
      topics: "Human body, solar system, electricity, force & motion",
      tag: "VR + AR Enabled",
      bg: "bg-brand-green-tint text-brand-green border-brand-green/10",
    },
    {
      subject: "Geography",
      topics: "Earth layers, water cycle, tectonic plates, climate zones",
      tag: "VR + AR Enabled",
      bg: "bg-brand-green-tint text-brand-green border-brand-green/10",
    },
    {
      subject: "Mathematics",
      topics: "3D geometry, fractions, algebraic concepts, mensuration",
      tag: "AR Exclusive",
      bg: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      subject: "History",
      topics: "Ancient civilisations, freedom movement, historical maps",
      tag: "VR Exclusive",
      bg: "bg-purple-100 text-purple-800 border-purple-200",
    },
  ];



  return (
    <div className="relative min-h-screen bg-white text-text-primary selection:bg-brand-green/20 selection:text-brand-green">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Services Hero (Dark Navy) */}
      <section className="relative pt-36 pb-24 bg-deep-navy text-white overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(21,163,126,0.06),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green-light bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            Our Services
          </span>
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-display font-extrabold tracking-tight leading-[1.05]">
            Everything a School Needs. <br />
            <span className="text-gradient-green">Nothing It Doesn&apos;t.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-sans font-medium max-w-xl mx-auto leading-relaxed">
            Three services. One managed provider. Zero upfront cost. Built for every school in India.
          </p>
        </div>
      </section>

      {/* Service 01 — VR Section */}
      <section id="vr" className="py-24 border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Orbit Canvas */}
          <div className="lg:col-span-6 relative w-full h-[380px] md:h-[500px]">
            <SolarSystemCanvas sunColor={sunColor} />
          </div>

          {/* Right Column: VR content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Service 01
            </span>
            <h2 className="text-3xl font-display font-extrabold tracking-tight text-text-primary">
              Virtual Reality Learning Sessions
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-sans font-medium">
              Put on a VR headset and step inside the concept. Students are transported to the surface of Mars, inside the human heart, or witnessing tectonic plates collide — building spatial, emotional memory that textbooks simply cannot create.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed font-sans font-medium">
              All hardware is provided and managed by WayInsight. Standalone VR headsets — no PC, no cables, no IT setup required. Works in any classroom, anywhere.
            </p>

            {/* Interactive Module triggers */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                Interact with VR Canvas (Click to change simulation theme)
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {vrModules.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSunColor(m.color)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-20 ${
                      sunColor === m.color
                        ? "border-brand-green-light bg-brand-green-tint/50 shadow-sm"
                        : "border-light-grey hover:border-slate-300 bg-white"
                    }`}
                  >
                    <span className="text-xs font-bold text-text-primary block truncate">{m.name}</span>
                    <span className="text-[9px] text-text-muted font-sans font-medium block truncate mt-1">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bullet points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-light-grey">
              {[
                "Fully curriculum-aligned (NCERT)",
                "Trained facilitator on-site",
                "45-minute standard sessions",
                "Classes 6, 7 and 8 (STEM)",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-sans font-bold text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service 02 — AR Section (Reversed Layout) */}
      <section id="ar" className="py-24 bg-alt-bg border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6 text-left lg:order-1">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Service 02
            </span>
            <h2 className="text-3xl font-display font-extrabold tracking-tight text-text-primary">
              Augmented Reality Learning Sessions
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-sans font-medium">
              AR overlays 3D content onto the real world. A student points a tablet at their existing textbook page and sees a fully three-dimensional, rotatable, labeled model floating above it.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed font-sans font-medium">
              No new textbooks needed. AR enhances what schools already have — turning every printed diagram into an interactive 3D experience.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-light-grey">
              {[
                "Works on standard tablets",
                "Scans school's existing textbooks",
                "Rotate, zoom & tap models",
                "Ideal for Biology, Chemistry, Maths",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-sans font-bold text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-light shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Custom CSS/SVG Tablet 3D graphic */}
          <div className="lg:col-span-6 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md h-[340px] md:h-[400px] border border-light-grey rounded-2xl bg-white p-4 shadow-xl flex items-center justify-center overflow-hidden">
              {/* Textbook representation */}
              <div className="absolute bottom-4 w-[75%] h-[120px] bg-slate-100 rounded-lg border border-slate-200/80 p-3 shadow-inner flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="h-2 w-1/3 bg-slate-300 rounded" />
                  <div className="h-1.5 w-3/4 bg-slate-200 rounded" />
                  <div className="h-1.5 w-2/3 bg-slate-200 rounded" />
                </div>
                <div className="h-10 w-full border border-dashed border-brand-green-light/40 rounded flex items-center justify-center text-[8px] font-mono text-brand-green font-bold">
                  [ Scan Page Target ]
                </div>
              </div>

              {/* Tablet frame */}
              <div className="absolute top-10 w-[80%] h-[220px] bg-slate-900 rounded-[24px] border-[6px] border-slate-950 p-2 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-slate-700" />
                
                {/* Tablet screen displaying hologram */}
                <div className="w-full h-full bg-slate-950 rounded-xl relative overflow-hidden flex items-center justify-center">
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(21,163,126,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(21,163,126,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />
                  
                  {/* Floating Holographic DNA SVG */}
                  <div className="relative z-10 flex flex-col items-center gap-1.5">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 200 200"
                      fill="none"
                      className="text-brand-green-light animate-float"
                    >
                      <path
                        d="M30,100 Q65,40 100,100 T170,100"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeDasharray="6 4"
                      />
                      <path
                        d="M30,100 Q65,160 100,100 T170,100"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeDasharray="6 4"
                      />
                      {/* Connecting bars */}
                      {[48, 66, 84, 100, 116, 134, 152].map((xVal) => (
                        <line
                          key={xVal}
                          x1={xVal}
                          y1={100 - Math.sin((xVal - 30) / 140 * Math.PI) * 45}
                          x2={xVal}
                          y2={100 + Math.sin((xVal - 30) / 140 * Math.PI) * 45}
                          stroke="#7c3aed"
                          strokeWidth="3.5"
                        />
                      ))}
                    </svg>
                    <span className="font-mono text-[9px] font-bold text-brand-green-light uppercase tracking-wider">
                      Double Helix (AR Active)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 — AI Tools Section */}
      <section id="ai" className="py-24 bg-purple-50/70 border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Header & Badges */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-ai-purple bg-ai-purple-tint px-3.5 py-1.5 rounded-full border border-ai-purple/10">
                Service 03
              </span>
              <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-ai-purple bg-ai-purple/10 px-3.5 py-1.5 rounded-full border border-ai-purple/20">
                Offline-First AI Enabled
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-text-primary leading-tight">
              AI-Powered Education Tools
            </h2>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-sans font-medium">
              WayInsight&apos;s AI layer makes every session smarter. Students get a personal tutor. Teachers get actionable data. Schools get measurable outcomes.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-light-grey rounded-2xl p-6.5 hover:shadow-lg hover:border-ai-purple/35 transition-all duration-250 flex flex-col justify-between h-52"
                >
                  <div className="w-10 h-10 rounded-xl bg-ai-purple-tint border border-ai-purple/10 text-ai-purple flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 pt-4">
                    <h3 className="text-base font-display font-extrabold text-text-primary">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>



          <p className="text-center font-display font-extrabold text-ai-purple text-sm tracking-wide pt-4 max-w-xl mx-auto leading-relaxed">
            &quot;Not just VR content — an intelligent system that learns from every session and improves every teacher.&quot;
          </p>
        </div>
      </section>

      {/* Session Format Section */}
      <section className="py-24 border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Arc Table */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2 text-left">
              <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
                Timeline
              </span>
              <h3 className="text-2xl font-display font-extrabold text-text-primary">
                45-Minute Session Format
              </h3>
            </div>
            
            <div className="border border-light-grey rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left font-sans text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                    <th className="px-6 py-4 border-b border-white/5">Phase</th>
                    <th className="px-6 py-4 border-b border-white/5">Activity</th>
                    <th className="px-6 py-4 border-b border-white/5">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-grey font-medium text-text-secondary">
                  <tr className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">Introduction</td>
                    <td className="px-6 py-4">Orientation & expectation setting</td>
                    <td className="px-6 py-4 font-mono font-bold text-brand-green">10 min</td>
                  </tr>
                  <tr className="bg-alt-bg hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">Immersion</td>
                    <td className="px-6 py-4">Active AR/VR curriculum session</td>
                    <td className="px-6 py-4 font-mono font-bold text-brand-green">25 min</td>
                  </tr>
                  <tr className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-text-primary">Reflection</td>
                    <td className="px-6 py-4">AI Tutor discussion & quiz</td>
                    <td className="px-6 py-4 font-mono font-bold text-brand-green">10 min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-brand-green-tint border-l-4 border-brand-green p-4.5 rounded-r-xl">
              <p className="text-xs font-sans font-bold leading-relaxed text-brand-green-light">
                &quot;People retain 75% of what they experience vs 10% of what they read — Edgar Dale&quot;
              </p>
            </div>
          </div>

          {/* Right Column: Before/After Workflow */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2 text-left">
              <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
                Logistics
              </span>
              <h3 className="text-2xl font-display font-extrabold text-text-primary">
                End-to-End Workflow
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { step: "Before Session", desc: "Teacher schedules the topic online. WayInsight reviews the class size and sets up NCERT lesson plan mapping.", icon: Clock },
                { step: "During Session", desc: "Our facilitator sets up the standalone hardware, runs the 45-min immersion, and monitors student metrics on-site.", icon: Layers },
                { step: "After Session", desc: "Principal receives compliance metrics for schemes. Teacher gets detailed classroom concept mastery dashboards.", icon: FileText },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4.5 bg-alt-bg border border-light-grey rounded-2xl items-start">
                    <div className="w-9 h-9 rounded-lg bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">{item.step}</h4>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans font-medium">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content Library */}
      <section className="py-24 border-b border-light-grey select-none bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Header */}
          <div className="text-left space-y-2">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Curriculum
            </span>
            <h2 className="text-3xl font-display font-extrabold text-text-primary">
              Content Library Matrix
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjectCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-light-grey rounded-2xl p-6.5 hover:shadow-md hover:border-brand-green-light/40 transition-all duration-200 flex flex-col justify-between h-48"
              >
                <div className="space-y-2">
                  <span className={`text-[8px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${card.bg}`}>
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-display font-extrabold text-text-primary pt-2">
                    {card.subject}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary font-sans leading-relaxed font-medium">
                  {card.topics}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
}

// Helper icons
function LanguagesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
      <path d="M14 14a8 8 0 0 1-5-5" />
      <path d="M9 12a10 9 0 0 0 3-4" />
    </svg>
  );
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
    </svg>
  );
}
