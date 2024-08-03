"use client"

import { Button } from "@/components/ui/button"
import { useScanStore } from "@/lib/store"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import Link from "next/link"

export function ScanAgainButton() {
  const scanStore = useScanStore()

  if (!scanStore.data) {
    return null
  }

  return (
    <Button asChild className="gap-x-3 bg-violet-400">
      <Link href="/scan">
        Scan again
        <IconArrowNarrowRight />
      </Link>
    </Button>
  )
}
