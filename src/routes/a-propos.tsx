import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "../components/site/Layout";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Hélène Barroso, agente immobilière à Toulouse" },
      {
        name: "description",
        content:
          "Ancienne conseillère bancaire devenue agente immobilière indépendante à Toulouse. Trail, MDS Jordanie : on finit ce qu'on commence.",
      },
      { property: "og:image", content: IMG.aProposPP },
    ],
  }),
  component: AproposPage,
});

function AproposPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="border-b border-sable">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">À propos</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-cerisier md:text-6xl">
              Bonjour,<br />je suis Hélène.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-graphite">
              Agente immobilière indépendante à Toulouse, ancienne conseillère
              bancaire. Mon métier : porter votre projet comme s'il était le mien.
            </p>
          </div>
          <img src={IMG.aProposPP} alt="Hélène Barroso à Toulouse" className="h-[560px] w-full object-cover" />
        </div>
      </section>

      {/* PARCOURS BANCAIRE */}
      <section className="bg-creme">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">Parcours</p>
            <h2 className="mt-4 font-display text-3xl text-charbon md:text-4xl">
              Une lecture financière forgée en banque
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Pendant des années, j'ai accompagné des particuliers et des
              professionnels en banque. J'ai appris à lire des dossiers, à
              comprendre les situations financières, à anticiper les obstacles.
              Ce regard, je l'ai gardé en passant à l'immobilier en 2022.
            </p>
          </div>
          <img src={IMG.aProposMur} alt="Hélène Barroso, portrait" className="h-[460px] w-full object-cover" />
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "4 ans", t: "d'expérience" },
              { n: "≈ 30", t: "ventes réalisées" },
              { n: "80 %", t: "en exclusivité" },
            ].map((b) => (
              <div key={b.t} className="border border-sable bg-card p-10 text-center">
                <div className="font-display text-5xl text-cerisier">{b.n}</div>
                <div className="mt-3 text-[12px] uppercase tracking-[0.2em] text-graphite">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAIL & ENGAGEMENT */}
      <section className="bg-charbon text-ivoire">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">Engagement</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Ce que le trail m'a appris sur l'engagement
            </h2>
            <ul className="mt-8 space-y-4 text-ivoire/90">
              <li><span className="text-terra">2019–2025.</span> Trail intensif. Trans'Aubrac 53 km. Euskal Trail 2×25 km.</li>
              <li><span className="text-terra">2024.</span> Marathon des Sables Jordanie — Wadi Rum — 6 jours en désert.</li>
              <li><span className="text-terra">Depuis nov. 2023.</span> Préparation CrossFit pour le MDS, aujourd'hui 4 à 5 fois par semaine.</li>
            </ul>
            <p className="mt-10 max-w-lg font-display text-2xl leading-snug text-sable">
              "Ce que le désert m'a appris : on finit ce qu'on commence. C'est aussi
              comme ça que je travaille."
            </p>
          </div>
          <figure>
            <img
              src={IMG.arriveeMDS}
              alt="Marathon des Sables Jordanie 2024 — Wadi Rum, dossard 234"
              className="h-[520px] w-full object-cover"
            />
            <figcaption className="mt-3 text-[12px] uppercase tracking-[0.2em] text-sable">
              Marathon des Sables Jordanie 2024 — Wadi Rum
            </figcaption>
          </figure>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-argile">Mes valeurs</p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {["Confiance", "Transparence", "Engagement", "Expertise"].map((v) => (
              <div key={v} className="border-t border-argile pt-6">
                <div className="font-display text-2xl text-cerisier">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
            >
              Travaillons ensemble <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
