"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { IconChefHat } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/", matches: ["/"] },
  { name: "About", href: "/about", matches: ["/about"] },
  { name: "Scan", href: "/scan", matches: ["/scan", "/scan/result"] },
]

export function Header() {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="container flex h-16 items-center justify-between text-foreground">
        <Link href="/">
          <IconChefHat className="-rotate-12 h-10 w-10 text-violet-400" />
        </Link>
        <nav className="flex items-center gap-x-4">
          <ul className="flex gap-x-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-medium",
                    link.matches.includes(pathname) && "text-violet-400",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
