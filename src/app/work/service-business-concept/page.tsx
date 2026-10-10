import type { Metadata } from "next";
import { RoofingSite } from "@/components/demo/RoofingSite";

export const metadata: Metadata = {
  title: "Service Business — Conversion Concept",
  description: "A live concept by GetVantor: a fictional service business site with notes on why each section converts. A demonstration, not a client.",
  alternates: { canonical: "/work/service-business-concept" },
};

export default function RoofingConcept() {
  return <RoofingSite />;
}
