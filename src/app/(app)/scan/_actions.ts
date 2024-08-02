"use server"

import { scanSchema } from "@/lib/schemas"

type FormState = {
  success: boolean | null
}

export async function scanAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data)
  const parsed = scanSchema.safeParse(formData)

  if (!parsed.success) {
    return {
      success: false,
    }
  }

  console.log("data", parsed.data)

  return {
    success: true,
  }
}
