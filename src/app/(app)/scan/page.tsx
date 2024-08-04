import { ScanMenuForm } from "@/components/scan-menu-form"

export default function ScanPage() {
  return (
    <div className="container mt-20">
      <h2 className="mb-4 font-bold text-2xl">
        Fill in the form below to scan the menu and add check allergies and
        intolerances
      </h2>
      <ScanMenuForm />
    </div>
  )
}
