import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BlogNotFound() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-header mb-6">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-10">
            We couldn't find the blog post you're looking for. It may have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary-600">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
