import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos – Popette, brunch local à Arcachon",
  description:
    "Découvrez l’histoire de Popette, notre philosophie maison et notre amour du brunch à Arcachon.",
  alternates: {
    canonical: "https://popette.com/a-propos",
  },
  openGraph: {
    title: "À propos – Popette",
    description:
      "Qui sommes-nous ? Une équipe passionnée de brunch et de bons produits à Arcachon.",
    url: "https://popette.com/a-propos",
    siteName: "Popette",
    images: [
      {
        url: "https://popette.com/images/og-apropos.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe Popette au brunch",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
