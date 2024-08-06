import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { getCurrentLocale } from "@/locales/server"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

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
