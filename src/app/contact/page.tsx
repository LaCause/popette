import { Metadata } from "next";
import { OG_IMAGE_URL, SEO_CONTACT } from "../constants/seo";
import ContactBrowser from "../components/Contact/ContactBrowser/ContactBrowser";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import Title from "../components/ui/Title/Title";
import {
  POPETTE_ADDRESS,
  POPETTE_DOMAIN,
  POPETTE_EMAIL,
  POPETTE_HOURS,
  POPETTE_OPENED,
  POPETTE_PHONE,
  POPETTE_PHONE_LINK,
  POPETTE_POSTAL_CODE,
} from "../constants/general";
import FaqSection from "../components/Faq/FaqSection/FaqSection";
import ItineraryLinks from "../components/ui/ItineraryLinks/ItineraryLinks";

export const metadata: Metadata = {
  title: SEO_CONTACT.title,
  description: SEO_CONTACT.description,
  openGraph: {
    title: SEO_CONTACT.title,
    description: SEO_CONTACT.description,
    url: POPETTE_DOMAIN,
    images: [OG_IMAGE_URL],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONTACT.title,
    description: SEO_CONTACT.description,
    images: [OG_IMAGE_URL],
  },
};

declare global {
  interface Window {
    grecaptcha: ReCaptchaV3;
  }
}

interface ReCaptchaV3 {
  ready(cb: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_CONTACT.jsonLd }}
      />
      <main className="bg-background text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16 space-y-16">
        <SectionHeader
          as="h1"
          title="Contactez-nous"
          description="Une question sur notre menu, une demande spéciale, ou juste un petit mot doux ? Notre équipe vous répondra avec plaisir."
          className="mb-3"
        />
        <section className="space-y-6 bg-surface border border-outline rounded-xl p-6 sm:hidden">
          <Title
            as="h2"
            size="md"
            variant="primary"
            className="font-bold inline-flex items-center gap-2 text-secondary"
          >
            <span className="text-2xl">🚗</span>
            Itinéraire depuis votre téléphone
          </Title>
          <p className="text-on-surface/80">
            Retrouvez-nous en un clic à Arcachon :
            <br />
            <strong>{POPETTE_ADDRESS}</strong>
          </p>
          <ItineraryLinks />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire à gauche */}
          <div className="space-y-6">
            <Title as="h2" size="md">
              Écrivez-nous
            </Title>
            <ContactBrowser />
          </div>

          {/* Infos pratiques à droite */}
          <div className="space-y-6 font-body text-sm">
            <div>
              <Title as="h3" size="sm" className="mb-2">
                📍 Adresse
              </Title>
              <p>
                {POPETTE_ADDRESS}, {POPETTE_POSTAL_CODE}
              </p>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                ⏰ Horaires
              </Title>
              <ul className="space-y-1">
                <li>
                  {POPETTE_OPENED} : {POPETTE_HOURS}
                </li>
              </ul>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                📞 Téléphone
              </Title>
              <a href={`tel:${POPETTE_PHONE_LINK}`}>{POPETTE_PHONE}</a>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                ✉️ Email
              </Title>
              <p>{POPETTE_EMAIL}</p>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                📌 Nous trouver
              </Title>
              <iframe
                className="w-full h-64 rounded-xl border border-outline"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.089716893106!2d-1.163644284563808!3d44.654660779099265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54c7c65b167c3d%3A0x258ac017e64c4d9d!2s10%20Rue%20du%20Mar%C3%A9chal%20de%20Lattre%20de%20Tassigny%2C%2033120%20Arcachon!5e0!3m2!1sfr!2sfr!4v1715618169155!5m2!1sfr!2sfr" // ton lien
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <FaqSection />
      </main>
    </>
  );
}
