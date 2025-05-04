export const DEFAULT_ALT_IMAGE =
  "Popette brunch - Brunch pas cher et gourmand à Arcachon - Photo";

const JSON_LD_HOME = `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Popette",
  "description": "Restaurant brunch à Arcachon. Fait maison, produits frais, pâtisseries, coffee shop, sans réservation. Service continu. À emporter ou sur place.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 Rue du Maréchal de Lattre de Tassigny",
    "addressLocality": "Arcachon",
    "postalCode": "33120",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday"],
      "opens": "11:00",
      "closes": "17:00",
      "validFrom": "2024-10-01",
      "validThrough": "2025-04-30"
    }
  ],
  "servesCuisine": ["Brunch", "Café", "Pâtisseries"],
  "url": "https://popette-brunch.com"
}`;

const JSON_LD_CONTACT = `{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Popette",
    "description": "Page de contact du restaurant Popette à Arcachon. Retrouvez nos horaires, notre adresse et toutes les infos utiles.",
    "url": "https://popette-brunch.com/contact",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Popette",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Rue du Maréchal de Lattre de Tassigny",
        "addressLocality": "Arcachon",
        "postalCode": "33120",
        "addressCountry": "FR"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday"],
          "opens": "11:00",
          "closes": "17:00",
          "validFrom": "2024-10-01",
          "validThrough": "2025-04-30"
        }
      ],
      "telephone": "+33 X XX XX XX XX",
      "url": "https://popette-brunch.com",
      "acceptsReservations": "False"
    }
}`;

const JSON_LD_BLOG = `{
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Popette",
    "url": "https://popette-brunch.com/blog",
    "description": "Le blog de Popette : recettes brunch maison, coffee shop, fournisseurs locaux, produits frais à Arcachon."
  }`;

const JSON_LD_GALLERY = `{
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Galerie - Popette",
    "image": [
      "https://popette-brunch.com/images/brunch1.jpg",
      "https://popette-brunch.com/images/brunch2.jpg"
    ]
  }`;

const JSON_LD_MENU = `{
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Menu Popette",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Formules brunch",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Formule gourmande",
            "description": "1 plat salé + 1 plat sucré + 1 boisson fraîche + un café ou thé"
          },
          {
            "@type": "MenuItem",
            "name": "Formule enfant",
            "description": "Formule adaptée aux enfants jusqu’à 12 ans"
          }
        ]
      }
    ]
  }`;

const JSON_LD_ABOUT = `{
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de Popette",
    "description": "Découvrez l'histoire de Popette, restaurant brunch en plein cœur d'Arcachon. Fait maison, produits frais, service en continu et ambiance conviviale.",
    "url": "https://popette-brunch.com/a-propos",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Popette",
      "description": "Popette est un restaurant brunch situé à Arcachon, proposant une cuisine faite maison à base de produits frais. Ambiance chaleureuse, service en continu, coffee shop et pâtisseries artisanales.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 Rue du Maréchal de Lattre de Tassigny",
        "addressLocality": "Arcachon",
        "postalCode": "33120",
        "addressCountry": "FR"
      },
      "servesCuisine": ["Brunch", "Café", "Pâtisseries"],
      "url": "https://popette-brunch.com"
    }
  }`;

export const SEO_HOME = {
  title:
    "Popette - Restaurant brunch à Arcachon | Fait maison, coffee shop & pâtisseries",
  description:
    "En plein cœur d’Arcachon, Popette est un restaurant chaleureux où le brunch est roi. Fait maison, produits frais, service continu, coffee shop et pâtisseries artisanales.",
  jsonLd: JSON_LD_HOME,
};

export const SEO_CONTACT = {
  title: "Contact Popette - Brunch maison à Arcachon",
  description:
    "Besoin d’infos ? Contactez Popette à Arcachon pour en savoir plus sur nos brunchs maison, plats à emporter et horaires.",
  jsonLd: JSON_LD_CONTACT,
};

export const SEO_BLOG = {
  title:
    "Le blog de Popette - Recettes brunch, astuces & actualités gourmandes",
  description:
    "Le blog de Popette à Arcachon : recettes de brunch maison, actus coffee shop, infos sur nos fournisseurs locaux et inspirations gourmandes.",
  jsonLd: JSON_LD_BLOG,
};

export const SEO_GALLERY = {
  title: "Galerie Popette - Découvrez nos brunchs en images",
  description:
    "Photos de nos plats, boissons, pâtisseries maison et ambiance coffee shop dans notre restaurant à Arcachon.",
  jsonLd: JSON_LD_GALLERY,
};

export const SEO_MENU = {
  title: "Menu Popette - Brunch maison, formules gourmandes & plats à emporter",
  description:
    "Formule brunch Popette : 1 plat salé + 1 plat sucré + 1 boisson fraîche + un café ou thé. Options végétariennes, vegan, sans gluten. Formule enfant. À emporter.",
  jsonLd: JSON_LD_MENU,
};

export const SEO_ABOUT = {
  title:
    "À propos de Popette - Brunch maison à Arcachon & coffee shop chaleureux",
  description:
    "Découvrez l'histoire de Popette, restaurant brunch en plein cœur d'Arcachon. Fait maison, produits frais, service en continu et ambiance conviviale.",
  jsonLd: JSON_LD_ABOUT,
};
