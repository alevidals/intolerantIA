import type { AiSettings, ScanResponse, UserInfo } from "@/lib/types"
import { create } from "zustand"

type ScanStore = {
  data: ScanResponse | null
  setData: (data: ScanResponse | null) => void
}

type AiSettingsStore = {
  data: AiSettings | null
  setData: (data: AiSettings | null) => void
}

type UserInfoStore = {
  data: UserInfo | null
  setData: (data: UserInfo | null) => void
}

export const useScanStore = create<ScanStore>((set) => ({
  data: null,
  setData: (data: ScanResponse | null) =>
    set({
      data,
    }),
}))

export const useUserInfoStore = create<UserInfoStore>((set) => ({
  data: null,
  setData: (data: UserInfo | null) =>
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
