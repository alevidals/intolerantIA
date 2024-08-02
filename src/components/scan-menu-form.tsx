"use client"

import { scanAction } from "@/app/(app)/scan/_actions"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { scanSchema } from "@/lib/schemas"
import type { ScanForm } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { IconX } from "@tabler/icons-react"
import Image from "next/image"
import { type FormEvent, useRef } from "react"
import { useFormState } from "react-dom"
import { type UseFormSetValue, useForm } from "react-hook-form"

type ImagePreviewsProps = {
  images: FileList
  setImages: UseFormSetValue<ScanForm>
}

function ImagePreviews({ images, setImages }: ImagePreviewsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from(images ?? []).map((image) => (
        <div key={image.name} className="relative w-fit">
          <Image
            src={URL.createObjectURL(image)}
            className="aspect-square object-cover"
            alt="image"
            height={100}
            width={100}
          />
          <Button
            type="button"
            className="-right-2 -top-2 absolute h-5 w-5 rounded-full"
            size="icon"
            onClick={() => {
              const dataTransfer = new DataTransfer()

              const files = Array.from(images ?? []).filter(
                (file) => image.name !== file.name,
              )

              for (const file of files) {
                dataTransfer.items.add(file)
              }

              setImages("files", dataTransfer.files)
            }}
          >
            <IconX className="h-3 w-3" />
          </Button>
        </div>
      ))}
    </div>
  )
}

export function ScanMenuForm() {
  const [state, formAction] = useFormState(scanAction, {
    success: null,
  })

  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<ScanForm>({
    resolver: zodResolver(scanSchema),
    defaultValues: {
      text: "",
      files: undefined,
    },
  })

  const filesRef = form.register("files")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    form.handleSubmit(() =>
      formAction(new FormData(formRef.current as HTMLFormElement)),
    )(event)
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Information about allergies and intolerances
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-64"
                  placeholder="Allergies and intolerances"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="files"
          render={() => {
            return (
              <FormItem>
                <FormLabel>Menu images</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    placeholder="images"
                    {...filesRef}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <ImagePreviews
          images={form.getValues("files")}
          setImages={form.setValue}
        />
        <Button className="w-fit">Submit</Button>
      </form>
    </Form>
  )
}
