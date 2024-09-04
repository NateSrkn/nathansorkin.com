import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import Providers from "@/app/providers";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <main className={"root px-4 md:px-0"}>{children}</main>
      <Footer />
    </Providers>
  );
}
