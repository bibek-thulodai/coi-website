import type { Metadata } from "next"
import CaseStudiesClient from "./CaseStudiesClient"

export const metadata: Metadata = {
  title: "Case Studies | Creating Opportunities International",
  description:
    "Explore our collection of case studies showcasing our work and impact across various sectors and regions.",
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />
}
