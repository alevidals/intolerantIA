import { createI18nMiddleware } from "next-international/middleware"
import type { NextRequest } from "next/server"

const I18nMiddleware = createI18nMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: [
    "/((?!api|favicon.ico|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
}
