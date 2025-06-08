import { PAGE_ABOUT_US_IMAGE } from "@/app/constants/general";
import Title from "../../ui/Title/Title";
import { SectionGrid } from "../../SectionGrid/SectionGrid";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="bg-tertiary-container text-on-primary-container pt-24 px-6 sm:px-8 lg:px-16"
    >
      <SectionGrid
        title={
          <Title as="h1" size="xl" className="font-bold">
            Restaurant brunch à Arcachon – Fait maison, gourmand et sans
            réservation
          </Title>
        }
        content={
          <>
            <p className="font-body text-base leading-relaxed text-on-primary-container/90">
              En plein cœur d’Arcachon, <strong>Popette</strong> vous accueille
              tous les jours pour un brunch maison et généreux. Découvrez nos{" "}
              <Link
                href="/menu#formules"
                className="underline underline-offset-2"
              >
                formules brunch
              </Link>
              , nos{" "}
              <Link
                href="/menu#plats-sucres"
                className="underline underline-offset-2"
              >
                pâtisseries artisanales
              </Link>{" "}
              et notre{" "}
              <Link
                href="/menu#coffee"
                className="underline underline-offset-2"
              >
                coffee shop
              </Link>
              . Service en continu, options <strong>végétariennes</strong>,{" "}
              <strong>vegan</strong> et <strong>sans gluten</strong>{" "}
              disponibles.
            </p>
            <p className="text-base leading-relaxed font-body">
              Que vous soyez du matin ou du midi, nos{" "}
              <Link href="/menu" className="underline underline-offset-2">
                formules brunch
              </Link>{" "}
              sont pensées pour toutes les faims. La{" "}
              <strong>formule gourmande</strong> comprend un plat salé, un plat
              sucré, une boisson fraîche et un café ou un thé. Pour les plus
              jeunes, la <strong>formule enfant</strong> est parfaitement
              adaptée. Toutes nos options sont disponibles à emporter.
            </p>
            <p className="font-body text-base leading-relaxed text-on-primary-container/80">
              De notre pain brioché maison à nos jus pressés à la minute, tout
              est pensé pour vous offrir une expérience simple, généreuse et
              délicieuse.
            </p>

            <p className="text-sm text-muted">
              10 Rue du Maréchal de Lattre de Tassigny – 33120 Arcachon • Sur
              place ou à emporter
            </p>
          </>
        }
        image={{
          src: PAGE_ABOUT_US_IMAGE,
          alt: "Équipe Popette en cuisine",
          className:
            "w-full h-full object-cover hover:scale-105 transition duration-300",
        }}
        align="center"
      />
    </section>
  );
}
