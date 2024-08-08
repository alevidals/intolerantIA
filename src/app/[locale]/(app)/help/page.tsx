import { getI18n } from "@/locales/server"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IconAdjustmentsHorizontal, IconMenuDeep } from "@tabler/icons-react"

export default async function HelpPage() {
  const t = await getI18n()

  return (
    <div className="container my-20">
      <h1 className="mt-40 text-center text-5xl md:text-7xl">{t("help")}</h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="mt-4 text-violet-400 text-xl">
            {t("howToConfigureIA")}
          </AccordionTrigger>
          <AccordionContent>
            {t("howToConfigureIADescription1")}{" "}
            <IconAdjustmentsHorizontal className="inline h-5 w-5" />{" "}
            {t("howToConfigureIADescription2")}
            <IconMenuDeep className="inline h-5 w-5" />{" "}
            {t("howToConfigureIADescription3")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
