"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const categories = ["All", "VR Labs", "Classroom AR", "Workshops"];

const galleryItems = [
  {
    id: 1,
    title: "Hands-on VR Science Session",
    category: "VR Labs",
    src: "/images/student_vr_experience.png",
    aspect: "aspect-square",
  },
  {
    id: 2,
    title: "Teacher Training & Onboarding",
    category: "Workshops",
    src: "/images/teacher_vr_training.png",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Interactive AR Science Experiments",
    category: "Classroom AR",
    src: "/images/classroom_ar_session.png",
    aspect: "aspect-[16/10]",
  },
  {
    id: 4,
    title: "Futuristic Anatomy Lab Experience",
    category: "VR Labs",
    src: "/images/science_3d_workshop.png",
    aspect: "aspect-[4/5]",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-secondary uppercase">
            In Action
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-primary">
            Classroom & Training Gallery
          </h3>
          <p className="text-base text-slate-600 font-sans">
            Glimpse into the classroom revolution. Real students, real teachers, and immersive interactive digital learning setups.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer ${
                filter === cat
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-pointer border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setActiveImage(item)}
              >
                {/* Image wrapper */}
                <div className={`relative w-full ${item.aspect} bg-slate-50`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-w-700px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-end p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/25">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 text-white">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-secondary opacity-90">
                        {item.category}
                      </span>
                      <h4 className="text-base font-bold font-heading">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-55 bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActiveImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/10 transition-colors focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-cover"
                />
                
                {/* Caption Panel */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-secondary mb-1 block">
                    {activeImage.category}
                  </span>
                  <h4 className="text-lg font-bold font-heading">
                    {activeImage.title}
                  </h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
