import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CTAButton({ href, children, variant = "default", size = "default", className = "", ...props }) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("bg-[#013A87] hover:bg-[#006955] text-white", className)}
      {...props}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
