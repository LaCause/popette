import { Metadata } from "next";
import { ResolvedImage } from "./components/ResolvedImage/ResolvedImage";
import { SEO_HOME } from "./constants/seo";
import HeroSection from "./components/Hero/HeroSection/HeroSection";

export const metadata: Metadata = {
  title: SEO_HOME.title,
  description: SEO_HOME.description,
  openGraph: {
    title: SEO_HOME.title,
    description: SEO_HOME.description,
    url: "https://popette-brunch.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_HOME.title,
    description: SEO_HOME.description,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: SEO_HOME.jsonLd }}
      />
      <main className="min-h-screen bg-[var(--color-background)]">
        {/* <HeroIllustration /> */}
        <HeroSection />

        {/* ABOUT US */}
        <section
          id="a-propos"
          className="bg-tertiary-container text-on-primary-container py-16 px-6 sm:px-8 lg:px-16"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="space-y-6">
              <h2 className="typography-tertiary-xl-bold tracking-widest text-primary">
                Notre histoire
              </h2>
              <p className="font-body text-base leading-relaxed text-[var(--color-on-primary-container)]/90">
                Chez <strong>Popette Brunch</strong>, nous croyons que le brunch
                est un moment à part. Né de l’envie de réunir les gourmands
                autour de produits frais, locaux et faits maison, notre
                restaurant est un lieu convivial, lumineux, et ouvert à tous.
              </p>
              <p className="font-body text-base leading-relaxed text-[var(--color-on-primary-container)]/80">
                De notre pain brioché maison à nos jus pressés à la minute, tout
                est pensé pour vous offrir une expérience simple, généreuse et
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

        {/* SECTION MENU */}
        <section
          id="menu"
          className="bg-[var(--color-surface)] py-16 px-6 sm:px-8 lg:px-16 text-[var(--color-on-surface)]"
        >
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-title font-semibold">
                À découvrir ce week-end
              </h2>
              <p className="text-[var(--color-on-surface)]/80 font-body text-sm md:text-base">
                Une sélection gourmande parmi nos plats faits maison.
              </p>
            </header>
            <ul>
              <li className="my-2">
                <article
                  itemScope
                  itemType="https://schema.org/MenuItem"
                  className="flex flex-col sm:flex-row overflow-hidden border rounded-xl transition hover:shadow-md hover:scale-[1.01] duration-200
             bg-[var(--color-background)] text-[var(--color-on-background)] border-[var(--color-outline)]"
                >
                  <div className="sm:w-40 md:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                    <ResolvedImage
                      itemProp="image"
                      src="https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 100w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 200w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 300w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 400w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 500w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 600w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 700w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 800w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 900w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1000w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1200w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1400w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1600w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1800w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 2000w"
                      alt="Toast Avocat"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4 flex-1">
                    <div className="flex flex-col gap-1">
                      <h3
                        itemProp="name"
                        className="font-title text-base sm:text-lg md:text-xl font-semibold"
                      >
                        Toast Avocat 🥑
                      </h3>

                      <p
                        itemProp="description"
                        className="font-body text-sm sm:text-base text-[color:var(--color-on-background)]/80 leading-relaxed sm:leading-normal"
                      >
                        Pain de campagne, écrasé d’avocat, œuf poché, graines de
                        courge, citron vert
                      </p>
                    </div>

                    <div
                      itemScope
                      itemType="https://schema.org/Offer"
                      className="font-body font-semibold text-sm sm:text-base text-[var(--color-on-background)]"
                    >
                      <span itemProp="price" content="8.50">
                        8,50 €
                      </span>
                      <meta itemProp="priceCurrency" content="EUR" />
                    </div>
                  </div>
                </article>
              </li>
              <li className="my-2">
                <article
                  itemScope
                  itemType="https://schema.org/MenuItem"
                  className="flex flex-col sm:flex-row overflow-hidden border rounded-xl transition hover:shadow-md hover:scale-[1.01] duration-200
             bg-[var(--color-background)] text-[var(--color-on-background)] border-[var(--color-outline)]"
                >
                  <div className="sm:w-40 md:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                    <ResolvedImage
                      itemProp="image"
                      src="https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 100w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 200w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 300w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 400w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 500w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 600w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 700w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 800w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 900w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1000w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1200w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1400w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1600w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1800w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 2000w"
                      alt="Toast Avocat"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4 flex-1">
                    <div className="flex flex-col gap-1">
                      <h3
                        itemProp="name"
                        className="font-title text-base sm:text-lg md:text-xl font-semibold"
                      >
                        Toast Avocat 🥑
                      </h3>

                      <p
                        itemProp="description"
                        className="font-body text-sm sm:text-base text-[color:var(--color-on-background)]/80 leading-relaxed sm:leading-normal"
                      >
                        Pain de campagne, écrasé d’avocat, œuf poché, graines de
                        courge, citron vert
                      </p>
                    </div>

                    <div
                      itemScope
                      itemType="https://schema.org/Offer"
                      className="font-body font-semibold text-sm sm:text-base text-[var(--color-on-background)]"
                    >
                      <span itemProp="price" content="8.50">
                        8,50 €
                      </span>
                      <meta itemProp="priceCurrency" content="EUR" />
                    </div>
                  </div>
                </article>
              </li>
              <li className="my-2">
                <article
                  itemScope
                  itemType="https://schema.org/MenuItem"
                  className="flex flex-col sm:flex-row overflow-hidden border rounded-xl transition hover:shadow-md hover:scale-[1.01] duration-200
             bg-[var(--color-background)] text-[var(--color-on-background)] border-[var(--color-outline)]"
                >
                  <div className="sm:w-40 md:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                    <ResolvedImage
                      itemProp="image"
                      src="https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 100w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 200w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 300w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 400w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 500w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 600w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 700w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 800w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 900w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1000w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1200w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1400w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1600w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 1800w, https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8 2000w"
                      alt="Toast Avocat"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-3 px-4 py-4 sm:px-5 sm:py-4 flex-1">
                    <div className="flex flex-col gap-1">
                      <h3
                        itemProp="name"
                        className="font-title text-base sm:text-lg md:text-xl font-semibold"
                      >
                        Toast Avocat 🥑
                      </h3>

                      <p
                        itemProp="description"
                        className="font-body text-sm sm:text-base text-[color:var(--color-on-background)]/80 leading-relaxed sm:leading-normal"
                      >
                        Pain de campagne, écrasé d’avocat, œuf poché, graines de
                        courge, citron vert
                      </p>
                    </div>

                    <div
                      itemScope
                      itemType="https://schema.org/Offer"
                      className="font-body font-semibold text-sm sm:text-base text-[var(--color-on-background)]"
                    >
                      <span itemProp="price" content="8.50">
                        8,50 €
                      </span>
                      <meta itemProp="priceCurrency" content="EUR" />
                    </div>
                  </div>
                </article>
              </li>
            </ul>
            <div className="mt-12 text-center">
              <a
                href="/menu"
                className="inline-block rounded-full px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold text-sm uppercase shadow hover:scale-105 transition"
              >
                Voir le menu complet
              </a>
            </div>
          </div>
        </section>

        {/* SECTION INFOS */}
        <section
          id="infos"
          className="bg-[var(--color-primary-container)] py-16 px-6 sm:px-8 lg:px-16 text-[var(--color-on-primary-container)]"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Colonne infos */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-title font-semibold uppercase tracking-wide">
                Informations pratiques
              </h2>
              <p className="font-body text-[var(--color-on-primary-container)]/80">
                Venez profiter d’un brunch maison à Arcachon. Nous sommes
                ouverts toute la semaine sauf lundi et mardi.
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
            <div className="relative w-full aspect-[4/3] border border-[var(--color-outline)] shadow bg-[var(--color-surface)]">
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
      </main>
    </>
  );
}
