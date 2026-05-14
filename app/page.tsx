"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { dishes as allDishes, getSteps } from "@/lib/dishes"
import { getRandomDish } from "@/lib/utils"
import type { Dish } from "@/types"
import FloatingEmojis from "@/components/FloatingEmojis"
import HeroButton from "@/components/HeroButton"
import SlotMachine from "@/components/SlotMachine"
import StepsList from "@/components/StepsList"

export default function Home() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [isRolling, setIsRolling] = useState(false)

  const handleRoll = useCallback(() => {
    setIsRolling(true)
    setSelectedDish(null)
  }, [])

  const handleComplete = useCallback((dish: Dish) => {
    setSelectedDish(dish)
    setIsRolling(false)
  }, [])

  return (
    <div className="relative flex flex-col flex-1 min-h-svh items-center justify-center px-6 overflow-hidden">
      {/* background decorations */}
      <FloatingEmojis />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-md">
        {/* header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-orange-950">
            吃什么
          </h1>
          <p className="mt-2 text-sm text-orange-400 font-medium">
            用最简单的方式，决定今天的美味
          </p>
        </motion.div>

        {/* slot machine */}
        <SlotMachine
          dishes={allDishes}
          isRolling={isRolling}
          onComplete={handleComplete}
        />

        {/* result card */}
        <AnimatePresence>
          {selectedDish && !isRolling && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full rounded-3xl bg-white/80 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-orange-100 p-6"
            >
              {/* dish emoji + name */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl">{selectedDish.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold text-orange-950">
                    {selectedDish.name}
                  </h2>
                  <span className="text-xs font-medium text-orange-400 bg-orange-50 px-2 py-0.5 rounded-full">
                    {selectedDish.category}
                  </span>
                </div>
              </div>

              {/* info grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "难度", value: selectedDish.difficulty, color: "text-amber-600" },
                  { label: "用时", value: selectedDish.time, color: "text-orange-600" },
                  { label: "热量", value: selectedDish.calories, color: "text-rose-600" },
                  { label: "人均", value: selectedDish.price, color: "text-emerald-600" },
                ].map((info) => (
                  <div
                    key={info.label}
                    className="flex flex-col items-center gap-0.5 p-3 rounded-2xl bg-orange-50/60"
                  >
                    <span className="text-xs text-orange-300 font-medium">
                      {info.label}
                    </span>
                    <span className={`text-lg font-bold ${info.color}`}>
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* cooking steps */}
              <StepsList steps={getSteps(selectedDish.id)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA button */}
        <HeroButton onClick={handleRoll} isLoading={isRolling} />
      </div>
    </div>
  )
}
