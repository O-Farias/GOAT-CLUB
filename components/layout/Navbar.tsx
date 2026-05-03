"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/65 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a
          href="#inicio"
          aria-label="GOAT CLUB - início"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <span className="relative flex size-11 items-center justify-center">
            <Image
              src="/goat-logo-1.png"
              alt=""
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="text-sm font-black uppercase tracking-[0.22em] text-ivory">
            GOAT CLUB
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <a href="#lista-de-espera">Entrar</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <div
        className={cn(
          "section-shell grid overflow-hidden transition-all duration-300 lg:hidden",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <nav
          aria-label="Navegação mobile"
          className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-2 backdrop-blur-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition duration-300 hover:bg-white/[0.06] hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <Button variant="premium" className="mt-1" asChild>
            <a href="#lista-de-espera" onClick={closeMenu}>
              Entrar
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
