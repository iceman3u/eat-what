"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const EMOJIS = ["🍜", "🍕", "🍔", "🍱", "🍰", "🍣", "🥗", "🌮", "🍩", "🍳", "🥘", "🍝", "🥟", "🍚", "🧆"]

interface FloatItem {
  id: number
  emoji: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
  drift: number
}

function generateItems(count: number): FloatItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 24 + Math.random() * 40,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 5,
    drift: -20 + Math.random() * 40,
  }))
}

export default function FloatingEmojis() {
  const [items, setItems] = useState<FloatItem[]>([])

  useEffect(() => {
    setItems(generateItems(12))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.15, 0.15, 0],
            scale: [0.8, 1, 1, 0.8],
            y: [0, item.drift, item.drift * 2, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  )
}
