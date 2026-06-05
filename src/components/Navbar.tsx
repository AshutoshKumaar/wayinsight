"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#why-us" },
  { name: "Solutions", href: "#solutions" },
  { name: "Impact", href: "#impact" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Gallery", href: "#gallery" },
  { name: "Partners", href: "#partners" },
  { name: "Blog", href: "#home" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export default function Navbar({ onOpenDemoModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 glassmorphism shadow-md"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 select-none">
            <span
              className={`font-heading text-2xl font-extrabold tracking-tight transition-colors duration-300 flex items-center ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              Way<span className="text-secondary">Insight</span>
              <span className="ml-1 w-2.5 h-2.5 rounded-full bg-secondary animate-pulse-slow"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-355 ${
                  scrolled
                    ? "text-slate-600 hover:text-secondary"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenDemoModal}
              className={`font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-md group cursor-pointer ${
                scrolled
                  ? "bg-primary hover:bg-slate-800 text-white shadow-primary/10"
                  : "bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] hover:opacity-95 text-white border border-white/10"
              }`}
            >
              Book Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 focus:outline-none transition-colors ${
              scrolled || isOpen ? "text-slate-700 hover:text-secondary" : "text-white hover:text-secondary"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[76px] z-40 lg:hidden glassmorphism px-6 py-8 flex flex-col justify-between"
            style={{ height: "calc(100vh - 76px)" }}
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-800 hover:text-secondary transition-colors duration-250"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pb-12">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full bg-gradient-to-r from-[#7C3AED] to-[#0EA5A4] hover:opacity-95 text-white font-bold text-base py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                Book Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
