"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Building2, Award, Landmark } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const start = 0;
      const end = value;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function: outQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(ease * (end - start) + start));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const statsData = [
  {
    id: 1,
    name: "Students Impacted",
    value: 100000,
    suffix: "+",
    description: "Experiencing visual 3D learning daily",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    id: 2,
    name: "Schools Covered",
    value: 500,
    suffix: "+",
    description: "Smart class labs deployed",
    icon: Building2,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    name: "Teachers Trained",
    value: 5000,
    suffix: "+",
    description: "Certified in AR/VR pedagogy",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 4,
    name: "Districts Reached",
    value: 25,
    suffix: "+",
    description: "Across multiple state departments",
    icon: Landmark,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group"
              >
                <div className={`p-3.5 rounded-xl ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-extrabold tracking-tight font-heading text-primary">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 font-sans">
                    {stat.name}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
