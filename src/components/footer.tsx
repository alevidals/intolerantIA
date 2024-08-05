import { getI18n } from "@/locales/server"

export async function Footer() {
  const t = await getI18n()

  return (
    <footer className="container my-4">
      <p className="text-left text-sm text-violet-400">
        {t("builtBy")}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alevidals"
          className="font-medium underline underline-offset-4"
        >
          alevidals
        </a>
        . {t("sourceCode")}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alevidals/intolerantIA"
          className="font-medium underline underline-offset-4"
        >
          Github
        </a>
        .
      </p>
    </footer>
  )
}
