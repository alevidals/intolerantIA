"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScanStore } from "@/lib/store"
import Link from "next/link"

type ResponseCardProps = {
  items: string[]
  type: "canEat" | "cannotEat" | "askRestaurant"
}

export function ResponseCard({ type, items }: ResponseCardProps) {
  const titles = {
    canEat: "Food that can be eaten",
    cannotEat: "Food that cannot be eaten",
    askRestaurant: "Food that should be asked",
  }

  const colors = {
    canEat: "text-green-400",
    cannotEat: "text-red-400",
    askRestaurant: "text-yellow-400",
  }

  const title = titles[type]
  const color = colors[type]

  return (
    <Card>
      <CardHeader>
        <CardTitle className={`${color}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-inside list-disc">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export function ScanResponse() {
  const scanStore = useScanStore()

  if (!scanStore.data) {
    return (
      <div>
        <p>
          No data yet. Fill the form to scan the menu and add check allergies
          and intolerances clicking &nbsp;
          <Link
            href="/scan"
            className="font-medium text-violet-400 underline underline-offset-4"
          >
            here
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-3">
      <ResponseCard items={scanStore.data?.canEat ?? []} type="canEat" />
      <ResponseCard items={scanStore.data?.cannotEat ?? []} type="cannotEat" />
      <ResponseCard
        items={scanStore.data?.askRestaurant ?? []}
        type="askRestaurant"
      />
    </div>
  )
}
