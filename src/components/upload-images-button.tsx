"use client"

import { MenuPreviews } from "@/components/menu-previews"
import {
  MAX_FILES,
  MAX_FILE_SIZE,
  VALID_IMAGE_EXTENSIONS,
} from "@/lib/constants"
import { cn } from "@/lib/utils"
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
  fileList: FileList | null
  setFileList: Dispatch<SetStateAction<FileList | null>>
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

export function UploadImagesButton({
  fileInputRef,
  setFileList,
  fileList,
}: Props) {
  const [isOver, setIsOver] = useState(false)

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    event.stopPropagation()

    const fileList = event.dataTransfer.files

    if (!fileList) return

    if (fileList.length > MAX_FILES) {
      toast.error("You can only upload up to 4 images.")
      return
    }

    if (!validateFormatFiles(fileList)) {
      toast.error(
        "Invalid file format. Please upload only images with valid extensions.",
      )
      return
    }

    if (Array.from(fileList).some((file) => file.size > MAX_FILE_SIZE)) {
      toast.error("The maximum file size is 10MB.")
      return
    }

    setFileList(fileList)
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
        <p className="text-center">Click here or drag and drop your images</p>
        <p className="max-w-sm text-center text-muted-foreground text-sm">
          The maximum file size is 10MB and you can upload up to 4 images. Te
          format of the images must be png, jpg or jpeg.
        </p>
      </button>

      {Array.from(fileList ?? []).length > 0 ? (
        <div className="mx-auto mb-10 w-fit">
          <MenuPreviews
            images={fileList}
            deleteImage={(image) => {
              if (
                fileInputRef.current &&
                fileList &&
                Array.from(fileList).length === 1
              ) {
                fileInputRef.current.value = ""
                setFileList(null)
                return
              }

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
        </div>
      ) : null}
    </div>
  )
}
