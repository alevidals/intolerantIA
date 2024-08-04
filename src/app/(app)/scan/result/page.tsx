import { ScanAgainButton } from "@/components/scan-again-button"
import { ScanResponse } from "@/components/scan-response"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { IconAlertCircle } from "@tabler/icons-react"
import colors from "tailwindcss/colors"

export default function ScanResultPage() {
  return (
    <div className="container mt-20 flex items-center justify-center">
      <div>
        <Alert className="mx-auto mb-4 max-w-4xl border-violet-400 text-violet-400">
          <IconAlertCircle color={colors.violet[400]} className="h-4 w-4" />
          <AlertTitle>Please read this!</AlertTitle>
          <AlertDescription>
            Please note that this application is intended to provide helpful
            guidance based on the information you provided. However, it is
            essential to always confirm with the restaurant staff regarding any
            allergies or dietary restrictions before consuming any dishes.
          </AlertDescription>
        </Alert>
        <ScanResponse />
        <div className="mt-5 flex justify-center">
          <ScanAgainButton />
        </div>
      </div>
    </div>
  )
}
