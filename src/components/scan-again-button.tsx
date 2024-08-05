"use client"

import { Button } from "@/components/ui/button"
import { useScanStore } from "@/lib/store"
import { IconReload } from "@tabler/icons-react"
import Link from "next/link"

export function ScanAgainButton() {
  const scanStore = useScanStore()

  if (!scanStore.data) {
    return null
  }

  return (
    <Button asChild className="gap-x-3 bg-violet-400 font-bold">
      <Link href="/scan">
        Scan again
        <IconReload />
      </Link>
    </Button>
  )
}
