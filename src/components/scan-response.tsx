"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScanStore } from "@/lib/store"
import Link from "next/link"

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
    <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-emerald-400">
            Food that can be eaten
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {scanStore.data?.canEat.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-red-400">
            Food that cannot be eaten
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {scanStore.data?.cannotEat.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-yellow-400">
            Food that should be asked
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {scanStore.data?.askRestaurant.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
