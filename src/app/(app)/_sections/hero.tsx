"use client"

import { Button } from "@/components/ui/button"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import { type AnimationSequence, useAnimate } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

const text = "IntolerantIA"

const sequence: AnimationSequence = [
  [
    "h1",
    {
      opacity: 1,
    },
    {
      duration: 1.5,
    },
  ],
  ...(text.split("").map((_, index) => [
    `#span-${index}`,
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    {
      duration: 0.05,
      at: index * 0.1,
    },
  ]) as AnimationSequence),
  [
    "h2",
    {
      opacity: 1,
    },
    {
      duration: 1,
      delay: 0.2,
    },
  ],
  [
    "#scan-button",
    {
      opacity: 1,
    },
    {
      duration: 1,
    },
  ],
]

export default function Hero() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(sequence)
  }, [animate])

  return (
    <section
      className="mb-20 flex min-h-screen items-center justify-center"
      ref={scope}
    >
      <div>
        <h1 className="mx-auto max-w-lg text-center font-bold text-7xl opacity-0">
          Welcome to{" "}
          <span className="text-violet-400">
            {text.split("").map((letter, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <this text will not be changed>
              <span key={index} id={`span-${index}`} className="opacity-0">
                {letter}
              </span>
            ))}
          </span>
          !
        </h1>
        <h2 className="mt-6 max-w-2xl text-pretty text-center text-3xl opacity-0">
          The place where you can be sure that the food you eat is safe.
        </h2>
        <Button
          id="scan-button"
          className="group mx-auto mt-12 flex bg-violet-400 px-12 py-8 font-bold opacity-0 transition-all duration-300 hover:bg-violet-300"
          asChild
        >
          <Link href="/scan" className="w-fit">
            <IconArrowNarrowRight className="transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
