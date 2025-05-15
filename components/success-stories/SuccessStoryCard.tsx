"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface SuccessStoryProps {
  story: {
    id: string
    title: string
    description: string
    category: string
    image: string
    date: string
    featured?: boolean
  }
}

export default function SuccessStoryCard({ story }: SuccessStoryProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={story.image || `/placeholder.svg?height=400&width=600`}
          alt={story.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {story.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary text-white">Featured</Badge>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <Badge className="bg-white/20 text-white backdrop-blur-sm">{story.category}</Badge>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="text-sm text-gray-500 mb-2">{story.date}</div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{story.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{story.description}</p>

        <Link
          href={`/success-stories/${story.id}`}
          className="flex items-center text-primary font-medium mt-auto group"
        >
          Read Full Story
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
