import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import { IconChefHat } from "@tabler/icons-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="container flex h-16 items-center justify-between text-foreground">
        <Link href="/">
          <IconChefHat className="-rotate-12 h-10 w-10 text-violet-400" />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}
