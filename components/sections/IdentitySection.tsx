"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles } from "lucide-react";

import { SectionBadge } from "@/components/shared/SectionBadge";
import { identityBadges } from "@/lib/constants";

export function IdentitySection() {
  return (
    <section id="comunidade" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(139,0,0,0.28),transparent_35%),linear-gradient(315deg,rgba(212,175,55,0.16),transparent_34%)]" />
      <div className="section-shell">
        <div className="overflow-hidden rounded-lg border border-gold/18 bg-black/45 shadow-premium-card backdrop-blur-xl">
          <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <SectionBadge>Identidade</SectionBadge>
              <h2 className="text-4xl font-black leading-tight text-ivory sm:text-5xl">
                Não é motivação. É identidade.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                O GOAT CLUB foi criado para transformar evolução pessoal em
                rotina, ambiente e cultura.
              </p>
            </motion.div>

            <div className="relative min-h-[420px]">
              <div className="absolute inset-0 rounded-lg border border-white/10 bg-white/[0.035]" />
              <div className="absolute left-1/2 top-1/2 flex size-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold shadow-gold-soft">
                <Shield aria-hidden="true" className="size-16" />
              </div>
              <div className="absolute inset-6 rounded-lg border border-neon-red/15" />
              <div className="absolute inset-12 rounded-lg border border-gold/15" />

              <div className="relative z-10 grid h-full grid-cols-2 gap-3 p-5 sm:grid-cols-3">
                {identityBadges.map((badge, index) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="flex min-h-28 items-end rounded-lg border border-white/10 bg-black/35 p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-ivory">
                      <Sparkles aria-hidden="true" className="size-4 text-gold" />
                      {badge}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
