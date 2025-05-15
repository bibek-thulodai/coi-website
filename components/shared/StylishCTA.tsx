import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface StylishCTAProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showContactForm?: boolean
  variant?: "primary" | "secondary" | "accent" | "header" | "mixed"
  withAnimation?: boolean
}

const StylishCTA: React.FC<StylishCTAProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  showContactForm = false,
  variant = "primary",
  withAnimation = true,
}) => {
  // Define gradient based on variant
  let gradientClasses = ""
  let primaryColor = ""
  let secondaryColor = ""

  switch (variant) {
    case "secondary":
      gradientClasses = "from-[#006955] to-[#017489]"
      primaryColor = "#006955"
      secondaryColor = "#017489"
      break
    case "accent":
      gradientClasses = "from-[#013A87] to-[#02609E]"
      primaryColor = "#013A87"
      secondaryColor = "#02609E"
      break
    case "header":
      gradientClasses = "from-[#02609E] to-[#013A87]"
      primaryColor = "#02609E"
      secondaryColor = "#013A87"
      break
    case "mixed":
      gradientClasses = "from-[#017489] via-[#006955] to-[#013A87]"
      primaryColor = "#017489"
      secondaryColor = "#013A87"
      break
    default:
      gradientClasses = "from-[#017489] to-[#006955]"
      primaryColor = "#017489"
      secondaryColor = "#006955"
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses}`}></div>

      {/* Animated shapes */}
      {withAnimation && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <div
            className="absolute rounded-full opacity-10 animate-float-slow"
            style={{
              width: "400px",
              height: "400px",
              border: `2px solid white`,
              top: "-100px",
              right: "-100px",
              animationDelay: "0s",
            }}
          ></div>

          {/* Medium circle */}
          <div
            className="absolute rounded-full opacity-10 animate-float-slow"
            style={{
              width: "200px",
              height: "200px",
              border: `2px solid white`,
              bottom: "-50px",
              left: "10%",
              animationDelay: "1s",
            }}
          ></div>

          {/* Small circles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: Math.random() * 60 + 20 + "px",
                height: Math.random() * 60 + 20 + "px",
                background: `rgba(255, 255, 255, ${Math.random() * 0.08 + 0.02})`,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            ></div>
          ))}

          {/* Diagonal lines */}
          <div
            className="absolute opacity-10"
            style={{
              width: "150%",
              height: "1px",
              background: "white",
              top: "30%",
              left: "-25%",
              transform: "rotate(-15deg)",
            }}
          ></div>
          <div
            className="absolute opacity-10"
            style={{
              width: "150%",
              height: "1px",
              background: "white",
              top: "60%",
              left: "-25%",
              transform: "rotate(10deg)",
            }}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block">
                {word}{" "}
                {i === Math.floor(title.split(" ").length / 2) - 1 && (
                  <>
                    <span className="relative">
                      <span
                        className="absolute h-1 bg-white rounded opacity-70"
                        style={{
                          width: "80%",
                          bottom: "-6px",
                          left: "10%",
                        }}
                      ></span>
                    </span>{" "}
                  </>
                )}
              </span>
            ))}
          </h2>
          <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>

          <div className="flex flex-wrap justify-center gap-5">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-lg px-8 py-6 h-auto rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ color: primaryColor }}
            >
              <Link href={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>

            {secondaryButtonText && secondaryButtonLink && !showContactForm && (
              <Button
                asChild
                variant="outline"
                className="border-white text-primary hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full transform transition-all duration-300 hover:scale-105"
              >
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}

            {showContactForm && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-white text-primary hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full transform transition-all duration-300 hover:scale-105"
                  >
                    {secondaryButtonText || "Contact Us"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-xl" style={{ color: primaryColor }}>
                      Get in Touch
                    </DialogTitle>
                    <DialogDescription>
                      Fill out this form and our team will get back to you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3" placeholder="Your full name" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" className="col-span-3" placeholder="Your email address" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right">
                        Phone
                      </Label>
                      <Input id="phone" className="col-span-3" placeholder="Your phone number" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        className="col-span-3"
                        placeholder="Tell us how we can help you"
                        rows={3}
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button type="submit" style={{ backgroundColor: primaryColor }}>
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-12 text-white opacity-10"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default StylishCTA
