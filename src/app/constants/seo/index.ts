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
  title: "Popette – Brunch maison à Arcachon | Coffee shop & pâtisseries",
  description:
    "En plein cœur d’Arcachon, Popette est un restaurant chaleureux où le brunch est roi. Fait maison, produits frais, service continu, coffee shop et pâtisseries artisanales.",
  jsonLd: JSON_LD_HOME,
};

export const SEO_CONTACT = {
  title: "Contactez Popette – Restaurant brunch à Arcachon",
  description:
    "Envie de bruncher chez Popette ? Retrouvez nos horaires, adresse à Arcachon, et toutes les infos pour nous contacter facilement.",
  jsonLd: JSON_LD_CONTACT,
};

export const SEO_BLOG = {
  title: "Le blog de Popette – Recettes brunch & actualités à Arcachon",
  description:
    "Le blog de Popette : recettes de brunch maison, idées gourmandes, astuces coffee shop et actualités du restaurant à Arcachon.",
  jsonLd: JSON_LD_BLOG,
};

export const SEO_GALLERY = {
  title: "Galerie Popette – Photos du restaurant brunch à Arcachon",
  description:
    "Explorez l’univers Popette en images : notre salle, nos plats maison, les douceurs du coffee shop et l’ambiance chaleureuse du restaurant à Arcachon.",
  jsonLd: JSON_LD_GALLERY,
};

export const SEO_MENU = {
  title: "Menu Popette – Brunch gourmand & plats maison à Arcachon",
  description:
    "Découvrez le menu Popette : brunch maison, plats salés, sucrés, options vegan et gluten free. À déguster sur place ou à emporter à Arcachon.",
  jsonLd: JSON_LD_MENU,
};

export const SEO_ABOUT = {
  title: "À propos – Popette brunch maison & coffee shop à Arcachon",
  description:
    "Découvrez l'histoire de Popette : un lieu convivial au cœur d’Arcachon, où le brunch fait maison rime avec gourmandise, passion et produits frais.",
  jsonLd: JSON_LD_ABOUT,
};

export const OG_IMAGE_URL =
  "https://g5h0ukp15rn2n2m5.public.blob.vercel-storage.com/logo-popette-hero.png";
