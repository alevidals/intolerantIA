import { z } from "zod"

const model = z.enum(["gpt-4", "gpt-4-turbo", "gpt-4o", "gpt-4o-mini"], {
  required_error: "Model is required. Please select a model on the settings.",
})

const apiKey = z
  .string({
    required_error:
      "API key is required. Please add your API key on the settings located on header.",
  })
  .min(1, {
    message:
      "API key is required. Please add your API key on the setting located on header.",
  })

// TODO: add error messages
export const scanSchema = z
  .object({
    glutenIntolerance: z.boolean(),
    crustaceansIntolerance: z.boolean(),
    eggsIntolerance: z.boolean(),
    fishIntolerance: z.boolean(),
    peanutsIntolerance: z.boolean(),
    soyIntolerance: z.boolean(),
    dairyIntolerance: z.boolean(),
    treeNutsIntolerance: z.boolean(),
    celeryIntolerance: z.boolean(),
    mustardIntolerance: z.boolean(),
    sesameSeedsIntolerance: z.boolean(),
    mollusksIntolerance: z.boolean(),
    lupinsIntolerance: z.boolean(),
    lactoseIntolerance: z.boolean(),
    cowProteinIntolerance: z.boolean(),
    glutenAllergy: z.boolean(),
    crustaceansAllergy: z.boolean(),
    eggsAllergy: z.boolean(),
    fishAllergy: z.boolean(),
    peanutsAllergy: z.boolean(),
    soyAllergy: z.boolean(),
    dairyAllergy: z.boolean(),
    treeNutsAllergy: z.boolean(),
    celeryAllergy: z.boolean(),
    mustardAllergy: z.boolean(),
    sesameSeedsAllergy: z.boolean(),
    mollusksAllergy: z.boolean(),
    lupinsAllergy: z.boolean(),
    lactoseAllergy: z.boolean(),
    cowProteinAllergy: z.boolean(),
    model,
    apiKey,
    files: z.array(z.string().min(1)).min(1, {
      message: "At least one image is required.",
    }),
  })
  .refine((data) => Object.values(data).some((value) => value === true), {
    message: "At least one allergy or intolerance is required.",
    path: ["allergyOrIntolerance"],
  })

export const scanResponseSchema = z.object({
  canEat: z.array(z.string()),
  cannotEat: z.array(z.string()),
  askRestaurant: z.array(z.string()),
  success: z.boolean(),
})

// TODO: add error messages
export const aiSettingsSchema = z.object({
  apiKey,
  model,
})
