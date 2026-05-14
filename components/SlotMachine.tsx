"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Dish } from "@/types"

interface SlotMachineProps {
  dishes: Dish[]
  isRolling: boolean
  onComplete: (dish: Dish) => void
}

const ITEM_HEIGHT = 56
const VISIBLE = 3

function buildReel(dishes: Dish[]): Dish[] {
  return [...dishes, ...dishes, ...dishes]
}

export default function SlotMachine({ dishes, isRolling, onComplete }: SlotMachineProps) {
  const [reelY, setReelY] = useState(0)
  const [rolling, setRolling] = useState(false)
  const [revealDish, setRevealDish] = useState<Dish | null>(null)

  // all mutable runner state lives in refs — no stale closure
  const state = useRef({
    speed: 12,
    timer: null as ReturnType<typeof setInterval> | null,
    autoStop: null as ReturnType<typeof setTimeout> | null,
    stopping: false,
    targetY: 0,
    targetDish: null as Dish | null,
  })

  const reel = buildReel(dishes)
  const singleHeight = dishes.length * ITEM_HEIGHT

  // stop handler — reads from ref, always current
  const stop = () => {
    if (state.current.stopping) return
    state.current.stopping = true

    if (state.current.autoStop) {
      clearTimeout(state.current.autoStop)
      state.current.autoStop = null
    }

    // pick target
    const pick = dishes[Math.floor(Math.random() * dishes.length)]
    state.current.targetDish = pick
    const idx = dishes.findIndex((d) => d.id === pick.id)
    state.current.targetY = -(singleHeight + idx * ITEM_HEIGHT) + ITEM_HEIGHT * 2

    // switch to deceleration phase — slower interval
    if (state.current.timer) clearInterval(state.current.timer)

    state.current.timer = setInterval(() => {
      state.current.speed *= 0.9
      if (state.current.speed < 0.3) {
        // done
        if (state.current.timer) clearInterval(state.current.timer)
        state.current.timer = null
        setReelY(state.current.targetY)
        setTimeout(() => {
          setRolling(false)
          setRevealDish(pick)
          onComplete(pick)
        }, 100)
        return
      }
      setReelY((prev) => {
        const next = prev - state.current.speed
        const dist = Math.abs(state.current.targetY - next)
        if (dist < 4) {
          return state.current.targetY
        }
        if (next <= -singleHeight * 2) return next + singleHeight
        return next
      })
    }, 32)
  }

  // start / reset
  useEffect(() => {
    if (!isRolling) {
      // reset to idle
      setRolling(false)
      setRevealDish(null)
      setReelY(0)
      if (state.current.timer) clearInterval(state.current.timer)
      if (state.current.autoStop) clearTimeout(state.current.autoStop)
      state.current = { speed: 12, timer: null, autoStop: null, stopping: false, targetY: 0, targetDish: null }
      return
    }

    // start rolling
    setRolling(true)
    setRevealDish(null)
    state.current.speed = 12
    state.current.stopping = false

    // auto-stop 3-5s
    state.current.autoStop = setTimeout(stop, 3000 + Math.random() * 2000)

    // rolling interval
    state.current.timer = setInterval(() => {
      setReelY((prev) => {
        const next = prev - state.current.speed
        return next <= -singleHeight ? next + singleHeight : next
      })
    }, 32)

    return () => {
      if (state.current.timer) clearInterval(state.current.timer)
      if (state.current.autoStop) clearTimeout(state.current.autoStop)
    }
  }, [isRolling, singleHeight])

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
      {/* slot window */}
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm
                   shadow-[inset_0_2px_12px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]
                   border border-orange-100 select-none"
        style={{ height: ITEM_HEIGHT * VISIBLE, touchAction: "manipulation" }}
        onPointerDown={stop}
        animate={
          rolling && !state.current.stopping
            ? { boxShadow: "inset 0 2px 12px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06), 0 0 0 2px rgba(251,146,60,0.2)" }
            : { boxShadow: "inset 0 2px 12px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)" }
        }
      >
        {/* top mask */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/95 via-white/70 to-transparent z-20 pointer-events-none" />
        {/* bottom mask */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/95 via-white/70 to-transparent z-20 pointer-events-none" />
        {/* center highlight */}
        <div className="absolute top-1/2 left-1 right-1 -translate-y-1/2 h-14 rounded-xl bg-orange-100/40 z-0 pointer-events-none" />

        {/* reel */}
        <div className="relative z-10" style={{ transform: `translateY(${reelY}px)` }}>
          {reel.map((dish, i) => (
            <div
              key={`${dish.id}-${i}`}
              className="flex items-center justify-center gap-2 font-bold select-none"
              style={{ height: ITEM_HEIGHT }}
            >
              <span className="text-xl">{dish.emoji}</span>
              <span className="text-lg text-orange-900">{dish.name}</span>
            </div>
          ))}
        </div>

        {/* stop hint */}
        <AnimatePresence>
          {rolling && !state.current.stopping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30
                         text-xs text-orange-400 bg-white/90 px-3 py-1 rounded-full
                         shadow-sm pointer-events-none"
            >
              点击停止
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* idle prompt */}
      {!isRolling && !revealDish && (
        <p className="text-sm text-orange-300 font-medium">点击下方按钮开始</p>
      )}
    </div>
  )
}
