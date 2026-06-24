import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import AITutorFloatingWidget from "@/components/AITutorFloatingWidget";
import "./globals.css";

const mooli = Mooli({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "WayInsight — Transforming Classroom Learning into Immersive Experiences",
  description: "WayInsight delivers AR, VR, and AI-powered learning sessions into school classrooms across India. Zero upfront cost. Curriculum-aligned. Built for every student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mooli.variable} font-sans antialiased bg-white text-text-primary`}
      >
        {children}
        <AITutorFloatingWidget />
      </body>
    </html>
  );
}




