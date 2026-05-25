import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Layout } from "../components/site/Layout";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/vendeurs")({
  head: () => ({
    meta: [
      { title: "Vendre votre bien à Toulouse - Hélène Barroso" },
      {
        name: "description",
        content:
          "Vendre à Toulouse en exclusivité, sans mauvaise surprise. Méthode en 5 étapes, lecture acquéreur, interagence. Estimation personnalisée gratuite.",
      },
      { property: "og:image", content: IMG.vendeursPortrait },
    ],
  }),
  component: VendeursPage,
});

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sable">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display text-xl text-charbon">{q}</span>
        <ChevronDown
          size={20}
          className={`text-graphite transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-6 text-graphite">{a}</p>}
    </div>
  );
}

function VendeursPage() {
  const etapes = [
    { t: "Estimer", d: "Une analyse de marché précise, ancrée sur les données réelles de votre quartier." },
    { t: "Valoriser", d: "Mise en valeur du bien : photos, home staging léger, narration." },
    { t: "Diffuser", d: "Publication soignée, une seule fois, pour ne pas dévaloriser le bien." },
    { t: "Sélectionner", d: "Filtrage des acquéreurs : seuls ceux qui peuvent vraiment acheter visitent." },
    { t: "Sécuriser", d: "Suivi du compromis à la signature, avec un œil financier sur chaque étape." },
  ];
  return (
    <Layout>
      {/* HERO */}
      <section className="border-b border-sable">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">Vendeurs</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-cerisier md:text-6xl">
              Vendre votre bien,<br />sans mauvaise surprise.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-graphite">
              Vous ne perdez pas de temps. Je sélectionne les acquéreurs.
            </p>
            <Link
              to="/estimation"
              className="mt-10 inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
            >
              Demander une estimation personnalisée <ArrowRight size={16} />
            </Link>
          </div>
          <img
            src={IMG.vendeursPortrait}
            alt="Hélène Barroso, agente immobilière vendeurs à Toulouse"
            className="h-[520px] w-full bg-creme object-contain object-center"
          />
        </div>
      </section>

      {/* EXCLUSIVITÉ */}
      <section className="bg-creme">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow text-argile">Exclusivité</p>
          <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
            Pourquoi je travaille en exclusivité - et ce que cela change pour vous
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Signal de confiance", d: "Un mandat exclusif envoie au marché un signal fort : ce bien est sérieusement à vendre." },
              { n: "02", t: "Une seule diffusion", d: "Je publie une seule fois et fais remonter l'annonce en tête de liste. Pas de surenchère ni de dévalorisation par multi-diffusion." },
              { n: "03", t: "Réseau interagence", d: "L'exclusivité me permet de partager avec mes confrères. Plus de chances de trouver le bon acheteur." },
            ].map((b) => (
              <div key={b.n} className="border-t border-argile pt-6">
                <div className="font-display text-3xl text-cerisier">{b.n}</div>
                <h3 className="mt-2 text-lg font-medium uppercase tracking-[0.1em] text-charbon">{b.t}</h3>
                <p className="mt-3 text-graphite">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERAGENCE */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow text-argile">Interagence</p>
          <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
            Je partage avec mes confrères.<br />Vos honoraires ouvrent ce réseau.
          </h2>
        </div>
      </section>

      {/* TOULOUSE - DÉTAIL */}
      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5 md:items-center">
          <img
            src={IMG.tlseEscalier}
            alt="Escalier d'immeuble ancien à Toulouse, ferronnerie d'origine"
            className="h-[520px] w-full object-cover md:col-span-2"
            loading="lazy"
          />
          <div className="md:col-span-3">
            <p className="eyebrow text-argile">Le détail qui vend</p>
            <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
              Ce sont les détails qui font la valeur.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Une ferronnerie d'origine, une cour intérieure, une hauteur sous
              plafond, un parquet à chevrons : ce sont ces détails que je mets en
              avant pour valoriser votre bien auprès des bons acquéreurs.
            </p>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className="bg-charbon text-ivoire">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow text-argile">Ma méthode</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">5 étapes pour vendre sereinement</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {etapes.map((e, i) => (
              <div key={e.t} className="border-l-2 border-terra pl-4">
                <div className="font-display text-3xl text-terra">0{i + 1}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-sable">{e.t}</div>
                <p className="mt-3 text-sm text-ivoire/80">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LECTURE ACQUÉREUR */}
      <section className="bg-creme">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <img src={IMG.vendeurAlt} alt="Lecture du dossier acquéreur" className="portrait-acquereur h-[420px] w-full object-cover" />
          <div>
            <p className="eyebrow text-argile">Lecture acquéreur</p>
            <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
              Je reconnais un acquéreur sérieux.
            </h2>
            <p className="mt-6 text-lg text-graphite">
              Mon expérience bancaire me permet de lire un dossier de financement
              et d'anticiper les blocages. Vous ne perdez pas de temps en visites
              inutiles.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="eyebrow text-argile">Questions fréquentes</p>
          <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">Les vraies questions</h2>
          <div className="mt-10">
            <Faq
              q="Pourquoi vos honoraires sont-ils à ce niveau ?"
              a="Parce qu'ils financent un travail réel : sélection des acquéreurs, lecture des dossiers, négociation, suivi jusqu'à la signature. Et parce qu'ils ouvrent le réseau interagence, qui multiplie les chances de trouver le bon acheteur."
            />
            <Faq
              q="Que se passe-t-il si le bien ne se vend pas ?"
              a="On fait un point régulier sur la stratégie. Si nécessaire, on ajuste le prix, la mise en valeur ou la cible. Vous n'êtes jamais laissé sans nouvelles."
            />
            <Faq
              q="Quelle est la durée du mandat exclusif ?"
              a="Trois mois renouvelables. C'est la durée minimale pour donner sa chance à une vraie stratégie de vente."
            />
            <Faq
              q="Puis-je vendre en parallèle par moi-même ?"
              a="Non, c'est l'engagement de l'exclusivité. En contrepartie, je m'engage à porter le bien comme s'il était le seul, et à ouvrir le réseau interagence."
            />
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/estimation"
              className="inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
            >
              Demander une estimation personnalisée <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
