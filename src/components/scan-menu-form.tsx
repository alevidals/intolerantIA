"use client"

import { scanAction } from "@/app/(app)/scan/_actions"
import { MenuPreviews } from "@/components/menu-previews"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ErrorMessage } from "@/components/ui/error-message"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { INTOLERANCES_AND_ALLERGIES } from "@/lib/constants"
import { useScanStore } from "@/lib/store"
import { capitalizeFirstLetter, fileToBase64 } from "@/lib/utils"
import { IconUpload } from "@tabler/icons-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button className="w-fit bg-violet-400" disabled={pending}>
      Submit
    </Button>
  )
}

export function ScanMenuForm() {
  const [fileList, setFileList] = useState<FileList | null>(null)
  const router = useRouter()

  const scanStore = useScanStore()

  const [state, formAction] = useFormState(scanAction, null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: we want to update the store when the state is updated
  useEffect(() => {
    if (state?.success === true && state.data) {
      scanStore.setData(state.data)
      router.push("/scan/result")
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

    formAction(data)
  }

  return (
    <form className="flex flex-col gap-4" action={onAction}>
      <ErrorMessage error={state?.errors?.allergyOrIntolerance?.[0]} />
      <div>
        <h3 className="mb-2 font-bold text-violet-400">Allergies</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {INTOLERANCES_AND_ALLERGIES.map((allergy) => (
            <div
              key={`${allergy}Allergy`}
              className="flex items-center space-x-3"
            >
              <Checkbox name={`${allergy}Allergy`} />
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
              <Checkbox name={`${intolerance}Intolerance`} />
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
      <ErrorMessage error={state?.errors?.files?.[0]} />

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
