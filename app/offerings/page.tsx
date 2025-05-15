import type { Metadata } from "next"
import OfferingsPage from "./OfferingsPage"

export const metadata: Metadata = {
  title: "Services, Products & Franchises | Creating Opportunities International",
  description: "Explore our comprehensive range of services, products, and franchise opportunities.",
}

export default function Page() {
  return <OfferingsPage />
}
