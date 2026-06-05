"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Play, CheckCircle2, Award, Clock } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    schoolCount: "1-5 Schools",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", date: "", schoolCount: "1-5 Schools", details: "" });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-primary/75 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden border border-slate-100 shadow-2xl z-10 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-primary flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" />
                Book a Free VR Demo Session
              </h3>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="py-8 text-center text-secondary space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5 px-4">
                    <h4 className="font-bold text-xl">Demo Scheduled!</h4>
                    <p className="text-sm text-slate-500 font-sans">
                      Our implementation engineer will contact you to verify details and confirm the slot.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-name" className="text-xs font-bold text-slate-400">Full Name</label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rajesh Kumar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="modal-email" className="text-xs font-bold text-slate-400">Email Address</label>
                      <input
                        type="email"
                        id="modal-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@school.edu.in"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-phone" className="text-xs font-bold text-slate-400">Phone Number</label>
                      <input
                        type="tel"
                        id="modal-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="modal-date" className="text-xs font-bold text-slate-400">Preferred Date</label>
                      <input
                        type="date"
                        id="modal-date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-count" className="text-xs font-bold text-slate-400">Number of Schools Targeted</label>
                    <select
                      id="modal-count"
                      value={formData.schoolCount}
                      onChange={(e) => setFormData({ ...formData, schoolCount: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                    >
                      <option value="1-5 Schools">1-5 Schools (Pilot Setup)</option>
                      <option value="6-20 Schools">6-20 Schools</option>
                      <option value="21-50 Schools">21-50 Schools</option>
                      <option value="50+ Schools">50+ Schools (State/District Deploy)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-details" className="text-xs font-bold text-slate-400">Specific Requirements (Optional)</label>
                    <textarea
                      id="modal-details"
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Share details (e.g. CBSE syllabus alignment, regional language modules needed)..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-teal-600 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-secondary/15 hover:scale-101 cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-slate-900 rounded-3xl w-full max-w-4xl aspect-video overflow-hidden border border-white/10 shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Mockup Simulation Canvas */}
            <div className="relative w-full h-full flex flex-col justify-between p-6">
              {/* Overlay elements representing classroom live streaming */}
              <div className="relative z-10 flex items-center justify-between text-white/80">
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Interactive Walkthrough</span>
                </div>
                <div className="flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 text-xs font-semibold">
                  <Award className="w-4 h-4 text-secondary" />
                  <span>State Pilot 2026</span>
                </div>
              </div>

              {/* Graphic animation of classroom simulated content */}
              <div className="absolute inset-0 flex items-center justify-center">
                {isPlaying ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="w-64 h-64 border border-dashed border-secondary/20 rounded-full flex items-center justify-center relative scale-125 pointer-events-none"
                  >
                    <div className="absolute w-48 h-48 border-2 border-dashed border-accent/20 rounded-full animate-pulse" />
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-secondary opacity-60">
                      <circle cx="50" cy="50" r="10" className="fill-secondary/20 stroke-secondary stroke-1" />
                      <line x1="50" y1="50" x2="20" y2="20" className="stroke-slate-500 stroke-1" />
                      <line x1="50" y1="50" x2="80" y2="25" className="stroke-slate-500 stroke-1" />
                      <circle cx="20" cy="20" r="4" className="fill-accent" />
                      <circle cx="80" cy="25" r="5" className="fill-secondary" />
                    </svg>
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform relative z-10 cursor-pointer"
                  >
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </button>
                )}
                {isPlaying && (
                  <div className="absolute text-center space-y-1 relative z-10 text-white select-none">
                    <p className="text-xl font-bold font-heading">Active VR Lab Simulation</p>
                    <p className="text-xs text-slate-400 font-medium font-sans">Simulating a Class 9 Chemistry Session (Molecular Bonds)</p>
                  </div>
                )}
              </div>

              {/* Video control bar mock */}
              <div className="relative z-10 w-full bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/5 flex items-center justify-between text-white/90 gap-4 text-xs font-semibold select-none">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-xl border border-white/10 transition-colors focus:outline-none"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-[10px]">01:45</span>
                  <div className="flex-1 bg-white/20 h-1 rounded-full relative overflow-hidden">
                    <div className="bg-secondary h-1 rounded-full w-[45%]" />
                  </div>
                  <span className="text-[10px]">03:50</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-4 h-4" />
                  <span>Real-time render</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
