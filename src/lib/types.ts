import { scanSchema } from "@/lib/schemas";
import { z } from "zod";

export type ScanForm = z.infer<typeof scanSchema>;