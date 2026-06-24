import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery — Immersive AR & VR Learning in Action",
  description: "Browse photos and videos of WayInsight's AR/VR learning sessions, school visits, teacher workshops, and classroom implementations across India.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
