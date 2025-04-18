"use client" // this is a client component

import React, { useEffect, useRef, ReactNode } from "react"

interface Props {
  offset?: string
  children?: ReactNode
  // any props that come into the component
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current // store ref.current in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            entry.target.classList.add("animate-slideUpCubiBezier")
          }
        })
      },
      { rootMargin: offset }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    // Cleanup observer using the stored ref
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [offset]) // Add 'offset' to the dependency array

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}
