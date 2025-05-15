import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronLeft, Calendar, Award, Users, BarChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { successStories, successStoriesDetails } from "@/data/success-stories"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const story = successStories.find((story) => story.id === params.id)

  if (!story) {
    return {
      title: "Story Not Found | Creating Opportunities International",
      description: "The requested success story could not be found.",
    }
  }

  return {
    title: `${story.title} | Creating Opportunities International`,
    description: story.description,
    openGraph: {
      title: `${story.title} | Creating Opportunities International`,
      description: story.description,
      type: "article",
      publishedTime: story.date,
      authors: ["Creating Opportunities International"],
    },
  }
}

export async function generateStaticParams() {
  return successStories.map((story) => ({
    id: story.id,
  }))
}

export default function SuccessStoryPage({ params }: { params: { id: string } }) {
  const story = successStories.find((story) => story.id === params.id)
  const storyDetails = successStoriesDetails.find((detail) => detail.id === params.id)

  if (!story || !storyDetails) {
    notFound()
  }

  // Find related stories in the same category
  const relatedStories = successStories.filter((s) => s.category === story.category && s.id !== story.id).slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern"></div>
          {/* Animated circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/success-stories"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Success Stories
            </Link>

            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm">{story.category}</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{story.title}</h1>

            <div className="flex items-center text-white/80 mb-8">
              <Calendar size={16} className="mr-2" />
              <span>{story.date}</span>
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
                  src={story.image || `/placeholder.svg?height=800&width=1200`}
                  alt={story.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <p className="text-gray-700 mb-6">{storyDetails.overview}</p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h2>
                <p className="text-gray-700 mb-6">{storyDetails.challenge}</p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h2>
                <p className="text-gray-700 mb-6">{storyDetails.approach}</p>

                <div className="bg-gray-50 p-6 rounded-xl my-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Results</h3>
                  <ul className="space-y-4">
                    {storyDetails.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
                          <BarChart size={16} />
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
                <p className="text-gray-700 mb-6">{storyDetails.conclusion}</p>

                {storyDetails.testimonial && (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-8">
                    <p className="text-gray-700">{storyDetails.testimonial.quote}</p>
                    <footer className="mt-2 text-gray-600 font-medium">
                      {storyDetails.testimonial.author}, {storyDetails.testimonial.role}
                    </footer>
                  </blockquote>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mr-3">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeline</p>
                      <p className="font-medium">{storyDetails.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mr-3">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">{storyDetails.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mr-3">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Impact</p>
                      <p className="font-medium">{storyDetails.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-medium text-gray-800 mb-3">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {storyDetails.services.map((service, index) => (
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

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Success Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedStories.map((relatedStory) => (
                <Link key={relatedStory.id} href={`/success-stories/${relatedStory.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedStory.image || `/placeholder.svg?height=400&width=600`}
                        alt={relatedStory.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <Badge className="bg-white/20 text-white backdrop-blur-sm">{relatedStory.category}</Badge>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm text-gray-500 mb-2">{relatedStory.date}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {relatedStory.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{relatedStory.description}</p>

                      <div className="flex items-center text-primary font-medium mt-auto">
                        Read Full Story
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
