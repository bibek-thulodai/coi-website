"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  return (
    <footer ref={footerRef} className="bg-[#013A87] text-white relative overflow-hidden">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#017489] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-[#017489] opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 pt-32 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/placeholder.svg?height=60&width=200"
                  alt="Creating Opportunities International"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-white/80 mb-6">
              Creating Opportunities International is dedicated to empowering individuals and organizations through
              innovative solutions and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#1DA1F2] flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#E4405F] flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Products", href: "/products" },
                { name: "Franchise", href: "/franchise" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#017489] mr-3 flex-shrink-0 mt-1" />
                <span className="text-white/80">123 Opportunity Avenue, Innovation District, Global City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#017489] mr-3 flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#017489] mr-3 flex-shrink-0" />
                <span className="text-white/80">info@creatingopportunities.org</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-[#017489] mr-3 flex-shrink-0" />
                <span className="text-white/80">Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild className="bg-[#017489] hover:bg-[#006955] text-white">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter to receive the latest updates, opportunities, and insights.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#017489] rounded-r-none"
              />
              <Button className="bg-[#017489] hover:bg-[#006955] rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Creating Opportunities International. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Use
              </Link>
              <Link
                href="/cookie-notice"
                className="text-white/60 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Notice
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
