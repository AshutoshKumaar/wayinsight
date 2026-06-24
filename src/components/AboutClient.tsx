"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Target, 
  Compass, 
  Heart, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  UserPlus, 
  Mail 
} from "lucide-react";

export default function AboutClient() {
  const values = [
    { title: "Equity First", desc: "Bringing elite spatial learning experiences to remote rural classrooms at zero upfront cost.", icon: Heart },
    { title: "Learning Over Spectacle", desc: "Every animation, torus ring, and interaction serves a curriculum concept, not just visuals.", icon: Target },
    { title: "Reliability", desc: "We own all hardware. Our facilitators deploy offline-first setups, ensuring sessions execute regardless of power or internet.", icon: ShieldCheck },
    { title: "Continuous Improvement", desc: "AI logs concept gaps and attendance trends, optimizing session formats every week.", icon: Activity },
    { title: "Integrity", desc: "Honoring state board syllabus matches and donor allocations exactly as reported.", icon: Compass },
    { title: "Social Purpose", desc: "Insight today, impact tomorrow. Bridging the digital divide for students in classes 6-8.", icon: TrendingUp },
  ];

  const team = [
    { name: "Sumant Kumar Yadav", role: "Founder & CEO", tag: "Founder", tagColor: "bg-brand-green-tint text-brand-green border-brand-green/20" },
    { name: "Tech Lead / CTO", role: "AR/VR/AI Engineering", tag: "Hiring Now", tagColor: "bg-warm-amber-tint text-warm-amber border-warm-amber/20" },
    { name: "Content Head", role: "Curriculum & Content Design", tag: "Hiring Now", tagColor: "bg-warm-amber-tint text-warm-amber border-warm-amber/20" },
    { name: "Operations Lead", role: "Logistics & Delivery", tag: "Hiring Soon", tagColor: "bg-slate-100 text-slate-600 border-slate-200" },
    { name: "Sales Lead", role: "School Partnerships", tag: "Hiring Soon", tagColor: "bg-slate-100 text-slate-600 border-slate-200" },
    { name: "Session Coordinators", role: "On-Ground Facilitators", tag: "Hiring First", tagColor: "bg-warm-amber-tint text-warm-amber border-warm-amber/20" },
  ];

  const mentors = [
    { role: "Education Policy Advisor", field: "Government & Policy" },
    { role: "EdTech Industry Mentor", field: "Startup & Product" },
    { role: "XR Technology Advisor", field: "AR/VR/AI Engineering" },
    { role: "Government Relations", field: "Policy & Procurement" },
    { role: "Impact Investor", field: "Fundraising & Strategy" },
    { role: "Business Mentor", field: "Strategy & Operations" },
  ];

  const chips = [
    "Bihar Govt School Alumnus",
    "IIM Sambalpur MBA",
    "Serial Entrepreneur",
    "Fame Finders 2026",
    "Swiggy & Zomato #1",
  ];

  return (
    <div className="relative min-h-screen bg-white text-text-primary selection:bg-brand-green/20 selection:text-brand-green">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Founder Section */}
      <section className="pt-36 pb-24 border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-deep-navy border border-white/5 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between h-[360px]">
              <div className="absolute top-[20%] right-[-5%] font-display text-[9rem] font-extrabold text-white/[0.03] select-none pointer-events-none">
                SKY
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,163,126,0.08),transparent_50%)]" />

              <div className="space-y-4 relative z-10">
                <span className="bg-warm-amber text-slate-950 font-mono text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Fame Finders 2026
                </span>
                <div className="pt-2">
                  <h3 className="text-2xl font-display font-extrabold text-white">
                    Sumant Kumar Yadav
                  </h3>
                  <p className="text-xs font-mono text-brand-green-light uppercase tracking-wider font-bold mt-1">
                    Founder & CEO, WayInsight
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 relative z-10">
                <div className="bg-white/5 border border-white/5 rounded-xl p-3.5">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">Education</span>
                  <span className="text-xs font-display font-extrabold text-white block mt-1.5">IIM MBA Candidate</span>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-3.5">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">Experience</span>
                  <span className="text-xs font-display font-extrabold text-white block mt-1.5">Age 23 Serial Founder</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="bg-alt-bg border border-light-grey text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary px-3 py-1.5 rounded-full"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              The Founder Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-text-primary tracking-tight leading-tight">
              From Quiet Beginnings to Bold Visions
            </h2>

            <div className="space-y-4 text-xs md:text-sm text-text-secondary leading-relaxed font-sans font-medium">
              <p>
                Sumant Kumar Yadav was raised in Badhauna Tanra, a small village in Samastipur, Bihar — far from the language of startups or elite institutions. From a farmer family. Educated entirely in government schools, later graduating from R.B. College under Lalit Narayan Mithila University.
              </p>
              <p>
                At just 19, Sumant launched his first venture with no mentors, no network, and no safety net. He built Tasty Food Boutique in Patna into one of the city&apos;s most trusted dining destinations — ranking No. 1 on Swiggy and Zomato among 700+ outlets. He later co-founded The Bharat Service, connecting skilled professionals with customers.
              </p>
              <p>
                Now at 23, while pursuing his MBA from IIM Sambalpur (Batch 2025-27), Sumant is building WayInsight — an AR/VR/AI startup designed to give every Indian child the learning experience he never had but always deserved. Featured as Cover Story, Fame Finders Magazine 2026.
              </p>
            </div>

            <div className="bg-brand-green-tint border-l-4 border-brand-green p-6 rounded-r-2xl space-y-3 shadow-sm">
              <p className="text-xs md:text-sm font-sans font-bold leading-relaxed text-brand-green-light italic">
                &quot;I grew up in a classroom where imagination had no tools. WayInsight is my answer to that. Every child who experiences a concept come alive in VR — that is the entire mission. We are not just building a startup. We are building the classroom I never had.&quot;
              </p>
              <span className="text-[10px] font-mono font-bold tracking-wider text-text-primary uppercase block">
                — Sumant Kumar Yadav, Founder & CEO, WayInsight
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-alt-bg border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Purpose
            </span>
            <h2 className="text-3xl font-display font-extrabold text-text-primary">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-light-grey rounded-2xl p-8 hover:shadow-lg transition-all duration-250 flex flex-col justify-between h-[250px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-text-primary">Our Mission</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans font-medium">
                  To bridge the gap between imagination and understanding by delivering curriculum-aligned AR, VR, and AI-powered learning experiences directly to students — at zero infrastructure cost to any school, anywhere in India.
                </p>
              </div>
            </div>

            <div className="bg-white border border-light-grey rounded-2xl p-8 hover:shadow-lg transition-all duration-250 flex flex-col justify-between h-[250px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-text-primary">Our Vision</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans font-medium">
                  To become India&apos;s leading immersive learning company — making world-class education technology accessible and affordable for every student, in every school, in every state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Beliefs
            </span>
            <h2 className="text-3xl font-display font-extrabold text-text-primary">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-light-grey rounded-2xl p-6.5 hover:shadow-md hover:border-brand-green-light/30 transition-all duration-200 flex flex-col justify-between h-48"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 pt-4">
                    <h3 className="text-base font-display font-extrabold text-text-primary">
                      {v.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans font-medium">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 bg-alt-bg border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Leadership
            </span>
            <h2 className="text-3xl font-display font-extrabold text-text-primary">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-light-grey rounded-2xl p-6.5 hover:shadow-lg hover:border-brand-green-light/40 transition-all duration-250 flex flex-col justify-between h-48"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-extrabold text-text-primary">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-text-secondary uppercase tracking-wider font-bold">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-light-grey mt-4">
                  <span className={`text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${member.tagColor}`}>
                    {member.tag}
                  </span>
                  {member.tag !== "Founder" && (
                    <span className="text-[10px] font-mono text-slate-400 font-bold flex items-center gap-1">
                      <UserPlus className="w-3.5 h-3.5 text-brand-green" /> Join Us
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-24 border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Advisors
            </span>
            <h2 className="text-3xl font-display font-extrabold text-text-primary">
              Mentors & Advisory Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-dashed border-light-grey hover:border-solid hover:border-brand-green-light/40 rounded-2xl p-6.5 hover:shadow-lg transition-all duration-250 flex flex-col justify-between h-44 group"
              >
                <div className="space-y-1">
                  <span className="bg-slate-100 group-hover:bg-brand-green-tint text-slate-500 group-hover:text-brand-green font-mono text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded border border-slate-200 group-hover:border-brand-green-light/20 transition-all duration-200">
                    Coming Soon
                  </span>
                  <h3 className="text-base font-display font-extrabold text-text-primary pt-3.5">
                    {mentor.role}
                  </h3>
                </div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wider font-bold">
                  {mentor.field}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto bg-brand-green-tint border border-brand-green/10 rounded-xl p-4 flex items-center justify-center gap-3.5 shadow-sm text-center">
            <Mail className="w-5 h-5 text-brand-green shrink-0" />
            <p className="text-xs font-sans font-bold text-brand-green-light leading-relaxed">
              Interested in advising WayInsight? Contact us at:{" "}
              <a href="mailto:iamsumant333@gmail.com" className="underline hover:text-brand-green transition-colors">
                iamsumant333@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
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
