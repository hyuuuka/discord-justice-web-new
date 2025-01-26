"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  { src: "/intel_corp.png", alt: "Company 1" },
  { src: "/intel_corp.png", alt: "Company 2" },
  { src: "/intel_corp.png", alt: "Company 3" },
  { src: "/intel_corp.png", alt: "Company 4" },
  { src: "/intel_corp.png", alt: "Company 5" },
  { src: "/intel_corp.png", alt: "Company 6" },
  { src: "/intel_corp.png", alt: "Company 7" },
  { src: "/intel_corp.png", alt: "Company 8" },
]

export function TrustedByLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const containerWidth = container.offsetWidth

    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${scrollWidth / 2}px)` }],
      {
        duration: 30000,
        iterations: Number.POSITIVE_INFINITY,
        easing: "linear",
      },
    )

    return () => {
      animation.cancel()
    }
  }, [])

  return (
    <div className="w-full overflow-hidden py-10">
      <div ref={containerRef} className="flex space-x-8 whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-40 h-20 relative"
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} fill className="object-contain" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

