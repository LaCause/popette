// app/menu/layout.tsx
import type { Metadata } from "next";

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
    images: [
      {
        url: "https://popette.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carte & Menu – Popette",
      },
    ],
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
