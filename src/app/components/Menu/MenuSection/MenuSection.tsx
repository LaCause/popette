import { ResolvedImage } from "../../ResolvedImage/ResolvedImage";
import Title from "../../Title/Title";

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-tertiary-container py-24 px-6 sm:px-8 lg:px-16 text-on-tertiary-container"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center max-w-2xl mx-auto space-y-3">
          <Title as="h2" size="lg">
            Notre menu
          </Title>
          <p className="text-on-tertiary-container/80 font-body text-base">
            Une sélection gourmande parmi nos plats faits maison, servis avec
            amour toute la journée.
          </p>
        </header>

        {/* Liste des plats */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(3)].map((_, i) => (
            <li key={i}>
              <article
                itemScope
                itemType="https://schema.org/MenuItem"
                className="flex overflow-hidden border rounded-2xl transition hover:shadow-lg hover:scale-[1.01] duration-200 bg-[var(--color-background)] border-outline"
              >
                <div className="w-36 md:w-48 flex-shrink-0 h-auto aspect-[3/4] overflow-hidden">
                  <ResolvedImage
                    itemProp="image"
                    src="https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=800&auto=format&fit=crop&q=60"
                    alt="Toast Avocat"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-between p-5 gap-4 flex-1">
                  <div className="space-y-1">
                    <h3
                      itemProp="name"
                      className="font-title text-xl font-semibold"
                    >
                      Toast Avocat 🥑
                    </h3>
                    <p
                      itemProp="description"
                      className="font-body text-sm sm:text-base text-on-tertiary-container/80 leading-relaxed"
                    >
                      Pain de campagne, écrasé d’avocat, œuf poché, graines de
                      courge, citron vert
                    </p>
                  </div>
                  <div
                    itemScope
                    itemType="https://schema.org/Offer"
                    className="font-body font-semibold text-base"
                  >
                    <span itemProp="price" content="8.50">
                      8,50 €
                    </span>
                    <meta itemProp="priceCurrency" content="EUR" />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/menu"
            className="inline-block rounded-full px-8 py-3 bg-primary text-on-primary font-body font-semibold text-sm uppercase shadow hover:scale-105 transition"
          >
            Voir le menu complet
          </a>
        </div>
      </div>
    </section>
  );
}
