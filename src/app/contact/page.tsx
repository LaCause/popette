import { Metadata } from "next";
import { SEO_CONTACT } from "../constants/seo";
import ContactBrowser from "../components/Contact/ContactBrowser/ContactBrowser";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import Title from "../components/Title/Title";

export const metadata: Metadata = {
  title: SEO_CONTACT.title,
  description: SEO_CONTACT.description,
  openGraph: {
    title: SEO_CONTACT.title,
    description: SEO_CONTACT.description,
    url: "https://popette-brunch.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONTACT.title,
    description: SEO_CONTACT.description,
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
      <main className="bg-[var(--color-background)] text-on-tertiary-container py-16 px-6 sm:px-8 lg:px-16 space-y-16">
        <SectionHeader
          as="h1"
          title="Contactez-nous"
          description="Une question sur notre menu, une demande spéciale, ou juste un petit mot doux ? Notre équipe vous répondra avec plaisir."
        />

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
              <p>12 rue du Brunch, 33120 Arcachon</p>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                ⏰ Horaires
              </Title>
              <ul className="space-y-1">
                <li>Mercredi à dimanche : 10h – 15h30</li>
                <li>Fermé lundi et mardi</li>
              </ul>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                📞 Téléphone
              </Title>
              <p>05 56 00 00 00</p>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                ✉️ Email
              </Title>
              <p>contact@popette.com</p>
            </div>

            <div>
              <Title as="h3" size="sm" className="mb-2">
                📌 Nous trouver
              </Title>
              <iframe
                className="w-full h-64 rounded-xl border border-outline"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.5120791047064!2d-1.166060984538651!3d44.65600499621751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDM5JzIxLjYiTiAxwrAxMCcwOC4zIlc!5e0!3m2!1sfr!2sfr!4v1622475294207!5m2!1sfr!2sfr"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-outline">
          <Title as="h2" size="md" className="text-center">
            Questions fréquentes
          </Title>
          <div className="space-y-4 font-body text-sm">
            <details className="border border-outline rounded-xl p-4">
              <summary className="cursor-pointer font-semibold">
                🕒 Quels sont vos horaires ?
              </summary>
              <p className="mt-2">
                Nous sommes ouverts du mercredi au dimanche, de 10h à 15h30.
                Fermé lundi et mardi.
              </p>
            </details>

            <details className="border border-outline rounded-xl p-4">
              <summary className="cursor-pointer font-semibold">
                🥞 Faut-il réserver pour bruncher chez vous ?
              </summary>
              <p className="mt-2">
                La réservation est fortement conseillée le week-end. Vous pouvez
                réserver via notre page de réservation ou par téléphone.
              </p>
            </details>

            <details className="border border-outline rounded-xl p-4">
              <summary className="cursor-pointer font-semibold">
                🌱 Proposez-vous des plats végétariens / sans gluten ?
              </summary>
              <p className="mt-2">
                Oui, plusieurs options sont disponibles. N’hésitez pas à
                demander à notre équipe sur place.
              </p>
            </details>

            <details className="border border-outline rounded-xl p-4">
              <summary className="cursor-pointer font-semibold">
                🐶 Les chiens sont-ils acceptés ?
              </summary>
              <p className="mt-2">
                Oui, en terrasse uniquement. Merci de garder votre compagnon
                attaché.
              </p>
            </details>

            <details className="border border-outline rounded-xl p-4">
              <summary className="cursor-pointer font-semibold">
                💳 Quels moyens de paiement acceptez-vous ?
              </summary>
              <p className="mt-2">
                Carte bancaire, espèces, et titres-restaurant (carte ou papier).
              </p>
            </details>
          </div>
        </section>
      </main>
    </>
  );
}
