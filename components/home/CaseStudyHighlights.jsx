import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/shared/SectionHeading"
import { caseStudies } from "@/data/case-studies"
import { ArrowRight } from "lucide-react"

export default function CaseStudyHighlights() {
  // Get the first 3 case studies for the highlights section
  const highlightedStudies = caseStudies.slice(0, 3)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Success Stories" subtitle="CASE STUDIES" className="text-center mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {highlightedStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-primary font-medium mb-2">{study.category}</div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{study.description}</p>
                <Link
                  href={`/case-studies/${study.id}`}
                  className="text-primary font-medium flex items-center hover:underline mt-auto"
                >
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
