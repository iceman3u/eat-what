"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Dish } from "@/types"

interface SlotMachineProps {
  dishes: Dish[]
  isRolling: boolean
  onComplete: (dish: Dish) => void
}

export default function SlotMachine({ dishes, isRolling, onComplete }: SlotMachineProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayDish, setDisplayDish] = useState<Dish | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const rollCountRef = useRef(0)

  useEffect(() => {
    if (!isRolling) return

    setDisplayDish(null)
    rollCountRef.current = 0
    let speed = 60
    const maxRolls = 15 + Math.floor(Math.random() * 10)

    const tick = () => {
      rollCountRef.current++
      setCurrentIndex((prev) => (prev + 1) % dishes.length)

      if (rollCountRef.current >= maxRolls) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        const finalDish = dishes[Math.floor(Math.random() * dishes.length)]
        setTimeout(() => {
          setDisplayDish(finalDish)
          onComplete(finalDish)
        }, 200)
        return
      }

      // gradually slow down
      const progress = rollCountRef.current / maxRolls
      speed = 60 + progress * 280

      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(tick, speed)
    }

    intervalRef.current = setInterval(tick, speed)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRolling, dishes, onComplete])

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto">
      {/* slot window */}
      <div className="relative w-full h-20 overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-orange-100">
        {/* top gradient mask */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/90 to-transparent z-10 pointer-events-none" />
        {/* bottom gradient mask */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/90 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center justify-center h-full">
          <AnimatePresence mode="wait">
            {displayDish ? (
              <motion.div
                key="result"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex items-center gap-3"
              >
                <span className="text-4xl">{displayDish.emoji}</span>
                <span className="text-2xl font-bold text-orange-950">
                  {displayDish.name}
                </span>
              </motion.div>
            ) : isRolling ? (
              <motion.div
                key="rolling"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                className="text-2xl font-bold text-orange-400"
              >
                {dishes[currentIndex]?.name}
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-orange-300 font-medium"
              >
                点击下方按钮开始
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* glow line at top */}
        <div className="absolute top-1/2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent z-10" />
      </div>
    </div>
  )
}
