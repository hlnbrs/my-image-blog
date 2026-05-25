import { Link } from "@tanstack/react-router";
import { Home, Key, Handshake, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-creme">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center border border-cerisier text-cerisier font-display text-xl">
                HB
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg text-charbon">Hélène Barroso</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-graphite">
                  Votre agente immobilière
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-xs font-display text-xl leading-snug text-charbon">
              Plus qu'une transaction,<br />une relation de confiance.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 self-center text-center text-graphite">
            {[
              { Icon: Key, label: "Achat" },
              { Icon: Home, label: "Vente" },
              { Icon: Handshake, label: "Sur-mesure" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-argile text-argile">
                  <Icon size={20} strokeWidth={1.4} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em]">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm text-graphite md:items-end">
            <Link to="/contact" className="hover:text-cerisier">Contact</Link>
            <Link to="/mentions-legales" className="hover:text-cerisier">Mentions légales</Link>
            <a
              href="https://instagram.com/helene.barroso.immobilier"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-cerisier"
            >
              <Instagram size={16} /> @helene.barroso.immobilier
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-sable pt-6 text-center text-xs text-pierre">
          © {new Date().getFullYear()} Hélène Barroso - Agente immobilière indépendante - Toulouse
        </div>
      </div>
    </footer>
  );
}
