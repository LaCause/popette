import Navigation from "./components/Navigation/Navigation";
import "./globals.css";

export const metadata = {
  title: "Brunch pas cher à Arcachon – Popette Brunch",
  description:
    "Profitez du meilleur brunch pas cher à Arcachon chez Popette Brunch ! Plats gourmands, produits frais, ambiance conviviale au cœur du bassin. Réservez votre brunch à petit prix dès maintenant.",
  keywords: [
    "brunch Arcachon",
    "brunch pas cher Arcachon",
    "meilleur brunch Arcachon",
    "petit déjeuner Arcachon",
    "Popette Brunch",
    "restaurant brunch Arcachon",
    "où bruncher Arcachon",
    "bon plan brunch Arcachon",
    "brunch gourmand Arcachon",
    "brunch familial Arcachon",
  ],
  openGraph: {
    title: "Popette Brunch – Brunch pas cher et gourmand à Arcachon",
    description:
      "Popette Brunch vous propose un brunch copieux, pas cher et convivial à Arcachon. Produits locaux, formules adaptées à tous les budgets, terrasse ensoleillée et ambiance chaleureuse.",
    url: "https://popette-brunch.fr", // Remplace par ton vrai domaine
    siteName: "Popette Brunch",
    images: [
      {
        url: "https://popette-brunch.fr/og-image.jpg", // image de couverture optimisée
        width: 1200,
        height: 630,
        alt: "Brunch pas cher à Arcachon – Popette Brunch",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunch pas cher à Arcachon – Popette Brunch",
    description:
      "Popette Brunch à Arcachon : le brunch convivial, gourmand et abordable pour tous !",
    images: ["https://popette-brunch.fr/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
