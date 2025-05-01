export default async function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 py-16 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)]">
        {/* Image de fond */}
        <div
          className="absolute inset-0 z-0 bg-[url('/images/hero-brunch.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--color-primary-container)]/60 backdrop-blur-sm z-10"></div>

        {/* Contenu */}
        <div className="relative z-20 max-w-3xl space-y-6">
          <h1 className="font-logo text-4xl sm:text-5xl md:text-6xl tracking-wide">
            Popette Brunch
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-[var(--color-on-primary-container)]/90">
            Une parenthèse gourmande en plein cœur d’Arcachon. Produits frais,
            ambiance chaleureuse, et recettes maison pour tous les appétits.
          </p>
          <div>
            <a
              href="#menu"
              className="inline-block rounded-full px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold text-sm uppercase shadow hover:scale-105 transition"
            >
              Voir le menu
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="a-propos"
        className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] py-16 px-6 sm:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-title font-semibold">
              Notre histoire
            </h2>
            <p className="font-body text-base leading-relaxed text-[var(--color-on-primary-container)]/90">
              Chez <strong>Popette Brunch</strong>, nous croyons que le brunch
              est un moment à part. Né de l’envie de réunir les gourmands autour
              de produits frais, locaux et faits maison, notre restaurant est un
              lieu convivial, lumineux, et ouvert à tous.
            </p>
            <p className="font-body text-base leading-relaxed text-[var(--color-on-primary-container)]/80">
              De notre pain brioché maison à nos jus pressés à la minute, tout
              est pensé pour vous offrir une expérience simple, généreuse et
              délicieuse.
            </p>
          </div>

          {/* Image ambiance ou équipe */}
          <div className="overflow-hidden">
            <img
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
                  <img
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
                  <img
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
                  <img
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

      {/* /* SECTION GALERIE */}
      <section
        id="galerie"
        className="bg-[var(--color-background)] text-[var(--color-on-background)]"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-title font-semibold">
            Un brunch en images
          </h2>
          <p className="mt-2 text-sm md:text-base font-body text-[var(--color-on-background)]/80">
            Plats maison, sourires et ambiance chaleureuse à découvrir en salle.
          </p>
        </div>

        {/* Patchwork sans espacement */}
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[8rem] sm:auto-rows-[10rem]">
            <div className="col-span-2 row-span-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1613145998071-b005a99b78e5?auto=format&fit=crop&w=800&q=80"
                alt="Table de brunch"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
                alt="Pancakes"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="row-span-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8cdd?auto=format&fit=crop&w=400&q=80"
                alt="Avocado toast"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80"
                alt="Smoothie bowl"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="col-span-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588066019840-9e04f70b7ba5?auto=format&fit=crop&w=800&q=80"
                alt="Café brunch"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="avis"
        className="bg-[var(--color-surface)] py-16 px-6 sm:px-8 lg:px-16 text-[var(--color-on-surface)]"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-title font-semibold">
              Ce que nos clients disent
            </h2>
            <p className="text-[var(--color-on-surface)]/80 font-body text-sm md:text-base">
              Une sélection d’avis authentiques partagés par nos visiteurs.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Avis 1 */}
            <article className="border border-[var(--color-outline)] bg-[var(--color-background)] p-6 flex flex-col gap-4">
              <p className="text-sm font-body text-[var(--color-on-background)]/90 italic">
                “Un brunch exceptionnel, des produits frais et une ambiance
                cosy. Mention spéciale pour les Popette Rolls !”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Avis client"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold font-body">Sophie M.</p>
                  <p className="text-xs text-[var(--color-on-background)]/60">
                    Local Guide
                  </p>
                </div>
              </div>
            </article>

            {/* Avis 2 */}
            <article className="border border-[var(--color-outline)] bg-[var(--color-background)] p-6 flex flex-col gap-4">
              <p className="text-sm font-body text-[var(--color-on-background)]/90 italic">
                “Meilleur brunch d’Arcachon, tout simplement. Service au top,
                déco canon, et café délicieux.”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avis client"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold font-body">Julien R.</p>
                  <p className="text-xs text-[var(--color-on-background)]/60">
                    Client régulier
                  </p>
                </div>
              </div>
            </article>

            {/* Avis 3 */}
            <article className="border border-[var(--color-outline)] bg-[var(--color-background)] p-6 flex flex-col gap-4">
              <p className="text-sm font-body text-[var(--color-on-background)]/90 italic">
                “Super adresse ! Les options végétariennes sont savoureuses et
                originales. J’y reviens chaque week-end.”
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/55.jpg"
                  alt="Avis client"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold font-body">Emma D.</p>
                  <p className="text-xs text-[var(--color-on-background)]/60">
                    Touriste gourmande
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reservation"
        className="bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary-container)] py-16 px-6 sm:px-8 lg:px-16 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-title font-semibold">
            Réserver une table
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--color-on-tertiary-container)]/80">
            Vous souhaitez venir bruncher ce week-end ? Pensez à réserver pour
            garantir votre table.
          </p>
          <a
            href="https://www.thefork.fr/restaurant/nom-de-ton-etablissement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold rounded-full shadow hover:scale-105 transition"
          >
            Réserver en ligne
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        id="newsletter"
        className="bg-[var(--color-surface)] text-[var(--color-on-surface)] py-16 px-6 sm:px-8 lg:px-16"
      >
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-title font-semibold">
            Restez dans la boucle
          </h2>
          <p className="font-body text-base text-[var(--color-on-surface)]/80">
            Recevez nos menus du week-end, les nouveautés de saison et nos
            événements directement dans votre boîte mail.
          </p>

          {/* Formulaire */}
          <form className="mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              className="w-full sm:w-auto px-4 py-3 border border-[var(--color-outline)] bg-[var(--color-background)] text-[var(--color-on-background)] font-body rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-body font-semibold rounded-full shadow hover:scale-105 transition"
            >
              S’abonner
            </button>
          </form>

          <p className="text-xs font-body text-[var(--color-on-surface)]/60 mt-2">
            Pas de spam, promis. Vous pouvez vous désabonner à tout moment.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-[var(--color-on-background)] bg-[var(--color-background)]">
        © {new Date().getFullYear()} Popette Brunch · Arcachon
      </footer>
    </main>
    // <div className="text-center">
    //   <h1 className="typography-primary-l-l">Chez Popette</h1>
    //   <h2 className="typography-secondary-l">Chez Popette</h2>
    //   <h3 className="typography-tertiary-l">Chez Popette</h3>
    //   <h4 className="typography-alt-l">Chez Popette</h4>

    //   <br />
    //   <button className="bg-primary text-on-primary px-6 py-4 hover:bg-on-primary hover:text-primary hover:border-2 transition-all cursor-pointer active:scale-95">
    //     Popette Primary
    //   </button>
    //   <br />
    //   <button className="bg-secondary-container text-on-secondary-container px-6 py-4 hover:bg-on-secondary-container hover:text-secondary-container transition-all cursor-pointer active:scale-95">
    //     Popette Secondary
    //   </button>
    //   <br />
    //   <button className="border-2 border-solid border-primary text-primary px-6 py-4 cursor-pointer">
    //     Popette Secondary
    //   </button>
    //   <br />
    //   <br />
    //   <article className="bg-primary-container">
    //     <h1 className="typography-secondary-l-bold">Boeuf Wagyu</h1>
    //     <p className="typography-primary-s text-on-primary-container">
    //       Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
    //       dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
    //     </p>
    //   </article>
    //   <article className="bg-secondary-container">
    //     <h1 className="typography-secondary-l-bold">Boeuf Wagyu</h1>
    //     <p className="typography-primary-s text-on-primary-container">
    //       Lorem ipsum dolor sit amet
    //     </p>
    //   </article>
    //   <Header />
    //   <Navigation />
    //   <main className=""></main>
    //   <Footer />
    // </div>
  );
}
