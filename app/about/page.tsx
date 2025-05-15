import SectionHeading from "@/components/shared/SectionHeading"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedCounter from "@/components/shared/AnimatedCounter"
import AboutHero from "@/components/about/AboutHero"
import { Target, Eye, Shield, Lightbulb, Users, Leaf, ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Us | Creating Opportunities International",
  description:
    "Learn about Creating Opportunities International - our mission, vision, and core values that drive our work in empowering individuals and institutions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Story" subtitle="FROM COMMUNITY INITIATIVE TO CORPORATE ENTITY" />
              <p className="text-gray-700 mb-6">
                Creating Opportunities International is a dynamic private company driven by a single, powerful purpose:
                to create meaningful pathways to success by bridging the gap between ambition and opportunity. Evolving
                from a community initiative into a fully-fledged corporate entity, we now serve individuals,
                institutions and corporations across South Asia and beyond with a portfolio of strategic services.
              </p>
              <p className="text-gray-700 mb-6">
                Our solutions are crafted to uplift personal growth, institutional excellence and organizational
                efficiency — making us a one-stop partner in opportunity facilitation and education reform.
              </p>
              <p className="text-gray-700">
                We specialize in opportunity matching, application support, training and event management, HR
                consulting, IT project outsourcing and education-focused tools. With innovation at the heart of our
                model, our unique offerings like the Academic Calendar and School Reform Toolkits are redefining the way
                schools and educational institutions operate.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            
            </div>
          </div>
        </div>
      </section>

      {/* Stylish Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Mission & Vision" subtitle="OUR GUIDING PRINCIPLES" className="text-center mb-16" />

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/10 h-full transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower individuals and institutions by providing access to strategic opportunities, practical
                    tools and professional services that foster growth, impact and excellence.
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-header rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-accent/10 h-full transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-header"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-accent">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become a globally recognized leader in opportunity facilitation, education innovation and
                    professional services — transforming how people and institutions access and apply growth
                    opportunities.
                  </p>
                  <div className="mt-6 flex items-center text-accent font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stylish Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Core Values" subtitle="WHAT DRIVES US" className="text-center mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Integrity",
                icon: <Shield className="w-10 h-10 text-primary" />,
                color: "from-primary/20 to-primary/5",
              },
              {
                name: "Innovation",
                icon: <Lightbulb className="w-10 h-10 text-secondary" />,
                color: "from-secondary/20 to-secondary/5",
              },
              {
                name: "Impact",
                icon: <Target className="w-10 h-10 text-header" />,
                color: "from-header/20 to-header/5",
              },
              {
                name: "Inclusion",
                icon: <Users className="w-10 h-10 text-accent" />,
                color: "from-accent/20 to-accent/5",
              },
              {
                name: "Sustainability",
                icon: <Leaf className="w-10 h-10 text-green-600" />,
                color: "from-green-600/20 to-green-600/5",
              },
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="relative h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                  <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${value.color}`}></div>
                  <div className="relative z-10 p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.name}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-3"></div>
                    <p className="text-gray-600 text-sm">
                      We uphold the highest standards of {value.name.toLowerCase()} in everything we do.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylish Impact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Impact" subtitle="MAKING A DIFFERENCE" className="text-center mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { count: 500, label: "Opportunities Shared", color: "primary" },
              { count: 50, label: "Corporate Partners", color: "secondary" },
              { count: 1000, label: "Youth Empowered", color: "header" },
              { count: 25, label: "Countries Reached", color: "accent" },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div
                  className={`absolute inset-0 bg-${stat.color}/10 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
                ></div>
                <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center h-full border border-gray-100 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`text-5xl font-bold text-${stat.color} mb-2 flex justify-center`}>
                    <AnimatedCounter end={stat.count} duration={2} />
                    <span>+</span>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3"></div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylish CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
              className="absolute rounded-full bg-white/10 animate-float"
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Create Opportunities?</h2>
            <div className="w-20 h-1 bg-white rounded-full mx-auto mb-8"></div>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Join us in our mission to empower individuals and institutions with strategic opportunities and
              professional services.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
