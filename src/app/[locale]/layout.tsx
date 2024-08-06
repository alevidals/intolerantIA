import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { getCurrentLocale, getI18n } from "@/locales/server"
import type { Metadata } from "next"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()

  return {
    openGraph: {
      type: "website",
      url: "https://intolerantia.vercel.app",
      title: "IntolerantIA",
      description: t("siteDescription"),
      siteName: "IntolerantIA",
      images: [
        {
          url: "https://intolerantia.vercel.app/og.png",
          width: 1920,
          height: 1080,
          alt: "IntolerantIA",
        },
      ],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = getCurrentLocale()

  return (
    <html lang={locale} suppressHydrationWarning className="relative">
      <body
        className={cn(
          spaceGrotesk.className,
          "min-h-screen bg-background antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
