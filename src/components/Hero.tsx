"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Users, GraduationCap, School, MapPin, Volume2, VolumeX, Pause, PlayCircle } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenDemoModal: () => void;
  onOpenVideoModal: () => void;
}

export default function Hero({ onOpenDemoModal, onOpenVideoModal }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync state with HTML5 Video element controls
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-28 md:pb-36 bg-slate-950 overflow-hidden"
    >
      {/* Background Video with Widescreen Fallback Image */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Fallback layout if video doesn't play or is not uploaded */}
        <Image
          src="/images/hero_bg_wide.jpg"
          alt="WayInsight Immersive VR Classroom Fallback"
          fill
          priority
          className="object-cover object-center"
        />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-102"
          poster="/images/hero_bg_wide.jpg"
        >
          <source src="/images/hero_video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic dark linear gradients and overall dim overlay */}
        <div className="absolute inset-0 bg-slate-950/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/45 z-10" />
      </div>

      {/* Futuristic Holographic Overlay Rings & Pulse Reticles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Glow behind floating globe */}
        <motion.div
          animate={{
            opacity: [0.15, 0.45, 0.15],
            scale: [0.95, 1.15, 0.95],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
        />

        {/* Rotating Circular HUD Reticle */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 200 200"
          className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-secondary/30 stroke-current opacity-70 hidden md:block"
        >
          <circle cx="100" cy="100" r="80" strokeDasharray="10 8 4 8" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="90" strokeDasharray="3 6" strokeWidth="1.5" fill="none" />
        </motion.svg>

        {/* Glow behind Solar System display */}
        <motion.div
          animate={{
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-96 h-64 rounded-full bg-accent/10 blur-3xl"
        />

        {/* Scan lines across HUD screens */}
        <div className="absolute top-[15%] right-[12%] w-[350px] h-[220px] border border-white/5 bg-gradient-to-b from-white/0 via-secondary/5 to-white/0 bg-[size:100%_4px] opacity-20 hidden lg:block rounded-xl" />
        <div className="absolute top-[12%] left-[12%] w-[250px] h-[340px] border border-white/5 bg-gradient-to-b from-white/0 via-accent/5 to-white/0 bg-[size:100%_4px] opacity-20 hidden lg:block rounded-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Copy Column */}
        <div className="lg:col-span-8 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-secondary animate-fade-in-up">
            <span>AR/VR Powered Education</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] font-heading text-white animate-fade-in-up delay-100">
            Transforming <br className="hidden sm:inline" />
            Classrooms Through <br />
            <span className="text-gradient-purple-teal">AR/VR Learning</span>
          </h1>

          <p className="text-sm md:text-base text-slate-200 font-sans max-w-xl leading-relaxed animate-fade-in-up delay-200">
            Immersive learning experiences that make education engaging, interactive, and accessible for government schools across India. Bridging the digital divide with technology.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in-up delay-300">
            <button
              onClick={onOpenDemoModal}
              className="bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] hover:opacity-95 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-205 flex items-center gap-2 shadow-lg shadow-secondary/15 hover:scale-102 cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5" />
              Book a Free Demo
            </button>
            
            <button
              onClick={onOpenVideoModal}
              className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/45 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-205 flex items-center gap-2 shadow-sm hover:scale-102 cursor-pointer"
            >
              <Play className="w-4.5 h-4.5 text-white fill-white" />
              Watch Video Demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Dashboard Stats Overlay Bar */}
      <div className="absolute bottom-6 left-6 right-6 z-25 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 py-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/5 flex items-center justify-between shadow-2xl">
          {/* Stat Item 1 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white leading-none">5,000+</p>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Students Impacted</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/10" />

          {/* Stat Item 2 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white leading-none">100+</p>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Teachers Trained</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/10" />

          {/* Stat Item 3 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
              <School className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white leading-none">50+</p>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Schools Connected</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-white/10" />

          {/* Stat Item 4 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-extrabold text-white leading-none">10+</p>
              <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">Districts Reached</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Control Overlays (Sound, Pause) on Bottom Right */}
      <div className="absolute bottom-28 right-6 z-25 hidden md:flex items-center gap-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="px-4 py-2 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-white/5 text-[11px] font-bold text-white hover:bg-slate-800/80 transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span>Sound On</span>
            </>
          )}
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-white/5 text-[11px] font-bold text-white hover:bg-slate-800/80 transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pause Video</span>
            </>
          ) : (
            <>
              <PlayCircle className="w-3.5 h-3.5 text-secondary animate-ping" />
              <span>Play Video</span>
            </>
          )}
        </button>
      </div>

    </section>
  );
}
