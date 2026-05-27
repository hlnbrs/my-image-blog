import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Layout } from "../components/site/Layout";
import { ARTICLES, getArticle } from "../lib/articles";

const SITE = "https://blog-image-connect.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Article — Hélène Barroso" }] };
    const url = `${SITE}/blog/${a.slug}`;
    const img = `${SITE}${a.img}`;
    return {
      meta: [
        { title: `${a.title} — Hélène Barroso` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: img },
        { property: "article:published_time", content: a.date },
        { property: "article:section", content: a.cat },
        { property: "article:author", content: "Hélène Barroso" },
        { name: "twitter:image", content: img },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            image: img,
            datePublished: a.date,
            author: {
              "@type": "Person",
              name: "Hélène Barroso",
              url: SITE + "/a-propos",
            },
            publisher: {
              "@type": "Organization",
              name: "Hélène Barroso - Immobilier Toulouse",
              url: SITE,
            },
            mainEntityOfPage: url,
            articleSection: a.cat,
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="eyebrow text-argile">404</p>
        <h1 className="mt-4 font-display text-4xl text-charbon">Article introuvable</h1>
        <p className="mt-4 text-graphite">Cet article n'existe pas ou a été déplacé.</p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-cerisier hover:text-charbon"
        >
          <ArrowLeft size={14} /> Retour au blog
        </Link>
      </section>
    </Layout>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.cat === article.cat,
  ).slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <article>
        <header className="border-b border-sable bg-ivoire">
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-graphite hover:text-cerisier"
            >
              <ArrowLeft size={14} /> Retour au blog
            </Link>
            <p className="eyebrow mt-8 text-terra">{article.cat}</p>
            <h1 className="mt-4 font-display text-3xl leading-tight text-charbon md:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-[12px] uppercase tracking-[0.15em] text-graphite">
              <span className="inline-flex items-center gap-2">
                <Calendar size={13} />
                {new Date(article.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={13} /> {article.readingTime} min de lecture
              </span>
            </div>
          </div>
          <div className="mx-auto max-w-5xl px-6 pb-12">
            <img
              src={article.img}
              alt={article.title}
              className={`aspect-[16/9] w-full bg-creme object-cover ${article.imgPos ?? ""}`}
            />
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto max-w-2xl px-6 py-16">
          {article.blocks.map((b, i) => {
            if (b.type === "h3") {
              return (
                <h2
                  key={i}
                  className="mt-10 mb-4 font-display text-2xl text-charbon"
                >
                  {b.text}
                </h2>
              );
            }
            if (b.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-8 border-l-2 border-cerisier pl-5 font-display text-xl italic leading-snug text-charbon"
                >
                  « {b.text} »
                </blockquote>
              );
            }
            return (
              <p key={i} className="mb-5 text-[17px] leading-relaxed text-graphite">
                {b.text}
              </p>
            );
          })}

          {/* CTA */}
          <div className="mt-12 border-t border-sable pt-10">
            <p className="font-display text-xl italic text-cerisier">{article.cta}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-cerisier px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire transition-colors hover:bg-charbon"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-sable bg-creme/40">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="eyebrow text-argile">À lire aussi</p>
            <h2 className="mt-3 font-display text-2xl text-charbon md:text-3xl">
              Dans la même catégorie
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className="group flex flex-col"
                >
                  <div className="overflow-hidden bg-creme">
                    <img
                      src={a.img}
                      alt={a.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="mt-5 text-[10px] uppercase tracking-[0.22em] text-terra">
                    {a.cat}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-charbon">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
