"use client"

import { useRef } from "react"
import Image from "next/image"
import SectionHeading from "@/components/shared/SectionHeading"
import { motion, useInView } from "framer-motion"
import { Building, GraduationCap, HeartHandshake, Briefcase, Users } from "lucide-react"

const clientCategories = [
  { name: "Corporate", icon: Building, count: 45 },
  { name: "Education", icon: GraduationCap, count: 32 },
  { name: "Non-Profit", icon: HeartHandshake, count: 28 },
  { name: "Government", icon: Briefcase, count: 17 },
  { name: "Startups", icon: Users, count: 53 },
]

const clients = [
  { name: "TechCorp Solutions", category: "Corporate", logo: "/placeholder.svg?height=60&width=120" },
  { name: "EduLearn Institute", category: "Education", logo: "/placeholder.svg?height=60&width=120" },
  { name: "GreenEarth Foundation", category: "Non-Profit", logo: "/placeholder.svg?height=60&width=120" },
  { name: "City Development Office", category: "Government", logo: "/placeholder.svg?height=60&width=120" },
  { name: "InnovateTech", category: "Startups", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Global Finance Group", category: "Corporate", logo: "/placeholder.svg?height=60&width=120" },
  { name: "University of Excellence", category: "Education", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Ocean Conservation Trust", category: "Non-Profit", logo: "/placeholder.svg?height=60&width=120" },
]

export default function ClientsShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-[#017489]/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 right-0 w-72 h-72 bg-[#013A87]/10 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#017489]/10 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeading title="Our Proud Partners" subtitle="CLIENT SHOWCASE" />
          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            We've had the privilege of working with amazing organizations across various sectors. Our diverse client
            base reflects our versatility and commitment to creating opportunities in every field.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {clientCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#017489]/10 text-[#017489] mb-4">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#02609E]">{category.name}</h3>
              <p className="text-[#013A87] font-bold">{category.count}+ Clients</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-[#017489]/10 hover:border-[#017489]/30"
            >
              <div className="relative h-12 w-full mb-4">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
              <h3 className="text-[#02609E] font-medium text-center">{client.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{client.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">
            "We're proud to have helped these organizations achieve their goals and create lasting impact."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
