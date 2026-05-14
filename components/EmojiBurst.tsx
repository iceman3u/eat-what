"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PARTY_EMOJIS = ["🎉", "✨", "🌟", "💫", "🎊", "🥳", "🍳", "🔥", "💖", "😋"]

interface Particle {
  id: number
  emoji: string
  x: number
  y: number
  angle: number
  distance: number
  scale: number
}

interface EmojiBurstProps {
  show: boolean
}

export default function EmojiBurst({ show }: EmojiBurstProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (show) {
      setParticles(
        Array.from({ length: 14 }, (_, i) => ({
          id: i,
          emoji: PARTY_EMOJIS[i % PARTY_EMOJIS.length],
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
          angle: Math.random() * Math.PI * 2,
          distance: 60 + Math.random() * 100,
          scale: 0.8 + Math.random() * 1.2,
        }))
      )
    } else {
      setParticles([])
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute"
              style={{ fontSize: `${14 + p.scale * 10}px` }}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: Math.cos(p.angle) * p.distance,
                y: Math.sin(p.angle) * p.distance,
                opacity: [1, 1, 0],
                scale: [0, p.scale, p.scale * 1.3, 0],
                rotate: 180 * (Math.random() > 0.5 ? 1 : -1),
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {p.emoji}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
