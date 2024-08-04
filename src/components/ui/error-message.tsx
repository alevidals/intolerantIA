import { cn } from "@/lib/utils"

type Props = {
  error?: string
  className?: string
}

export function ErrorMessage({ error, className }: Props) {
  if (!error) {
    return null
  }

  return (
    <p className={cn("font-medium text-[0.8rem] text-destructive", className)}>
      {error}
    </p>
  )
}
