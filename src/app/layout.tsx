import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/config"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "intolerance",
    "allergy",
    "intolerant",
    "allergic",
    "food",
    "menu",
    "restaurant",
    "safe",
    "guide",
  ],
  authors: [
    {
      name: "Alejandro Vidal",
      url: "https://github.com/alevidals",
    },
  ],
  creator: "Alejandro Vidal",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  )
}
