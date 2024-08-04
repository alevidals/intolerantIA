"use client"

import { cn } from "@/lib/utils"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion"
import { useRef } from "react"

type Props = {
  children: string
  baseVelocity: number
}

type SpanTextProps = {
  children: string
}

export function SpanText({ children }: SpanTextProps) {
  return <span className="mr-[30px] block tracking-wide">{children} </span>
}

export function ParallaxText({ children, baseVelocity = 100 }: Props) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="m-0 flex flex-nowrap overflow-hidden whitespace-nowrap tracking-[-2px]">
      <motion.div
        className={cn(
          "flex flex-nowrap whitespace-nowrap font-extrabold text-[40px] uppercase leading-[0.8] md:text-[64px] [&>*:nth-child(even)]:text-violet-300",
        )}
        style={{ x }}
      >
        <SpanText>IntolerantIA</SpanText>
        <SpanText>IntolerantIA</SpanText>
        <SpanText>IntolerantIA</SpanText>
        <SpanText>IntolerantIA</SpanText>
        <SpanText>IntolerantIA</SpanText>
        <SpanText>IntolerantIA</SpanText>
        <SpanText>IntolerantIA</SpanText>
        <SpanText>IntolerantIA</SpanText>
      </motion.div>
    </div>
  )
}
