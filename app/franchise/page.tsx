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
import { Users, Globe, CheckCircle, Award, Lightbulb, Share2, Target } from "lucide-react"
import FranchiseHero from "@/components/franchise/FranchiseHero"
import StylishCTA from "@/components/shared/StylishCTA"

// Franchises Data
const franchises = [
  {
    id: "opportunity-talk",
    title: "Opportunity Talk™ Franchise",
    subtitle: "EMPOWERING THROUGH REAL STORIES. INSPIRING THE WORLD ONE TALK AT A TIME.",
    description:
      "A curated event format featuring powerful stories of individuals who have transformed their lives through access to education, entrepreneurship, volunteering, fellowships and global opportunities.",
    icon: Users,
    price: "$2,000",
    features: [
      "Brand License to Host Events under the Opportunity Talk™ name",
      "Speaker Curation Toolkit – Tips and formats to find and prepare your speakers",
      "Event Blueprint – A to Z planning support, agenda formats, team structure",
      "Marketing Assets – Social media templates, posters, intro videos",
      "Post-Event Reporting Format – Templates for feedback, media and outreach",
      "Global Visibility – Showcased on COI platforms and newsletters",
    ],
    benefits: [
      "Build your regional influence and network",
      "Create meaningful impact in your community",
      "Develop leadership and event management skills",
      "Connect with global franchise network",
      "Access to proven, tested event format",
      "Potential revenue generation through sponsorships and tickets",
    ],
    details:
      "Opportunity Talk™ is a flagship initiative by Creating Opportunities International Pvt. Ltd. It is a curated event format featuring powerful stories of individuals who have transformed their lives through access to education, entrepreneurship, volunteering, fellowships and global opportunities. Each talk is designed to EDUCATE, INSPIRE AND IGNITE the audience—particularly youth—with messages of resilience, ambition and real-world change.",
    requirements: [
      "Passion for creating impact and sharing inspiring stories",
      "Basic event management experience or willingness to learn",
      "Access to a community that would benefit from the talks",
      "Commitment to organizing at least 2 events per year",
      "Alignment with COI's values and mission",
    ],
    testimonial: {
      quote:
        "Bringing Opportunity Talk to our region has been incredibly rewarding. The support from COI made it easy to create a professional, impactful event that truly resonated with our community.",
      author: "Priya Sharma",
      position: "Opportunity Talk Franchisee, Mumbai",
    },
  },
  {
    id: "opportunity-cast",
    title: "Opportunity Cast™ Franchise",
    subtitle: "FROM THE STAGE TO THE STUDIO — ELEVATE YOUR VOICE",
    description:
      "A premium, invite-only content creation platform for those who have successfully hosted Opportunity Talk™ events, designed like a podcast-meets-impact series.",
    icon: Globe,
    price: "$3,500",
    features: [
      "Podcast & Video Production Guide – Technical setup, recording tips, editing basics",
      "Content Strategy Development – Episode planning, guest selection, topic curation",
      "Global Distribution Network – Platforms, channels and audience building",
      "Technical Setup Support – Equipment recommendations and configuration",
      "Guest Curation Framework – Outreach templates, interview preparation",
      "Monetization Strategies – Sponsorship decks, partnership approaches",
    ],
    benefits: [
      "Expand your impact beyond live events",
      "Develop valuable media production skills",
      "Build a global audience and network",
      "Create ongoing, accessible content resources",
      "Potential for monetization and partnerships",
      "Increased visibility and thought leadership",
    ],
    details:
      "Opportunity Cast™ is the next chapter in our storytelling ecosystem — a premium, invite-only content creation platform for those who have successfully hosted Opportunity Talk™ events. Designed like a podcast-meets-impact series, Opportunity Cast™ allows you to amplify voices, document success stories and engage global audiences through high-quality video and audio content.",
    requirements: [
      "Previous experience as an Opportunity Talk™ franchisee",
      "Successfully organized at least 2 Opportunity Talk events",
      "Demonstrated commitment to quality and impact",
      "Basic technical aptitude or team member with tech skills",
      "Ability to consistently produce content (minimum 6 episodes per year)",
    ],
    testimonial: {
      quote:
        "Opportunity Cast has allowed us to extend the reach of our impact stories far beyond what we could achieve with just events. The framework and support provided made the technical aspects manageable, even for beginners.",
      author: "Michael Chen",
      position: "Opportunity Cast Franchisee, Singapore",
    },
  },
]

function FranchiseSection({ franchise }: { franchise: (typeof franchises)[0] }) {
  const Icon = franchise.icon

  return (
    <section id={franchise.id} className="py-16 border-b border-gray-200 last:border-0">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-accent-100 p-3 rounded-lg mr-4">
              <Icon className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">{franchise.title}</h2>
              <p className="text-sm font-medium text-accent">{franchise.subtitle}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6 text-lg">{franchise.description}</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-primary">Investment</h3>
              <Badge className="bg-accent hover:bg-accent-600 text-white text-base px-3 py-1">{franchise.price}</Badge>
            </div>
            <p className="text-gray-700">{franchise.details}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">What You'll Get</h3>
              <ul className="space-y-2">
                {franchise.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Benefits</h3>
              <ul className="space-y-2">
                {franchise.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-primary">Requirements</h3>
            <ul className="space-y-2">
              {franchise.requirements.map((requirement, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-accent hover:bg-accent-600 w-full md:w-auto">Apply for This Franchise</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Apply for {franchise.title}</DialogTitle>
                <DialogDescription>
                  Fill out this form to apply for the {franchise.title} franchise and a team member will contact you
                  shortly.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="franchise-name" className="text-right">
                    Name
                  </Label>
                  <Input id="franchise-name" className="col-span-3" placeholder="Your full name" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="franchise-email" className="text-right">
                    Email
                  </Label>
                  <Input id="franchise-email" className="col-span-3" placeholder="Your email address" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="franchise-phone" className="text-right">
                    Phone
                  </Label>
                  <Input id="franchise-phone" className="col-span-3" placeholder="Your phone number" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="franchise-location" className="text-right">
                    Location
                  </Label>
                  <Input id="franchise-location" className="col-span-3" placeholder="City and country" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="franchise-experience" className="text-right">
                    Experience
                  </Label>
                  <Textarea
                    id="franchise-experience"
                    className="col-span-3"
                    placeholder="Briefly describe your relevant experience"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-accent hover:bg-accent-600">
                  Submit Application
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=500"
              alt={franchise.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start mb-4 bg-accent-50 p-4 rounded-lg">
                <svg
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
                <div>
                  <p className="italic text-gray-700 mb-3">{franchise.testimonial.quote}</p>
                  <p className="font-semibold">{franchise.testimonial.author}</p>
                  <p className="text-sm text-gray-500">{franchise.testimonial.position}</p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-white"
              >
                <a href="#faq">Frequently Asked Questions</a>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary">Support & Training</h3>
            <p className="text-gray-700 mb-4">We provide comprehensive support to ensure your franchise success:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Initial onboarding and training program</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Regular check-ins and progress reviews</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Access to global franchise community</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span>Marketing and promotion support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FranchisePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <FranchiseHero />

      {/* Franchise Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Franchise Models</h2>
            <p className="text-gray-700">
              Creating Opportunities International offers compelling franchise opportunities that empower entrepreneurs
              to create impact in their communities while being part of a global mission. Our franchise models provide
              proven systems, comprehensive support, and the opportunity to create meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {franchises.map((franchise) => (
              <Card
                key={franchise.id}
                className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                    <franchise.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{franchise.title}</CardTitle>
                  <CardDescription>{franchise.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge className="bg-accent hover:bg-accent-600 text-white">{franchise.price}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {franchise.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {franchise.features.length > 3 && (
                      <li className="text-sm text-accent font-medium">
                        + {franchise.features.length - 3} more included
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    asChild
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    <a href={`#${franchise.id}`}>Learn More</a>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-accent hover:bg-accent-600">Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Apply for {franchise.title}</DialogTitle>
                        <DialogDescription>
                          Fill out this form to apply for the {franchise.title} franchise and a team member will contact
                          you shortly.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor={`quick-name-${franchise.id}`} className="text-right">
                            Name
                          </Label>
                          <Input
                            id={`quick-name-${franchise.id}`}
                            className="col-span-3"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor={`quick-email-${franchise.id}`} className="text-right">
                            Email
                          </Label>
                          <Input
                            id={`quick-email-${franchise.id}`}
                            className="col-span-3"
                            placeholder="Your email address"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor={`quick-phone-${franchise.id}`} className="text-right">
                            Phone
                          </Label>
                          <Input
                            id={`quick-phone-${franchise.id}`}
                            className="col-span-3"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="bg-accent hover:bg-accent-600">
                          Submit Application
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Franchise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Franchise</h2>
            <p className="text-gray-700">
              Our franchise models offer unique advantages and comprehensive support to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Proven Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our franchise models have been tested and refined to ensure they deliver consistent results and
                  impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Meaningful Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Create tangible positive change in your community while building a valuable skill set and network.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Join a community of like-minded franchisees around the world, sharing best practices and
                  opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Complete Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Comprehensive training, marketing materials, and ongoing guidance to ensure your success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Franchise Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {franchises.map((franchise) => (
            <FranchiseSection key={franchise.id} franchise={franchise} />
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">Get answers to common questions about our franchise opportunities.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is the application process for becoming a franchisee?",
                  answer:
                    "The process begins with submitting an application through our website or contacting our team directly. We'll schedule an initial discussion to understand your background and goals, followed by a more detailed review of the franchise opportunity. If there's mutual interest, we'll proceed with formal agreements and onboarding.",
                },
                {
                  question: "Is there any ongoing support after I purchase a franchise?",
                  answer:
                    "Absolutely. We provide comprehensive ongoing support including regular check-ins, access to our global franchise community, updated materials and resources, marketing assistance, and strategic guidance. Our goal is to ensure your long-term success.",
                },
                {
                  question: "Do I need prior experience in events or content creation?",
                  answer:
                    "While prior experience can be helpful, it's not required. We provide thorough training and resources to help you succeed. What's most important is your passion for creating impact and your willingness to learn and follow our proven systems.",
                },
                {
                  question: "What is the typical return on investment timeline?",
                  answer:
                    "ROI timelines vary based on your execution, local market, and specific approach. Opportunity Talk franchisees typically see returns within 6-12 months through sponsorships, ticket sales, and related services. Opportunity Cast franchisees may see returns in 12-18 months through sponsorships and content monetization.",
                },
                {
                  question: "Can I own multiple franchises or territories?",
                  answer:
                    "Yes, successful franchisees often expand to multiple territories or add complementary franchises. After demonstrating success with your initial franchise, we're happy to discuss expansion opportunities.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-primary">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stylish CTA Section */}
      <StylishCTA
        title="Ready to Join Our Global Mission?"
        description="Build your own stage. Create your local movement. Join a global mission that's creating opportunities and changing lives around the world."
        primaryButtonText="Contact Our Team"
        primaryButtonLink="/contact"
        showContactForm={true}
        variant="accent"
      />
    </main>
  )
}
