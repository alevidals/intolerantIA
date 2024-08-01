import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1 container">{children}</main>
      <Footer />
    </>
  );
}
