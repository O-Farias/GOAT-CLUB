"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck2,
  Dumbbell,
  Flame,
  ShieldCheck,
  Target
} from "lucide-react";

import { SectionBadge } from "@/components/shared/SectionBadge";
import { Button } from "@/components/ui/button";

const metricCards = [
  {
    label: "Streak",
    text: "21 dias",
    icon: Flame,
    className: "lg:translate-x-8"
  },
  {
    label: "Disciplina",
    text: "92%",
    icon: ShieldCheck,
    className: "lg:-translate-x-5"
  },
  {
    label: "Meta semanal",
    text: "5/7 concluídas",
    icon: CalendarCheck2,
    className: "lg:translate-x-14"
  },
  {
    label: "Treino de hoje",
    text: "Peito + Ombro",
    icon: Dumbbell,
    className: "lg:-translate-x-1"
  }
] as const;

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_74%_20%,rgba(225,29,46,0.18),transparent_32%),radial-gradient(ellipse_at_40%_8%,rgba(212,175,55,0.14),transparent_34%)]" />
      <div className="absolute left-0 right-0 top-20 -z-10 h-px gold-line" />

      <div className="section-shell grid min-w-0 grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-w-0 flex-col items-start gap-8"
        >
          <SectionBadge>DISCIPLINA • FOCO • PROPÓSITO</SectionBadge>

          <div className="flex w-full max-w-3xl flex-col gap-6">
            <h1 className="max-w-full break-words text-4xl font-black leading-[1.08] text-ivory sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              O clube dos homens que decidiram{" "}
              <span className="premium-gradient-text">evoluir.</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-xl">
              Disciplina, corpo, mente, carreira e propósito em uma plataforma
              criada para homens que querem sair da estagnação e construir sua
              melhor versão.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" variant="premium" asChild>
              <a href="#lista-de-espera" aria-label="Entrar na lista de espera">
                Entrar na lista de espera
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#plataforma" aria-label="Conhecer a plataforma">
                Conhecer a plataforma
              </a>
            </Button>
          </div>

          <div className="grid w-full max-w-xl grid-cols-1 gap-3 pt-3 sm:grid-cols-3">
            {[
              ["+120", "membros fundadores"],
              ["5", "pilares de evolução"],
              ["24/7", "rotina acompanhada"]
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-xl font-black text-ivory">{value}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full min-w-0 max-w-full sm:max-w-xl"
        >
          <div className="absolute inset-x-2 top-12 -z-10 h-64 rotate-6 rounded-lg bg-neon-red/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-gold/20 bg-[#080808]/88 p-4 shadow-premium-card backdrop-blur-2xl sm:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  GOAT OS
                </p>
                <h2 className="mt-2 text-2xl font-black text-ivory">
                  Painel de Evolução
                </h2>
              </div>
              <div className="flex size-12 items-center justify-center rounded-md border border-neon-red/30 bg-neon-red/10 text-neon-red">
                <Target aria-hidden="true" className="size-5" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {metricCards.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    className={`rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl ${metric.className}`}
                    animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                    transition={{
                      duration: 5.6 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 items-center justify-center rounded-md border border-gold/20 bg-gold/10 text-gold">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-xl font-black text-ivory">
                          {metric.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
