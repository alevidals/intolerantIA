import { ScanMenuForm } from "@/components/scan-menu-form"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { IconAlertCircle } from "@tabler/icons-react"
import colors from "tailwindcss/colors"

export default function ScanPage() {
  return (
    <div className="container mt-20">
      <h2 className="mb-4 font-bold text-xl">
        Please fill out the form below to scan the menu and add your allergies
        and intolerances
      </h2>
      <Alert className="mb-4 flex w-fit items-center gap-x-2 border-violet-400 text-violet-400">
        <div>
          <IconAlertCircle color={colors.violet[400]} className="h-4 w-4" />
        </div>
        <AlertDescription>
          Try to upload images where the names of the dishes are clearly
          visible.
        </AlertDescription>
      </Alert>
      <ScanMenuForm />
    </div>
  )
}
