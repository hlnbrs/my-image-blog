import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/vendeurs", label: "Vendeurs" },
  { to: "/acheteurs", label: "Acheteurs" },
  { to: "/blog", label: "Blog" },
  { to: "/a-propos", label: "À propos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-sable bg-ivoire/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center border border-cerisier text-cerisier font-display text-lg">
            HB
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base text-charbon">Hélène Barroso</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-graphite">Votre agente immobilière</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] uppercase tracking-[0.18em] text-graphite transition-colors hover:text-cerisier"
              activeProps={{ className: "text-cerisier" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-cerisier px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire transition-colors hover:bg-charbon"
          >
            Contact
          </Link>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-charbon"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-sable bg-ivoire md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-[13px] uppercase tracking-[0.18em] text-graphite"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-cerisier px-5 py-3 text-center text-[12px] font-medium uppercase tracking-[0.18em] text-ivoire"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
