"use client"

import { Button } from "@/components/ui/button"
import { useScanStore } from "@/lib/store"
import { useI18n } from "@/locales/client"
import { IconReload } from "@tabler/icons-react"
import Link from "next/link"

export function ScanAgainButton() {
  const t = useI18n()

  const scanStore = useScanStore()

  if (!scanStore.data) {
    return null
  }

  return (
    <Button asChild className="gap-x-3 bg-violet-400 font-bold">
      <Link href="/scan">
        {t("scanAgain")}
        <IconReload />
      </Link>
    </Button>
  )
}
