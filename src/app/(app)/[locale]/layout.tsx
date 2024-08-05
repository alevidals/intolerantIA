import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { I18nProviderClient } from "@/locales/client"

type AppLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
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
