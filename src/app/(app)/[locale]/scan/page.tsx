import { ScanMenuForm } from "@/components/scan-menu-form"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getI18n } from "@/locales/server"
import { IconAlertCircle } from "@tabler/icons-react"
import colors from "tailwindcss/colors"

export default async function ScanPage() {
  const t = await getI18n()

  return (
    <div className="container mt-24 mb-10">
      <h2 className="mb-10 font-bold text-3xl">{t("fillTheForm")}</h2>
      <Alert className="mb-4 flex w-fit items-center gap-x-2 border-violet-400 text-violet-400">
        <div>
          <IconAlertCircle color={colors.violet[400]} className="h-4 w-4" />
        </div>
        <AlertDescription>{t("uploadGoodImages")}</AlertDescription>
      </Alert>
      <ScanMenuForm />
    </div>
  )
}
