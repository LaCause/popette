import Title from "../components/Title/Title";

export default function MentionsLegales() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-[var(--color-on-background)] font-body space-y-8">
      <Title as="h1" size="lg">
        Mentions légales
      </Title>

      <div>
        <Title as="h2" size="md" className="font-semibold">
          Éditeur du site
        </Title>
        <p>
          <strong>Popette</strong>
          <br />
          Représenté par : <strong>Axelle Corsello</strong>
          <br />
          Adresse : 10 Rue du Maréchal de Lattre de Tassigny, 33120 Arcachon
          <br />
          Téléphone : <a href="tel:0666128118">06 66 12 81 18</a>
          <br />
          Email :{" "}
          <a href="mailto:popette.arcachon@gmail.com">
            popette.arcachon@gmail.com
          </a>
          <br />
          Site :{" "}
          <a href="https://popette-brunch.com">https://popette-brunch.com</a>
        </p>
      </div>

      <div>
        <Title as="h2" size="md" className="font-semibold">
          Hébergement
        </Title>
        <p>
          Ce site est hébergé par :<br />
          <strong>Vercel Inc.</strong>
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723 - USA
          <br />
          Site :{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener">
            https://vercel.com
          </a>
        </p>
      </div>

      <div>
        <Title as="h2" size="md" className="font-semibold">
          Propriété intellectuelle
        </Title>
        <p>
          Tous les contenus présents sur le site (textes, images, logos,
          illustrations, code, etc.) sont la propriété exclusive de Popette,
          sauf mention contraire, et sont protégés par les lois françaises et
          internationales relatives à la propriété intellectuelle. Toute
          reproduction, représentation, modification ou exploitation, totale ou
          partielle, sans autorisation préalable est strictement interdite.
        </p>
      </div>

      <div>
        <Title as="h2" size="md" className="font-semibold">
          Données personnelles
        </Title>
        <p>
          Aucune donnée personnelle n’est collectée sans votre consentement. Les
          informations éventuellement recueillies via les formulaires de contact
          sont destinées uniquement à l’usage de Popette et ne seront jamais
          cédées à des tiers.
        </p>
        <p>
          Conformément à la loi Informatique et Libertés et au RGPD, vous
          disposez d’un droit d’accès, de rectification et de suppression de vos
          données personnelles en adressant votre demande à
          <a href="mailto:popette.arcachon@gmail.com">
            popette.arcachon@gmail.com
          </a>
          .
        </p>
      </div>

      <div>
        <Title as="h2" size="md" className="font-semibold">
          Cookies
        </Title>
        <p>
          Le site peut être amené à utiliser des cookies à des fins de mesure
          d’audience ou de fonctionnement. Vous pouvez configurer votre
          navigateur pour les refuser.
        </p>
      </div>

      <div>
        <Title as="h2" size="md" className="font-semibold">
          Responsabilité
        </Title>
        <p>
          Popette décline toute responsabilité quant à l’utilisation des
          informations fournies sur ce site ou à tout dommage résultant de
          l’accès ou de l’utilisation du site.
        </p>
      </div>
    </section>
  );
}
