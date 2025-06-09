import Home from "@/components/Home";
import { Metadata } from "next";
import { title } from "node:process";
import { site } from "@/data/default";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: site.author, url: site.baseUrl }],
  creator: site.author,
  publisher: site.author,
  keywords: [
    "Penyewaan Laptop",
    "Laptop",
    "Sewa Laptop",
    "Sewa Laptop Jakarta",
    "Sewa Laptop Bogor",
    "Sewa Laptop Depok",
    "Sewa Laptop Tangerang",
    "Sewa Laptop Bekasi",
    "Sewa Laptop Murah",
    "Sewa Laptop Harian",
    "Sewa Laptop Mingguan",
    "Sewa Laptop Bulanan",
    "Sewa Laptop Harian Jakarta",
    "Sewa Laptop Mingguan Jakarta",
    "Sewa Laptop Bulanan Jakarta",
    "Sewa Laptop Harian Bogor",
    "Sewa Laptop Mingguan Bogor",
    "Sewa Laptop Bulanan Bogor",
    "Sewa Laptop Harian Depok",
    "Sewa Laptop Mingguan Depok",
    "Sewa Laptop Bulanan Depok",
    "Sewa Laptop Harian Tangerang",
    "Sewa Laptop Mingguan Tangerang",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.baseUrl,
    siteName: site.name,
    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.image,],
  },
  robots: site.robots,
  icons: site.icons,
  manifest: site.manifest,
  alternates: {
    canonical: site.baseUrl,
  },
  other: {
    "preload": [
      '<link rel="preload" as="image" href="/images/hero/sewa-laptop.webp" type="image/webp">',
      '<link rel="preload" as="image" href="/images/hero/hero-bg.svg" type="image/svg+xml">'
    ]
  }
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
