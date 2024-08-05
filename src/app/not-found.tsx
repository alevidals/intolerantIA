import { Button } from "@/components/ui/button"
import { getI18n } from "@/locales/server"
import Link from "next/link"

export default async function NotFound() {
  const t = await getI18n()

  return (
    <div className="container flex min-h-dvh items-center justify-center">
      <div className="flex flex-col gap-x-20 md:max-w-4xl md:flex-row">
        <div className="flex flex-col gap-y-10">
          <h2 className="font-bold text-3xl text-violet-400 md:text-6xl">
            {t("pageNotFound")}
          </h2>
          <p>{t("pageNotFoundDescription")}</p>
          <Button className="bg-violet-400" asChild>
            <Link href="/">{t("pageNotFoundButton")}</Link>
          </Button>
        </div>
        <h1 className="mt-10 font-extrabold text-9xl text-violet-400 md:my-auto md:text-[15rem]">
          404
        </h1>
      </div>
    </div>
  )
}
