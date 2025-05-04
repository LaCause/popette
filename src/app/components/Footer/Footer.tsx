import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-[var(--color-outline)] text-sm font-body bg-[var(--color-surface)] text-[var(--color-on-surface)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & texte */}
        <div>
          <h3 className="font-logo text-2xl mb-2">Popette</h3>
          <p className="text-sm text-[var(--color-on-surface)]/70">
            Brunch maison à Arcachon. Convivialité, produits frais, et bonne
            humeur au menu !
          </p>
        </div>

        <div>
          <h4 className="font-title font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 className="font-title font-semibold mb-2">Coordonnées</h4>
          <p>
            12 rue du Brunch
            <br />
            33120 Arcachon
          </p>
          <p className="mt-2">
            05 56 00 00 00
            <br />
            contact@popette.com
          </p>
        </div>
      </div>

      <div className="text-center text-xs mt-8 py-4 border-t border-[var(--color-outline)] text-[var(--color-on-surface)]/60">
        © {new Date().getFullYear()} Popette. Tous droits réservés.
      </div>
    </footer>
  );
}
