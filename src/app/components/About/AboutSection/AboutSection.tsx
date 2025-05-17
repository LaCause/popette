import { ResolvedImage } from "../../ui/ResolvedImage/ResolvedImage";
import Title from "../../ui/Title/Title";

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="bg-tertiary-container text-on-primary-container pt-24 px-6 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className="space-y-6">
          <Title as="h2" size="xl">
            Notre histoire
          </Title>
          <p className="font-body text-base leading-relaxed text-on-primary-container/90">
            Chez <strong>Popette Brunch</strong>, nous croyons que le brunch est
            un moment à part. Né de l’envie de réunir les gourmands autour de
            produits frais, locaux et faits maison, notre restaurant est un lieu
            convivial, lumineux, et ouvert à tous.
          </p>
          <p className="font-body text-base leading-relaxed text-on-primary-container/80">
            De notre pain brioché maison à nos jus pressés à la minute, tout est
            pensé pour vous offrir une expérience simple, généreuse et
            délicieuse.
          </p>
        </div>

        {/* Image ambiance ou équipe */}
        <div className="overflow-hidden">
          <ResolvedImage
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1000&q=80"
            alt="Équipe Popette en cuisine"
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
