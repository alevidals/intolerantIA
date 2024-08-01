export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-center text-7xl font-bold text-foreground animate-in fade-in-0 slide-in-from-bottom-28 duration-1000">
          Welcome to <span className="text-violet-400">IntolerantIA!</span>
        </h1>
        <p className="text-foreground text-3xl text-balance text-center animate-in fade-in-0 slide-in-from-bottom-28 duration-1000 mt-12">
          Here you will be able to take a quick look at the restaurant's menu to
          see what foods you can eat and cannot eat.
        </p>
      </div>
    </div>
  );
}
