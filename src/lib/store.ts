import type { AiSettings, ScanResponse } from "@/lib/types"
import { create } from "zustand"

type ScanStore = {
  data: ScanResponse | null
  setData: (data: ScanResponse | null) => void
}

type AiSettingsStore = {
  data: AiSettings | null
  setData: (data: AiSettings | null) => void
}

export const useScanStore = create<ScanStore>((set) => ({
  data: null,
  setData: (data: ScanResponse | null) =>
    set({
      data,
    }),
}))

export const useAiSettingsStore = create<AiSettingsStore>((set) => ({
  data: null,
  setData: (data: AiSettings | null) =>
    set({
      data,
    }),
}))
