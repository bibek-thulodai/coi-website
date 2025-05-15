"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import SectionHeading from "@/components/shared/SectionHeading"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp Solutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Creating Opportunities International has been instrumental in our company's growth. Their strategic guidance and innovative solutions helped us expand into new markets with confidence.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director, Global Education Institute",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The educational services provided by COI transformed our curriculum and teaching methodologies. Our student satisfaction scores have increased by 35% since implementing their recommendations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Founder, EcoTech Startups",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a startup founder, I found COI's mentorship program invaluable. They connected us with the right partners and investors, helping us secure funding and scale our operations globally.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Okonkwo",
    role: "Head of CSR, Global Finance Group",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "COI helped us align our CSR initiatives with our corporate values and the SDGs. The impact measurement framework they developed has become an essential tool for reporting to our stakeholders.",
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef(null)
  const sectionRef = useRef(null)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToTestimonial = (index) => {
    setCurrent(index)
  }

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        nextTestimonial()
      }, 6000)
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-[#017489]/5 relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#013A87]/10 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#017489]/10 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#017489]/20 rounded-full"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-[#013A87]/20 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionHeading title="What Our Clients Say" subtitle="TESTIMONIALS" />
          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Don't just take our word for it. Hear from our clients about how Creating Opportunities International has
            helped them achieve their goals and create lasting impact.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 text-[#017489]/20">
              <Quote className="w-full h-full" />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#017489] to-[#013A87] rounded-full opacity-20 blur-md"></div>
                      <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={testimonials[current].image || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#02609E] text-center">{testimonials[current].name}</h3>
                    <p className="text-gray-600 text-center">{testimonials[current].role}</p>
                    <div className="flex items-center mt-3">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-gray-700 text-lg italic leading-relaxed">"{testimonials[current].content}"</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between items-center mt-10">
                <button
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full bg-[#017489]/10 hover:bg-[#017489] text-[#017489] hover:text-white flex items-center justify-center transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === current ? "w-8 bg-[#017489]" : "w-2.5 bg-[#017489]/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full bg-[#017489]/10 hover:bg-[#017489] text-[#017489] hover:text-white flex items-center justify-center transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
