import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Calendar, Users, MessageSquare } from "lucide-react"
import ContactHero from "@/components/contact/ContactHero"
import StylishCTA from "@/components/shared/StylishCTA"

export const metadata: Metadata = {
  title: "Contact Us | Creating Opportunities International",
  description:
    "Get in touch with Creating Opportunities International. Book an appointment, send us a message, or visit our office.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Options */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="message" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger
                  value="message"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg py-3"
                >
                  <MessageSquare className="h-4 w-4 mr-2" /> Send a Message
                </TabsTrigger>
                <TabsTrigger
                  value="appointment"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg py-3"
                >
                  <Calendar className="h-4 w-4 mr-2" /> Book Appointment
                </TabsTrigger>
                <TabsTrigger
                  value="visit"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg py-3"
                >
                  <MapPin className="h-4 w-4 mr-2" /> Visit Us
                </TabsTrigger>
              </TabsList>

              <TabsContent value="message">
                <Card className="border-none shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 text-white">Get In Touch</h2>
                        <p className="mb-8 text-white/80">
                          Have questions about our services or want to explore collaboration opportunities? Fill out the
                          form and our team will get back to you as soon as possible.
                        </p>

                        <div className="space-y-6">
                          <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Our Location</h3>
                              <p className="text-white/80">Kathmandu, Nepal</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Mail className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Email Us</h3>
                              <p className="text-white/80">info@creatingoppo.com</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Phone className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Call Us</h3>
                              <p className="text-white/80">+977 XXXXXXXXXX</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Clock className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Working Hours</h3>
                              <p className="text-white/80">Monday–Friday: 10:00 AM – 5:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <h2 className="text-2xl font-bold mb-6 text-header">Send Us a Message</h2>
                        <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label htmlFor="firstName" className="text-sm font-medium">
                                First Name
                              </label>
                              <Input id="firstName" placeholder="Your first name" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="lastName" className="text-sm font-medium">
                                Last Name
                              </label>
                              <Input id="lastName" placeholder="Your last name" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="email" type="email" placeholder="Your email address" />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Phone Number
                            </label>
                            <Input id="phone" placeholder="Your phone number" />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                              Subject
                            </label>
                            <Select>
                              <SelectTrigger id="subject">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="services">Services Information</SelectItem>
                                <SelectItem value="franchise">Franchise Opportunities</SelectItem>
                                <SelectItem value="partnership">Partnership Proposal</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                              Message
                            </label>
                            <Textarea id="message" placeholder="Your message" rows={5} />
                          </div>

                          <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                            Send Message
                          </Button>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appointment">
                <Card className="border-none shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 text-white">Book an Appointment</h2>
                        <p className="mb-8 text-white/80">
                          Schedule a Discovery Call or Meeting with our team to discuss your specific needs and how we
                          can help.
                        </p>

                        <div className="space-y-6">
                          <div className="flex items-start">
                            <Users className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Meeting Options</h3>
                              <p className="text-white/80">Virtual or In-Person Meetings</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Clock className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Available Hours</h3>
                              <p className="text-white/80">Monday–Friday: 10:00 AM – 5:00 PM</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <MessageSquare className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Language Options</h3>
                              <p className="text-white/80">Nepali | English | Hindi</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <h2 className="text-2xl font-bold mb-6 text-header">Schedule Your Meeting</h2>
                        <form className="space-y-6">
                          <div className="space-y-2">
                            <label htmlFor="fullName" className="text-sm font-medium">
                              Full Name
                            </label>
                            <Input id="fullName" placeholder="Your full name" />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="email" type="email" placeholder="Your email address" />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Phone Number
                            </label>
                            <Input id="phone" placeholder="Your phone number" />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="meetingType" className="text-sm font-medium">
                              Meeting Type
                            </label>
                            <Select>
                              <SelectTrigger id="meetingType">
                                <SelectValue placeholder="Select meeting type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="virtual">Virtual Meeting</SelectItem>
                                <SelectItem value="inperson">In-Person Meeting</SelectItem>
                                <SelectItem value="phone">Phone Call</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label htmlFor="date" className="text-sm font-medium">
                                Preferred Date
                              </label>
                              <Input id="date" type="date" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="time" className="text-sm font-medium">
                                Preferred Time
                              </label>
                              <Input id="time" type="time" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="topic" className="text-sm font-medium">
                              Meeting Topic
                            </label>
                            <Textarea id="topic" placeholder="What would you like to discuss?" rows={3} />
                          </div>

                          <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                            Book Appointment
                          </Button>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="visit">
                <Card className="border-none shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-gradient-to-br from-primary to-accent p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 text-white">Visit Our Office</h2>
                        <p className="mb-8 text-white/80">
                          We'd love to meet you in person. Visit our office during business hours or schedule an
                          appointment for a dedicated meeting.
                        </p>

                        <div className="space-y-6">
                          <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Office Address</h3>
                              <p className="text-white/80">Kathmandu, Nepal</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Clock className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Business Hours</h3>
                              <p className="text-white/80">Monday–Friday: 10:00 AM – 5:00 PM</p>
                              <p className="text-white/80">Saturday–Sunday: Closed</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Phone className="h-6 w-6 text-white/80 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold">Phone</h3>
                              <p className="text-white/80">+977 XXXXXXXXXX</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative h-[400px] md:h-auto">
                        {/* Replace the map placeholder with a gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <MapPin className="h-12 w-12 text-primary/50 mr-2" />
                          <p className="text-gray-500 font-medium">Interactive Map Would Be Here</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-header">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our services and processes.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "What exactly does Creating Opportunities International (COI) do?",
                  answer:
                    "COI is a corporate service and consulting firm that provides tailored solutions in opportunity sharing, educational consulting, HR outsourcing, CSR integration, IT and digital support, event management and project execution.",
                },
                {
                  question: "Who are your primary clients?",
                  answer:
                    "Our clients include private corporations, NGOs, educational institutions, government agencies, international organizations, startups and youth-led ventures seeking to grow, innovate, or create sustainable impact.",
                },
                {
                  question: "Can COI manage end-to-end projects on our behalf?",
                  answer:
                    "Absolutely. From concept development to execution and impact reporting, we offer turnkey solutions that manage people, resources and results — all under one roof.",
                },
                {
                  question: "How do we get started with COI?",
                  answer:
                    "Reach out via our Contact Page, email us at info@creatingoppo.com, or book a discovery call. We'll walk you through our onboarding and needs assessment process.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-header">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="/faq">View All FAQs</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stylish CTA Section */}
      <StylishCTA
        title="Ready to Create Opportunities?"
        description="Join us in our mission to empower individuals and institutions with strategic opportunities and professional services."
        primaryButtonText="Explore Our Services"
        primaryButtonLink="/services"
        variant="mixed"
      />
    </main>
  )
}
