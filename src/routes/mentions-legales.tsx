import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/site/Layout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Hélène Barroso" },
      { name: "description", content: "Mentions légales du site helenebarroso.fr" },
    ],
  }),
  component: MentionsPage,
});

function MentionsPage() {
  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 text-graphite">
          <h1 className="font-display text-4xl text-cerisier">Mentions légales</h1>
          <div className="mt-10 space-y-8 text-base leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-charbon">Éditeur</h2>
              <p className="mt-2">
                Hélène Barroso — Agente immobilière indépendante, en collaboration avec
                Axo l'immobilier actif. Toulouse, Haute-Garonne.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-charbon">Hébergement</h2>
              <p className="mt-2">Hébergement statique sécurisé.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-charbon">Crédits photos</h2>
              <p className="mt-2">
                Photos fournies par Hélène Barroso. Toute reproduction interdite sans
                autorisation préalable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
