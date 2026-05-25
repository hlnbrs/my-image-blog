import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Layout } from "../components/site/Layout";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog immobilier Toulouse - Hélène Barroso" },
      {
        name: "description",
        content:
          "Conseils, analyses et ressources pour vendre, acheter et comprendre le marché immobilier toulousain.",
      },
      { property: "og:title", content: "Blog immobilier Toulouse - Hélène Barroso" },
      {
        property: "og:description",
        content:
          "Conseils et analyses pour vendre, acheter et comprendre le marché immobilier toulousain.",
      },
      { property: "og:url", content: "https://blog-image-connect.lovable.app/blog" },
      { property: "og:image", content: `https://blog-image-connect.lovable.app${IMG.heroCouv}` },
      { name: "twitter:image", content: `https://blog-image-connect.lovable.app${IMG.heroCouv}` },
    ],
    links: [{ rel: "canonical", href: "https://blog-image-connect.lovable.app/blog" }],
  }),
  component: BlogPage,
});

const CATS = ["Tous", "Vendre à Toulouse", "Acheter autrement", "Le marché en clair"] as const;
type Cat = (typeof CATS)[number];

const ARTICLES: Array<{ title: string; cat: Exclude<Cat, "Tous">; excerpt: string; img: string; imgPos?: string }> = [
  {
    title: "Pourquoi je travaille en exclusivité - et ce que cela change pour vous",
    cat: "Vendre à Toulouse",
    excerpt: "L'exclusivité n'est pas une contrainte : c'est ce qui rend la vente lisible et efficace.",
    img: IMG.blogSignature,
    imgPos: "object-center",
  },
  {
    title: "Ce que votre banquier regardera dans votre dossier",
    cat: "Acheter autrement",
    excerpt: "Capacité, charges, reste à vivre : ce qui se joue avant même la première visite.",
    img: IMG.acheteursCanape,
    imgPos: "object-bottom",
  },
  {
    title: "Ce que j'entends quand on me dit que mes honoraires sont trop élevés",
    cat: "Vendre à Toulouse",
    excerpt: "Une réponse simple, sans détour, à une objection que j'entends souvent.",
    img: IMG.tlseHotelParticulier,
  },
  {
    title: "Avant de visiter le premier appartement, voici ce que je vérifie",
    cat: "Acheter autrement",
    excerpt: "Une checklist concrète pour structurer un projet d'achat avant de perdre du temps.",
    img: IMG.blogAppartement,
  },
  {
    title: "Le marché toulousain en 2026 : ce que les chiffres disent vraiment",
    cat: "Le marché en clair",
    excerpt: "Bilan annuel, données DVF commentées, lecture sans bullshit.",
    img: IMG.blogToits,
  },
  {
    title: "Saint-Cyprien, Minimes, Capitole : trois quartiers, trois marchés",
    cat: "Le marché en clair",
    excerpt: "Comparatif honnête. Ce qui change vraiment d'une rive à l'autre.",
    img: IMG.blogQuartier,
  },
  {
    title: "Faut-il rénover avant de vendre ? Mon avis honnête",
    cat: "Vendre à Toulouse",
    excerpt: "Quand ça change le prix, quand ça ne change rien. Point de vue assumé.",
    img: IMG.blogCuisine,
  },
  {
    title: "Primo-accédant à Toulouse : par où commencer",
    cat: "Acheter autrement",
    excerpt: "Guide pratique, ancrage local fort. Pour ne pas démarrer dans le brouillard.",
    img: IMG.tlseSaintSernin,
  },
];

function BlogPage() {
  const [cat, setCat] = useState<Cat>("Tous");
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      ARTICLES.filter(
        (a) =>
          (cat === "Tous" || a.cat === cat) &&
          (q.trim() === "" || a.title.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, q],
  );

  return (
    <Layout>
      {/* HERO */}
      <section className="border-b border-sable">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-argile">Blog</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-cerisier md:text-6xl">
              L'immobilier,<br />une histoire de confiance.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-graphite">
              Des conseils, des analyses et des ressources pour vous accompagner à
              chaque étape de votre projet.
            </p>
          </div>
          <img src={IMG.aProposPP} alt="Hélène Barroso, blog immobilier" className="h-[480px] w-full object-cover" />
        </div>
      </section>

      {/* FILTRES */}
      <section className="border-b border-sable bg-ivoire">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  cat === c
                    ? "border-cerisier bg-cerisier text-ivoire"
                    : "border-sable bg-ivoire text-graphite hover:border-argile"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 border border-sable bg-card px-4 py-2 md:w-72">
            <Search size={16} className="text-pierre" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher un article"
              className="w-full bg-transparent text-sm outline-none placeholder:text-pierre"
            />
          </label>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            {filtered.map((a) => (
              <article key={a.title} className="group flex flex-col">
                <div className="overflow-hidden bg-creme">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="aspect-[4/3] w-full bg-creme object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <span className="mt-5 text-[10px] uppercase tracking-[0.22em] text-terra">{a.cat}</span>
                <h2 className="mt-3 font-display text-2xl leading-snug text-charbon">{a.title}</h2>
                <p className="mt-3 text-graphite">{a.excerpt}</p>
                <Link
                  to="/blog"
                  className="mt-5 inline-flex items-center gap-1 text-[12px] uppercase tracking-[0.2em] text-cerisier hover:text-charbon"
                >
                  Lire l'article <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-graphite">Aucun article ne correspond à votre recherche.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
