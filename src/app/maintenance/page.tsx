import Link from "next/link";
import { Button } from "../components/ui/Button/Button";
import CurvedText from "../components/ui/CurvedText/CurvedText";
import Title from "../components/ui/Title/Title";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-tertiary-container px-6">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <Title
          as="h1"
          className="text-5xl sm:text-9xl tracking-wide drop-shadow"
        >
          Popette
        </Title>

        {/* Message principal */}
        <CurvedText
          text="Le brunch revient très bientôt 🍳🥞"
          className="font-semibold"
          width={800}
        />

        {/* Description marketing */}
        <p className="font-body text-on-surface/80 text-base sm:text-lg">
          Nous mettons les petits plats dans les grands pour vous offrir une
          expérience encore plus gourmande. L’équipe Popette vous retrouve très
          vite en plein cœur d’Arcachon avec du bon café, des assiettes maison
          et une ambiance toujours aussi chaleureuse.
        </p>

        {/* Call to actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button asChild size="md">
            <a
              href="https://www.instagram.com/popette.arcachon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-6 py-3 bg-primary text-on-primary font-body font-semibold text-sm uppercase shadow-md hover:scale-105 hover:shadow-lg transition"
            >
              Suivez-nous sur Instagram
            </a>
          </Button>
          <Button asChild variant="outline" size="md">
            <Link
              href="/menu"
              className="inline-block rounded-full px-6 py-3 border border-primary text-primary font-body font-semibold text-sm uppercase shadow hover:scale-105 hover:bg-primary hover:text-on-primary transition"
            >
              Découvrir le menu
            </Link>
          </Button>
        </div>

        {/* Footer optionnel */}
        <p className="text-xs text-on-surface/50 font-body mt-8">
          Popette – 10 Rue du Maréchal de Lattre de Tassigny, 33120 Arcachon
        </p>
      </div>
    </main>
  );
}
