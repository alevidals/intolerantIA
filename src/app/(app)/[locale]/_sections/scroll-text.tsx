"use client"

import { useI18n } from "@/locales/client"
import {
  type AnimationPlaybackControls,
  animate,
  useScroll,
} from "framer-motion"
import { useEffect, useRef } from "react"

export default function ScrollText() {
  const t = useI18n()
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
            <span className="translate-y-[200%]">{t("howItWorks")}</span>
          </h2>
          <ul className="flex flex-col gap-y-4 text-lg md:text-2xl">
            <li className="flex overflow-hidden">
              <span className="translate-y-[200%]">{t("howItWorks1")}</span>
            </li>
            <li className="flex overflow-hidden">
              <span className="translate-y-[200%]">{t("howItWorks2")}</span>
            </li>
            <li className="flex overflow-hidden">
              <span className="translate-y-[200%]">{t("howItWorks3")}</span>
            </li>
          </ul>
        </div>
        <div className="absolute max-w-2xl" id="step-2">
          <h2 className="mb-4 flex overflow-hidden font-bold text-3xl text-foreground text-violet-400 md:text-6xl">
            <span className="translate-y-[200%]">
              {t("whyUseIntolerantIA")}
            </span>
          </h2>
          <p className="flex overflow-hidden text-pretty text-lg md:text-2xl">
            <span className="translate-y-[200%]">
              {t("whyUseIntolerantIAResponse")}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
