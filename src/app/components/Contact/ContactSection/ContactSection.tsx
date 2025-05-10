import Title from "../../Title/Title";

export default function ContactSection() {
  return (
    <section
      id="infos"
      className="bg-tertiary-container py-16 px-6 sm:px-8 lg:px-16 text-on-primary-container"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Colonne infos */}
        <div className="space-y-5">
          <Title as="h4" size="lg">
            Informations pratiques
          </Title>
          <p className="font-body text-on-primary-container/80">
            Venez profiter d’un brunch maison à Arcachon. Nous sommes ouverts
            toute la semaine sauf lundi et mardi.
          </p>
          <div className="font-body text-sm sm:text-base space-y-1">
            <p>
              <strong>Adresse :</strong> 12 rue du Brunch, 33120 Arcachon
            </p>
            <p>
              <strong>Ouverture :</strong> Mercredi au Dimanche
            </p>
            <p>
              <strong>Horaires :</strong> 10h – 15h30
            </p>
            <p>
              <strong>Téléphone :</strong> 05 56 00 00 00
            </p>
          </div>
        </div>

        {/* Carte sans arrondi */}
        <div className="relative w-full aspect-[4/3] border border-outline shadow bg-tertiary-container">
          <iframe
            title="Carte Popette Brunch"
            className="w-full h-full grayscale contrast-[1.1] brightness-95"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=..." // ton lien
          ></iframe>
          {/* Overlay graphique facultatif */}
          <div className="absolute inset-0 pointer-events-none ring-2 ring-[var(--color-primary)] mix-blend-multiply opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
