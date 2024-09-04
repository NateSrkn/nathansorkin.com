import "./globals.scss";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.nathansorkin.com"),
  alternates: {
    canonical: "/",
  },
  title: "Nathan Sorkin",
  description:
    "Nathan Sorkin is a Columbus based full-stack developer with a passion for building great experiences.",
  openGraph: {
    title: "Nathan Sorkin",
    description:
      "Nathan Sorkin is a Columbus based full-stack developer with a passion for building great experiences.",
    type: "website",
    locale: "en_US",
    url: "https://www.nathansorkin.com",
    images: [
      {
        url: "/api/og",
        width: 672,
        height: 444,
        alt: "Nathan Sorkin, smiling with a red hue over the photo. With a blurry image of New York city in the background",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/image/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/image/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/image/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/image/favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/image/favicon-196x196.png",
        sizes: "196x196",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/image/apple-touch-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/image/apple-touch-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/image/apple-touch-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/image/apple-touch-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/image/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/image/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/image/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/image/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-square70x70logo": "/mstile-70x70.png",
    "msapplication-square150x150logo": "/mstile-150x150.png",
    "msapplication-wide310x150logo": "/mstile-310x150.png",
    "msapplication-square310x310logo": "/mstile-310x310.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
