import { createI18nServer } from "next-international/server"

export const { getI18n, getCurrentLocale, getScopedI18n, getStaticParams } =
  createI18nServer({
    es: () => import("./es"),
    en: () => import("./en"),
  })
