"use server"

import { INTOLERANCES_AND_ALLERGIES } from "@/lib/constants"
import { scanSchema } from "@/lib/schemas"
import type { ScanForm, ScanResponse } from "@/lib/types"
import {} from "ai"

type FormState = {
  success: boolean
  errors:
    | ({
        [key in keyof ScanForm]?: string[]
      } & {
        allergyOrIntolerance?: string[]
      })
    | null
  data: ScanResponse | null
} | null

type Data = {
  [key: string]: boolean | string[] | string
  files: string[]
}

export async function scanAction(
  _: FormState,
  data: FormData,
): Promise<FormState> {
  const formData: Data = {
    files: data.getAll("files") as string[],
    model: data.get("model") as string,
    apiKey: data.get("apiKey") as string,
  }

  for (const item of INTOLERANCES_AND_ALLERGIES) {
    formData[`${item}Allergy`] = data.get(`${item}Allergy`) === "on"
    formData[`${item}Intolerance`] = data.get(`${item}Intolerance`) === "on"
  }

  const parsed = scanSchema.safeParse(formData)

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      data: null,
    }
  }

  return {
    success: true,
    data: {
      canEat: [],
      cannotEat: [],
      askRestaurant: [],
    },
    errors: null,
  }

  // const allergies: string[] = []
  // const intolerances: string[] = []

  // for (const [key, value] of Object.entries(parsed.data)) {
  //   if (typeof value === "boolean" && value === true) {
  //     if (key.includes("Allergy")) {
  //       allergies.push(key.split("Allergy")[0])
  //     } else {
  //       intolerances.push(key.split("Intolerance")[0])
  //     }
  //   }
  // }

  // let prompt = ""

  // if (allergies.length > 0) {
  //   prompt += `I'm allergic to ${allergies.join(", ")}. `
  // }

  // if (intolerances.length > 0) {
  //   prompt += `I'm intolerant to ${intolerances.join(", ")}. `
  // }

  // prompt +=
  //   "Which items on this menu can I eat, which can I not eat and which should I ask the restaurant to be sure I can eat them? Return me a json with the following body canEat, cannotEat, askRestaurant. Do not write anything else."

  // const content: UserContent = [
  //   {
  //     type: "text",
  //     text: prompt,
  //   },
  // ]

  // for (const file of parsed.data.files) {
  //   content.push({
  //     type: "image",
  //     image: file,
  //   })
  // }

  // console.info("Processing...")

  // const openai = createOpenAI({
  //   apiKey: process.env.OPENAI,
  // })

  // const result = await generateObject({
  //   model: openai("gpt-4o-mini"),
  //   messages: [
  //     {
  //       role: "user",
  //       content,
  //     },
  //   ],
  //   schema: scanResponseSchema,
  // })

  // console.info("Processing done")

  // return {
  //   success: true,
  //   data: result.object,
  //   errors: null,
  // }
}
