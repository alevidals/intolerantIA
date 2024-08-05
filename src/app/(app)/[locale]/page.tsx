import Hero from "@/app/(app)/[locale]/_sections/hero"
import ScrollText from "@/app/(app)/[locale]/_sections/scroll-text"
import { ParallaxText } from "@/components/parallax-text"

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <ParallaxText baseVelocity={-3}>IntolerantIA</ParallaxText>
        <ParallaxText baseVelocity={3}>IntolerantIA</ParallaxText>
      </div>
      <ScrollText />
    </>
  )
}
