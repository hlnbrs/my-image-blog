import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "../components/site/Layout";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/acheteurs")({
  head: () => ({
    meta: [
      { title: "Acheter à Toulouse - Hélène Barroso" },
      {
        name: "description",
        content:
          "Acheter à Toulouse sans stress : structuration du projet, lecture bancaire du dossier, accompagnement de la recherche à la signature.",
      },
      { property: "og:title", content: "Acheter à Toulouse - Hélène Barroso" },
      {
        property: "og:description",
        content:
          "Acheter à Toulouse sans stress : structuration du projet et accompagnement jusqu'à la signature.",
      },
      { property: "og:url", content: "https://blog-image-connect.lovable.app/acheteurs" },
      { property: "og:image", content: `https://blog-image-connect.lovable.app${IMG.acheteursCanape}` },
      { name: "twitter:image", content: `https://blog-image-connect.lovable.app${IMG.acheteursCanape}` },
    ],
    links: [{ rel: "canonical", href: "https://blog-image-connect.lovable.app/acheteurs" }],
  }),
  component: AcheteursPage,
});

function AcheteursPage() {
  return (
    <Layout>
      <section className="border-b border-sable">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">Acheteurs</p>
            <h1 className="sr-only">Acheter un bien immobilier à Toulouse avec Hélène Barroso</h1>
            <p aria-hidden="true" className="mt-4 font-display text-4xl leading-tight text-cerisier md:text-6xl">
              Trouver le bon bien.<br />Au bon prix.<br />Sans stress.
            </p>
            <p className="mt-6 max-w-lg text-lg text-graphite">
              Je structure votre projet avant même la première visite.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
            >
              Prendre contact <ArrowRight size={16} />
            </Link>
          </div>
          <img src={IMG.acheteursCanape} alt="Conseil achat immobilier Toulouse" className="h-[520px] w-full object-cover" />
        </div>
      </section>

      {/* ANGLE BANCAIRE */}
      <section className="bg-creme">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow text-argile">Angle bancaire</p>
          <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
            Avant de chercher, on regarde ensemble ce que le banquier regardera.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Capacité d'emprunt", d: "On distingue la capacité théorique de la capacité réelle, après charges et reste à vivre." },
              { t: "Composition du dossier", d: "Pièces clés, points qui rassurent, signaux qui inquiètent un analyste." },
              { t: "Points de blocage", d: "Anticipation des refus fréquents et stratégies pour les éviter." },
            ].map((b) => (
              <div key={b.t} className="border border-sable bg-card p-8">
                <h3 className="font-display text-2xl text-cerisier">{b.t}</h3>
                <p className="mt-3 text-graphite">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOULOUSE - ART DE VIVRE */}
      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">Toulouse</p>
            <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
              Acheter à Toulouse,<br />c'est choisir un art de vivre.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Une terrasse au soleil, une place ombragée, un café à dix minutes à
              pied. Au-delà du bien, je vous aide à choisir le quartier qui vous
              ressemble.
            </p>
          </div>
          <img
            src={IMG.tlsePlaceBourse}
            alt="Place de la Bourse, terrasse de café à Toulouse"
            className="h-[520px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* PROFILS */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow text-argile">À qui je m'adresse</p>
          <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">Deux profils, un même accompagnement</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border-l-2 border-terra pl-6">
              <h3 className="font-display text-2xl text-charbon">Vous achetez seul(e)</h3>
              <p className="mt-3 text-graphite">
                Vous avez besoin d'être accompagné(e) à chaque étape : du tri des
                annonces à la lecture du compromis. Je suis votre interlocutrice unique.
              </p>
            </div>
            <div className="border-l-2 border-terra pl-6">
              <h3 className="font-display text-2xl text-charbon">Vous êtes primo-accédant(e)</h3>
              <p className="mt-3 text-graphite">
                Vous découvrez le monde de l'acquisition. On commence par poser les
                bonnes questions avant la première visite. On gagne du temps. On
                évite les pièges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT */}
      <section className="bg-charbon text-ivoire">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-argile">Mon accompagnement</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">De la recherche à la signature</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Cadrer", d: "On structure le projet : capacité, critères, zone." },
              { n: "02", t: "Chercher", d: "Je trie les annonces. Vous ne visitez que ce qui colle." },
              { n: "03", t: "Négocier", d: "Offre construite, argumentée, défendue auprès du vendeur." },
              { n: "04", t: "Signer", d: "Compromis, financement, acte : un œil financier à chaque étape." },
            ].map((b) => (
              <div key={b.n} className="border-l-2 border-terra pl-4">
                <div className="font-display text-3xl text-terra">{b.n}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-sable">{b.t}</div>
                <p className="mt-3 text-sm text-ivoire/80">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-terra px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-cerisier"
            >
              Prendre contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
