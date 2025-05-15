import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  title: "Gallery | Creating Opportunities International",
  description: "Explore our visual journey through events, programs, and impact stories",
}

export default function GalleryPage() {
  return <GalleryClientPage />
}
