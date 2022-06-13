import Head from "next/head";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../shared/lib";
import { NowPlaying, Weather } from "../shared/types";
import { Footer } from "./Footer";
import { Header } from "./Header";

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
    <div className="p-3 md:p-0 root">
      <Head>
        <title>{meta?.title || "Nathan Sorkin"}</title>
        <meta name="description" content={meta?.description || ""} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer now_playing={now_playing} weather={weather} />
    </div>
  );
};
