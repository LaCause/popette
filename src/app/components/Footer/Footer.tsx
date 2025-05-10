import Link from "next/link";
import Title from "../Title/Title";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about-us", label: "Notre histoire" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
  { href: "/showcase", label: "Photos" },
  { href: "/blog", label: "Blog" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

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
          <p className="text-sm text-on-tertiary-container/70 mt-4">
            Brunch maison à Arcachon. Convivialité, produits frais, et bonne
            humeur au menu !
          </p>
        </div>

        <nav aria-label="Pied de page - Navigation principale">
          <Title as="h3" size="sm" className="mb-2">
            Navigation
          </Title>
          <ul className="space-y-1">
            {navItems.map(({ href, label }) => (
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
            12 rue du Brunch
            <br />
            33120 Arcachon
          </p>
          <p className="mt-2">
            <a href="tel:0556000000" className="hover:underline">
              05 56 00 00 00
            </a>
            <br />
            <a href="mailto:contact@popette.com" className="hover:underline">
              contact@popette.com
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
