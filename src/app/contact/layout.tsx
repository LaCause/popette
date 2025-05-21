import type { Metadata } from "next";
import { OG_IMAGE_URL } from "../constants/seo";

export const metadata: Metadata = {
  title: "Contact – Popette, brunch maison à Arcachon",
  description:
    "Contactez Popette à Arcachon : adresse, horaires, téléphone, email et formulaire en ligne.",
  alternates: {
    canonical: "https://popette.com/contact",
  },
  openGraph: {
    title: "Contact – Popette",
    description: "Toutes les informations pour contacter Popette à Arcachon.",
    url: "https://popette.com/contact",
    siteName: "Popette",
    images: [OG_IMAGE_URL],
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
