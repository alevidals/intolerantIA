import { getI18n } from "@/locales/server"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()

  return {
    title: `${t("about")} - IntolerantIA`,
  }
}

export default async function AboutPage() {
  const t = await getI18n()

  return (
    <div className="container my-20">
      <h1 className="mt-40 text-center text-5xl md:text-7xl">{t("about")}</h1>
      <p className="mx-auto mt-10 max-w-xl text-center text-base text-muted-foreground leading-loose">
        {t("about1")}
      </p>

      <article className="mx-auto mt-10 flex max-w-xl flex-col gap-y-6 text-lg leading-7">
        <p>{t("about2")}</p>
        <p>{t("about3")}</p>
        <p>{t("about4")}</p>
        <p>{t("about5")}</p>
      </article>
    </div>
  )
}
