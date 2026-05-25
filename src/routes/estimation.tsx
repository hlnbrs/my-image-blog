import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Layout } from "../components/site/Layout";

export const Route = createFileRoute("/estimation")({
  head: () => ({
    meta: [
      { title: "Estimation immobilière à Toulouse - Hélène Barroso" },
      {
        name: "description",
        content:
          "Estimation personnalisée, offerte et sans engagement. Un échange humain dans les 24h.",
      },
      { property: "og:title", content: "Estimation immobilière à Toulouse - Hélène Barroso" },
      {
        property: "og:description",
        content: "Estimation personnalisée, offerte et sans engagement. Réponse sous 24h.",
      },
      { property: "og:url", content: "https://blog-image-connect.lovable.app/estimation" },
    ],
    links: [{ rel: "canonical", href: "https://blog-image-connect.lovable.app/estimation" }],
  }),
  component: EstimationPage,
});

function EstimationPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="border-b border-sable">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="eyebrow text-argile">Estimation</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-cerisier md:text-5xl">
            Votre estimation personnalisée - offerte et sans engagement.
          </h1>
          <p className="mt-6 text-lg text-graphite">
            Je vous rappelle sous 24h pour un premier échange.
          </p>

          {sent ? (
            <div className="mt-12 border border-sable bg-card p-10 text-center">
              <h2 className="font-display text-3xl text-cerisier">Demande reçue.</h2>
              <p className="mt-4 text-graphite">
                Je vous rappelle personnellement sous 24h. Belle journée.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-12 grid gap-5 border border-sable bg-card p-8 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Select label="Type de bien" options={["Appartement", "Maison", "Autre"]} />
                <Field label="Surface approximative (m²)" name="surface" type="number" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Secteur / Ville" name="secteur" required />
                <Select label="Situation" options={["Résidence principale", "Résidence secondaire", "Locatif"]} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Prénom" name="prenom" required />
                <Field label="Nom" name="nom" required />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Téléphone" name="tel" type="tel" required />
              </div>
              <div>
                <Label>Message libre (facultatif)</Label>
                <textarea
                  rows={4}
                  className="mt-2 w-full border border-sable bg-ivoire px-4 py-3 text-charbon outline-none focus:border-cerisier"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
              >
                Demander mon estimation <ArrowRight size={16} />
              </button>
              <p className="text-center text-xs text-pierre">
                Pas d'estimation automatique. Cette demande déclenche un contact humain dans les 24h.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] uppercase tracking-[0.2em] text-graphite">{children}</span>;
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-sable bg-ivoire px-4 py-3 text-charbon outline-none focus:border-cerisier"
      />
    </label>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <select className="mt-2 w-full border border-sable bg-ivoire px-4 py-3 text-charbon outline-none focus:border-cerisier">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
