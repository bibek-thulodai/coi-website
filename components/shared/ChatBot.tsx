"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Send, MessageSquare, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { knowledgeBase } from "@/data/chat-knowledge-base"

type Message = {
  id: string
  type: "user" | "bot"
  text: string
}

const suggestedQuestions = [
  "What services do you offer?",
  "How can I become a franchise partner?",
  "Tell me about your products",
  "How can I contact you?",
  "What makes your company unique?",
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      text: "👋 Hello! I'm the Creating Opportunities International assistant. How can I help you today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [showNotification, setShowNotification] = useState(true)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setShowNotification(false)
    }
  }, [isOpen])

  const findBestMatch = (query: string) => {
    // Convert query to lowercase and remove punctuation
    const normalizedQuery = query.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")

    // Try to find an exact match first
    const exactMatch = knowledgeBase.find(
      (item) =>
        item.question.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(item.question.toLowerCase()),
    )

    if (exactMatch) return exactMatch.answer

    // If no exact match, look for keywords
    let bestMatch = null
    let highestScore = 0

    knowledgeBase.forEach((item) => {
      const keywords = [...item.keywords, ...item.question.toLowerCase().split(" ")]
      let score = 0

      keywords.forEach((keyword) => {
        if (normalizedQuery.includes(keyword.toLowerCase())) {
          score += 1
        }
      })

      if (score > highestScore) {
        highestScore = score
        bestMatch = item.answer
      }
    })

    // Return the best match or a fallback message
    return (
      bestMatch ||
      "I'm sorry, I don't have information about that. Please contact our team for more specific details at contact@creatingopportunities.com or visit our Contact page."
    )
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay for a more natural feel
    setTimeout(
      () => {
        const botResponse = findBestMatch(userMessage.text)

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          text: botResponse,
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question)
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <MessageSquare size={24} />
        {showNotification && (
          <motion.span
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            1
          </motion.span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-[400px]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <MessageSquare size={18} />
                </div>
                <h3 className="font-medium">COI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 transition-colors hover:bg-white/20">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={cn(
                      "flex max-w-[85%] flex-col rounded-2xl p-3",
                      message.type === "user"
                        ? "ml-auto bg-teal-500 text-white"
                        : "mr-auto bg-white text-gray-800 shadow",
                    )}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-sm">{message.text}</span>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    className="mr-auto flex max-w-[85%] items-center space-x-2 rounded-2xl bg-white p-3 text-gray-800 shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-sm">Typing...</span>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="bg-white px-4 py-2">
                <p className="mb-2 text-xs font-medium text-gray-500">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-gray-200 bg-white p-3">
              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent text-sm outline-none"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  size="sm"
                  className="h-8 w-8 rounded-full p-0"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
