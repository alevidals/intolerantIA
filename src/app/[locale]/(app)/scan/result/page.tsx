import { ScanAgainButton } from "@/components/scan-again-button"
import { ScanResponse } from "@/components/scan-response"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getI18n } from "@/locales/server"
import { IconAlertCircle } from "@tabler/icons-react"
import type { Metadata } from "next"
import colors from "tailwindcss/colors"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()

  return {
    title: `${t("scan")} - IntolerantIA`,
  }
}

export default async function ScanResultPage() {
  const t = await getI18n()

  return (
    <div className="container mt-24 mb-10">
      <h2 className="mb-10 font-bold text-3xl">{t("thanksForScanning")}</h2>
      <div>
        <Alert className="mb-4 border-violet-400 text-violet-400">
          <IconAlertCircle color={colors.violet[400]} className="h-4 w-4" />
          <AlertTitle>{t("alertTitle")}</AlertTitle>
          <AlertDescription>{t("alertDescription")}</AlertDescription>
        </Alert>
        <ScanResponse />
        <div className="mt-5">
          <ScanAgainButton />
        </div>
      </div>
    </div>
  )
}
