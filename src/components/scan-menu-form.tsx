"use client"

import { type FormState, scanAction } from "@/app/(app)/scan/_actions"
import { MenuPreviews } from "@/components/menu-previews"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { INTOLERANCES_AND_ALLERGIES } from "@/lib/constants"
import { useAiSettingsStore, useScanStore, useUserInfoStore } from "@/lib/store"
import type { UserInfo } from "@/lib/types"
import { capitalizeFirstLetter, fileToBase64 } from "@/lib/utils"
import { IconLoader, IconUpload } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from "sonner"

function validateErrors(errors: NonNullable<NonNullable<FormState>["errors"]>) {
  if (errors.allergyOrIntolerance?.[0]) {
    toast.error(errors.allergyOrIntolerance[0])
    return
  }

  if (errors.files?.[0]) {
    toast.error(errors.files[0])
    return
  }

  if (errors.model?.[0]) {
    toast.error(errors.model[0])
    return
  }

  if (errors.apiKey?.[0]) {
    toast.error(errors.apiKey[0])
    return
  }

  if (errors.invalidImage?.[0]) {
    toast.error(errors.invalidImage[0])
    return
  }

  if (errors.unexpectedError?.[0]) {
    toast.error(errors.unexpectedError[0])
    return
  }
}

function formDataToUserInfo(data: FormData) {
  const userInfo = INTOLERANCES_AND_ALLERGIES.reduce(
    (acc, allergyOrIntolerance) => {
      acc[`${allergyOrIntolerance}Allergy`] =
        data.get(`${allergyOrIntolerance}Allergy`) === "on"
      acc[`${allergyOrIntolerance}Intolerance`] =
        data.get(`${allergyOrIntolerance}Intolerance`) === "on"

      return acc
    },
    {} as UserInfo,
  )

  return userInfo
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button className="w-fit gap-x-4 bg-violet-400" disabled={pending}>
      <span className={`${pending ? "hidden" : "inline"}`}>Submit</span>
      {pending ? <IconLoader className="animate-spin" /> : null}
    </Button>
  )
}

export function ScanMenuForm() {
  const [fileList, setFileList] = useState<FileList | null>(null)
  const router = useRouter()

  const scanStore = useScanStore()
  const aiSettingsStore = useAiSettingsStore()
  const userInfoStore = useUserInfoStore()

  const [state, formAction] = useFormState(scanAction, null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: we want to update the store when the state is updated
  useEffect(() => {
    if (state?.success === true && state.data) {
      scanStore.setData(state.data)
      router.push("/scan/result")
    }

    if (state?.errors) {
      validateErrors(state.errors)
    }
  }, [state])

  const fileInputRef = useRef<HTMLInputElement>(null)

  async function onAction(data: FormData) {
    const promises = Array.from(fileList ?? []).map(
      async (file) => await fileToBase64(file),
    )

    const base64files = await Promise.all(promises)

    for (const file of base64files) {
      data.append("files", file)
    }

    data.append("model", aiSettingsStore.data?.model ?? "gpt-4o-mini")
    data.append("apiKey", aiSettingsStore.data?.apiKey ?? "")

    const userInfo = formDataToUserInfo(data)
    userInfoStore.setData(userInfo)

    formAction(data)
  }

  return (
    <form className="flex flex-col gap-4" action={onAction}>
      <div>
        <h3 className="mb-2 font-bold text-violet-400">Allergies</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {INTOLERANCES_AND_ALLERGIES.map((allergy) => (
            <div
              key={`${allergy}Allergy`}
              className="flex items-center space-x-3"
            >
              <Checkbox
                name={`${allergy}Allergy`}
                defaultChecked={userInfoStore.data?.[`${allergy}Allergy`]}
              />
              <Label htmlFor={`${allergy}Allergy`}>
                {capitalizeFirstLetter(allergy)}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-bold text-violet-400">Intolerances</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {INTOLERANCES_AND_ALLERGIES.map((intolerance) => (
            <div
              key={`${intolerance}Intolerance`}
              className="flex items-center space-x-3"
            >
              <Checkbox
                name={`${intolerance}Intolerance`}
                defaultChecked={
                  userInfoStore.data?.[`${intolerance}Intolerance`]
                }
              />
              <Label htmlFor={`${intolerance}Intolerance`}>
                {capitalizeFirstLetter(intolerance)}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Input
        type="file"
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
        multiple
        onChange={async (event) => {
          setFileList(event.target.files)
        }}
      />

      <MenuPreviews
        images={fileList}
        deleteImage={(image) => {
          const dataTransfer = new DataTransfer()

          const files = Array.from(fileList ?? []).filter(
            (file) => image.name !== file.name,
          )

          for (const file of files) {
            dataTransfer.items.add(file)
          }

          setFileList(dataTransfer.files)
        }}
      />

      <Button
        type="button"
        variant="link"
        className="self-start px-0"
        onClick={() => {
          fileInputRef.current?.click()
        }}
      >
        Upload images
        <IconUpload className="ml-2 h-4 w-4" />
      </Button>
      <SubmitButton />
    </form>
  )
}
