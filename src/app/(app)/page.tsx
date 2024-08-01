import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-center text-7xl font-bold text-foreground">
          Welcome to <span className="text-violet-400">IntolerantIA!</span>
        </h1>
        <p className="text-foreground text-3xl text-balance text-center mt-12">
          Here you will be able to take a quick look at the restaurant's menu to
          see what foods you can eat and cannot eat.
        </p>
        <Button
          className="flex mx-auto mt-12 bg-violet-400 font-bold px-12 py-8 hover:bg-violet-300 transition-all duration-300 hover:scale-105"
          asChild
        >
          <Link href="/scan" className="w-fit">
            Scan now
          </Link>
        </Button>
      </div>
    </div>
  );
}
