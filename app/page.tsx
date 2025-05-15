"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/home/Hero"
import ServicesOverview from "@/components/home/ServicesOverview"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import ClientsShowcase from "@/components/home/ClientsShowcase"
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel"
import CaseStudyHighlights from "@/components/home/CaseStudyHighlights"
import NewsletterSignup from "@/components/shared/NewsletterSignup"
import { motion } from "framer-motion"

export default function HomePage() {
  const [showChatNotification, setShowChatNotification] = useState(false)

  useEffect(() => {
    // Show chat notification after 5 seconds
    const timer = setTimeout(() => {
      setShowChatNotification(true)

      // Hide notification after 5 more seconds
      setTimeout(() => {
        setShowChatNotification(false)
      }, 5000)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientsShowcase />
      <TestimonialsCarousel />
      <CaseStudyHighlights />
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           
          </motion.div>

          <div className="max-w-5xl mx-auto rounded-5">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Chat notification */}
      {showChatNotification && (
        <motion.div
          className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-lg p-4 max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <p className="text-sm font-medium">Need help navigating our website?</p>
          <p className="text-xs text-gray-500 mt-1">Ask our assistant any questions about our services!</p>
        </motion.div>
      )}
    </main>
  )
}
