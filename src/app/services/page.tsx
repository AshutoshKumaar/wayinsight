import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "WayInsight — Immersive AR & VR Learning Services for Schools",
  description: "Explore WayInsight's VR Learning, AR Textbook overlays, and offline-first AI educational tools. Zero setup cost for schools, mapped to NCERT curricula.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
