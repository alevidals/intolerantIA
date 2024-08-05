import { defaultLocale, locales } from "@/lib/config"
import { LOCALE_COOKIE } from "@/lib/constants"
import { createI18nMiddleware } from "next-international/middleware"
import type { NextRequest } from "next/server"

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
})

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const [_, locale] = pathname.split("/")

  const localeCookie = request.cookies.get(LOCALE_COOKIE)?.value

  const response = I18nMiddleware(request)

  if (locale !== "" && locales.includes(locale) && locale !== localeCookie) {
    response.cookies.set(LOCALE_COOKIE, locale ?? defaultLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "strict",
    })
  }

  return response
}

export const config = {
  matcher: [
    "/((?!api|favicon.ico|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
}
