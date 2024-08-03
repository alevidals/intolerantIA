import type { ScanResponse } from "@/lib/types"
import { create } from "zustand"

type ScanStore = {
  data: ScanResponse | null
  setData: (data: ScanResponse | null) => void
}

export const useScanStore = create<ScanStore>((set) => ({
  data: null,
  setData: (data: ScanResponse | null) =>
    set({
      data,
    }),
}))
