import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Sumant Kumar Yadav & WayInsight — Founder Story & Team",
  description: "Read the story of Sumant Kumar Yadav (IIM Sambalpur MBA) and his mission to bridge India's classroom education gap through technology.",
};

export default function AboutPage() {
  return <AboutClient />;
}
