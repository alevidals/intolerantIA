"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScanStore, useUserInfoStore } from "@/lib/store"
import type { TranslationKey } from "@/lib/types"
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
    askRestaurant: t("foodWithoutClassification"),
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
        {items.length > 0 ? (
          <ul className="list-inside list-disc">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{t("noDataToShow")}</p>
        )}
      </CardContent>
    </Card>
  )
}

export function ScanResponse() {
  const t = useI18n()
  const scanStore = useScanStore()
  const userInfoStore = useUserInfoStore()

  const allergies = Object.entries(userInfoStore.data ?? {})
    .filter(([key, value]) => key.includes("Allergy") && value === true)
    .map(([key]) =>
      t(key.split("Allergy")[0] as TranslationKey).toLocaleLowerCase(),
    )

  const intolerances = Object.entries(userInfoStore.data ?? {})
    .filter(([key, value]) => key.includes("Intolerance") && value === true)
    .map(([key]) =>
      t(key.split("Intolerance")[0] as TranslationKey).toLocaleLowerCase(),
    )

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
    <div>
      <div className="mb-4">
        {allergies.length > 0 ? (
          <p>
            {t("theUserHasAllergies")}: {allergies.join(", ")}.
          </p>
        ) : null}
        {intolerances.length > 0 ? (
          <p>
            {t("theUserHasIntolerances")}: {intolerances.join(", ")}.
          </p>
        ) : null}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ResponseCard items={scanStore.data?.canEat ?? []} type="canEat" />
        <ResponseCard
          items={scanStore.data?.cannotEat ?? []}
          type="cannotEat"
        />
        <ResponseCard
          items={scanStore.data?.askRestaurant ?? []}
          type="askRestaurant"
        />
      </div>
    </div>
  )
}
