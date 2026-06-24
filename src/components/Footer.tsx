"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface FooterProps {
  hideContactForm?: boolean;
}

export default function Footer({ hideContactForm = false }: FooterProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    org: "",
    role: "School Principal",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", org: "", role: "School Principal", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-primary text-slate-300 pt-20 pb-8 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Contact Form & Info Grid */}
        {!hideContactForm && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-800">
            
            {/* Left Side: Contact Info & Value Prop */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-heading text-2xl font-extrabold tracking-tight text-white flex items-center">
                  Way<span className="text-secondary">Insight</span>
                </span>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  Transforming classrooms with immersive technology. We partner with state governments, CSR departments, and school administrations to bring world-class spatial education to rural and urban government schools.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Details</h4>
                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-center gap-3.5">
                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                    <a href="mailto:info@wayinsight.com" className="hover:text-secondary transition-colors duration-200">
                      info@wayinsight.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <a href="tel:+919876543210" className="hover:text-secondary transition-colors duration-200">
                      +91 98765 43210
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>
                      3rd Floor, Tech Innovation Block,<br />
                      Sector-44, Gurugram, Haryana - 122003
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800/85 rounded-3xl p-8 shadow-xl">
              <h4 className="text-lg font-bold font-heading text-white mb-6">Send Us a Message</h4>
              
              {isSubmitted ? (
                <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 text-center text-secondary space-y-2">
                  <h5 className="font-bold text-lg">Thank You!</h5>
                  <p className="text-xs">Your inquiry has been successfully sent. A representative will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-bold text-slate-400">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. rajesh@school.edu.in"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="org" className="text-xs font-bold text-slate-400">Organization / School Name</label>
                      <input
                        type="text"
                        id="org"
                        required
                        value={formState.org}
                        onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                        placeholder="e.g. GSSS Sector-14"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="role" className="text-xs font-bold text-slate-400">I am a...</label>
                      <select
                        id="role"
                        value={formState.role}
                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-secondary transition-colors"
                      >
                        <option value="School Principal">School Principal / Teacher</option>
                        <option value="Government Official">Government Official</option>
                        <option value="CSR Partner">CSR Partner / Sponsor</option>
                        <option value="NGO Partner">NGO Representative</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your inquiry (e.g. interested in a 5-school pilot)..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-teal-600 text-white font-bold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-secondary/15 hover:scale-101 cursor-pointer"
                  >
                    <Send className="w-4.5 h-4.5" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Footer Links & Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-slate-800 text-sm">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Home Sections */}
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Credibility</h5>
            <ul className="space-y-2">
              <li><Link href="/#impact" className="hover:text-white transition-colors">Impact Metrics</Link></li>
              <li><Link href="/#case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/#partners" className="hover:text-white transition-colors">Our Partners</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Regulatory</h5>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition-colors">CSR Compliance</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Stay Updated</h5>
            <p className="text-xs text-slate-400">Subscribe to our newsletter for state deployment announcements.</p>
            
            {isSubscribed ? (
              <div className="bg-secondary/15 border border-secondary/20 rounded-xl p-3 text-center text-xs text-secondary font-semibold">
                Subscribed Successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-secondary w-full"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-secondary hover:bg-teal-600 text-white font-bold px-4 rounded-xl text-xs flex items-center justify-center transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
                >
                  {isSubscribing ? "..." : "Join"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WayInsight Technology Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4.5">
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
