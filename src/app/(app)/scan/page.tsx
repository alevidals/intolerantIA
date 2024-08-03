import { ScanMenuForm } from "@/components/scan-menu-form"

export default function ScanPage() {
  return (
    <div className="mt-20">
      <p className="mb-4 font-bold text-2xl">
        Fill in the form below to scan the menu and add check allergies and
        intolerances
      </p>
      <ScanMenuForm />
    </div>
  )
}
