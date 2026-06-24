"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const pricingCards = [
  {
    tier: "Standard Plan",
    target: "Government Schools",
    price: "Rs. 3,000 - 5,000",
    desc: "per session",
    capacity: "Up to 40-50 students per session",
    features: [
      "Curriculum-aligned VR learning",
      "Facilitator handles all setups",
      "AI session performance reports",
      "Hindi + English language support",
    ],
    popular: false,
  },
  {
    tier: "Premium Plan",
    target: "Private Mid-Range Schools",
    price: "Rs. 6,000 - 10,000",
    desc: "per session",
    capacity: "Up to 40-50 students per session",
    features: [
      "Curriculum-aligned VR + AR modules",
      "Bilingual AI Tutor active session",
      "Teacher Dashboard access",
      "On-ground facilitator support",
      "Weekly concept mastery reports",
    ],
    popular: true,
  },
  {
    tier: "Elite Plan",
    target: "Premium Private Schools",
    price: "Rs. 12,000 - 18,000",
    desc: "per session",
    capacity: "Custom size, full class setup",
    features: [
      "Unlimited VR/AR module access",
      "Priority scheduling & onboarding",
      "Full Admin Portal analytics",
      "Parent-teacher dashboard sync",
      "Custom school-specific modules",
      "AI adaptive quiz integrations",
    ],
    popular: false,
  },
];

const packages = [
  { name: "Starter Package", details: "3 sessions, 5% off" },
  { name: "Term Package", details: "12 sessions, 15% off" },
  { name: "Annual Package", details: "30+ sessions, 25% off" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-deep-navy text-white relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,163,126,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green-light bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            Pricing Options
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">
            Simple, Transparent Pricing Plans
          </h2>
          <p className="text-xs md:text-sm text-slate-300 font-sans font-medium max-w-xl mx-auto leading-relaxed">
            Pay-per-session, fully managed on-site hardware deliveries. Discount packages applied on bulk class counts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border flex flex-col justify-between relative h-[520px] ${
                card.popular
                  ? "bg-slate-900 border-brand-green-light/40 shadow-2xl"
                  : "bg-navy2/60 border-white/5 hover:border-white/10 shadow-lg"
              }`}
            >
              {/* Popular Ribbon */}
              {card.popular && (
                <div className="absolute top-4 right-4 bg-brand-green-light text-white text-[9px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Header info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-extrabold text-white">{card.tier}</h3>
                  <p className="text-xs font-mono text-brand-green-light uppercase font-bold tracking-wider">{card.target}</p>
                </div>

                {/* Pricing info */}
                <div className="py-2">
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-white">{card.price}</span>
                  <span className="text-xs text-slate-400 font-sans block mt-1">{card.desc}</span>
                </div>

                <p className="text-xs font-sans text-slate-300 border-t border-white/10 pt-4 leading-normal font-medium">{card.capacity}</p>

                {/* Feature lists */}
                <ul className="space-y-3 pt-2">
                  {card.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className={`w-full font-mono text-xs font-extrabold uppercase tracking-widest py-3.5 rounded-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    card.popular
                      ? "bg-brand-green hover:bg-brand-green-light text-white"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30"
                  }`}
                >
                  Select Option
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Packages row */}
        <div className="pt-6 border-t border-white/5">
          <div className="text-center max-w-sm mx-auto mb-8">
            <h4 className="text-sm font-mono font-extrabold uppercase tracking-widest text-slate-300">
              Bulk Package Discounts
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-navy2/50 border border-white/5 rounded-xl p-5 flex items-center justify-between shadow-sm"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">{pkg.name}</span>
                <span className="text-xs font-display font-extrabold text-brand-green-light">{pkg.details}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
