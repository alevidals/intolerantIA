import { z } from "zod"

// TODO: add error messages
export const scanSchema = z.object({
  text: z.string().min(1),
  files:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((file) => file?.length > 0, "File is required."),
})
