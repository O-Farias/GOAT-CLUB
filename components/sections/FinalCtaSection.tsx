"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-lg border border-gold/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(225,29,46,0.11),rgba(255,255,255,0.035))] p-8 text-center shadow-premium-card sm:p-12 lg:p-16"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
            <h2 className="text-4xl font-black leading-tight text-ivory sm:text-6xl">
              Construa o homem que você nasceu para ser.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              O próximo nível exige uma nova versão sua. Entre para o GOAT CLUB
              e comece sua evolução.
            </p>
            <Button size="lg" variant="premium" asChild>
              <a href="#lista-de-espera">
                Entrar na lista de espera
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
