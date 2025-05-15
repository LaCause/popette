import { IMAGE_TEST_URL } from "../dev";

export const POPETTE_DOMAIN = "popette-brunch.com";
export const POPETTE_OPENED = "Tout les jours";
export const POPETTE_HOURS = "10h-18h tous les jours";
export const POPETTE_PHONE = "06 66 12 81 18";
export const POPETTE_PHONE_LINK = `+33${POPETTE_PHONE.replace(" ", "")}`;
export const POPETTE_EMAIL = "popette.arcachon@gmail.com";
export const POPETTE_ADDRESS = "10 Rue du Maréchal de Lattre de Tassigny";
export const POPETTE_POSTAL_CODE = "33120 Arcachon";

export const POPETTE_NAVIGATION = [
  { href: "/", label: "Accueil" },
  { href: "/about-us", label: "Notre histoire" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
  { href: "/showcase", label: "Photos" },
  { href: "/blog", label: "Blog" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

export const POPETTE_GALLERY_IMAGES = Array(13).fill(IMAGE_TEST_URL);
