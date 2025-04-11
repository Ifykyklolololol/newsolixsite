"use client"

import { type ReactNode, useEffect, useState } from "react"

interface AnimatedElementProps {
  children: ReactNode
  animation: string
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export default function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 500,
  className = "",
  once = true,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    const currentElement = document.getElementById(`animated-element-${Math.random().toString(36).substring(2, 9)}`)
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [once])

  return (
    <div
      id={`animated-element-${Math.random().toString(36).substring(2, 9)}`}
      className={`${className} ${isVisible ? animation : "opacity-0"}`}
      style={{
        transitionProperty: "all",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  )
}
