"use client"

import { createI18nClient } from "next-international/client"

export const {
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
  I18nProviderClient,
} = createI18nClient({
  es: () => import("./es"),
  en: () => import("./en"),
})
