import { Crown } from "lucide-react";

const footerLinks = ["Privacidade", "Termos", "Contato", "Instagram"] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="section-shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-md border border-gold/35 bg-gold/10 text-gold">
            <Crown aria-hidden="true" className="size-5" />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-black uppercase tracking-[0.22em] text-ivory">
              GOAT CLUB
            </span>
            <p className="text-sm text-muted-foreground">
              © 2026 GOAT CLUB. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <nav aria-label="Links do rodapé" className="flex flex-wrap gap-4 md:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#inicio"
              className="text-sm text-muted-foreground transition duration-300 hover:text-gold"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
