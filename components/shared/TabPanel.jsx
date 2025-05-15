"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function TabPanel({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              "px-4 py-2 text-sm font-medium whitespace-nowrap",
              activeTab === index ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700",
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              "transition-opacity duration-300",
              activeTab === index ? "block opacity-100" : "hidden opacity-0",
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
