"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollProgess() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed right-0 bottom-0 left-0 h-2 origin-[0%] bg-violet-400"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  )
}
