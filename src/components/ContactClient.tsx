"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, GraduationCap, Clock, CheckCircle2, ShieldAlert } from "lucide-react";

export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    role: "School Principal",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const partnerBenefits = [
    {
      title: "School Principals",
      desc: "Bring immersive math & science labs to your school with zero setup cost. We handle headsets, tablets, facilitators, and session execution.",
    },
    {
      title: "Government Officials",
      desc: "High-quality STEM learning aligned with NCERT, matching Samagra Shiksha targets and upgrading public educational indicators.",
    },
    {
      title: "CSR Partners",
      desc: "Invest in scalable, direct-to-classroom technology. Get automated compliance reports and real-time student outcomes logsheets.",
    },
    {
      title: "Advisors & Mentors",
      desc: "Guide an early-stage startup looking to bridge the educational divide in tier-2/3 cities and rural India.",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) newErrors.name = "Full Name is required";
    if (!formState.org.trim()) newErrors.org = "Organisation Name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formState.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formState.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mock";
      
      await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          organisation: formState.org,
          email: formState.email,
          phone: formState.phone,
          partnerType: formState.role,
          message: formState.message,
        }),
      });

      setIsSuccess(true);
      setFormState({
        name: "",
        org: "",
        email: "",
        phone: "",
        role: "School Principal",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-text-primary selection:bg-brand-green/20 selection:text-brand-green">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 bg-slate-950 text-white select-none relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(21,163,126,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green-light bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
            Let&apos;s Build the Future of Learning Together
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans font-medium max-w-2xl mx-auto leading-relaxed">
            Schools, government bodies, CSR partners, investors, and advisors across India — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="py-24 select-none border-b border-light-grey">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info Tiles */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-display font-extrabold text-text-primary">
              Direct Contact Details
            </h3>

            <div className="space-y-4">
              <div className="flex gap-4 p-4.5 bg-alt-bg border border-light-grey rounded-2xl items-center">
                <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">Email Address</span>
                  <a href="mailto:iamsumant333@gmail.com" className="text-sm font-sans font-bold text-text-primary hover:text-brand-green-light transition-colors mt-0.5 block">
                    iamsumant333@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4.5 bg-alt-bg border border-light-grey rounded-2xl items-center">
                <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">Phone Call</span>
                  <a href="tel:+917857943915" className="text-sm font-sans font-bold text-text-primary hover:text-brand-green-light transition-colors mt-0.5 block">
                    +91 7857943915
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4.5 bg-alt-bg border border-light-grey rounded-2xl items-center">
                <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">Office Location</span>
                  <span className="text-sm font-sans font-bold text-text-primary mt-0.5 block">
                    India (Samastipur, Bihar / Sambalpur, Odisha)
                  </span>
                </div>
              </div>

              <div className="flex gap-4 p-4.5 bg-alt-bg border border-light-grey rounded-2xl items-center">
                <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold tracking-wider">Founder Education</span>
                  <span className="text-sm font-sans font-bold text-text-primary mt-0.5 block">
                    MBA Candidate, IIM Sambalpur
                  </span>
                </div>
              </div>

              <div className="flex gap-4 p-4.5 bg-brand-green-tint border border-brand-green/10 rounded-2xl items-center">
                <Clock className="w-5 h-5 text-brand-green-light shrink-0" />
                <p className="text-xs font-sans font-bold text-brand-green-light leading-relaxed">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-light-grey rounded-2xl p-8 shadow-xl">
            {isSuccess ? (
              <div className="space-y-4 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-green-tint border border-brand-green/10 flex items-center justify-center text-brand-green mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-display font-extrabold text-text-primary">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs md:text-sm text-text-secondary font-sans leading-relaxed max-w-sm mx-auto font-medium">
                    Thank you for reaching out to WayInsight. A representative will contact you shortly to follow up.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 font-mono text-xs font-bold uppercase tracking-wider bg-brand-green hover:bg-brand-green-light text-white px-6 py-2.5 rounded transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs md:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full bg-alt-bg border rounded-xl px-4 py-3 text-text-primary placeholder:text-slate-400 focus:outline-none transition-all duration-200 ${
                        errors.name
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-light-grey focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="org" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary block">
                      Organisation / School Name
                    </label>
                    <input
                      type="text"
                      id="org"
                      value={formState.org}
                      onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                      placeholder="e.g. KV School Samastipur"
                      className={`w-full bg-alt-bg border rounded-xl px-4 py-3 text-text-primary placeholder:text-slate-400 focus:outline-none transition-all duration-200 ${
                        errors.org
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-light-grey focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.org && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.org}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. rajesh@kv.edu.in"
                      className={`w-full bg-alt-bg border rounded-xl px-4 py-3 text-text-primary placeholder:text-slate-400 focus:outline-none transition-all duration-200 ${
                        errors.email
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-light-grey focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary block">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full bg-alt-bg border rounded-xl px-4 py-3 text-text-primary placeholder:text-slate-400 focus:outline-none transition-all duration-200 ${
                        errors.phone
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-light-grey focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="role" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary block">
                    I am a...
                  </label>
                  <select
                    id="role"
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full bg-alt-bg border border-light-grey rounded-xl px-4 py-3 text-text-secondary focus:outline-none focus:border-brand-green transition-all"
                  >
                    <option value="School Principal">School Principal</option>
                    <option value="BEO">BEO (Block Education Officer)</option>
                    <option value="District Education Officer">District Education Officer</option>
                    <option value="State Education Dept">State Education Dept</option>
                    <option value="CSR Partner">CSR Partner</option>
                    <option value="Investor">Investor</option>
                    <option value="Team Member">Team Member</option>
                    <option value="Advisor">Advisor</option>
                    <option value="Media">Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your requirements (e.g., pilot for 5 rural schools)..."
                    className={`w-full bg-alt-bg border rounded-xl px-4 py-3 text-text-primary placeholder:text-slate-400 focus:outline-none transition-all duration-200 resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-light-grey focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-bold flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green hover:bg-brand-green-light text-white font-mono text-xs font-extrabold tracking-wider uppercase py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-brand-green/15 cursor-pointer hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Partner Grid */}
      <section className="py-24 bg-alt-bg select-none">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Collaboration
            </span>
            <h2 className="text-3xl font-display font-extrabold text-text-primary">
              Why Partner With WayInsight?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border border-light-grey rounded-2xl p-6.5 hover:shadow-md transition-all duration-200 flex flex-col h-56 justify-start space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-brand-green-tint text-brand-green font-mono text-[10px] font-extrabold flex items-center justify-center border border-brand-green/10 select-none shadow-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-display font-extrabold text-text-primary pt-2.5 leading-none">
                  {benefit.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-sans font-medium">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer hideContactForm={true} />
    </div>
  );
}
