"use client"

import { useRef } from "react"
import Image from "next/image"
import SectionHeading from "@/components/shared/SectionHeading"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Award, Users, Globe, HeartHandshake, Lightbulb } from "lucide-react"

const values = [
  {
    icon: HeartHandshake,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our interactions and business practices.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We embrace diversity and bring a global mindset to every opportunity we create.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly seek creative solutions to complex challenges faced by our clients.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of partnerships and collaborative approaches to problem-solving.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering outstanding results for our clients.",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#017489]/5 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#013A87]/10 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#017489]/10 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="Why Choose Us" subtitle="OUR DIFFERENCE" className="mb-8" />
            <p className="text-gray-600 mb-8">
              At Creating Opportunities International, we combine global expertise with local insights to deliver
              exceptional value. Our approach is centered on understanding your unique needs and crafting tailored
              solutions that drive sustainable results.
            </p>

            <div className="space-y-4">
              {[
                "Proven track record of success across diverse sectors",
                "Team of experienced professionals with global expertise",
                "Customized solutions tailored to your specific needs",
                "Commitment to creating lasting positive impact",
                "Innovative approaches to complex challenges",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-[#017489] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <h3 className="text-xl font-bold text-[#02609E] mb-4">Our Identity</h3>
              <p className="text-gray-600 mb-6">
                We are a team of passionate professionals dedicated to creating opportunities that transform lives and
                organizations. Our identity is built on these core values:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-[#017489]/10 hover:border-[#017489]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-[#017489]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <value.icon className="h-5 w-5 text-[#017489]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#02609E]">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#017489]/10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#013A87]/10 rounded-full"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Our team at work"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-6 max-w-xs"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#017489] text-white flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">15+</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#02609E]">Years of Experience</h4>
                  <p className="text-sm text-gray-600">Creating global opportunities</p>
                </div>
              </div>
              <div className="h-1 w-20 bg-[#017489] mb-4"></div>
              <p className="text-gray-600 text-sm">
                Our team brings over 15 years of combined experience in creating opportunities across diverse sectors
                and regions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
