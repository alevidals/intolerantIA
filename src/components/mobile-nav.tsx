"use client"

import { IaSettingsPopover } from "@/components/ia-settings-popover"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useI18n } from "@/locales/client"
import { IconMenuDeep } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const t = useI18n()
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="p-2 md:hidden"
          variant="ghost"
          aria-label={t("menu")}
        >
          <IconMenuDeep />
          <span className="sr-only">{t("menu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle className="text-3xl">IntolerantIA</SheetTitle>
          <SheetDescription className="hidden" />
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
                  {t(link.code)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-center space-x-4">
          <ModeToggle />
          <IaSettingsPopover />
          <LocaleSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  )
}
