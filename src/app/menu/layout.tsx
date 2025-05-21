// app/menu/layout.tsx
import type { Metadata } from "next";
import { OG_IMAGE_URL } from "../constants/seo";

export const metadata: Metadata = {
  title: "Carte & Menu – Popette",
  description:
    "Notre menu brunch maison à Arcachon : options salées, sucrées et végétariennes.",
  alternates: {
    canonical: "https://popette.com/menu",
  },
  openGraph: {
    title: "Carte & Menu – Popette",
    description:
      "Notre menu brunch maison à Arcachon : options salées, sucrées et végétariennes.",
    url: "https://popette.com/menu",
    siteName: "Popette",
    images: [OG_IMAGE_URL],
    locale: "fr_FR",
    type: "website",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
