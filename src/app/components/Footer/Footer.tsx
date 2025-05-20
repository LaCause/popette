import Link from "next/link";
import Title from "../ui/Title/Title";
import { Instagram } from "lucide-react";
import {
  POPETTE_ADDRESS,
  POPETTE_EMAIL,
  POPETTE_INSTAGRAM,
  POPETTE_NAVIGATION,
  POPETTE_PHONE_LINK,
  POPETTE_POSTAL_CODE,
} from "@/app/constants/general";

export default function Footer() {
  return (
    <footer className="pt-12 border-t border-outline text-sm font-body bg-tertiary-container text-on-tertiary-container">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Title as="h2" size="lg">
            <Link
              href="/menu"
              className="mb-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Popette
            </Link>
          </Title>
          <div className="inline-flex mt-4 gap-1.5">
            <Link
              href={POPETTE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-sm text-on-tertiary-container/70 mt-2">
            Brunch maison à Arcachon. Convivialité, produits frais, et bonne
            humeur au menu !
          </p>
        </div>

        <nav aria-label="Pied de page - Navigation principale">
          <Title as="h3" size="sm" className="mb-2">
            Navigation
          </Title>
          <ul className="space-y-1">
            {POPETTE_NAVIGATION.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic">
          <Title as="h3" size="sm" className="mb-2">
            Coordonnées
          </Title>
          <p>
            {POPETTE_ADDRESS}
            <br />
            {POPETTE_POSTAL_CODE}
          </p>
          <p className="mt-2">
            <a href={POPETTE_PHONE_LINK} className="hover:underline">
              06 66 12 81 18
            </a>
            <br />
            <a href={`mailto:${POPETTE_EMAIL}`} className="hover:underline">
              {POPETTE_EMAIL}
            </a>
          </p>
        </address>
      </div>

      <div className="text-center text-xs mt-8 py-4 border-t border-outline text-on-tertiary-container/60">
        © {new Date().getFullYear()} Popette. Tous droits réservés.
      </div>
    </footer>
  );
}
