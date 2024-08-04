"use client"

import {
  type AnimationPlaybackControls,
  animate,
  useScroll,
} from "framer-motion"
import { useEffect, useRef } from "react"

export default function ScrollText() {
  const ref = useRef<HTMLDivElement>(null)
  const animControls = useRef<AnimationPlaybackControls>()

  const scroll = useScroll({
    target: ref,
  })

  scroll.scrollYProgress.on("change", (y) => {
    if (!animControls.current) return

    animControls.current.time = y * animControls.current.duration
  })

  useEffect(() => {
    animControls.current = animate([
      ["#step-1 h2 span", { transform: "translateY(0%)" }, { duration: 0.5 }],
      [
        "#step-1 ul li:nth-child(1) span",
        { transform: "translateY(0%)" },
        { duration: 0.5, at: 0.25 },
      ],
      [
        "#step-1 ul li:nth-child(2) span",
        { transform: "translateY(0%)" },
        { duration: 0.5 },
      ],
      [
        "#step-1 ul li:nth-child(3) span",
        { transform: "translateY(0%)" },
        { duration: 0.5 },
      ],
      ["#step-1", { opacity: 0 }, { duration: 0.5 }],
      ["#step-2 h2 span", { transform: "translateY(0%)" }, { duration: 0.5 }],
      ["#step-2 p span", { transform: "translateY(0%)" }, { duration: 0.5 }],
    ])

    animControls.current.pause()
  }, [])

  return (
    <div className="container relative h-[300dvh]" ref={ref}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <div className="absolute max-w-2xl" id="step-1">
          <h2 className="mb-4 flex overflow-hidden font-bold text-3xl text-foreground text-violet-400 md:text-6xl">
            <span className="translate-y-[200%]">How it works?</span>
          </h2>
          <ul className="flex flex-col gap-y-4 text-lg md:text-2xl">
            <li className="flex overflow-hidden">
              <span className="translate-y-[200%]">
                You can select all your food allergies and intolerances.
              </span>
            </li>
            <li className="flex overflow-hidden">
              <span className="translate-y-[200%]">
                Take a photo of the menu with your device's camera.
              </span>
            </li>
            <li className="flex overflow-hidden">
              <span className="translate-y-[200%]">
                With the information on your allergies and intolerances and the
                menu analysis, the app will provide you with a dietary guide
              </span>
            </li>
          </ul>
        </div>
        <div className="absolute max-w-2xl" id="step-2">
          <h2 className="mb-4 flex overflow-hidden font-bold text-3xl text-foreground text-violet-400 md:text-6xl">
            <span className="translate-y-[200%]">Why use IntolerantIA?</span>
          </h2>
          <p className="flex overflow-hidden text-pretty text-lg md:text-2xl">
            <span className="translate-y-[200%]">
              Some restaurants don't list allergens on their menus, so
              IntolerantIA helps you quickly review a restaurant's menu to
              identify which dishes you can't eat, which ones you can eat, and
              which ones you should check with the restaurant. Remember, this
              tool is meant to assist you, and you should always verify the
              information with the restaurant for greater safety.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
