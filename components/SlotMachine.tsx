"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Dish } from "@/types"

interface SlotMachineProps {
  dishes: Dish[]
  isRolling: boolean
  onComplete: (dish: Dish) => void
}

const ITEM_HEIGHT = 56

function buildReel(dishes: Dish[]): Dish[] {
  return [...dishes, ...dishes, ...dishes]
}

export default function SlotMachine({ dishes, isRolling, onComplete }: SlotMachineProps) {
  const [phase, setPhase] = useState<"idle" | "rolling" | "stopping" | "done">("idle")
  const [reelY, setReelY] = useState(0)
  const [displayDish, setDisplayDish] = useState<Dish | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const speedRef = useRef(0)
  const targetDishRef = useRef<Dish | null>(null)
  const targetYRef = useRef(0)
  const autoStopRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef(0)
  const phaseRef = useRef(phase)

  // keep phaseRef in sync
  phaseRef.current = phase

  const reel = buildReel(dishes)
  const singleSetHeight = dishes.length * ITEM_HEIGHT

  // stable stop handler via ref — avoids stale closure / re-render race
  const triggerStop = useCallback(() => {
    if (phaseRef.current === "rolling") {
      setPhase("stopping")
    }
  }, [])

  // start rolling
  useEffect(() => {
    if (!isRolling) return

    setPhase("rolling")
    setDisplayDish(null)
    speedRef.current = 12
    startTimeRef.current = Date.now()
    targetDishRef.current = null

    // auto-stop after 3-5 seconds
    const autoDelay = 3000 + Math.random() * 2000
    autoStopRef.current = setTimeout(() => {
      triggerStop()
    }, autoDelay)

    const animate = () => {
      setReelY((prev) => {
        const next = prev - speedRef.current
        return next <= -singleSetHeight ? next + singleSetHeight : next
      })
      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      if (autoStopRef.current) clearTimeout(autoStopRef.current)
    }
  }, [isRolling, singleSetHeight, triggerStop])

  // stopping phase — animate deceleration
  useEffect(() => {
    if (phase !== "stopping") return

    if (autoStopRef.current) clearTimeout(autoStopRef.current)

    const pick = dishes[Math.floor(Math.random() * dishes.length)]
    targetDishRef.current = pick

    const indexInSet = dishes.findIndex((d) => d.id === pick.id)
    const targetY = -(singleSetHeight + indexInSet * ITEM_HEIGHT) + ITEM_HEIGHT * 2
    targetYRef.current = targetY

    let currentSpeed = speedRef.current
    const decelerate = () => {
      currentSpeed *= 0.92
      setReelY((prev) => {
        const next = prev - currentSpeed
        const distToTarget = targetY - next
        if (Math.abs(distToTarget) < 2 && currentSpeed < 0.5) {
          setTimeout(() => {
            setPhase("done")
            setDisplayDish(pick)
            onComplete(pick)
          }, 150)
          return targetY
        }
        animFrameRef.current = requestAnimationFrame(decelerate)
        if (next <= -singleSetHeight * 2) return next + singleSetHeight
        return next
      })
    }

    animFrameRef.current = requestAnimationFrame(decelerate)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [phase, dishes, singleSetHeight, onComplete])

  // reset when idle
  useEffect(() => {
    if (!isRolling && phase === "idle") {
      setDisplayDish(null)
      setReelY(0)
    }
  }, [isRolling, phase])

  const centerIndex = () => {
    const raw = Math.round((-reelY + ITEM_HEIGHT * 2) / ITEM_HEIGHT) % reel.length
    return raw < 0 ? raw + reel.length : raw
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
      {/* slot window */}
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm
                   shadow-[inset_0_2px_12px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]
                   border border-orange-100 cursor-pointer select-none"
        style={{ height: ITEM_HEIGHT * 3, touchAction: "manipulation" }}
        onPointerDown={triggerStop}
        animate={
          phase === "rolling"
            ? { boxShadow: "inset 0 2px 12px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06), 0 0 0 2px rgba(251,146,60,0.2)" }
            : { boxShadow: "inset 0 2px 12px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)" }
        }
        transition={{ duration: 0.6 }}
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
          {phase === "rolling" && (
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
      {phase === "idle" && (
        <p className="text-sm text-orange-300 font-medium">点击下方按钮开始</p>
      )}
    </div>
  )
}
