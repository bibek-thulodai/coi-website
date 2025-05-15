import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function TeamMember({ name, position, bio, image, socialLinks = {} }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg?height=400&width=300"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 mb-4">{position}</p>
        {bio && <p className="text-gray-600 mb-4">{bio}</p>}

        {Object.keys(socialLinks).length > 0 && (
          <div className="flex space-x-4">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
