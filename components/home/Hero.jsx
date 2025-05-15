"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const floatingAnimation = {
    y: ["-10px", "10px", "-10px"],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={floatingAnimation}
          className="absolute -top-20 -left-20 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
          className="absolute top-40 -right-20 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 },
          }}
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <motion.div style={{ opacity, scale, y }} className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={staggerChildren}>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">WELCOME TO</span>
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                }}
              >
                CREATING OPPORTUNITIES
              </motion.span>
              <span className="block">INTERNATIONAL</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-white mb-8">
              WHERE IMPACT MEETS INNOVATION
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/services" className="group">
                  Our Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsVideoOpen(true)}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="mr-2"
                >
                  <Play className="h-4 w-4" />
                </motion.div>
                Watch Video
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-xl"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                We Empower Your Goals
              </motion.h2>

              <motion.p
                className="text-white/90 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Creating Opportunities International is a dynamic private company driven by a single, powerful purpose:
                to create meaningful pathways to success by bridging the gap between ambition and opportunity.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/about" className="group">
                    Learn More About Us
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-white/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-white/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white text-primary px-4 py-2 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              25+ Countries
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white text-primary px-4 py-2 rounded-full shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
            >
              1000+ Success Stories
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/y9Xv6mril1s"
              title="Creating Opportunities International"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
