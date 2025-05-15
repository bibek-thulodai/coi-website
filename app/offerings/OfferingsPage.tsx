"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import OfferingsHero from "@/components/offerings/OfferingsHero"
import StylishCTA from "@/components/shared/StylishCTA"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  GraduationCap,
  Code,
  HeartHandshake,
  Calendar,
  Rocket,
  CheckCircle,
  FileText,
  Users,
  Globe,
  Briefcase,
  Layers,
  Star,
  Award,
} from "lucide-react"

// Services Data
const services = [
  {
    id: "corporate",
    title: "Corporate Services",
    description:
      "Strategic and administrative solutions to support corporate clients with streamlined operations, capacity building and impactful CSR initiatives.",
    icon: Building2,
    image: "/placeholder.svg?height=400&width=600",
    price: "Custom pricing",
    features: [
      "HR & Talent Management",
      "ISO Education Consultation",
      "Corporate Social Responsibility Program Design",
      "Policy & Strategic Planning Consultation",
      "Vendor & Logistics Management",
    ],
    details:
      "Our corporate services are designed to help businesses operate more efficiently while making a positive impact. We provide comprehensive HR support, strategic planning assistance, and CSR program development that aligns with your company values and goals.",
  },
  {
    id: "education",
    title: "Educational Services",
    description:
      "Empowering educational institutions with resources, tools and consultancy to enhance academic quality, operations and global positioning.",
    icon: GraduationCap,
    image: "/placeholder.svg?height=400&width=600",
    price: "Starting at $2,500",
    features: [
      "Academic Calendar Development",
      "School Reform Toolkit Implementation",
      "CPD UK-Aligned Trainings",
      "School Website & Social Media Bundles",
      "International School Accreditation Support",
    ],
    details:
      "We help educational institutions transform their operations and improve academic outcomes. Our comprehensive approach includes curriculum development, teacher training, digital presence enhancement, and support for international accreditation processes.",
  },
  {
    id: "tech",
    title: "Tech & Outsourcing",
    description:
      "Tech-based services and outsourcing support to help you scale faster and smarter with reliable, expert-backed execution.",
    icon: Code,
    image: "/placeholder.svg?height=400&width=600",
    price: "Starting at $1,500",
    features: [
      "IT Project Outsourcing (Web, App, CRM)",
      "Document Digitization & Security",
      "Proposal Writing & Grant Design",
      "CRM Setup & Maintenance",
      "UI/UX & Technical Audit",
    ],
    details:
      "Our tech services help organizations leverage digital tools and expertise to enhance their operations. We offer end-to-end IT project management, digital transformation support, and technical consulting to help you stay competitive in the digital age.",
  },
  {
    id: "csr",
    title: "CSR & Startup Programs",
    description:
      "Bridge your corporate social responsibility with innovation by supporting vetted, high-impact startups aligned with the SDGs.",
    icon: HeartHandshake,
    image: "/placeholder.svg?height=400&width=600",
    price: "Starting at $5,000",
    features: [
      "CSR Program Design for Startups",
      "Startup Scouting, Matching & Incubation",
      "Grant & Mentorship Management",
      "Impact Reporting & Communication",
    ],
    details:
      "Our unique CSR-to-Startups program creates meaningful connections between corporations and innovative startups working toward sustainable development goals. We handle everything from program design to impact measurement and reporting.",
  },
  {
    id: "events",
    title: "Event & Training Management",
    description:
      "Delivering end-to-end event and training solutions, from corporate workshops to large-scale educational and community events.",
    icon: Calendar,
    image: "/placeholder.svg?height=400&width=600",
    price: "Starting at $2,000",
    features: [
      "Event Planning & Coordination",
      "Corporate & Youth Bootcamps",
      "Training Module Design",
      "Speaker & Venue Management",
      "Conference & Expo Support",
    ],
    details:
      "We organize impactful events and training programs that meet your specific objectives. Our team handles everything from concept development to execution, ensuring seamless experiences for participants and maximum impact for organizers.",
  },
  {
    id: "opportunities",
    title: "Application & Opportunity Support",
    description:
      "Helping youth and professionals unlock global opportunities through curated guidance, mentoring and application assistance.",
    icon: Rocket,
    image: "/placeholder.svg?height=400&width=600",
    price: "Starting at $500",
    features: [
      "Opportunity Matching (Fellowships, Scholarships, Conferences)",
      "Application Mentorship & Draft Reviews",
      "SOP/LOI Writing & Proofreading",
      "Opportunity Talks & Webinars",
      "Exclusive Opportunity Subscription Packages",
    ],
    details:
      "We connect individuals with life-changing opportunities around the world and provide expert guidance throughout the application process. Our mentorship and review services significantly increase success rates for competitive programs.",
  },
]

// Products Data
const products = [
  {
    id: "academic-calendar",
    title: "Academic Calendar",
    description:
      "A comprehensive planning tool for educational institutions to organize the academic year effectively.",
    image: "/placeholder.svg?height=400&width=600",
    price: "$1,200",
    features: [
      "Customized Academic Year Planning",
      "Integration of National Holidays",
      "Assessment Scheduling",
      "Event and Activity Planning",
      "Digital and Print Formats Available",
    ],
    details:
      "Our Academic Calendar is more than just a scheduling tool—it's a comprehensive resource that helps schools optimize their academic year. It includes strategic planning elements, performance measurement markers, and integration with curriculum objectives.",
  },
  {
    id: "school-reform",
    title: "School Reform Toolkit",
    description:
      "A complete system for educational institutions seeking excellence through comprehensive reform and quality improvement.",
    image: "/placeholder.svg?height=400&width=600",
    price: "$3,500",
    features: [
      "ISO 21001:2018 Certification & Quality Audit",
      "Digital Presence: Social Media & Marketing Bundle",
      "Growth Plan: Long-Term Development & Strategy",
      "Teachers Training & Club Modality",
      "School Profiling, Policy & Reform Docs",
      "Global Accreditation & Academic Calendar",
    ],
    details:
      "The School Reform Toolkit is a transformative solution for educational institutions looking to enhance their quality, operations, and global standing. It includes everything from quality management systems to marketing strategies and teacher development resources.",
  },
  {
    id: "csr-startups",
    title: "CSR to Startups Program",
    description:
      "A turnkey program that connects corporate CSR initiatives with innovative, impactful startups aligned with sustainable development goals.",
    image: "/placeholder.svg?height=400&width=600",
    price: "$7,500",
    features: [
      "CSR Strategy Development",
      "Startup Vetting and Selection",
      "Impact Measurement Framework",
      "Program Management and Reporting",
      "Stakeholder Engagement and Communications",
    ],
    details:
      "Our CSR to Startups Program creates meaningful partnerships between corporations and startups working on innovative solutions to social and environmental challenges. The program includes a complete framework for selection, support, and impact measurement.",
  },
]

// Franchises Data
const franchises = [
  {
    id: "opportunity-talk",
    title: "Opportunity Talk™ Franchise",
    description: "A curated event format featuring powerful stories of individuals who have transformed their lives.",
    image: "/placeholder.svg?height=400&width=600",
    price: "$2,000",
    features: [
      "Brand License to Host Events",
      "Speaker Curation Toolkit",
      "Event Blueprint & Planning Support",
      "Marketing Assets & Templates",
      "Post-Event Reporting Format",
      "Global Visibility on COI Platforms",
    ],
    details:
      "Opportunity Talk™ is a flagship initiative featuring powerful stories of individuals who have transformed their lives through access to education, entrepreneurship, volunteering, fellowships and global opportunities. Each talk is designed to EDUCATE, INSPIRE AND IGNITE the audience—particularly youth—with messages of resilience, ambition and real-world change.",
  },
  {
    id: "opportunity-cast",
    title: "Opportunity Cast™ Franchise",
    description:
      "A premium, invite-only content creation platform for those who have successfully hosted Opportunity Talk™ events.",
    image: "/placeholder.svg?height=400&width=600",
    price: "$3,500",
    features: [
      "Podcast & Video Production Guide",
      "Content Strategy Development",
      "Global Distribution Network",
      "Technical Setup Support",
      "Guest Curation Framework",
      "Monetization Strategies",
    ],
    details:
      "Opportunity Cast™ is the next chapter in our storytelling ecosystem — a premium, invite-only content creation platform for those who have successfully hosted Opportunity Talk™ events. Designed like a podcast-meets-impact series, Opportunity Cast™ allows you to amplify voices, document success stories and engage global audiences through high-quality video and audio content.",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const IconComponent = ({ icon: Icon }: { icon: any }) => <Icon className="h-5 w-5" />

export default function OfferingsPage() {
  const [activeTab, setActiveTab] = useState("services")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const handleRegister = (item: any) => {
    setSelectedItem(item)
    setIsRegisterOpen(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <OfferingsHero />

      {/* Offerings Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="services" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-lg">
            <TabsList className="grid grid-cols-3 w-full bg-transparent">
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-full px-8"
              >
                Services
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-full px-8"
              >
                Products
              </TabsTrigger>
              <TabsTrigger
                value="franchises"
                className="data-[state=active]:bg-white data-[state=active]:text-primary rounded-full px-8"
              >
                Franchises
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <AnimatePresence mode="wait">
            {activeTab === "services" && (
              <motion.div
                key="services"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.map((service, index) => (
                  <motion.div key={service.id} variants={fadeInUp}>
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                      </div>
                      <CardHeader className="relative -mt-6">
                        <div className="absolute -top-10 left-6">
                          <div className="bg-primary text-white p-3 rounded-full">
                            <IconComponent icon={service.icon} />
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold mt-4 text-header">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-medium text-sm mb-3 text-primary">Key Features:</h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-sm text-primary font-medium">+ {service.features.length - 3} more</li>
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div>
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                            {service.price}
                          </Badge>
                        </div>
                        <Button className="bg-primary hover:bg-primary-600" onClick={() => handleRegister(service)}>
                          Register Interest
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "products" && (
              <motion.div
                key="products"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {products.map((product, index) => (
                  <motion.div key={product.id} variants={fadeInUp}>
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                      </div>
                      <CardHeader className="relative -mt-6">
                        <div className="absolute -top-10 left-6">
                          <div className="bg-secondary text-white p-3 rounded-full">
                            {product.id === "academic-calendar" && <FileText className="h-5 w-5" />}
                            {product.id === "school-reform" && <Layers className="h-5 w-5" />}
                            {product.id === "csr-startups" && <HeartHandshake className="h-5 w-5" />}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold mt-4 text-header">{product.title}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-medium text-sm mb-3 text-secondary">Key Features:</h4>
                        <ul className="space-y-2 mb-6">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-1" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                          {product.features.length > 3 && (
                            <li className="text-sm text-secondary font-medium">+ {product.features.length - 3} more</li>
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div>
                          <Badge className="bg-secondary hover:bg-secondary-600 text-white">{product.price}</Badge>
                        </div>
                        <Button className="bg-secondary hover:bg-secondary-600" onClick={() => handleRegister(product)}>
                          Purchase Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "franchises" && (
              <motion.div
                key="franchises"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                {franchises.map((franchise, index) => (
                  <motion.div key={franchise.id} variants={fadeInUp}>
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={franchise.image || "/placeholder.svg"}
                          alt={franchise.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                      </div>
                      <CardHeader className="relative -mt-6">
                        <div className="absolute -top-10 left-6">
                          <div className="bg-accent text-white p-3 rounded-full">
                            {franchise.id === "opportunity-talk" && <Users className="h-5 w-5" />}
                            {franchise.id === "opportunity-cast" && <Globe className="h-5 w-5" />}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold mt-4 text-header">{franchise.title}</CardTitle>
                        <CardDescription>{franchise.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-medium text-sm mb-3 text-accent">What You'll Get:</h4>
                        <ul className="space-y-2 mb-6">
                          {franchise.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-1" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                          {franchise.features.length > 4 && (
                            <li className="text-sm text-accent font-medium">+ {franchise.features.length - 4} more</li>
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div>
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                            {franchise.price}
                          </Badge>
                        </div>
                        <Button className="bg-accent hover:bg-accent-600" onClick={() => handleRegister(franchise)}>
                          Apply Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-header mb-4">Why Choose Our Offerings</h2>
            <p className="text-gray-600">
              Our services, products, and franchises are designed with quality, impact, and sustainability in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-primary-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-header">Quality Assured</h3>
              <p className="text-gray-600">
                All our offerings are meticulously designed and tested to ensure they deliver exceptional value and
                results.
              </p>
            </motion.div>

            <motion.div
              className="bg-secondary-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-header">Expert Support</h3>
              <p className="text-gray-600">
                Our team of experienced professionals provides comprehensive support throughout implementation.
              </p>
            </motion.div>

            <motion.div
              className="bg-accent-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-header">Proven Results</h3>
              <p className="text-gray-600">
                Our solutions have a track record of success, with measurable impacts for individuals and organizations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-header mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Hear from those who have experienced the impact of our offerings.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">School Principal</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The School Reform Toolkit transformed our institution. We've seen significant improvements in our
                operations, teacher satisfaction, and student outcomes."
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CSR Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The CSR to Startups program helped us create meaningful impact while supporting innovation. The
                detailed reporting made it easy to demonstrate value to stakeholders."
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Opportunity Talk Franchisee</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Running an Opportunity Talk franchise has been incredibly rewarding. The support materials and guidance
                made it easy to host successful events that truly inspire our community."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stylish CTA Section */}
      <StylishCTA
        title="Ready to Get Started?"
        description="Explore our comprehensive range of services, products, and franchise opportunities designed to help you achieve your goals."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        showContactForm={true}
        variant="primary"
      />
    </main>
  )
}
