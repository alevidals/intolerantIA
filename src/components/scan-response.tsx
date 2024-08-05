"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScanStore } from "@/lib/store"
import { useI18n } from "@/locales/client"
import Link from "next/link"

type ResponseCardProps = {
  items: string[]
  type: "canEat" | "cannotEat" | "askRestaurant"
}

export function ResponseCard({ type, items }: ResponseCardProps) {
  const t = useI18n()

  const titles = {
    canEat: t("foodThatCanBeEaten"),
    cannotEat: t("foodThatCannotBeEaten"),
    askRestaurant: t("foodThatShouldBeAsked"),
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
  const t = useI18n()
  const scanStore = useScanStore()

  if (!scanStore.data) {
    return (
      <div>
        <p>
          {t("noDataYet")}{" "}
          <Link
            href="/scan"
            className="font-medium text-violet-400 underline underline-offset-4"
          >
            {t("here")}
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <ResponseCard items={scanStore.data?.canEat ?? []} type="canEat" />
      <ResponseCard items={scanStore.data?.cannotEat ?? []} type="cannotEat" />
      <ResponseCard
        items={scanStore.data?.askRestaurant ?? []}
        type="askRestaurant"
      />
    </div>
  )
}
