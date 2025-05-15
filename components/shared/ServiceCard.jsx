import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServiceCard({ title, description, icon: Icon, href, color }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
      <div className="p-8 flex flex-col h-full">
        <div
          className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="h-8 w-8" style={{ color: color }} />
        </div>
        <h3 className="text-[#02609E] text-xl font-bold mb-4 group-hover:text-[#017489] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-[#017489] font-medium hover:text-[#006955] transition-colors group"
        >
          <span>Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="h-1 w-full" style={{ backgroundColor: color }}></div>
    </div>
  )
}
