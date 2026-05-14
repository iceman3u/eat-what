"use client"

import { motion } from "framer-motion"
import type { Step } from "@/types"

interface StepsListProps {
  steps: Step[]
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export default function StepsList({ steps }: StepsListProps) {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-bold text-orange-400 mb-3 flex items-center gap-1.5">
        <span>📋</span>
        <span>制作步骤</span>
      </h3>
      <motion.ol
        className="flex flex-col gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {steps.map((step) => (
          <motion.li
            key={step.id}
            variants={item}
            className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/60"
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {step.stepNumber}
            </span>
            <span className="text-sm text-orange-900 leading-relaxed">
              {step.content}
            </span>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  )
}
