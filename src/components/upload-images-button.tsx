"use client"

import { MenuPreviews } from "@/components/menu-previews"
import {
  MAX_FILES,
  MAX_FILE_SIZE,
  VALID_IMAGE_EXTENSIONS,
} from "@/lib/constants"
import type { ImageFile } from "@/lib/types"
import { cn, fileToImageFile } from "@/lib/utils"
import { useI18n } from "@/locales/client"
import { IconUpload } from "@tabler/icons-react"
import {
  type Dispatch,
  type DragEvent,
  type RefObject,
  type SetStateAction,
  useState,
} from "react"
import { toast } from "sonner"

type Props = {
  fileInputRef: RefObject<HTMLInputElement>
  files: ImageFile[]
  setFiles: Dispatch<SetStateAction<ImageFile[]>>
}

function validateFormatFiles(files: FileList) {
  for (const file of Array.from(files)) {
    const extension = file.name.split(".").pop()

    if (!VALID_IMAGE_EXTENSIONS.includes(extension ?? "")) {
      return false
    }
  }

  return true
}

export function UploadImagesButton({ fileInputRef, setFiles, files }: Props) {
  const t = useI18n()

  const [isOver, setIsOver] = useState(false)

  async function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()

    const fileList = event.dataTransfer.files

    if (!fileList) return

    if (fileList.length > MAX_FILES) {
      toast.error(t("maxFiles"))
      return
    }

    if (!validateFormatFiles(fileList)) {
      toast.error(t("invalidFormat"))
      return
    }

    if (Array.from(fileList).some((file) => file.size > MAX_FILE_SIZE)) {
      toast.error(t("maxFileSize"))
      return
    }

    const promises = Array.from(fileList ?? []).map(
      async (file) => await fileToImageFile(file),
    )

    const base64files = await Promise.all(promises)
    setFiles(base64files)

    setIsOver(false)
  }

  return (
    <div
      className={cn("mt-4 rounded-md border border-violet-400 border-dashed", {
        "border-2": isOver,
      })}
      onDragOver={(event) => {
        event.preventDefault()
        event.stopPropagation()
        setIsOver(true)
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={handleDrop}
    >
      <button
        className="flex w-full flex-col items-center justify-center gap-2 p-10"
        type="button"
        onClick={() => {
          fileInputRef.current?.click()
        }}
      >
        <IconUpload className="h-8 w-8 text-violet-400" />
        <p className="text-center">{t("clickToUploadImages")}</p>
        <p className="max-w-sm text-center text-muted-foreground text-sm">
          {t("imagesRequirements")}
        </p>
      </button>

      {files.length > 0 ? (
        <div className="mx-auto mb-10 w-fit">
          <MenuPreviews
            images={files}
            deleteImage={(index) => {
              if (fileInputRef.current && files.length === 1) {
                fileInputRef.current.value = ""
                setFiles([])
                return
              }

              setFiles(files.filter((_, i) => i !== index))
            }}
          />
        </div>
      ) : null}
    </div>
  )
}
