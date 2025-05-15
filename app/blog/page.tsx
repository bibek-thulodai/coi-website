import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import BlogHero from "@/components/blog/BlogHero"

export const metadata: Metadata = {
  title: "Blog | Creating Opportunities International",
  description: "Insights, stories, and updates from Creating Opportunities International",
}

// Sample blog data
const featuredPost = {
  id: 1,
  title: "5 Things Every School Should Implement in 2025",
  excerpt:
    "Discover the key innovations and practices that forward-thinking educational institutions are adopting to prepare students for the future.",
  category: "Education",
  date: "May 10, 2025",
  author: "Sarah Johnson",
  readTime: "8 min read",
  image: "/placeholder.svg?height=600&width=1200",
  slug: "5-things-schools-implement-2025",
}

const categories = [
  { name: "All", value: "all" },
  { name: "Education", value: "education" },
  { name: "CSR", value: "csr" },
  { name: "Opportunities", value: "opportunities" },
  { name: "Technology", value: "technology" },
  { name: "Events", value: "events" },
]

const posts = [
  {
    id: 2,
    title: "Why CSR Should Empower Startups",
    excerpt:
      "Corporate Social Responsibility is evolving. Learn how supporting startups can create sustainable impact while driving innovation.",
    category: "CSR",
    date: "April 28, 2025",
    author: "Michael Chen",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "csr-empower-startups",
  },
  {
    id: 3,
    title: "Behind the Scenes of a Digital Literacy Bootcamp",
    excerpt:
      "Take a look at how we organized a transformative digital skills training program for underserved communities.",
    category: "Events",
    date: "April 15, 2025",
    author: "Priya Sharma",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "digital-literacy-bootcamp",
  },
  {
    id: 4,
    title: "The Future of Education Technology in South Asia",
    excerpt: "Exploring emerging trends and innovations that are reshaping how students learn across the region.",
    category: "Technology",
    date: "April 3, 2025",
    author: "Raj Patel",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "education-technology-south-asia",
  },
  {
    id: 5,
    title: "How to Find and Apply for International Fellowships",
    excerpt: "A comprehensive guide to discovering, preparing for, and securing prestigious global opportunities.",
    category: "Opportunities",
    date: "March 22, 2025",
    author: "Lisa Wong",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "find-apply-international-fellowships",
  },
  {
    id: 6,
    title: "Building Sustainable School Systems",
    excerpt:
      "Practical approaches to creating environmentally conscious and operationally efficient educational institutions.",
    category: "Education",
    date: "March 10, 2025",
    author: "David Miller",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "sustainable-school-systems",
  },
  {
    id: 7,
    title: "The Impact of Youth-Led Social Enterprises",
    excerpt: "Case studies of young entrepreneurs creating meaningful change through innovative business models.",
    category: "CSR",
    date: "February 28, 2025",
    author: "Aisha Khan",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "youth-led-social-enterprises",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BlogHero />

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-header">Featured Article</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="animate-slideInRight">
              <Badge className="bg-primary hover:bg-primary-600 mb-4">{featuredPost.category}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-header">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-1" />
                <span>{featuredPost.author}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredPost.readTime}</span>
              </div>
              <Button asChild className="bg-primary hover:bg-primary-600">
                <Link href={`/blog/${featuredPost.slug}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-header mb-4 md:mb-0">Latest Articles</h2>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="bg-white/80 backdrop-blur-sm p-1 rounded-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden card-hover animate-slideUp"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-primary hover:bg-primary-600">{post.category}</Badge>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-header">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500 flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8">
              Get the latest insights, opportunities, and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-gray-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
