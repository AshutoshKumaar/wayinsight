import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact WayInsight — Partner With Us",
  description: "Get in touch with Sumant and the WayInsight team to book a demo, sponsor school sessions, or explore corporate CSR sponsorships.",
};

export default function ContactPage() {
  return <ContactClient />;
}
