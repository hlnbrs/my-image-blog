import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { IMG } from "../lib/images";
import { ArrowRight, Home, Key, Handshake, Star } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=BARROSO+HELENE+Avis";
// TODO: remplacer par le lien court Google Business "Écrire un avis" (g.page/r/...)
const GOOGLE_LEAVE_REVIEW_URL = GOOGLE_REVIEWS_URL;

const TESTIMONIALS = [
  {
    author: "Mathilde Tournier",
    date: "Février 2026",
    rating: 5,
    text: "J'ai fait appel à Hélène Barroso pour la vente de mon bien immobilier et la recommande vivement ! Très à l'écoute, humaine, réactive et pugnace, elle a su mettre mon bien en valeur et l'a vendu en peu de temps, malgré une conjoncture morose. Elle m'a aussi accompagnée dans l'achat d'un autre bien et a parfaitement su cerner ma demande. Je n'hésiterai pas à refaire appel à elle si l'occasion se présentait !",
  },
  {
    author: "C. Monnaie",
    date: "Avril 2026",
    rating: 5,
    text: "J'ai eu le plaisir de collaborer avec Hélène Barroso sur la vente d'un bien immobilier. Son professionnalisme, sa réactivité, sa disponibilité et son honnêteté ont permis de concrétiser cette transaction dans les meilleures conditions. Je recommande avec confiance !!!",
  },
  {
    author: "Aurélie",
    date: "Juin 2026",
    rating: 5,
    text: "Helene Barroso est une personne compétente, engagée, douce et solaire. Excellente expérience personnelle dans mon projet de vie. Dossier suivi avec rigueur du début à la fin, communication claire et efficace, disponibilité constante. Hélène est une professionnelle compétente qui maîtrise parfaitement son métier et offre un accompagnement sérieux à ses clients. Je recommande fortement.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hélène Barroso - Agente immobilière à Toulouse" },
      {
        name: "description",
        content:
          "Hélène Barroso, agente immobilière indépendante à Toulouse. Vente, achat, accompagnement sur-mesure. Plus qu'une transaction, une relation de confiance.",
      },
      { property: "og:title", content: "Hélène Barroso - Agente immobilière à Toulouse" },
      {
        property: "og:description",
        content:
          "Agente immobilière indépendante à Toulouse. Vente, achat, accompagnement sur-mesure.",
      },
      { property: "og:url", content: "https://blog-image-connect.lovable.app/" },
      { property: "og:image", content: `https://blog-image-connect.lovable.app${IMG.heroCouv}` },
      { name: "twitter:image", content: `https://blog-image-connect.lovable.app${IMG.heroCouv}` },
    ],
    links: [{ rel: "canonical", href: "https://blog-image-connect.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Hélène Barroso",
          url: "https://blog-image-connect.lovable.app/",
          areaServed: "Toulouse",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: TESTIMONIALS.length,
            bestRating: "5",
            worstRating: "1",
          },
          review: TESTIMONIALS.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.author },
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: "5",
            },
            reviewBody: t.text,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="border-b border-sable">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Toulouse - Haute-Garonne</p>
            <h1 className="sr-only">Hélène Barroso — Agente immobilière indépendante à Toulouse</h1>
            <p aria-hidden="true" className="mt-4 font-display text-4xl leading-[1.05] text-cerisier sm:text-5xl md:text-6xl">
              Trouver plus qu'un bien,<br />un lieu de vie.
            </p>
            <p className="mt-6 max-w-lg text-lg text-graphite">
              Je vous accompagne avec écoute et attention pour concrétiser votre
              projet immobilier.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/estimation"
                className="inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire transition-colors hover:bg-charbon"
              >
                Demander une estimation personnalisée <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-sable pt-8">
              {[
                { Icon: Key, label: "Achat" },
                { Icon: Home, label: "Vente" },
                { Icon: Handshake, label: "Sur-mesure" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-argile text-argile">
                    <Icon size={22} strokeWidth={1.4} />
                  </span>
                  <span className="mt-3 text-[11px] uppercase tracking-[0.2em] text-graphite">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden">
              <img
                src={IMG.heroCouv}
                alt="Hélène Barroso, agente immobilière à Toulouse, portrait"
                className="h-[480px] w-full object-cover object-[center_30%] md:h-[640px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">À propos</p>
            <h2 className="mt-4 font-display text-4xl text-charbon md:text-5xl">
              Bonjour, je suis Hélène.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-graphite">
              Passionnée par l'immobilier et l'accompagnement humain, j'aide mes
              clients à concrétiser leurs projets de vie en toute sérénité.
            </p>
            <p className="mt-10 font-script text-3xl text-cerisier">Ravie de vous accompagner !</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center border border-cerisier text-cerisier font-display">
                HB
              </span>
              <div className="leading-tight">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-charbon">Hélène Barroso</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-graphite">Votre agente immobilière</div>
              </div>
            </div>
          </div>
          <img
            src={IMG.aProposPP}
            alt="Hélène Barroso, agente immobilière à Toulouse"
            className="h-[520px] w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="bg-creme">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <img
            src={IMG.tlsePlaceWilson}
            alt="Carrousel de la Place Wilson, Toulouse - art de vivre"
            className="h-[520px] w-full object-cover md:order-1"
            loading="lazy"
          />
          <div className="md:order-2">
            <p className="eyebrow text-argile">Ma philosophie</p>
            <h2 className="mt-4 font-display text-4xl text-charbon md:text-5xl">
              L'écoute au cœur de chaque projet.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-graphite">
              Chaque bien a une histoire. Chaque projet est unique.
              <br />
              Mon rôle : comprendre vos besoins et vous guider avec engagement et expertise.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 border border-argile bg-ivoire px-6 py-4">
              {["Conseil", "Confiance", "Sérénité"].map((w, i) => (
                <span key={w} className="flex items-center gap-4 text-[12px] uppercase tracking-[0.22em] text-graphite">
                  {w}
                  {i < 2 && <span className="h-1 w-1 rounded-full bg-argile" />}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 bg-terra px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-cerisier"
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG TEASER - ARTICLE VALEUR APPARTEMENT */}
      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <p className="eyebrow text-argile">Conseils immobiliers</p>
            <h2 className="mt-4 font-display text-4xl text-charbon md:text-5xl">
              Comment savoir combien vaut réellement mon appartement à Toulouse&nbsp;?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-graphite">
              Prix au m², étage, DPE, copropriété, extérieur : les critères qui
              font réellement varier la valeur d'un appartement.
            </p>
            <div className="mt-10">
              <Link
                to="/blog/$slug"
                params={{ slug: "combien-vaut-mon-appartement-toulouse" }}
                className="inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
              >
                Lire l'article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <img
            src={IMG.blogAppartement}
            alt="Appartement toulousain - valeur et estimation"
            className="h-[420px] w-full object-cover md:col-span-2"
            loading="lazy"
          />
        </div>
      </section>

      {/* TOULOUSE - AMBIANCE */}
      <section className="bg-creme">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-5 md:items-center">
          <img
            src={IMG.tlseHotelParticulier}
            alt="Hôtel particulier toulousain, façade en brique rose"
            className="h-[480px] w-full object-cover md:col-span-3"
            loading="lazy"
          />
          <div className="md:col-span-2">
            <p className="eyebrow text-argile">Toulouse</p>
            <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
              Ma ville,<br />mon terrain de jeu.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Je connais Toulouse de l'intérieur - ses quartiers, ses hôtels
              particuliers, ses cours cachées. C'est cet ancrage local qui fait la
              différence dans chaque projet que je porte.
            </p>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES - AVIS GOOGLE */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-argile">Avis Google</p>
            <h2 className="mt-4 font-display text-4xl text-charbon md:text-5xl">
              Ils m'ont fait confiance
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex items-center gap-1 text-terra">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm uppercase tracking-[0.18em] text-graphite">
                5,0 / 5 · {TESTIMONIALS.length} avis
              </span>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="flex h-full flex-col border border-sable bg-card p-8"
              >
                <div className="flex items-center gap-1 text-terra">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-graphite leading-relaxed">
                  <span className="font-display text-3xl leading-none text-cerisier">
                    "
                  </span>
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-sable pt-4">
                  <div className="text-sm font-medium uppercase tracking-[0.16em] text-charbon">
                    {t.author}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-graphite">
                    {t.date} · via Google
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href={GOOGLE_LEAVE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire transition-colors hover:bg-charbon"
            >
              Laisser un avis Google <ArrowRight size={16} />
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-argile px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-charbon hover:bg-creme"
            >
              Voir tous les avis
            </a>
          </div>
        </div>
      </section>



      {/* CITATION - fond charbon */}
      <section className="bg-charbon text-ivoire">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="font-display text-7xl leading-none text-terra">"</span>
          <blockquote>
            <p className="mt-2 font-display text-3xl leading-snug md:text-5xl">
              La réussite d'un projet immobilier repose sur la confiance, la clarté
              et l'accompagnement.
            </p>
            <footer className="mt-10 text-[12px] uppercase tracking-[0.28em] text-sable">
              - Hélène Barroso
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="eyebrow text-argile">Mon engagement</p>
          <h2 className="mt-4 font-display text-4xl text-charbon md:text-5xl">
            Un accompagnement sur-mesure
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { t: "Estimation offerte", d: "Une estimation précise et détaillée de votre bien." },
              { t: "Stratégie personnalisée", d: "Un plan de vente adapté à vos objectifs et à votre timing." },
              { t: "Suivi de A à Z", d: "Je vous accompagne à chaque étape jusqu'à la signature finale." },
            ].map((b) => (
              <div key={b.t} className="border border-sable bg-card p-10 text-left">
                <h3 className="font-display text-2xl text-cerisier">{b.t}</h3>
                <p className="mt-4 text-graphite">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
            >
              Contactez-moi <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
