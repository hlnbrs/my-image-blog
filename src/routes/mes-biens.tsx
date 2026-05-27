import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Layout } from "../components/site/Layout";

const AXO_URL =
  "https://hbarroso.axo.immo/fr/liste.htm#multinego=85002843&TypeModeListeForm=pict&tdp=all";

export const Route = createFileRoute("/mes-biens")({
  head: () => ({
    meta: [
      { title: "Mes biens à la vente — Hélène Barroso" },
      {
        name: "description",
        content:
          "Découvrez les biens immobiliers actuellement à la vente avec Hélène Barroso, agente Axo l'immobilier actif à Toulouse.",
      },
      { property: "og:title", content: "Mes biens à la vente — Hélène Barroso" },
      {
        property: "og:description",
        content:
          "Tous les biens à la vente avec Hélène Barroso, mandataire Axo à Toulouse.",
      },
      { property: "og:url", content: "https://blog-image-connect.lovable.app/mes-biens" },
    ],
    links: [{ rel: "canonical", href: "https://blog-image-connect.lovable.app/mes-biens" }],
  }),
  component: MesBiensPage,
});

function MesBiensPage() {
  return (
    <Layout>
    <div className="bg-ivoire">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-cerisier">
              Sélection en cours
            </p>
            <h1 className="mt-3 font-display text-4xl text-charbon md:text-5xl">
              Mes biens à la vente
            </h1>
            <p className="mt-4 max-w-2xl text-graphite">
              Retrouvez ci-dessous les biens que j'accompagne actuellement à la
              vente, hébergés sur ma vitrine officielle Axo l'immobilier actif.
            </p>
          </div>
          <a
            href={AXO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-cerisier px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire transition-colors hover:bg-charbon"
          >
            Ouvrir la vitrine Axo
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="hidden overflow-hidden border border-sable bg-white md:block">
          <iframe
            src={AXO_URL}
            title="Mes biens à la vente — Axo l'immobilier actif"
            className="h-[80vh] w-full"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-center gap-4 border border-sable bg-white px-6 py-10 text-center md:hidden">
          <p className="text-graphite">
            Pour une meilleure expérience sur mobile, consultez les biens
            directement sur la vitrine Axo.
          </p>
          <a
            href={AXO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-cerisier px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire transition-colors hover:bg-charbon"
          >
            Voir mes biens sur Axo
            <ExternalLink size={14} />
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-graphite">
          L'affichage ne fonctionne pas ?{" "}
          <a
            href={AXO_URL}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-cerisier"
          >
            Voir mes biens sur axo.immo
          </a>
        </p>
      </section>
    </div>
    </Layout>
  );
}
