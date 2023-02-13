import Head from "next/head";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../shared/lib";
import { NowPlaying, Weather } from "../shared/types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Inter } from "@next/font/google";
import { Link } from "./Link";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const Layout: React.FC<{
  children: React.ReactNode;
  meta?: { [key: string]: string };
}> = ({ children, meta }) => {
  const { data: now_playing } = useSWR<NowPlaying>("/api/now_playing", fetcher);
  const { data: weather } = useSWR<Weather>("/api/weather", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return (
    <div className={`${inter.variable} font-sans p-3 md:p-0 root`}>
      <Head>
        <title>{meta?.title || "Nathan Sorkin"}</title>
        <meta name="description" content={meta?.description || ""} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer now_playing={now_playing} weather={weather} />
      {/* <nav className="fixed left-4 bottom-4 flex gap-2 flex-col sm:flex-row">
        <Link
          className="corner-link decoration-orange-600"
          href="https://instagram.com/n8bytes"
        >
          Instagram
        </Link>
        <Link
          className="corner-link decoration-slate-500"
          href="https://github.com/natesrkn"
        >
          GitHub
        </Link>
        <Link
          className="corner-link decoration-[#0072B1]"
          href="https://www.linkedin.com/in/natesrkn/"
        >
          LinkedIn
        </Link>
        <Link
          className="corner-link decoration-green-600"
          href="mailto:hello@nathansorkin.com?subject=Let's Talk!"
        >
          Email
        </Link>
      </nav> */}
    </div>
  );
};
