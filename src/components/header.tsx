import { ModeToggle } from "@/components/mode-toggle";
import { IconChefHat } from "@tabler/icons-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 ">
      <div className="container h-16 flex text-foreground items-center justify-between">
        <Link href="/">
          <IconChefHat className="h-10 w-10" />
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
