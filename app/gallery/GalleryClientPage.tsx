"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"
import GalleryHero from "@/components/gallery/GalleryHero"
import StylishCTA from "@/components/shared/StylishCTA"

// Sample gallery data
const categories = [
  { name: "All", value: "all" },
  { name: "National Events", value: "events" },
  { name: "Youth Bootcamps", value: "bootcamps" },
  { name: "Trainings", value: "trainings" },
  { name: "CSR Collaborations", value: "csr" },
]

const galleryItems = [
  {
    id: 1,
    title: "Leadership Summit 2025",
    category: "events",
    description: "Annual gathering of change-makers and thought leaders discussing future opportunities.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 15, 2025",
  },
  {
    id: 2,
    title: "Digital Skills Bootcamp",
    category: "bootcamps",
    description: "Intensive training program for youth on emerging digital technologies and skills.",
    image: "/placeholder.svg?height=600&width=800",
    date: "February 10, 2025",
  },
  {
    id: 3,
    title: "Teacher Training Workshop",
    category: "trainings",
    description: "Professional development session for educators on innovative teaching methodologies.",
    image: "/placeholder.svg?height=600&width=800",
    date: "January 25, 2025",
  },
  {
    id: 4,
    title: "CSR Partnership Launch",
    category: "csr",
    description: "Inauguration of a collaborative initiative between corporations and social enterprises.",
    image: "/placeholder.svg?height=600&width=800",
    date: "December 12, 2024",
  },
  {
    id: 5,
    title: "Youth Innovation Challenge",
    category: "bootcamps",
    description: "Competition showcasing creative solutions from young entrepreneurs.",
    image: "/placeholder.svg?height=600&width=800",
    date: "November 30, 2024",
  },
  {
    id: 6,
    title: "School Reform Implementation",
    category: "trainings",
    description: "Working with educational institutions to enhance academic systems and processes.",
    image: "/placeholder.svg?height=600&width=800",
    date: "November 15, 2024",
  },
  {
    id: 7,
    title: "Opportunity Talk Series",
    category: "events",
    description: "Inspiring stories of transformation through access to global opportunities.",
    image: "/placeholder.svg?height=600&width=800",
    date: "October 28, 2024",
  },
  {
    id: 8,
    title: "Corporate Social Impact Day",
    category: "csr",
    description: "Collaborative event bringing together businesses committed to sustainable development.",
    image: "/placeholder.svg?height=600&width=800",
    date: "October 10, 2024",
  },
  {
    id: 9,
    title: "Educational Leadership Conference",
    category: "events",
    description: "Gathering of school administrators and policy makers discussing education reform.",
    image: "/placeholder.svg?height=600&width=800",
    date: "September 25, 2024",
  },
  {
    id: 10,
    title: "Entrepreneurship Masterclass",
    category: "bootcamps",
    description: "Intensive training for aspiring entrepreneurs on business development and strategy.",
    image: "/placeholder.svg?height=600&width=800",
    date: "September 5, 2024",
  },
  {
    id: 11,
    title: "ISO Certification Workshop",
    category: "trainings",
    description: "Guiding educational institutions through the process of international accreditation.",
    image: "/placeholder.svg?height=600&width=800",
    date: "August 20, 2024",
  },
  {
    id: 12,
    title: "Startup-Corporate Matchmaking",
    category: "csr",
    description: "Facilitating partnerships between established companies and innovative startups.",
    image: "/placeholder.svg?height=600&width=800",
    date: "August 5, 2024",
  },
]

function GalleryItem({ item, index }: { item: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-sm animate-slideUp"
      style={{ animationDelay: `${(index % 6) * 100}ms` }}
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.date}</p>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white rounded-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-[300px] md:h-auto">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2 text-header">{item.title}</h3>
              <p className="text-sm text-primary mb-4">{item.date}</p>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <Button className="bg-primary hover:bg-primary-600">View Album</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default function GalleryClientPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GalleryHero />

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <Tabs defaultValue="all" className="w-full max-w-3xl">
              <TabsList className="bg-gray-100 p-1 rounded-full w-full justify-between">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.value} value={category.value} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems
                      .filter((item) => category.value === "all" || item.category === category.value)
                      .map((item, index) => (
                        <GalleryItem key={item.id} item={item} index={index} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Stylish CTA Section */}
      <StylishCTA
        title="Want to Be Part of Our Story?"
        description="Join us in creating opportunities and making a difference. Explore how you can get involved with our initiatives and programs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        variant="header"
      />
    </main>
  )
}
