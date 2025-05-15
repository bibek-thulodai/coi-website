import ProductsHero from "@/components/products/ProductsHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { FileText, Layers, HeartHandshake, CheckCircle, ShieldCheck, BarChart, Users, Globe } from "lucide-react"
import StylishCTA from "@/components/shared/StylishCTA"

// Products Data
const products = [
  {
    id: "academic-calendar",
    title: "Academic Calendar",
    description:
      "A comprehensive planning tool for educational institutions to organize the academic year effectively.",
    icon: FileText,
    price: "$1,200",
    features: [
      "Customized Academic Year Planning",
      "Integration of National Holidays",
      "Assessment Scheduling",
      "Event and Activity Planning",
      "Digital and Print Formats Available",
    ],
    benefits: [
      "Improved academic planning and scheduling",
      "Enhanced coordination across departments",
      "Streamlined assessment and exam processes",
      "Better alignment of academic activities",
      "Easier tracking and monitoring of school events",
    ],
    details:
      "Our Academic Calendar is more than just a scheduling tool—it's a comprehensive resource that helps schools optimize their academic year. It includes strategic planning elements, performance measurement markers, and integration with curriculum objectives.",
    specifications: [
      "Customized to school's specific requirements",
      "Available in digital (interactive) and print formats",
      "Annual updates and revisions available",
      "Integration with school management systems",
      "Includes planning templates and tools",
    ],
    testimonial: {
      quote:
        "The Academic Calendar has transformed how we plan and execute our school year. It's now an indispensable tool for our institution.",
      author: "Dr. Sarah Johnson",
      position: "Principal, International School",
    },
  },
  {
    id: "school-reform",
    title: "School Reform Toolkit",
    description:
      "A complete system for educational institutions seeking excellence through comprehensive reform and quality improvement.",
    icon: Layers,
    price: "$3,500",
    features: [
      "ISO 21001:2018 Certification & Quality Audit",
      "Digital Presence: Social Media & Marketing Bundle",
      "Growth Plan: Long-Term Development & Strategy",
      "Teachers Training & Club Modality",
      "School Profiling, Policy & Reform Docs",
      "Global Accreditation & Academic Calendar",
    ],
    benefits: [
      "Comprehensive quality management system",
      "Enhanced global recognition and positioning",
      "Improved operational effectiveness",
      "Strategic growth and development planning",
      "Strengthened teaching quality and methodology",
      "Enhanced digital presence and marketing",
    ],
    details:
      "The School Reform Toolkit is a transformative solution for educational institutions looking to enhance their quality, operations, and global standing. It includes everything from quality management systems to marketing strategies and teacher development resources.",
    specifications: [
      "Comprehensive documentation and templates",
      "ISO 21001:2018 compliance materials",
      "Marketing and digital presence package",
      "Teacher training modules and resources",
      "Strategic planning tools and frameworks",
      "Implementation support and guidance",
    ],
    testimonial: {
      quote:
        "Implementing the School Reform Toolkit has been transformative for our institution. We've seen significant improvements in our quality systems, teacher effectiveness, and overall recognition.",
      author: "Michael Chen",
      position: "Director, Education Excellence Academy",
    },
  },
  {
    id: "csr-startups",
    title: "CSR to Startups Program",
    description:
      "A turnkey program that connects corporate CSR initiatives with innovative, impactful startups aligned with sustainable development goals.",
    icon: HeartHandshake,
    price: "$7,500",
    features: [
      "CSR Strategy Development",
      "Startup Vetting and Selection",
      "Impact Measurement Framework",
      "Program Management and Reporting",
      "Stakeholder Engagement and Communications",
    ],
    benefits: [
      "Strategic alignment of CSR with business objectives",
      "Measurable social impact and reporting",
      "Enhanced brand reputation and stakeholder relations",
      "Connection with innovative solutions and entrepreneurs",
      "Contribution to sustainable development goals",
    ],
    details:
      "Our CSR to Startups Program creates meaningful partnerships between corporations and startups working on innovative solutions to social and environmental challenges. The program includes a complete framework for selection, support, and impact measurement.",
    specifications: [
      "Customized CSR strategy aligned with corporate values",
      "Startup screening and matching process",
      "Impact measurement and reporting framework",
      "Communication and storytelling tools",
      "Program management and support system",
    ],
    testimonial: {
      quote:
        "The CSR to Startups Program has transformed our corporate social responsibility approach. We're now making a tangible impact while also driving innovation and employee engagement.",
      author: "Emily Wong",
      position: "CSR Director, Global Enterprises",
    },
  },
]

function ProductSection({ product }: { product: (typeof products)[0] }) {
  const Icon = product.icon

  return (
    <section id={product.id} className="py-16 border-b border-gray-200 last:border-0">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-secondary-100 p-3 rounded-lg mr-4">
              <Icon className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">{product.title}</h2>
          </div>

          <p className="text-gray-700 mb-6 text-lg">{product.description}</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-primary">Price</h3>
              <Badge className="bg-secondary hover:bg-secondary-600 text-white text-base px-3 py-1">
                {product.price}
              </Badge>
            </div>
            <p className="text-gray-700">{product.details}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-primary">Specifications</h3>
            <ul className="space-y-2">
              {product.specifications.map((spec, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-secondary hover:bg-secondary-600 w-full md:w-auto">Purchase This Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Purchase {product.title}</DialogTitle>
                <DialogDescription>
                  Fill out this form to purchase {product.title} and a team member will contact you shortly.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="purchase-name" className="text-right">
                    Name
                  </Label>
                  <Input id="purchase-name" className="col-span-3" placeholder="Your full name" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="purchase-email" className="text-right">
                    Email
                  </Label>
                  <Input id="purchase-email" className="col-span-3" placeholder="Your email address" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="purchase-phone" className="text-right">
                    Phone
                  </Label>
                  <Input id="purchase-phone" className="col-span-3" placeholder="Your phone number" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="purchase-org" className="text-right">
                    Organization
                  </Label>
                  <Input id="purchase-org" className="col-span-3" placeholder="Your organization name" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="purchase-message" className="text-right">
                    Message
                  </Label>
                  <Textarea
                    id="purchase-message"
                    className="col-span-3"
                    placeholder="Any specific requirements or questions"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-secondary hover:bg-secondary-600">
                  Submit Purchase Request
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gradient-to-r from-secondary-100 to-accent-100 flex items-center justify-center">
              <Icon className="h-24 w-24 text-secondary opacity-30" />
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4 bg-secondary-50 p-4 rounded-lg">
                <Quote className="h-8 w-8 text-secondary flex-shrink-0 mr-3" />
                <div>
                  <p className="italic text-gray-700 mb-3">{product.testimonial.quote}</p>
                  <p className="font-semibold">{product.testimonial.author}</p>
                  <p className="text-sm text-gray-500">{product.testimonial.position}</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                <a href="#demo">Request a Demo</a>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary">Implementation Support</h3>
            <p className="text-gray-700 mb-4">
              We provide comprehensive support to ensure successful implementation and maximum value from your purchase:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span>Initial setup and configuration assistance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span>Training for relevant team members</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span>Ongoing technical support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span>Regular updates and enhancements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Quote(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ProductsHero />

      {/* Products Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Innovative Products</h2>
            <p className="text-gray-700">
              At Creating Opportunities International, we've developed a range of specialized products to address the
              specific needs of educational institutions and organizations committed to creating meaningful impact. Each
              product is designed with quality, practicality, and effectiveness in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge className="bg-secondary hover:bg-secondary-600 text-white">{product.price}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-sm text-secondary font-medium">
                        + {product.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild className="border-secondary text-white bg-secondary hover:bg-secondary-600">
                    <a href={`#${product.id}`}>Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Products</h2>
            <p className="text-gray-700">
              Our products are designed with excellence, practicality, and real-world impact in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our products undergo rigorous quality testing and continuous improvement based on user feedback and
                  emerging best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Results-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Each product is designed with clear outcomes in mind, delivering measurable results and tangible
                  improvements for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our products come with comprehensive implementation support from our team of experts, ensuring you
                  maximize value and impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Global Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our products incorporate international standards and best practices, adapted to local contexts for
                  optimal relevance and effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {products.map((product) => (
            <ProductSection key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Demo Request Section */}
      <section id="demo" className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Request a Product Demo</h2>
            <p className="text-gray-700">
              See our products in action and discover how they can benefit your organization.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="demo-name">Full Name</Label>
                  <Input id="demo-name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-email">Email Address</Label>
                  <Input id="demo-email" type="email" placeholder="Your email address" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="demo-phone">Phone Number</Label>
                  <Input id="demo-phone" placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-org">Organization</Label>
                  <Input id="demo-org" placeholder="Your organization name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo-product">Product of Interest</Label>
                <select
                  id="demo-product"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title}
                    </option>
                  ))}
                  <option value="multiple">Multiple Products</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo-message">Message</Label>
                <Textarea id="demo-message" placeholder="Tell us about your specific needs and questions" rows={4} />
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary-600">
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Stylish CTA Section */}
      <StylishCTA
        title="Ready to Transform Your Organization?"
        description="Our products provide the tools and frameworks you need to achieve excellence, efficiency, and impact. Take the next step toward organizational transformation."
        primaryButtonText="Contact Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Offerings"
        secondaryButtonLink="/offerings"
        variant="secondary"
      />
    </main>
  )
}
