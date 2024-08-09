"use server"

import { INTOLERANCES_AND_ALLERGIES } from "@/lib/constants"
import { scanResponseSchema, scanSchema } from "@/lib/schemas"
import type { ScanForm, ScanResponse } from "@/lib/types"
import { createOpenAI } from "@ai-sdk/openai"
import type { UserContent } from "ai"
import { generateObject } from "ai"

export type FormState = {
  success: boolean
  errors:
    | ({
        [key in keyof ScanForm]?: string[]
      } & {
        allergyOrIntolerance?: string[]
        invalidImage?: string[]
        unexpectedError?: string[]
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

  const allergies: string[] = []
  const intolerances: string[] = []

  for (const [key, value] of Object.entries(parsed.data)) {
    if (typeof value === "boolean" && value === true) {
      if (key.includes("Allergy")) {
        allergies.push(key.split("Allergy")[0])
      } else {
        intolerances.push(key.split("Intolerance")[0])
      }
    }
  }

  let prompt = `You are a nutritionist expert in allergies and intolerance. Your task is to analyze the following images to determine if they all correspond to menus from a restaurant, bar, ice-cream parlour, or similar establishment. If any image does not correspond to a menu, return the JSON: {"success": false}. If all images are confirmed to be menus, proceed to analyze the content based on the user's allergies and intolerances`

  if (intolerances.length > 0) {
    prompt += ` The user's intolerances are: ${intolerances.join(", ")}.`
  }

  if (allergies.length > 0) {
    prompt += ` The user's allergies are: ${allergies.join(", ")}.`
  }

  prompt += ` Classify each menu item into one of three categories:

  - **canEat**: Items that are safe for the user to eat.
  - **cannotEat**: Items that the user should avoid.
  - **askRestaurant**: Items that might be risky and require confirmation from the restaurant.

  Return the result in the following JSON format:
  {
    "canEat": [],
    "cannotEat": [],
    "askRestaurant": [],
    "success": true
  }`

  const content: UserContent = [
    {
      type: "text",
      text: prompt,
    },
  ]

  for (const file of parsed.data.files) {
    content.push({
      type: "image",
      image: file,
    })
  }

  console.info("Processing...")

  const openai = createOpenAI({
    apiKey: parsed.data.apiKey,
  })

  try {
    const result = await generateObject({
      model: openai(parsed.data.model),
      maxRetries: 1,
      maxTokens: 1024,
      temperature: 0,
      messages: [
        {
          role: "user",
          content,
        },
      ],
      schema: scanResponseSchema,
    })

    console.info("Processing done")

    if (!result.object.success) {
      return {
        success: false,
        errors: {
          invalidImage: ["invalidImages"],
        },
        data: null,
      }
    }

    return {
      success: true,
      data: result.object,
      errors: null,
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }

    return {
      success: false,
      errors: {
        unexpectedError: ["unexpectedError"],
      },
      data: null,
    }
  }
}
