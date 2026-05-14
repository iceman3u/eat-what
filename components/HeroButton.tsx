"use client"

import { motion } from "framer-motion"

interface HeroButtonProps {
  onClick: () => void
  isLoading: boolean
}

export default function HeroButton({ onClick, isLoading }: HeroButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={isLoading}
      className="relative px-10 py-5 text-xl font-bold text-white rounded-3xl
                 bg-gradient-to-br from-orange-400 via-orange-500 to-rose-500
                 shadow-[0_0_40px_rgba(251,146,60,0.4),0_8px_32px_rgba(251,146,60,0.25)]
                 disabled:opacity-60 disabled:cursor-not-allowed
                 select-none active:outline-none focus:outline-none"
      animate={{
        scale: isLoading ? 1 : [1, 1.04, 1],
        boxShadow: isLoading
          ? "0 0 20px rgba(251,146,60,0.2), 0 4px 16px rgba(251,146,60,0.15)"
          : [
              "0 0 40px rgba(251,146,60,0.4), 0 8px 32px rgba(251,146,60,0.25)",
              "0 0 60px rgba(251,146,60,0.55), 0 12px 40px rgba(251,146,60,0.35)",
              "0 0 40px rgba(251,146,60,0.4), 0 8px 32px rgba(251,146,60,0.25)",
            ],
      }}
      transition={{
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>{isLoading ? "正在挑选..." : "今天吃什么"}</span>
        <motion.span
          animate={isLoading ? { rotate: 360 } : { rotate: [0, 10, -10, 0] }}
          transition={
            isLoading
              ? { repeat: Infinity, duration: 1, ease: "linear" }
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
          className="inline-block text-2xl"
        >
          {isLoading ? "🌀" : "🍳"}
        </motion.span>
      </span>
    </motion.button>
  )
}
