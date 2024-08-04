"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { IconMenuDeep } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-2 md:hidden" variant="ghost">
          <IconMenuDeep />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle className="text-3xl">IntolerantIA</SheetTitle>
        </SheetHeader>
        <nav className="flex-1 ">
          <ul className="flex flex-col gap-x-4">
            {LINKS.map((link) => (
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
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
