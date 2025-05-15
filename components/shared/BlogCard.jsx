import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { formatDate } from "@/utils/helpers"

export default function BlogCard({ title, excerpt, image, date, author, slug }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(date)}</span>
          {author && (
            <>
              <span className="mx-2">•</span>
              <span>{author}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold mb-3">
          <Link href={`/blog/${slug}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-blue-600 font-medium hover:underline">
          Read More
        </Link>
      </div>
    </div>
  )
}
