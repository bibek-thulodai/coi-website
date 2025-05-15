import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Facebook, Twitter, Linkedin, Mail, ArrowLeft, ArrowRight } from "lucide-react"
import { formatDate } from "@/utils/helpers"

// Mock blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "5 Things Every School Should Implement in 2025",
    slug: "5-things-schools-implement-2025",
    excerpt:
      "Discover the key innovations and practices that forward-thinking educational institutions are adopting to prepare students for the future.",
    content: `
      <p>The educational landscape is rapidly evolving, and schools that want to stay ahead need to adapt quickly. Here are five essential implementations that forward-thinking schools should consider in 2025:</p>
      
      <h2>1. AI-Assisted Personalized Learning</h2>
      <p>Artificial intelligence has transformed how we can approach personalized education. By leveraging AI tools, schools can now create truly individualized learning paths that adapt in real-time to each student's progress, strengths, and challenges.</p>
      <p>The most effective implementations combine AI recommendations with teacher oversight, creating a balanced approach that maintains the human element of education while maximizing technological benefits.</p>
      
      <h2>2. Climate Education Integration</h2>
      <p>As climate change continues to shape our world, schools have a responsibility to prepare students with both the knowledge and skills to address environmental challenges. This goes beyond simply adding an environmental science class.</p>
      <p>Leading schools are integrating climate education across the curriculum, from analyzing climate data in mathematics to exploring climate literature in language arts. This cross-disciplinary approach helps students understand the multifaceted nature of environmental issues.</p>
      
      <h2>3. Mental Health Infrastructure</h2>
      <p>The mental health crisis among young people demands a robust response from educational institutions. Schools at the forefront are implementing comprehensive mental health infrastructure that includes:</p>
      <ul>
        <li>On-site counseling services</li>
        <li>Mental health education integrated into the curriculum</li>
        <li>Teacher training for recognizing warning signs</li>
        <li>Stress-reduction practices like mindfulness and meditation</li>
        <li>Community partnerships to expand available resources</li>
      </ul>
      
      <h2>4. Global Collaboration Platforms</h2>
      <p>In our interconnected world, students need to develop the ability to work effectively across cultural and geographical boundaries. Schools are implementing global collaboration platforms that connect their classrooms with peers around the world.</p>
      <p>These initiatives allow students to work on joint projects, engage in cultural exchange, and develop cross-cultural communication skills that will be essential in their future careers.</p>
      
      <h2>5. Entrepreneurship and Innovation Labs</h2>
      <p>The future workforce will require creative problem-solvers and innovators. Leading schools are creating dedicated spaces for entrepreneurship and innovation, where students can:</p>
      <ul>
        <li>Develop original ideas and solutions</li>
        <li>Learn the fundamentals of business planning</li>
        <li>Prototype and test their innovations</li>
        <li>Receive mentorship from industry professionals</li>
        <li>Present their work to authentic audiences</li>
      </ul>
      
      <p>By implementing these five key elements, schools can ensure they're not just teaching for today's world, but preparing students for the rapidly evolving future they'll inherit.</p>
    `,
    category: "Education",
    date: "May 10, 2025",
    author: {
      name: "Sarah Johnson",
      role: "Education Specialist",
      image: "/placeholder.svg?height=200&width=200",
    },
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Education", "Innovation", "Technology", "Future Learning", "School Development"],
  },
  {
    id: 2,
    title: "Why CSR Should Empower Startups",
    slug: "csr-empower-startups",
    excerpt:
      "Corporate Social Responsibility is evolving. Learn how supporting startups can create sustainable impact while driving innovation.",
    content: `
      <p>Corporate Social Responsibility (CSR) has traditionally focused on charitable giving, environmental initiatives, and community development. However, a new approach is emerging that combines social impact with innovation: empowering startups that address social and environmental challenges.</p>
      
      <h2>The Evolution of CSR</h2>
      <p>CSR has evolved significantly over the past decades. What began as basic philanthropy has developed into strategic programs aligned with corporate values and expertise. The next evolution is what many are calling "Impact CSR" – initiatives that create sustainable, scalable solutions to social problems.</p>
      
      <h2>Why Startups Are the Perfect CSR Partners</h2>
      <p>Startups focused on social and environmental innovation offer unique advantages as CSR partners:</p>
      <ul>
        <li><strong>Innovation:</strong> Startups bring fresh approaches and disruptive solutions to persistent problems</li>
        <li><strong>Agility:</strong> Their small size allows for rapid iteration and adaptation</li>
        <li><strong>Efficiency:</strong> Startups typically deliver more impact per dollar than traditional programs</li>
        <li><strong>Sustainability:</strong> Successful social enterprises become self-sustaining rather than requiring ongoing donations</li>
        <li><strong>Measurability:</strong> Tech-enabled startups often provide better data for impact measurement</li>
      </ul>
      
      <h2>Models for Startup-Focused CSR</h2>
      <p>Companies can support social innovation startups in various ways:</p>
      <ul>
        <li><strong>Corporate Venture Capital:</strong> Investing in promising social enterprises</li>
        <li><strong>Accelerator Programs:</strong> Creating or sponsoring programs that provide mentorship, resources, and funding</li>
        <li><strong>Procurement Policies:</strong> Becoming customers of social enterprise products and services</li>
        <li><strong>Knowledge Transfer:</strong> Providing expertise, mentorship, and access to networks</li>
        <li><strong>Joint Innovation:</strong> Collaborating on solutions that address social needs while creating business value</li>
      </ul>
      
      <h2>Case Study: Tech Giant's Startup Impact Program</h2>
      <p>A leading technology company launched a program that supports education technology startups in underserved markets. Rather than simply donating computers to schools, they invested in local entrepreneurs creating contextually relevant educational software.</p>
      <p>The results have been remarkable: 50+ startups supported, 15 million students reached, and several ventures that have grown to become sustainable businesses serving their communities.</p>
      
      <h2>Getting Started with Startup-Focused CSR</h2>
      <p>For companies interested in this approach, here are key steps to begin:</p>
      <ol>
        <li>Identify social or environmental challenges aligned with your company's expertise and values</li>
        <li>Map the startup ecosystem addressing these challenges</li>
        <li>Determine what your company can uniquely offer (beyond just funding)</li>
        <li>Start with small pilot partnerships to learn and refine your approach</li>
        <li>Develop clear metrics to measure both social impact and business value</li>
      </ol>
      
      <p>By empowering innovative startups, companies can transform their CSR from a cost center to a catalyst for positive change, creating lasting impact while fostering innovation within their own organizations.</p>
    `,
    category: "CSR",
    date: "April 28, 2025",
    author: {
      name: "Michael Chen",
      role: "CSR Strategist",
      image: "/placeholder.svg?height=200&width=200",
    },
    readTime: "6 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["CSR", "Startups", "Social Innovation", "Corporate Strategy", "Impact Investing"],
  },
  {
    id: 3,
    title: "Behind the Scenes of a Digital Literacy Bootcamp",
    slug: "digital-literacy-bootcamp",
    excerpt:
      "Take a look at how we organized a transformative digital skills training program for underserved communities.",
    content: `<p>Sample content for Digital Literacy Bootcamp article...</p>`,
    category: "Events",
    date: "April 15, 2025",
    author: {
      name: "Priya Sharma",
      role: "Program Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    readTime: "5 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Digital Literacy", "Education", "Community Development", "Technology Access", "Skills Training"],
  },
  {
    id: 4,
    title: "The Future of Education Technology in South Asia",
    slug: "education-technology-south-asia",
    excerpt: "Exploring emerging trends and innovations that are reshaping how students learn across the region.",
    content: `<p>Sample content for Education Technology article...</p>`,
    category: "Technology",
    date: "April 3, 2025",
    author: {
      name: "Raj Patel",
      role: "EdTech Researcher",
      image: "/placeholder.svg?height=200&width=200",
    },
    readTime: "7 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["EdTech", "South Asia", "Digital Learning", "Education Innovation", "Regional Development"],
  },
  {
    id: 5,
    title: "How to Find and Apply for International Fellowships",
    slug: "find-apply-international-fellowships",
    excerpt: "A comprehensive guide to discovering, preparing for, and securing prestigious global opportunities.",
    content: `<p>Sample content for International Fellowships article...</p>`,
    category: "Opportunities",
    date: "March 22, 2025",
    author: {
      name: "Lisa Wong",
      role: "Fellowship Advisor",
      image: "/placeholder.svg?height=200&width=200",
    },
    readTime: "9 min read",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Fellowships", "International Opportunities", "Career Development", "Application Guide", "Study Abroad"],
  },
]

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Creating Opportunities International",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Creating Opportunities International Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If post not found, return 404
  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/blog" className="text-primary hover:text-primary-600 transition-colors">
                <span className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Blog
                </span>
              </Link>
              <span className="text-gray-400">|</span>
              <Badge className="bg-primary hover:bg-primary-600">{post.category}</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-header mb-6 animate-fadeIn">{post.title}</h1>

            <div className="flex items-center mb-8 animate-fadeIn animate-delay-100">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-gray-500">{post.author.role}</div>
              </div>
              <div className="mx-4 text-gray-300">|</div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="mx-4 text-gray-300">|</div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg animate-fadeIn animate-delay-200">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">Share:</span>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <Facebook className="h-4 w-4 text-blue-600" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <Twitter className="h-4 w-4 text-sky-500" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <Linkedin className="h-4 w-4 text-blue-700" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <Mail className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            </div>

            <article className="prose prose-lg max-w-none animate-fadeIn animate-delay-300">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-gray-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback className="text-2xl">{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-header">About {post.author.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {post.author.role} at Creating Opportunities International with expertise in{" "}
                    {post.category.toLowerCase()}
                    and international development. Passionate about creating sustainable impact through education and
                    innovation.
                  </p>
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                      <Twitter className="h-4 w-4 text-sky-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4 text-blue-700" />
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-header">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="bg-primary hover:bg-primary-600 mb-3">{relatedPost.category}</Badge>
                      <h3 className="text-lg font-bold mb-3 text-header">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(relatedPost.date)}</span>
                      </div>
                      <Link href={`/blog/${relatedPost.slug}`} className="text-primary font-medium hover:underline">
                        Read Article
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Articles
                </Link>
              </Button>
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary-600" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
