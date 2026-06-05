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

      {/* WhatsApp Chat Floating Button (fixed bottom right of viewport) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 select-none"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.45.99c-5.438 0-9.863 4.372-9.867 9.802-.002 1.73.457 3.41 1.33 4.902l-.988 3.605 3.722-.965zm13.39-5.182c-.292-.146-1.728-.853-1.996-.952-.269-.099-.465-.148-.659.146-.195.293-.755.952-.927 1.146-.171.196-.344.22-.636.072-2.993-1.502-4.14-2.585-4.836-3.784-.18-.309-.018-.476.128-.621.131-.13.292-.342.439-.513.146-.172.196-.293.292-.488.098-.196.049-.367-.024-.513-.074-.146-.659-1.586-.902-2.174-.237-.573-.478-.494-.66-.504-.17-.008-.367-.01-.563-.01-.196 0-.513.073-.781.366-.269.293-1.025 1.001-1.025 2.441 0 1.439 1.049 2.83 1.195 3.025.147.195 2.064 3.153 5.002 4.428.699.303 1.244.484 1.67.62.704.223 1.345.191 1.851.115.564-.084 1.728-.707 1.972-1.39.244-.683.244-1.269.171-1.39-.073-.122-.269-.195-.561-.34z"/>
          </svg>
          <span>Chat with Us</span>
        </a>
      </div>
    </section>
  );
}
