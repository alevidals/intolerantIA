import type { scanSchema } from "@/lib/schemas"
import type { z } from "zod"

export type ScanForm = z.infer<typeof scanSchema>
