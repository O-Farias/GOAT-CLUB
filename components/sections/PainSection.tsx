"use client";

import {
  BatteryLow,
  Compass,
  Flame,
  Repeat2,
  RouteOff,
  type LucideIcon
} from "lucide-react";

import { SectionBadge } from "@/components/shared/SectionBadge";

type Symptom = {
  icon: LucideIcon;
  label: string;
  title: string;
  signal: string;
  cost: string;
};

const automaticCycle = [
  {
    step: "01",
    title: "Começa forte",
    description: "A semana abre com energia, promessa e vontade de mudar."
  },
  {
    step: "02",
    title: "Perde o ritmo",
    description: "Um treino cai, uma meta atrasa e a rotina começa a negociar."
  },
  {
    step: "03",
    title: "Aceita o mínimo",
    description: "O padrão antigo volta silencioso porque ninguém está cobrando."
  },
  {
    step: "04",
    title: "Volta ao zero",
    description: "Você recomeça motivado, mas sem sistema para sustentar."
  }
] as const;

const symptoms: Symptom[] = [
  {
    icon: Repeat2,
    label: "Sintoma 01",
    title: "Constância instável",
    signal: "Começar forte e abandonar no meio virou um padrão silencioso.",
    cost: "Sem sequência, potencial continua sendo só intenção."
  },
  {
    icon: Compass,
    label: "Sintoma 02",
    title: "Direção difusa",
    signal: "Energia sem clareza cria movimento, mas não evolução real.",
    cost: "Você se ocupa muito e avança pouco no que importa."
  },
  {
    icon: BatteryLow,
    label: "Sintoma 03",
    title: "Rotina drenando foco",
    signal: "Hábitos fracos roubam corpo, mente, ambição e presença.",
    cost: "O dia termina cheio, mas sem a sensação de domínio."
  },
  {
    icon: Flame,
    label: "Sintoma 04",
    title: "Potencial sem ambiente",
    signal: "Você sabe que pode mais, mas tenta evoluir sozinho demais.",
    cost: "Sem cobrança, o padrão confortável sempre vence."
  }
];

export function PainSection() {
  return (
    <section id="beneficios" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_14%_18%,rgba(225,29,46,0.12),transparent_34%),radial-gradient(ellipse_at_88%_58%,rgba(212,175,55,0.12),transparent_32%)]" />

      <div className="section-shell">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.92fr_0.78fr] lg:items-end">
          <div className="flex min-w-0 max-w-3xl flex-col gap-5">
            <SectionBadge>Diagnóstico do automático</SectionBadge>
            <h2 className="max-w-full break-words text-2xl font-black leading-tight text-ivory sm:text-5xl">
              O problema não é falta de{" "}
              <span className="block sm:inline">
                potencial. É viver sem sistema.
              </span>
            </h2>
          </div>

          <div className="border-l border-gold/30 pl-5">
            <p className="max-w-[20rem] text-sm leading-6 text-muted-foreground sm:max-w-none sm:text-lg sm:leading-8">
              Você não precisa de mais uma dose de motivação. Precisa de clareza,
              rotina e um ambiente que torne a evolução impossível de ignorar.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            className="glass-panel relative min-h-[34rem] min-w-0 overflow-hidden rounded-lg p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(225,29,46,0.18),transparent_28%),radial-gradient(circle_at_82%_70%,rgba(212,175,55,0.16),transparent_30%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(245,240,230,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(245,240,230,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold">
                    O ciclo que trava
                  </p>
                  <h3 className="mt-3 max-w-lg text-2xl font-black leading-tight text-ivory sm:text-4xl">
                    A estagnação não chega de uma vez. Ela vira rotina.
                  </h3>
                </div>
                <span className="hidden size-14 shrink-0 items-center justify-center rounded-md border border-neon-red/35 bg-neon-red/10 text-neon-red shadow-red-soft sm:flex">
                  <RouteOff aria-hidden="true" className="size-6" />
                </span>
              </div>

              <div className="relative">
                <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold via-neon-red to-white/10 sm:block" />
                <div className="grid gap-3">
                  {automaticCycle.map((item) => (
                    <div
                      key={item.title}
                      className="relative rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-xl transition duration-300 hover:border-gold/30 hover:bg-gold/[0.055] sm:ml-10 sm:p-5"
                    >
                      <span className="absolute -left-[3.25rem] top-5 hidden size-10 items-center justify-center rounded-md border border-gold/30 bg-[#090909] text-xs font-black text-gold shadow-gold-soft sm:flex">
                        {item.step}
                      </span>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <h4 className="text-xl font-black text-ivory">
                          {item.title}
                        </h4>
                        <p className="max-w-md text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gold/25 bg-gold/[0.07] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                  A virada
                </p>
                <p className="mt-3 text-lg font-black leading-7 text-ivory">
                  O GOAT CLUB troca improviso por direção, cobrança e rotina
                  visível.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {symptoms.map((symptom) => {
              const Icon = symptom.icon;

              return (
                <article
                  key={symptom.title}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-premium-card backdrop-blur-xl transition duration-300 hover:border-gold/35 hover:bg-white/[0.055]"
                >
                  <div className="absolute -right-12 -top-10 h-28 w-44 rotate-12 bg-gold/10 blur-3xl transition duration-300 group-hover:bg-neon-red/12" />
                  <div className="relative z-10 flex h-full min-h-64 flex-col justify-between gap-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                        {symptom.label}
                      </span>
                      <span className="flex size-11 items-center justify-center rounded-md border border-gold/20 bg-gold/10 text-gold">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black leading-tight text-ivory">
                        {symptom.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {symptom.signal}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-neon-red">
                        Custo oculto
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ivory/80">
                        {symptom.cost}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
