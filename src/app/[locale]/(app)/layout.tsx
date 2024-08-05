import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { I18nProviderClient } from "@/locales/client"
import { getI18n } from "@/locales/server"
import type { Metadata } from "next"

type AppLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()

  return {
    title: "IntolerantIA",
    description: t("siteDescription"),
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
}

export default function AppLayout({ children, params }: AppLayoutProps) {
  return (
    <>
      <I18nProviderClient locale={params.locale}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </I18nProviderClient>
    </>
  )
}
