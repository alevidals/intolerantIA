"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { aiSettingsSchema } from "@/lib/schemas"
import { useAiSettingsStore } from "@/lib/store"
import type { AiSettings } from "@/lib/types"
import { useI18n } from "@/locales/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { IconAdjustmentsHorizontal, IconAlertCircle } from "@tabler/icons-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import colors from "tailwindcss/colors"

export function IaSettingsPopover() {
  const t = useI18n()

  const [open, setOpen] = useState(false)

  const aiSettingsStore = useAiSettingsStore()

  const form = useForm<AiSettings>({
    defaultValues: {
      apiKey: "",
      model: "gpt-4-turbo",
    },
    resolver: zodResolver(aiSettingsSchema),
  })

  function onSubmit(data: AiSettings) {
    aiSettingsStore.setData(data)
    toast.success(t("settingsSavedSuccessfully"))
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 px-0"
          aria-label={t("iaSettings")}
        >
          <IconAdjustmentsHorizontal className="h-5 w-5" />
          <span className="sr-only">{t("iaSettings")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-80 w-80 overflow-y-scroll md:h-auto md:overflow-y-auto">
        <div className="grid gap-4">
          <Alert className="border-violet-400 text-violet-400">
            <IconAlertCircle color={colors.violet[400]} className="h-4 w-4" />
            <AlertTitle>{t("information")}</AlertTitle>
            <AlertDescription>{t("settingsInformation")}</AlertDescription>
          </Alert>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{t("iaSettings")}</h4>
            <p className="text-muted-foreground text-sm">
              {t("setHereApiAndModel")}
            </p>
          </div>
          <Form {...form}>
            <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="apiKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("apiKey")}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("model")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("selectModelToDisplay")}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="gpt-4-turbo">gpt-4-turbo</SelectItem>
                        <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                        <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      {t("modelOrder")}: gpt-4-turbo, gpt-4o, gpt-4o-mini.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-violet-400">{t("save")}</Button>
            </form>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  )
}
