"use client";

import React from "react";
import { Landmark, ShieldCheck, Cpu, School, GraduationCap, Sparkles } from "lucide-react";

const partners = [
  { name: "Govt. of Haryana", type: "Education Dept.", icon: Landmark },
  { name: "NTPC CSR", type: "Donor Partner", icon: ShieldCheck },
  { name: "Digital India Trust", type: "National Initiative", icon: Sparkles },
  { name: "Smart Schools Coalition", type: "NGO Partner", icon: School },
  { name: "SCERT Academy", type: "Academic Partner", icon: GraduationCap },
  { name: "Tech Mahindra Foundation", type: "CSR Partner", icon: Cpu },
];

export default function Partners() {
  // Duplicate the array to create a seamless loop
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-16 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by State Administrations & Corporate Donors
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        {/* Soft fading edges overlay */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scroll Row */}
        <div className="flex w-max animate-scroll gap-8">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm min-w-[220px]"
              >
                <div className="p-2 bg-white rounded-lg text-slate-600 shadow-sm border border-slate-100">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 font-heading">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {item.type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
