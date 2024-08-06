"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client"
import { IconChevronDown, IconLanguage } from "@tabler/icons-react"
import { useState } from "react"

export function LocaleSwitcher() {
  const [open, setOpen] = useState(false)

  const t = useI18n()
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 items-center gap-x-2 px-2">
          <IconLanguage className="h-5 w-5" />
          {locale.toUpperCase()}
          <IconChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              open && "rotate-180",
            )}
          />
          <span className="sr-only">{t("localeSwitcher")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale("es")}>
          {t("spanish")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          {t("english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
