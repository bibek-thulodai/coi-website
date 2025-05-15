import { cn } from "@/lib/utils"

export default function SectionHeading({ title, subtitle, className = "", decoration = false }) {
  return (
    <div className={cn("mb-8", className)}>
      {subtitle && <h3 className="text-sm font-semibold tracking-wider uppercase text-[#017489] mb-2">{subtitle}</h3>}
      <h2 className="text-3xl md:text-4xl font-bold text-[#02609E] relative">
        {title}
        {decoration && (
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#017489] rounded-full"></span>
        )}
      </h2>
    </div>
  )
}
