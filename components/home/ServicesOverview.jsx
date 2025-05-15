"use client"

import { useRef } from "react"
import Link from "next/link"
import SectionHeading from "@/components/shared/SectionHeading"
import { motion, useInView } from "framer-motion"
import { Building2, GraduationCap, Code, HeartHandshake, CalendarDays, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Corporate Services",
    description: "Strategic planning, organizational development, and leadership coaching for businesses.",
    icon: Building2,
    href: "/services/corporate",
    color: "#017489",
  },
  {
    title: "Educational Services",
    description: "Curriculum development, teacher training, and educational technology integration.",
    icon: GraduationCap,
    href: "/services/education",
    color: "#006955",
  },
  {
    title: "Tech & Outsourcing",
    description: "Digital transformation, software development, and technology outsourcing solutions.",
    icon: Code,
    href: "/services/tech",
    color: "#02609E",
  },
  {
    title: "CSR & Startup Programs",
    description: "Corporate social responsibility initiatives and comprehensive startup support.",
    icon: HeartHandshake,
    href: "/services/csr",
    color: "#013A87",
  },
  {
    title: "Event & Training",
    description: "Professional workshops, conferences, and specialized training programs.",
    icon: CalendarDays,
    href: "/services/events",
    color: "#017489",
  },
  {
    title: "Opportunity Support",
    description: "Connecting individuals and organizations with strategic opportunities for growth.",
    icon: Rocket,
    href: "/services/opportunities",
    color: "#006955",
  },
]

export default function ServicesOverview() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#017489]/10 rounded-full opacity-70 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#013A87]/10 rounded-full opacity-70 blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeading title="Our Services" subtitle="WHAT WE OFFER" />
          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            We provide a comprehensive range of services designed to empower individuals and organizations. Our tailored
            solutions address specific needs while creating lasting impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-8 w-8" style={{ color: service.color }} />
                </div>
                <h3 className="text-[#02609E] text-xl font-bold mb-4 group-hover:text-[#017489] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#017489] font-medium hover:text-[#006955] transition-colors group"
                >
                  <span>Learn More</span>
                  <svg
                    className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="h-1 w-full" style={{ backgroundColor: service.color }}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            className="bg-[#017489] hover:bg-[#006955] text-white px-8 py-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/services" className="flex items-center gap-2 text-lg">
              View All Services
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
