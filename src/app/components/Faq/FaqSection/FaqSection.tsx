import Title from "@/app/components/ui/Title/Title";
import FaqItem from "../FaqItem/FaqItem";

interface FaqSectionProps {
  className?: string;
}

export default function FaqSection(props: FaqSectionProps) {
  return (
    <section
      id="faq"
      aria-label="Questions fréquentes"
      className={`space-y-6 pt-12 border-t border-outline ${props.className}`}
    >
      <header className="text-center space-y-4">
        <Title as="h1" size="xl" variant="primary" className="mb-2">
          Questions fréquentes
        </Title>
        <p className="font-body text-base text-[var(--color-on-surface)]/80">
          Vous vous posez des questions sur Popette ? Voici tout ce que vous
          devez savoir avant de venir bruncher à Arcachon.
        </p>
      </header>
      <div className="space-y-4">
        <FaqItem
          question="🕒 Quels sont les horaires d’ouverture de Popette Brunch à Arcachon ?"
          answer="Nous sommes ouverts tous les jours de 10h à 18h. En basse saison, nous ouvrons de 11h à 17h et sommes fermés le mardi."
        />
        <FaqItem
          question="🥞 Faut-il réserver pour venir bruncher chez Popette ?"
          answer="Non, nous ne prenons pas de réservations. Le service se fait sans réservation, en continu toute la journée."
        />
        <FaqItem
          question="🌱 Proposez-vous des plats végétariens, sans gluten ou vegan ?"
          answer="Oui, nous avons plusieurs options végétariennes, sans gluten ou véganes. Notre équipe sur place se fera un plaisir de vous conseiller."
        />
        <FaqItem
          question="🐶 Acceptez-vous les chiens au sein de votre restaurant ?"
          answer="Oui, les chiens sont les bienvenus à Popette, à condition qu’ils soient calmes et tenus en laisse."
        />
        <FaqItem
          question="💳 Quels sont les moyens de paiement acceptés chez Popette Brunch ?"
          answer="Nous acceptons les paiements par carte bancaire, espèces, et titres-restaurant (papier ou carte)."
        />
        <FaqItem
          question="👜 Peut-on commander des brunchs à emporter chez Popette ?"
          answer="Oui, tous nos plats ainsi que nos formules brunchs sont disponibles à emporter."
        />
        <FaqItem
          question="🍴 Quelles formules brunch proposez-vous chez Popette ?"
          answer="Nous proposons une formule brunch gourmande comprenant : un plat salé, un plat sucré, une boisson fraîche et un café ou thé. Une formule spéciale est également disponible pour les enfants jusqu’à 12 ans."
        />
      </div>
    </section>
  );
}
