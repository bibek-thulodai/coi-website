import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Building2,
  GraduationCap,
  Code,
  HeartHandshake,
  CalendarDays,
  Rocket,
  CheckCircle,
  Users,
  Award,
} from "lucide-react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServicesHero from "@/components/services/ServicesHero"
import StylishCTA from "@/components/shared/StylishCTA"

export const metadata: Metadata = {
  title: "Services | Creating Opportunities International",
  description:
    "Explore our comprehensive range of services designed to help businesses, institutions, and individuals achieve their goals.",
}

const services = [
  {
    id: "corporate",
    title: "Corporate Services",
    description:
      "Strategic and administrative solutions to support corporate clients with streamlined operations, capacity building and impactful CSR initiatives.",
    icon: Building2,
    color: "#017489",
    detailedOffering: [
      "HR & Talent Management",
      "ISO Education Consultation",
      "Corporate Social Responsibility Program Design",
      "Policy & Strategic Planning Consultation",
      "Vendor & Logistics Management",
    ],
    forWho: ["Corporations, SMEs, NGOs", "CSR and HR departments"],
    keyBenefits: [
      "End-to-end corporate support",
      "Increased compliance and operational efficiency",
      "Tailored strategic alignment",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "education",
    title: "Educational Services",
    description:
      "We empower educational institutions with resources, tools and consultancy to enhance academic quality, operations and global positioning.",
    icon: GraduationCap,
    color: "#006955",
    detailedOffering: [
      "Academic Calendar Development",
      "School Reform Toolkit Implementation",
      "CPD UK-Aligned Trainings",
      "School Website & Social Media Bundles",
      "International School Accreditation Support",
    ],
    forWho: ["Private/Public Schools, Colleges", "School Networks & Franchises"],
    keyBenefits: ["Better academic planning", "Competitive positioning", "Higher student/parent satisfaction"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "tech",
    title: "Tech & Outsourcing",
    description:
      "We offer tech-based services and outsourcing support to help you scale faster and smarter with reliable, expert-backed execution.",
    icon: Code,
    color: "#02609E",
    detailedOffering: [
      "IT Project Outsourcing (Web, App, CRM)",
      "Document Digitization & Security",
      "Proposal Writing & Grant Design",
      "CRM Setup & Maintenance",
      "UI/UX & Technical Audit",
    ],
    forWho: ["Startups, Development Projects, Educational Institutions"],
    keyBenefits: ["Reliable, cost-effective solutions", "Access to skilled tech teams", "Custom and scalable output"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "csr",
    title: "CSR & Startup Programs",
    description:
      "Bridge your corporate social responsibility with innovation by supporting vetted, high-impact startups aligned with the SDGs.",
    icon: HeartHandshake,
    color: "#013A87",
    detailedOffering: [
      "CSR Program Design for Startups",
      "Startup Scouting, Matching & Incubation",
      "Grant & Mentorship Management",
      "Impact Reporting & Communication",
    ],
    forWho: ["Corporate CSR Teams", "Development Agencies", "Social Impact Investors"],
    keyBenefits: ["Tangible, measurable CSR impact", "Enhanced brand reputation", "Youth innovation empowerment"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "events",
    title: "Event & Training Management",
    description:
      "Delivering end-to-end event and training solutions, from corporate workshops to large-scale educational and community events.",
    icon: CalendarDays,
    color: "#017489",
    detailedOffering: [
      "Event Planning & Coordination",
      "Corporate & Youth Bootcamps",
      "Training Module Design",
      "Speaker & Venue Management",
      "Conference & Expo Support",
    ],
    forWho: ["Companies, Institutions, INGOs", "Fellowship & Leadership Programs"],
    keyBenefits: ["Zero-hassle execution", "Creative, tailored learning experiences", "Strong branding and outreach"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "opportunities",
    title: "Application & Opportunity Support",
    description:
      "Helping youth and professionals unlock global opportunities through curated guidance, mentoring and application assistance.",
    icon: Rocket,
    color: "#006955",
    detailedOffering: [
      "Opportunity Matching (Fellowships, Scholarships, Conferences)",
      "Application Mentorship & Draft Reviews",
      "SOP/LOI Writing & Proofreading",
      "Opportunity Talks & Webinars",
      "Exclusive Opportunity Subscription Packages",
    ],
    forWho: ["Students, Early-career Professionals, Emerging Leaders"],
    keyBenefits: [
      "Better acceptance rates",
      "Access to verified global opportunities",
      "Continuous development support",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

function ServiceRequestModal({ service }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-[#017489] hover:bg-[#006955] text-white mt-4">Request This Service</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[#02609E] text-xl">Request {service.title}</DialogTitle>
          <DialogDescription>
            Fill out this form to request more information or a quote for our {service.title.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="general">General Info</TabsTrigger>
              <TabsTrigger value="specific">Service Specifics</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
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
                <Label htmlFor="organization" className="text-right">
                  Organization
                </Label>
                <Input id="organization" className="col-span-3" placeholder="Your company or organization" />
              </div>
            </TabsContent>

            <TabsContent value="specific" className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="specific-needs" className="text-right">
                  Specific Needs
                </Label>
                <Textarea
                  id="specific-needs"
                  className="col-span-3"
                  placeholder="Please describe your specific requirements"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="timeline" className="text-right">
                  Timeline
                </Label>
                <select
                  id="timeline"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">When do you need this service?</option>
                  <option value="immediate">Immediately</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="budget" className="text-right">
                  Budget Range
                </Label>
                <select
                  id="budget"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select your budget range</option>
                  <option value="under1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="additional-info" className="text-right">
                  Additional Info
                </Label>
                <Textarea
                  id="additional-info"
                  className="col-span-3"
                  placeholder="Any other information you'd like to share"
                  rows={2}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter>
          <Button type="submit" className="bg-[#017489] hover:bg-[#006955]">
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div
            className="h-12 w-12 rounded-lg flex items-center justify-center mr-4"
            style={{ backgroundColor: `${service.color}15` }}
          >
            <service.icon className="h-6 w-6" style={{ color: service.color }} />
          </div>
          <h3 className="text-xl font-bold" style={{ color: service.color }}>
            {service.title}
          </h3>
        </div>

        <p className="text-gray-600 mb-6">{service.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-3 text-[#02609E] flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" style={{ color: service.color }} />
              Detailed Offering
            </h4>
            <ul className="space-y-2 pl-6">
              {service.detailedOffering.map((item, index) => (
                <li key={index} className="text-sm text-gray-700 list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-[#02609E] flex items-center">
                <Users className="h-4 w-4 mr-2" style={{ color: service.color }} />
                Who It's For
              </h4>
              <ul className="space-y-2 pl-6">
                {service.forWho.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-[#02609E] flex items-center">
                <Award className="h-4 w-4 mr-2" style={{ color: service.color }} />
                Key Benefits
              </h4>
              <ul className="space-y-2 pl-6">
                {service.keyBenefits.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <ServiceRequestModal service={service} />
        </div>
      </div>
      <div className="h-1 w-full" style={{ backgroundColor: service.color }}></div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services List */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#02609E] mb-4">Our Professional Services</h2>
            <p className="text-gray-600">
              At Creating Opportunities International, we offer a diverse range of professional services designed to
              empower individuals, educational institutions, and businesses. Each service is crafted to deliver
              exceptional value and meaningful results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#02609E] mb-6">Our Approach to Service Delivery</h2>
                <p className="text-gray-600 mb-6">
                  At Creating Opportunities International, we believe in a collaborative, client-centered approach that
                  ensures our services deliver real value and sustainable results.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#017489] text-white flex items-center justify-center mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#02609E]">Understand</h3>
                      <p className="text-gray-600">
                        We begin by deeply understanding your unique needs and challenges.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#017489] text-white flex items-center justify-center mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#02609E]">Design</h3>
                      <p className="text-gray-600">
                        We design customized solutions that align with your goals and values.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#017489] text-white flex items-center justify-center mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#02609E]">Implement</h3>
                      <p className="text-gray-600">
                        We execute with precision, adapting as needed to ensure optimal results.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#017489] text-white flex items-center justify-center mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#02609E]">Evaluate</h3>
                      <p className="text-gray-600">
                        We measure outcomes and refine our approach for continuous improvement.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild className="bg-[#017489] hover:bg-[#006955] text-white">
                  <Link href="/contact">Discuss Your Needs</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#017489]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#013A87]/10 rounded-full"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Our service approach"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stylish CTA Section */}
      <StylishCTA
        title="Ready to Create New Opportunities?"
        description="Let's work together to achieve your goals and create lasting impact. Our team is ready to support your journey with tailored solutions and expert guidance."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Request a Consultation"
        showContactForm={true}
        variant="primary"
      />
    </main>
  )
}
