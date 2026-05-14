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
const STOP_BASE = 30

function buildReel(dishes: Dish[]): Dish[] {
  return [...dishes, ...dishes, ...dishes]
}

type Phase = "idle" | "rolling" | "stopping" | "done"

export default function SlotMachine({ dishes, isRolling, onComplete }: SlotMachineProps) {
  const [reelY, setReelY] = useState(0)
  const [phase, setPhase] = useState<Phase>("idle")
  const [revealDish, setRevealDish] = useState<Dish | null>(null)

  const state = useRef({
    reelY: 0,
    speed: 12,
    phase: "idle" as Phase,
    targetY: 0,
    targetDish: null as Dish | null,
    stopStartY: 0,
    stopDuration: 0,
    stopFrame: 0,
  })

  const rafRef = useRef<number | null>(null)
  const autoStopRef = useRef<NodeJS.Timeout | null>(null)

  const reel = buildReel(dishes)
  const singleHeight = dishes.length * ITEM_HEIGHT

  // single rAF loop — reads phase from ref, drives everything
  const loop = () => {
    const s = state.current

    if (s.phase === "rolling") {
      s.reelY -= s.speed
      if (s.reelY <= -singleHeight) s.reelY += singleHeight
      setReelY(s.reelY)
    }

    if (s.phase === "stopping") {
      s.stopFrame++
      const t = Math.min(s.stopFrame / s.stopDuration, 1)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      s.reelY = s.stopStartY + (s.targetY - s.stopStartY) * eased

      if (t >= 1) {
        s.reelY = s.targetY
        s.phase = "done"
        setReelY(s.targetY)
        if (autoStopRef.current) clearTimeout(autoStopRef.current)
        setPhase("done")
        setRevealDish(s.targetDish!)
        onComplete(s.targetDish!)
        return
      }

      setReelY(s.reelY)
    }

    rafRef.current = requestAnimationFrame(loop)
  }

  // stop — records current position, sets target, loop handles the rest
  const stop = () => {
    if (state.current.phase !== "rolling") return
    state.current.phase = "stopping"
    setPhase("stopping")

    if (autoStopRef.current) clearTimeout(autoStopRef.current)

    const pick = dishes[Math.floor(Math.random() * dishes.length)]
    state.current.targetDish = pick
    const idx = dishes.findIndex((d) => d.id === pick.id)
    let targetY = -(singleHeight + idx * ITEM_HEIGHT) + ITEM_HEIGHT

    // ensure target is forward (more negative) from current position
    while (targetY > state.current.reelY) targetY -= singleHeight

    state.current.targetY = targetY
    state.current.stopStartY = state.current.reelY
    state.current.stopFrame = 0
    state.current.stopDuration = Math.floor(Math.abs(targetY - state.current.stopStartY) / 10) + STOP_BASE
  }

  // start / reset
  useEffect(() => {
    if (!isRolling) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (autoStopRef.current) clearTimeout(autoStopRef.current)
      state.current = { reelY: 0, speed: 12, phase: "idle", targetY: 0, targetDish: null, stopStartY: 0, stopDuration: 0, stopFrame: 0 }
      setPhase("idle")
      setRevealDish(null)
      setReelY(0)
      return
    }

    // start
    state.current = { reelY: 0, speed: 12, phase: "rolling", targetY: 0, targetDish: null, stopStartY: 0, stopDuration: 0, stopFrame: 0 }
    setPhase("rolling")
    setRevealDish(null)
    setReelY(0)

    autoStopRef.current = setTimeout(stop, 3000 + Math.random() * 2000)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (autoStopRef.current) clearTimeout(autoStopRef.current)
    }
  }, [isRolling, singleHeight])

  const isActive = phase === "rolling"

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm
                   shadow-[inset_0_2px_12px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]
                   border border-orange-100 select-none"
        style={{ height: ITEM_HEIGHT * VISIBLE, touchAction: "manipulation" }}
        onPointerDown={stop}
        animate={
          isActive
            ? { boxShadow: "inset 0 2px 12px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06), 0 0 0 2px rgba(251,146,60,0.2)" }
            : { boxShadow: "inset 0 2px 12px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)" }
        }
      >
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/95 via-white/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/95 via-white/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1 right-1 -translate-y-1/2 h-14 rounded-xl bg-orange-100/40 z-0 pointer-events-none" />

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

        <AnimatePresence>
          {isActive && (
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

      {phase === "idle" && (
        <p className="text-sm text-orange-300 font-medium">点击下方按钮开始</p>
      )}
    </div>
  )
}
