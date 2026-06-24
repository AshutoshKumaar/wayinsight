"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Play, 
  Award, 
  Users, 
  BookOpen, 
  Flame 
} from "lucide-react";

const galleryCategories = [
  "All",
  "AR Learning",
  "VR Learning",
  "Classroom Sessions",
  "School Visits"
];

const galleryItems = [
  {
    id: 1,
    title: "Students Exploring the Universe in VR",
    category: "VR Learning",
    src: "/images/student_vr_experience.png",
    description: "Hands-on VR learning session with Samastipur government school students exploring planetary orbits in real time."
  },
  {
    id: 2,
    title: "Interactive 3D Organ Scanning Overlay",
    category: "AR Learning",
    src: "/images/classroom_ar_session.png",
    description: "Point-and-scan textbooks overlaying rotatable, labeled anatomy models floating above static pages."
  },
  {
    id: 3,
    title: "Futuristic STEM Laboratory Workshop",
    category: "Classroom Sessions",
    src: "/images/science_3d_workshop.png",
    description: "Classroom setup utilizing custom digital simulations for interactive physics and geometry principles."
  },
  {
    id: 4,
    title: "Teacher Training & On-ground Setup",
    category: "School Visits",
    src: "/images/teacher_vr_training.png",
    description: "Empowering educators in Samastipur with custom setup workflows to seamlessly conduct daily AR/VR classes."
  },
  {
    id: 5,
    title: "Bilingual AI Tutor Concept Mastery Guidance",
    category: "Classroom Sessions",
    src: "/images/science_3d_workshop.png",
    description: "Offline-first AI chatbot supporting students in Hindi/English after interactive immersive sessions."
  },
  {
    id: 6,
    title: "Immersive VR Deep Sea Ecology Diving",
    category: "VR Learning",
    src: "/images/student_vr_experience.png",
    description: "Exploring deep sea ecosystems and marine life interactions inside a standalone VR headset."
  },
  {
    id: 7,
    title: "Trained Facilitator Conducting On-site Session",
    category: "School Visits",
    src: "/images/teacher_vr_training.png",
    description: "WayInsight facilitator handles setup, hardware logistics, and teacher support on-ground."
  },
  {
    id: 8,
    title: "Mathematical 3D Geometry Overlay Scan",
    category: "AR Learning",
    src: "/images/classroom_ar_session.png",
    description: "Understanding abstract equations and mensuration formulas through spatial augmented visualization."
  }
];

const successHighlights = [
  {
    title: "5,000+ Students Inspired",
    desc: "Implemented immersive VR/AR kits in rural tier-2/3 government schools, witnessing absolute concept curiosity.",
    icon: Users,
    color: "text-brand-green bg-brand-green-tint border-brand-green/10"
  },
  {
    title: "100+ Teachers Empowered",
    desc: "Conducted certified teacher training workshops enabling facilitators to run digital labs with zero assistance.",
    icon: Award,
    color: "text-ai-purple bg-ai-purple-tint border-ai-purple/10"
  },
  {
    title: "98% Concept Mastery",
    desc: "Academic tests log significant improvement in retention scores vs traditional rote memorisation.",
    icon: Flame,
    color: "text-warm-amber bg-warm-amber-tint border-warm-amber/10"
  },
  {
    title: "50+ Government Schools Reached",
    desc: "Partnered across multiple districts to deploy standalone kits mapped exactly to state boards & NCERT.",
    icon: BookOpen,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100"
  }
];

export default function GalleryPageClient() {
  const [filter, setFilter] = useState("All");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % filteredItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + filteredItems.length) % filteredItems.length);
  };

  const activeImage = activeIdx !== null ? filteredItems[activeIdx] : null;

  return (
    <div className="relative min-h-screen bg-white text-text-primary selection:bg-brand-green/20 selection:text-brand-green">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-20 bg-deep-navy text-white overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(21,163,126,0.06),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green-light bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            Media Gallery
          </span>
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-display font-extrabold tracking-tight leading-[1.05]">
            Visual Gallery. <br />
            <span className="text-gradient-green">Immersive Learning in Action.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-sans font-medium max-w-xl mx-auto leading-relaxed">
            Witness the classroom transformation across Indian schools. Real sessions, real students, and real spatial learning outcomes.
          </p>
        </div>
      </section>

      {/* Success Highlights Section */}
      <section className="py-20 border-b border-light-grey select-none bg-alt-bg">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-left space-y-2">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Impact
            </span>
            <h2 className="text-3xl font-display font-extrabold text-text-primary">
              Success Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successHighlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-light-grey rounded-2xl p-6.5 hover:shadow-md transition-all duration-200 flex flex-col justify-start space-y-3.5"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${highlight.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-extrabold text-text-primary pt-1.5 leading-none">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans font-medium">
                    {highlight.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter Buttons & Grid */}
      <section className="py-24 border-b border-light-grey select-none">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
                Photos
              </span>
              <h2 className="text-3xl font-display font-extrabold text-text-primary">
                Classroom Sessions & Visits
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setActiveIdx(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer ${
                    filter === cat
                      ? "bg-brand-green border-brand-green text-white shadow-sm"
                      : "bg-white border-light-grey text-text-secondary hover:border-slate-350 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry/Flex Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-light-grey shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between bg-white h-72"
              >
                <div className="relative w-full h-[65%] bg-slate-50 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-w-700px) 100vw, 25vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-350"
                  />
                  <div className="absolute inset-0 bg-deep-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2 rounded-full bg-white/25 backdrop-blur-md text-white border border-white/20">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-brand-green-light block">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold font-display text-text-primary line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[10px] text-text-muted leading-tight line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 border-b border-light-grey select-none bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Play Video */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-light-grey shadow-2xl bg-slate-900 group">
              <video
                controls
                playsInline
                className="w-full h-full object-cover"
                poster="/images/hero_bg_wide.jpg"
              >
                <source src="/images/hero_video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right Column: Copy & Play CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-brand-green bg-brand-green-tint px-3.5 py-1.5 rounded-full border border-brand-green/10">
              Video Showcase
            </span>
            <h2 className="text-3xl font-display font-extrabold tracking-tight text-text-primary">
              Watch Our Classroom Sessions in Action
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed font-sans font-medium">
              See the immediate engagement of students when they first put on the VR headset. Our video documentation captures actual government school deployments, user testimonials, and teacher workshops.
            </p>
            <div className="flex gap-4 items-center bg-white border border-light-grey rounded-2xl p-4.5">
              <div className="w-10 h-10 rounded-xl bg-brand-green-tint border border-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 fill-brand-green" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider font-mono">Curriculum Focus</h4>
                <p className="text-xs text-text-secondary font-medium">Includes 3D Solar System & biology session overlays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-deep-navy/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Navigation Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/5 hover:border-white/20 transition-all focus:outline-none cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Navigation Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/5 hover:border-white/20 transition-all focus:outline-none cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-cover"
              />
              
              {/* Caption Panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white text-left space-y-1.5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green-light block">
                  {activeImage.category}
                </span>
                <h4 className="text-lg font-bold font-display leading-tight">
                  {activeImage.title}
                </h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed font-medium line-clamp-2">
                  {activeImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Footer banner */}
      <section className="py-20 select-none bg-deep-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,163,126,0.06),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            Interested in Sponsoring a School Visit?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-sans font-medium max-w-xl mx-auto leading-relaxed">
            Help us expand our reach. Corporate CSR funding and donors directly sponsor standalone kit sets for remote rural schools.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-brand-green hover:bg-brand-green-light text-white font-mono text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-200 inline-block shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
