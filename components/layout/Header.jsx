"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact", href: "/contact" },
  {
    name: "Others",
    href: "#",
    submenu: [
      { name: "Gallery", href: "/gallery" },
      { name: "Blog", href: "/blog" },
      { name: "Offerings", href: "/offerings" },
    ],
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=200"
                alt="Creating Opportunities International"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) =>
              !item.submenu ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? scrolled
                        ? "text-primary"
                        : "text-white dark:text-white font-semibold"
                      : scrolled
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-white dark:text-gray-200",
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-primary",
                      scrolled ? "text-gray-700 dark:text-gray-300" : "text-white dark:text-gray-200",
                    )}
                  >
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          href={subItem.href}
                          className={cn(pathname === subItem.href ? "bg-primary-50 dark:bg-primary-900" : "")}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn(
                scrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary-300 dark:hover:bg-primary-800"
                  : "border-white text-primary hover:bg-white hover:text-primary dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800",
              )}
            >
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className={cn("bg-primary hover:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-800")}
            >
              <Link href="/client-portal">Client Portal</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={cn(scrolled ? "text-gray-700 dark:text-gray-300" : "text-white dark:text-gray-200")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {!item.submenu ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-base font-medium",
                        pathname === item.href
                          ? "text-primary dark:text-primary-300"
                          : "text-gray-700 dark:text-gray-300",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="py-2">
                      <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">{item.name}</div>
                      <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "block py-1 text-sm",
                              pathname === subItem.href
                                ? "text-primary dark:text-primary-300"
                                : "text-gray-600 dark:text-gray-400",
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-white dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary-800"
              >
                <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-800"
              >
                <Link href="/client-portal" onClick={() => setIsOpen(false)}>
                  Client Portal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
