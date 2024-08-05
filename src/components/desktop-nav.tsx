"use client"

import { IaSettingsPopover } from "@/components/ia-settings-popover"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ModeToggle } from "@/components/mode-toggle"
import { LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useI18n } from "@/locales/client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DesktopNav() {
  const pathname = usePathname()
  const t = useI18n()

  return (
    <nav className="hidden items-center gap-x-4 md:flex">
      <ul className="flex gap-x-4">
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
      <IaSettingsPopover />
      <ModeToggle />
      <LocaleSwitcher />
    </nav>
  )
}
