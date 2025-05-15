import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudyCard({ title, category, description, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-blue-600 font-medium flex items-center hover:underline">
          Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
