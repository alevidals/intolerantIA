"use client"

import { Button } from "@/components/ui/button"
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

export default function Home() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(sequence)
  }, [animate])

  return (
    <div ref={scope} className="flex min-h-screen items-center justify-center">
      <div>
        <h1 className="transform text-center font-bold text-7xl text-foreground opacity-0">
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
        {/* biome-ignore lint/nursery/useSortedClasses: <explanation> */}
        <h2 className="text-foreground text-3xl text-balance text-center mt-12 opacity-0">
          The place where you can be sure that the food you eat is safe.
        </h2>
        <Button
          id="scan-button"
          // biome-ignore lint/nursery/useSortedClasses: <explanation>
          className="opacity-0 flex mx-auto mt-12 bg-violet-400 font-bold px-12 py-8 hover:bg-violet-300 transition-all duration-300 hover:scale-105"
          asChild
        >
          <Link href="/scan" className="w-fit">
            Scan now
          </Link>
        </Button>
      </div>
    </div>
  )
}
