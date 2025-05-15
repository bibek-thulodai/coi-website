"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Mail, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setStatus("error")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #017489 0%, #013A87 100%)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

      {/* Animated circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute top-20 right-1/4 w-32 h-32 rounded-full bg-white"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-white"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-medium text-white">Newsletter</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated with Opportunities</h3>
                <p className="text-white/80 mb-6">
                  Join our newsletter to receive updates on new opportunities, insights, and resources that can help you
                  or your organization grow and create impact.
                </p>
                <div className="hidden md:block">
                  <div className="flex items-center text-white/70 text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-white/90" />
                    <span>Weekly updates on new opportunities</span>
                  </div>
                  <div className="flex items-center text-white/70 text-sm mt-2">
                    <CheckCircle className="h-4 w-4 mr-2 text-white/90" />
                    <span>Exclusive resources and insights</span>
                  </div>
                  <div className="flex items-center text-white/70 text-sm mt-2">
                    <CheckCircle className="h-4 w-4 mr-2 text-white/90" />
                    <span>No spam, unsubscribe anytime</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-white/40" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/50 focus:ring-white/30 w-full"
                        disabled={status === "loading" || status === "success"}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full bg-white hover:bg-white/90 text-[#017489] hover:text-[#006955] font-medium py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#017489]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Subscribing...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Subscribed!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Subscribe
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-sm flex items-center text-red-300"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Please enter a valid email address
                    </motion.div>
                  )}

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-sm flex items-center text-green-300"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Thank you for subscribing!
                    </motion.div>
                  )}

                  <div className="mt-4 text-white/60 text-xs text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </div>
                </form>
              </motion.div>

              <div className="md:hidden mt-6">
                <div className="flex items-center text-white/70 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-white/90" />
                  <span>Weekly updates on new opportunities</span>
                </div>
                <div className="flex items-center text-white/70 text-sm mt-2">
                  <CheckCircle className="h-4 w-4 mr-2 text-white/90" />
                  <span>Exclusive resources and insights</span>
                </div>
                <div className="flex items-center text-white/70 text-sm mt-2">
                  <CheckCircle className="h-4 w-4 mr-2 text-white/90" />
                  <span>No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
