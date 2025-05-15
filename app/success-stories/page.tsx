import SuccessStoriesClient from "./SuccessStoriesClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Success Stories | Creating Opportunities International",
  description:
    "Explore our collection of success stories and case studies showcasing the impact of our services and solutions.",
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />
}
