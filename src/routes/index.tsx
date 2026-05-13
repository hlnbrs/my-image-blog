import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";
import { IMG } from "../lib/images";
import { ArrowRight, Home, Key, Handshake } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hélène Barroso — Agent immobilier à Toulouse" },
      {
        name: "description",
        content:
          "Hélène Barroso, agent immobilière indépendante à Toulouse. Vente, achat, accompagnement sur-mesure. Plus qu'une transaction, une relation de confiance.",
      },
      { property: "og:title", content: "Hélène Barroso — Agent immobilier à Toulouse" },
      { property: "og:image", content: IMG.heroCouv },
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
            <p className="eyebrow">Toulouse — Haute-Garonne</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-cerisier sm:text-5xl md:text-6xl">
              Trouver plus qu'un bien,<br />un lieu de vie.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-graphite">
              Je vous accompagne avec écoute et bienveillance pour concrétiser votre
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
                alt="Hélène Barroso, agent immobilier à Toulouse, portrait"
                className="h-[480px] w-full object-cover md:h-[640px]"
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
            src={IMG.vendeurAlt}
            alt="Hélène Barroso en pleine présentation"
            className="h-[520px] w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="bg-creme">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <img
            src={IMG.acheteursCanape}
            alt="Hélène Barroso, conseil en immobilier à Toulouse"
            className="h-[520px] w-full object-cover md:order-1"
            loading="lazy"
          />
          <div className="md:order-2">
            <p className="eyebrow text-argile">Ma philosophie</p>
            <h2 className="mt-4 font-display text-4xl text-charbon md:text-5xl">
              L'écoute au cœur de chaque projet.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-graphite">
              Chaque bien a une histoire. Chaque projet est unique. Mon rôle :
              comprendre vos besoins et vous guider avec bienveillance et expertise.
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

      {/* BLOG TEASER */}
      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <p className="eyebrow text-argile">Conseils immobiliers</p>
            <h2 className="mt-4 font-display text-4xl text-charbon md:text-5xl">
              5 étapes clés pour vendre votre bien
            </h2>
            <ol className="mt-8 grid gap-3 md:grid-cols-5">
              {["Estimer", "Valoriser", "Diffuser", "Sélectionner", "Sécuriser"].map((s, i) => (
                <li key={s} className="border-l-2 border-argile pl-3">
                  <div className="font-display text-2xl text-cerisier">0{i + 1}</div>
                  <div className="mt-1 text-[12px] uppercase tracking-[0.18em] text-graphite">{s}</div>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-cerisier hover:text-charbon"
              >
                Lire l'article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <img
            src={IMG.altMeilleur}
            alt="Conseils pour vendre votre bien immobilier à Toulouse"
            className="h-[420px] w-full object-cover md:col-span-2"
            loading="lazy"
          />
        </div>
      </section>

      {/* CITATION — fond charbon */}
      <section className="bg-charbon text-ivoire">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-3 md:items-center">
          <img
            src={IMG.signatureNB}
            alt="Hélène Barroso — portrait noir et blanc"
            className="h-[360px] w-full object-cover grayscale"
            loading="lazy"
          />
          <blockquote className="md:col-span-2">
            <span className="font-display text-7xl leading-none text-terra">"</span>
            <p className="mt-2 font-display text-3xl leading-snug md:text-4xl">
              La réussite d'un projet immobilier repose sur la confiance, la clarté
              et l'accompagnement.
            </p>
            <footer className="mt-8 text-[12px] uppercase tracking-[0.28em] text-sable">
              — Hélène Barroso
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
