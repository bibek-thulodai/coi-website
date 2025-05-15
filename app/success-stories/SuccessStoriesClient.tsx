"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import SuccessStoryCard from "@/components/success-stories/SuccessStoryCard"
import { successStories } from "@/data/success-stories"

const categories = ["All", "Education", "Corporate", "Individual", "Institution", "International"]

export default function SuccessStoriesClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredStories, setFilteredStories] = useState(successStories)
  const [visibleStories, setVisibleStories] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    filterStories()
  }, [searchTerm, selectedCategory])

  const filterStories = () => {
    let filtered = [...successStories]

    if (searchTerm) {
      filtered = filtered.filter(
        (story) =>
          story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          story.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((story) => story.category === selectedCategory)
    }

    setFilteredStories(filtered)
  }

  const loadMoreStories = () => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleStories((prev) => prev + 6)
      setIsLoading(false)
    }, 800)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern"></div>
          {/* Animated circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Success Stories</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover how we've helped individuals and organizations achieve their goals and create lasting impact
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge
                    className={`px-4 py-2 text-sm cursor-pointer transition-all ${
                      selectedCategory === category
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search success stories..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-auto flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredStories.length > 0 ? (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredStories.slice(0, visibleStories).map((story, index) => (
                  <motion.div key={story.id} variants={item}>
                    <SuccessStoryCard story={story} />
                  </motion.div>
                ))}
              </motion.div>

              {visibleStories < filteredStories.length && (
                <div className="mt-12 text-center">
                  <Button
                    onClick={loadMoreStories}
                    variant="outline"
                    size="lg"
                    disabled={isLoading}
                    className="min-w-[200px]"
                  >
                    {isLoading ? "Loading..." : "Load More Stories"}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No stories found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
