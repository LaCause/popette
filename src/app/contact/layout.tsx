import type { Metadata } from "next";

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
    images: [
      {
        url: "https://popette.com/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Entrée du restaurant Popette",
      },
    ],
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
