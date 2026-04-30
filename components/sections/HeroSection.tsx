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
    icon: Flame
  },
  {
    label: "Disciplina",
    text: "92%",
    icon: ShieldCheck
  },
  {
    label: "Meta semanal",
    text: "5/7 concluídas",
    icon: CalendarCheck2
  },
  {
    label: "Treino de hoje",
    text: "Peito + Ombro",
    icon: Dumbbell
  }
] as const;

const proofCards = [
  ["+120", "membros fundadores"],
  ["5", "pilares de evolução"],
  ["24/7", "rotina acompanhada"]
] as const;

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#050505] pb-16 pt-32 sm:pb-20 lg:min-h-screen lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_30%,rgba(212,175,55,0.14),transparent_32%),radial-gradient(ellipse_at_86%_44%,rgba(225,29,46,0.13),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.42)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.82)_100%)]" />
      <div className="absolute left-0 right-0 top-20 -z-10 h-px gold-line" />

      <div className="section-shell grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[0.94fr_0.82fr] lg:gap-16">
        <motion.div
          initial={false}
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
            {proofCards.map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-black/20 p-4 backdrop-blur-md"
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
          initial={false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full min-w-0 max-w-full [perspective:1300px] sm:max-w-xl lg:mr-0 lg:max-w-lg"
        >
          <div className="absolute inset-x-2 top-12 -z-10 h-72 rotate-6 rounded-lg bg-neon-red/12 blur-3xl" />
          <div className="absolute -right-5 bottom-8 top-8 hidden w-5 rounded-r-lg border-y border-r border-gold/15 bg-gradient-to-b from-gold/12 via-neon-red/10 to-transparent blur-[0.5px] lg:block lg:[transform:rotateY(-6deg)_translateZ(-18px)]" />
          <div className="absolute inset-x-8 -bottom-5 hidden h-5 rounded-b-lg border-x border-b border-gold/10 bg-black/35 blur-[0.5px] lg:block lg:[transform:rotateX(72deg)_translateZ(-24px)]" />
          <div
            data-hero-panel="true"
            className="relative overflow-hidden rounded-lg border border-gold/30 bg-[#080808]/58 p-4 shadow-premium-card backdrop-blur-2xl [box-shadow:0_28px_76px_rgba(0,0,0,0.48),inset_0_0_54px_rgba(212,175,55,0.06)] [transform-style:preserve-3d] sm:p-6 lg:[transform:rotateY(-6deg)_rotateX(2deg)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.14),transparent_31%,rgba(225,29,46,0.12))]" />
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(212,175,55,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">
                    GOAT OS
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-ivory">
                    Painel de Evolução
                  </h2>
                </div>
                <div className="flex size-12 items-center justify-center rounded-md border border-neon-red/35 bg-neon-red/10 text-neon-red shadow-red-soft">
                  <Target aria-hidden="true" className="size-5" />
                </div>
              </div>

              <div className="relative mb-4 h-52 overflow-hidden rounded-lg border border-gold/20 bg-black/25 p-4 [box-shadow:0_18px_38px_rgba(0,0,0,0.28),inset_0_0_34px_rgba(212,175,55,0.045)] lg:[transform:translateZ(34px)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(212,175,55,0.2),transparent_32%),radial-gradient(circle_at_28%_72%,rgba(225,29,46,0.16),transparent_34%)]" />
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(245,240,230,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(245,240,230,0.07)_1px,transparent_1px)] [background-size:40px_40px]" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">
                      evolução semanal
                    </p>
                    <p className="mt-2 text-4xl font-black text-ivory">+18%</p>
                  </div>
                  <div className="rounded-md border border-gold/20 bg-gold/10 px-3 py-2 text-right">
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">
                      ritmo
                    </p>
                    <p className="mt-1 text-sm font-black text-ivory">alto</p>
                  </div>
                </div>

                <svg
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-4 h-28 w-[calc(100%-2rem)] overflow-visible"
                  viewBox="0 0 420 150"
                >
                  <path
                    d="M6 126 C 50 110, 72 92, 104 98 S 162 126, 198 86 S 260 58, 302 64 S 360 36, 414 18"
                    fill="none"
                    stroke="rgba(212,175,55,0.95)"
                    strokeLinecap="round"
                    strokeWidth="6"
                  />
                  <path
                    d="M6 126 C 50 110, 72 92, 104 98 S 162 126, 198 86 S 260 58, 302 64 S 360 36, 414 18"
                    fill="none"
                    stroke="rgba(212,175,55,0.28)"
                    strokeLinecap="round"
                    strokeWidth="18"
                  />
                  <circle cx="414" cy="18" fill="#e11d2e" r="7" />
                  <circle cx="414" cy="18" fill="none" r="16" stroke="#e11d2e" strokeOpacity="0.45" strokeWidth="3" />
                </svg>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {metricCards.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl [box-shadow:0_14px_28px_rgba(0,0,0,0.18),inset_0_0_24px_rgba(212,175,55,0.035)] lg:[transform:translateZ(18px)]"
                      animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                      transition={{
                        duration: 5.6 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-gold/20 bg-gold/10 text-gold">
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">
                            {metric.label}
                          </p>
                          <p className="mt-1 truncate text-base font-black text-ivory">
                            {metric.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
