import { Metadata } from "next";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { ToastProvider } from "./components/ui/ToastContainer/ToastContainer";
import "./globals.css";
import { SessionProviderWrapper } from "./providers/sessionProvider";
import { Analytics } from "@vercel/analytics/next";
import { POPETTE_DOMAIN } from "./constants/general";
import { LightboxProvider } from "./components/Gallery/LightboxProvider/LightboxProvider";

export const metadata: Metadata = {
  title: {
    default: "Popette - Brunch maison à Arcachon",
    template: "%s | Popette",
  },
  description:
    "Popette est un restaurant brunch en plein cœur d’Arcachon. Fait maison, coffee shop, pâtisseries artisanales et service en continu.",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    siteName: "Popette",
    type: "website",
    locale: "fr_FR",
    url: POPETTE_DOMAIN,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@popettebrunch",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "favicon.ico",
  },
  metadataBase: new URL("https://popette-brunch.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <Analytics />
        <SessionProviderWrapper>
          <LightboxProvider>
            <Navigation />
            <ToastProvider>{children}</ToastProvider>
          </LightboxProvider>
        </SessionProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
