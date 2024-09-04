"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className={"root px-4 md:px-0"}>{children}</main>
      <Footer />
    </QueryClientProvider>
  );
}
