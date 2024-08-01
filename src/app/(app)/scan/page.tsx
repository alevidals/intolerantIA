"use client";

import { ScanMenuForm } from "@/components/scan-menu-form";

export default function ScanPage() {
  return (
    <div className="mt-16">
      <p className="text-2xl font-bold mb-4">
        Fill in the form below to scan the menu and add check allergies and
        intolerances
      </p>
      <ScanMenuForm />
    </div>
  );
}
