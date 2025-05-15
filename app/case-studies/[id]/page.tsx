import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronLeft, Calendar, Award, Users, BarChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { caseStudies } from "@/data/case-studies"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const study = caseStudies.find((study) => study.id === params.id)

  if (!study) {
    return {
      title: "Case Study Not Found | Creating Opportunities International",
      description: "The requested case study could not be found.",
    }
  }

  return {
    title: `${study.title} | Creating Opportunities International`,
    description: study.description,
    openGraph: {
      title: `${study.title} | Creating Opportunities International`,
      description: study.description,
      type: "article",
      publishedTime: study.date,
      authors: ["Creating Opportunities International"],
    },
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const study = caseStudies.find((study) => study.id === params.id)

  if (!study) {
    notFound()
  }

  // Find related case studies in the same category
  const relatedStudies = caseStudies.filter((s) => s.category === study.category && s.id !== study.id).slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01304f] via-[#014a59] to-[#003d31] overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-grid-white/5 bg-grid-pattern"></div>
          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,38,85,0.6),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,65,55,0.6),transparent_70%)]"></div>
          {/* Animated circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Case Studies
            </Link>

            <Badge className="mb-4 bg-white/10 text-white backdrop-blur-sm">{study.category}</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{study.title}</h1>

            <div className="flex items-center text-white/80 mb-8">
              <Calendar size={16} className="mr-2" />
              <span>{study.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={study.image || `/placeholder.svg?height=800&width=1200`}
                  alt={study.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-[#02609E] mb-4">Overview</h2>
                <p className="text-gray-700 mb-6">{study.overview}</p>

                <h2 className="text-2xl font-bold text-[#02609E] mb-4">The Challenge</h2>
                <p className="text-gray-700 mb-6">{study.challenge}</p>

                <h2 className="text-2xl font-bold text-[#02609E] mb-4">Our Approach</h2>
                <p className="text-gray-700 mb-6">{study.approach}</p>

                <div className="bg-gray-50 p-6 rounded-xl my-8">
                  <h3 className="text-xl font-bold text-[#02609E] mb-4">Key Results</h3>
                  <ul className="space-y-4">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                          <BarChart size={16} />
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-[#02609E] mb-4">Conclusion</h2>
                <p className="text-gray-700 mb-6">{study.conclusion}</p>

                {study.testimonial && (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-8">
                    <p className="text-gray-700">{study.testimonial.quote}</p>
                    <footer className="mt-2 text-gray-600 font-medium">
                      {study.testimonial.author}, {study.testimonial.role}
                    </footer>
                  </blockquote>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-[#02609E] mb-4">Project Details</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mr-3">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="font-medium">{study.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mr-3">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">{study.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mr-3">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Impact</p>
                      <p className="font-medium">{study.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-medium text-gray-800 mb-3">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="bg-white">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Us About This Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#02609E] mb-8">Related Case Studies</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedStudies.map((relatedStudy) => (
                <Link key={relatedStudy.id} href={`/case-studies/${relatedStudy.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedStudy.image || `/placeholder.svg?height=400&width=600`}
                        alt={relatedStudy.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <Badge className="bg-white/20 text-white backdrop-blur-sm">{relatedStudy.category}</Badge>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm text-gray-500 mb-2">{relatedStudy.date}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {relatedStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{relatedStudy.description}</p>

                      <div className="flex items-center text-primary font-medium mt-auto">
                        Read Case Study
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
