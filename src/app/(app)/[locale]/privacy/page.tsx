import { getI18n } from "@/locales/server"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n()

  return {
    title: `${t("privacy")} - IntolerantIA`,
  }
}

export default async function PrivacyPage() {
  const t = await getI18n()

  return (
    <div className="container my-20">
      <h1 className="mt-40 text-center text-7xl">{t("privacyPolicy")}</h1>
      <p className="mx-auto mt-10 max-w-xl text-center text-lg text-muted-foreground leading-loose">
        {t("weTakePrivacy")}
      </p>

      <article className="mx-auto mt-10 flex max-w-xl flex-col gap-y-6 text-lg leading-7">
        <aside>
          <h2 className="font-bold text-violet-400 text-xl">
            {t("tableOfContents")}
          </h2>
          <ul className="flex list-inside list-decimal flex-col gap-y-2 text-base underline">
            <li>
              <a href="#no-user-data">{t("privacy1")}</a>
            </li>
            <li>
              <a href="#security-of-keys">{t("privacy2")}</a>
            </li>
            <li>
              <a href="#temporary-memory">{t("privacy3")}</a>
            </li>
            <li>
              <a href="#commitment-to-privacy">{t("privacy4")}</a>
            </li>
          </ul>
        </aside>

        <p>{t("privacyHeader")}</p>

        <div id="no-user-data">
          <h3 className="font-bold text-violet-400">{t("privacy1")}</h3>
          <p>{t("privacy1Text")}</p>
        </div>
        <div id="security-of-keys">
          <h3 className="font-bold text-violet-400">{t("privacy2")}</h3>
          <p>{t("privacy2Text")}</p>
        </div>
        <div id="temporary-memory">
          <h3 className="font-bold text-violet-400">{t("privacy3")}</h3>
          <p>{t("privacy3Text")}</p>
        </div>
        <div id="commitment-to-privacy">
          <h3 className="font-bold text-violet-400">{t("privacy4")}</h3>
          <p>{t("privacy4Text")}</p>
        </div>
      </article>
    </div>
  )
}
