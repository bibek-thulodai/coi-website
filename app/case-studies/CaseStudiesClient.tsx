"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { caseStudies } from "@/data/case-studies"
import { ArrowRight } from "lucide-react"

export default function CaseStudiesClient() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(caseStudies.map((study) => study.category)))]

  // Filter case studies based on active category
  const filteredCaseStudies =
    activeCategory === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeCategory)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-header py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern"></div>
          {/* Animated circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore our collection of case studies showcasing how we've helped organizations and communities create
              lasting opportunities and meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === category ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case studies grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={`/case-studies/${study.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={study.image || `/placeholder.svg?height=400&width=600`}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <Badge className="bg-white/20 text-white backdrop-blur-sm">{study.category}</Badge>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm text-gray-500 mb-2">{study.date}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{study.description}</p>

                      <div className="flex items-center text-primary font-medium mt-auto">
                        Read Case Study
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
