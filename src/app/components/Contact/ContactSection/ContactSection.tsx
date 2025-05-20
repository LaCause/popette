import {
  POPETTE_ADDRESS,
  POPETTE_HOURS,
  POPETTE_OPENED,
  POPETTE_PHONE,
  POPETTE_POSTAL_CODE,
} from "@/app/constants/general";
import Title from "../../ui/Title/Title";

export default function ContactSection() {
  return (
    <section
      id="infos"
      className="bg-tertiary-container py-24 px-6 sm:px-8 lg:px-16 text-on-primary-container"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Colonne infos */}
        <div className="space-y-5">
          <Title as="h4" size="xl">
            Informations pratiques
          </Title>
          <p className="font-body text-on-primary-container/80">
            Venez profiter d’un brunch maison à Arcachon. Nous sommes ouverts
            toute la semaine sauf lundi et mardi.
          </p>
          <div className="font-body text-sm sm:text-base space-y-1">
            <p>
              <strong>Adresse :</strong> {POPETTE_ADDRESS}
              <br />
              {POPETTE_POSTAL_CODE}
            </p>
            <p>
              <strong>Ouverture :</strong> <b>{POPETTE_OPENED}</b>
            </p>
            <p>
              <strong>Horaires :</strong> {POPETTE_HOURS}
            </p>
            <p>
              <strong>Téléphone :</strong> {POPETTE_PHONE}
            </p>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] border border-outline shadow bg-tertiary-container">
          <iframe
            title="Carte Popette Brunch"
            className="w-full h-full contrast-[1.1] brightness-95"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.089716893106!2d-1.163644284563808!3d44.654660779099265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54c7c65b167c3d%3A0x258ac017e64c4d9d!2s10%20Rue%20du%20Mar%C3%A9chal%20de%20Lattre%20de%20Tassigny%2C%2033120%20Arcachon!5e0!3m2!1sfr!2sfr!4v1715618169155!5m2!1sfr!2sfr" // ton lien
          ></iframe>
          {/* Overlay graphique facultatif */}
          <div className="absolute inset-0 pointer-events-none ring-2 ring-[var(--color-primary)] mix-blend-multiply opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
