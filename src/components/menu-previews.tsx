import { Button } from "@/components/ui/button"
import { IconX } from "@tabler/icons-react"
import Image from "next/image"

type Props = {
  images: FileList | null
  deleteImage: (image: File) => void
}

export function MenuPreviews({ images, deleteImage }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {Array.from(images ?? []).map((image) => (
        <div key={image.name} className="relative w-fit">
          <Image
            src={URL.createObjectURL(image)}
            className="aspect-square rounded-md object-cover"
            alt="image"
            height={100}
            width={100}
          />
          <Button
            type="button"
            className="-right-2 -top-2 absolute h-5 w-5 rounded-full duration-200 hover:scale-110"
            size="icon"
            onClick={() => {
              deleteImage(image)
            }}
          >
            <IconX className="h-3 w-3" />
          </Button>
        </div>
      ))}
    </div>
  )
}
