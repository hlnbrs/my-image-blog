import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Phone, Instagram, Mail } from "lucide-react";
import { Layout } from "../components/site/Layout";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hélène Barroso, agente immobilière Toulouse" },
      {
        name: "description",
        content:
          "Parlons de votre projet immobilier à Toulouse. Réponse personnelle sous 24h.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="border-b border-sable">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow text-argile">Contact</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-cerisier md:text-6xl">
              Parlons de votre projet.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-graphite">
              Je vous réponds personnellement dans les 24 heures.
            </p>

            <div className="mt-10 space-y-4 text-graphite">
              <a href="tel:+33663393734" className="flex items-center gap-3 hover:text-cerisier">
                <Phone size={18} className="text-argile" /> 06 63 39 37 34
              </a>
              <a href="mailto:hbarroso@axo.immo" className="flex items-center gap-3 hover:text-cerisier">
                <Mail size={18} className="text-argile" /> hbarroso@axo.immo
              </a>
              <a
                href="https://instagram.com/helene.barroso.immobilier"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cerisier"
              >
                <Instagram size={18} className="text-argile" /> @helene.barroso.immobilier
              </a>
            </div>

            <p className="mt-10 max-w-md font-display text-xl leading-snug text-charbon">
              Belle journée, et je reste à votre écoute.
            </p>
            <img src={IMG.aProposPP} alt="Hélène Barroso" className="mt-10 h-72 w-full object-cover object-[center_20%] md:hidden" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="border border-sable bg-card p-8 md:p-10"
          >
            {sent ? (
              <div className="py-20 text-center">
                <h2 className="font-display text-3xl text-cerisier">Merci.</h2>
                <p className="mt-4 text-graphite">
                  Votre demande est partie. Je vous réponds personnellement sous 24h.
                </p>
                <p className="mt-8 font-script text-2xl text-cerisier">Belle journée.</p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Prénom" name="prenom" required />
                  <Field label="Nom" name="nom" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Téléphone" name="tel" type="tel" required />
                <div>
                  <Label>Type de projet</Label>
                  <select className="mt-2 w-full border border-sable bg-ivoire px-4 py-3 text-charbon outline-none focus:border-cerisier">
                    <option>Vendre</option>
                    <option>Acheter</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <Label>Message (facultatif)</Label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full border border-sable bg-ivoire px-4 py-3 text-charbon outline-none focus:border-cerisier"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-cerisier px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire hover:bg-charbon"
                >
                  Envoyer ma demande <ArrowRight size={16} />
                </button>
              </div>
            )}
          </form>
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
