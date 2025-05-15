"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

export default function AnimatedCounter({ start = 0, end, duration = 2 }) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let startTime
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const currentCount = Math.floor(progress * (end - start) + start)

        countRef.current = currentCount
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }

      requestAnimationFrame(animateCount)
    }
  }, [inView, start, end, duration])

  return <span ref={ref}>{count}</span>
}
