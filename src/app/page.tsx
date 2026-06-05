"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyWayInsight from "@/components/WhyWayInsight";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import CaseStudies from "@/components/CaseStudies";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { DemoModal, VideoModal } from "@/components/Modals";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-secondary/20 selection:text-secondary">
      {/* Sticky Header Navbar */}
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Hero section */}
      <Hero
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
      />

      {/* Quick stats dashboard banner */}
      <Stats />

      {/* Comparison grid: Traditional vs Immersive */}
      <WhyWayInsight />

      {/* Interactive solutions suite */}
      <Solutions onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Implementation timeline */}
      <HowItWorks />

      {/* Measured outcomes dashboard */}
      <Impact />

      {/* Detailed case studies */}
      <CaseStudies />

      {/* Classroom gallery and media files */}
      <Gallery />

      {/* Testimonials quote carousel */}
      <Testimonials />

      {/* Partners marquee marquee scroll */}
      <Partners />

      {/* Action banner CTA */}
      <CTA onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Footer and contact details */}
      <Footer />

      {/* Dynamic modals */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
}
