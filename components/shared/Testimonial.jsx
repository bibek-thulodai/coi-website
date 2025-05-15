import Image from "next/image"
import { Quote } from "lucide-react"

export default function Testimonial({ content, author, position, avatar }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image src={avatar || "/placeholder.svg?height=100&width=100"} alt={author} fill className="object-cover" />
        </div>
      </div>
      <Quote className="h-8 w-8 text-blue-200 mx-auto mb-4" />
      <p className="text-gray-700 mb-6 italic text-center">"{content}"</p>
      <div className="text-center">
        <h4 className="font-bold">{author}</h4>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  )
}
