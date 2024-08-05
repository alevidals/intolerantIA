import { ScanAgainButton } from "@/components/scan-again-button"
import { ScanResponse } from "@/components/scan-response"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { IconAlertCircle } from "@tabler/icons-react"
import colors from "tailwindcss/colors"

export default function ScanResultPage() {
  return (
    <div className="container mt-24">
      <h2 className="mb-10 font-bold text-3xl">
        Thank you for scanning the menu. Please check the results below.
      </h2>
      <div>
        <Alert className="mb-4 border-violet-400 text-violet-400">
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
        <div className="mt-5">
          <ScanAgainButton />
        </div>
      </div>
    </div>
  )
}
