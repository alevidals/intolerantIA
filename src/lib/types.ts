import type {
  aiSettingsSchema,
  scanResponseSchema,
  scanSchema,
} from "@/lib/schemas"
import type { z } from "zod"

export type ScanForm = z.infer<typeof scanSchema>
export type ScanResponse = z.infer<typeof scanResponseSchema>
export type AiSettings = z.infer<typeof aiSettingsSchema>
