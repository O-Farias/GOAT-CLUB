"use client";

import { motion } from "framer-motion";
import {
  AlarmClock,
  ArrowUpRight,
  Check,
  CircleDot,
  Dumbbell,
  Goal,
  Home,
  LineChart,
  NotebookText,
  Target,
  UserRound
} from "lucide-react";

import { SectionBadge } from "@/components/shared/SectionBadge";
import { dashboardHabits, weeklyBars } from "@/lib/constants";

const sidebarItems = [
  { label: "Hoje", icon: Home, active: true },
  { label: "Metas", icon: Goal, active: false },
  { label: "Treino", icon: Dumbbell, active: false },
  { label: "Rotina", icon: AlarmClock, active: false }
] as const;

export function PlatformPreviewSection() {
  return (
    <section id="plataforma" className="relative overflow-hidden py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <SectionBadge>Plataforma</SectionBadge>
          <h2 className="text-4xl font-black leading-tight text-ivory sm:text-5xl">
            Sua evolução, acompanhada todos os dias.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Uma plataforma completa para acompanhar metas, hábitos, treinos e
            rotina com clareza e foco.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-lg border border-gold/18 bg-[#070707]/90 shadow-premium-card backdrop-blur-xl"
        >
          <div className="grid min-h-[680px] lg:grid-cols-[230px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-gold">
                  <Target aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">
                    GOAT OS
                  </p>
                  <p className="text-sm text-muted-foreground">Beta Preview</p>
                </div>
              </div>

              <nav className="grid gap-2" aria-label="Navegação do preview">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm ${
                        item.active
                          ? "border border-gold/25 bg-gold/10 text-gold"
                          : "text-muted-foreground"
                      }`}
                    >
                      <Icon aria-hidden="true" className="size-4" />
                      {item.label}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-lg border border-neon-red/20 bg-neon-red/10 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-neon-red">
                  Foco do dia
                </p>
                <p className="mt-3 text-sm leading-6 text-ivory">
                  Executar antes de buscar motivação.
                </p>
              </div>
            </aside>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Segunda, 27 de abril
                  </p>
                  <h3 className="mt-2 text-3xl font-black text-ivory">
                    Painel de rotina
                  </h3>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-gold/10 text-gold">
                    <UserRound aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ivory">Mateus</p>
                    <p className="text-xs text-muted-foreground">
                      Nível Consistente
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Progresso semanal
                      </p>
                      <p className="mt-2 text-4xl font-black text-ivory">76%</p>
                    </div>
                    <div className="flex size-11 items-center justify-center rounded-md border border-gold/25 bg-gold/10 text-gold">
                      <LineChart aria-hidden="true" className="size-5" />
                    </div>
                  </div>
                  <div className="mt-8 flex h-40 items-end gap-3">
                    {weeklyBars.map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <div className="flex h-32 w-full items-end rounded-sm bg-white/[0.04]">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06, duration: 0.65 }}
                            className="w-full rounded-sm bg-gradient-to-t from-neon-red to-gold"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {["S", "T", "Q", "Q", "S", "S", "D"][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="font-bold text-ivory">Objetivos</p>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-gold"
                      />
                    </div>
                    <div className="grid gap-3">
                      {[
                        "Finalizar bloco de carreira",
                        "Treino 5x na semana",
                        "Leitura por 30 minutos"
                      ].map((goal, index) => (
                        <div
                          key={goal}
                          className="flex items-center gap-3 rounded-md border border-white/10 bg-black/20 p-3"
                        >
                          <span className="flex size-6 items-center justify-center rounded-full bg-gold/15 text-gold">
                            {index === 0 ? (
                              <CircleDot aria-hidden="true" className="size-3.5" />
                            ) : (
                              <Check aria-hidden="true" className="size-3.5" />
                            )}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {goal}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-neon-red/20 bg-neon-red/10 p-5">
                    <div className="flex items-center gap-3">
                      <Dumbbell aria-hidden="true" className="size-5 text-neon-red" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Próximo treino
                        </p>
                        <p className="font-bold text-ivory">Peito + Ombro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <NotebookText aria-hidden="true" className="size-5 text-gold" />
                    <p className="font-bold text-ivory">Rotina matinal</p>
                  </div>
                  <div className="grid gap-3">
                    {["Água + sol", "Planejamento", "Treino", "Leitura"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-md bg-black/20 px-3 py-2"
                        >
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                          <span className="size-2 rounded-full bg-gold" />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-5 font-bold text-ivory">Hábitos da semana</p>
                  <div className="grid gap-3">
                    {dashboardHabits.map((habit) => (
                      <div
                        key={habit.label}
                        className="grid grid-cols-[90px_1fr] items-center gap-3"
                      >
                        <span className="text-sm text-muted-foreground">
                          {habit.label}
                        </span>
                        <div className="grid grid-cols-7 gap-2">
                          {habit.values.map((done, index) => (
                            <span
                              key={`${habit.label}-${index}`}
                              className={`h-8 rounded-md border ${
                                done
                                  ? "border-gold/35 bg-gold/20"
                                  : "border-white/10 bg-white/[0.04]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
