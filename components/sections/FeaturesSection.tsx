"use client";

import { useState } from "react";
import {
  BadgeCheck,
  BookOpenText,
  CalendarDays,
  CheckCircle2,
  Dumbbell,
  Target,
  UsersRound,
  Utensils,
  type LucideIcon
} from "lucide-react";

import { SectionBadge } from "@/components/shared/SectionBadge";
import { cn } from "@/lib/utils";

type SystemPillar = {
  icon: LucideIcon;
  label: string;
  title: string;
  short: string;
  description: string;
  mission: string;
  rhythm: string;
  progress: number;
  checklist: string[];
};

const systemPillars: SystemPillar[] = [
  {
    icon: BookOpenText,
    label: "01",
    title: "Conteúdos diários",
    short: "Mente treinada",
    description:
      "Artigos, vídeos e reflexões entram como munição diária para clareza, disciplina e tomada de decisão.",
    mission: "Ler 1 reflexão e registrar uma decisão prática para o dia.",
    rhythm: "diário",
    progress: 86,
    checklist: ["Leitura guiada", "Reflexão aplicada", "Registro de evolução"]
  },
  {
    icon: CalendarDays,
    label: "02",
    title: "Metas e calendário",
    short: "Semana no trilho",
    description:
      "Objetivos deixam de ficar soltos e viram agenda, prioridade e execução acompanhada.",
    mission: "Definir 3 entregas da semana e bloquear horário para cada uma.",
    rhythm: "semanal",
    progress: 72,
    checklist: ["Objetivo claro", "Agenda protegida", "Revisão semanal"]
  },
  {
    icon: BadgeCheck,
    label: "03",
    title: "Hábitos e disciplina",
    short: "Constância visível",
    description:
      "Acompanhe sua sequência, identifique quedas de ritmo e transforme disciplina em evidência.",
    mission: "Completar o bloco essencial antes de qualquer distração.",
    rhythm: "24/7",
    progress: 92,
    checklist: ["Sequência ativa", "Alertas de queda", "Recomeço rápido"]
  },
  {
    icon: Dumbbell,
    label: "04",
    title: "Treinos",
    short: "Corpo em movimento",
    description:
      "Rotinas físicas colocam energia, presença e consistência no mesmo sistema de evolução.",
    mission: "Concluir o treino principal e registrar carga ou intensidade.",
    rhythm: "4x semana",
    progress: 68,
    checklist: ["Plano do dia", "Execução registrada", "Progressão acompanhada"]
  },
  {
    icon: Utensils,
    label: "05",
    title: "Nutrição",
    short: "Performance sustentada",
    description:
      "Sugestões simples de alimentação ajudam a manter energia sem transformar rotina em complicação.",
    mission: "Planejar a refeição base e bater a meta de hidratação.",
    rhythm: "diário",
    progress: 64,
    checklist: ["Refeição base", "Hidratação", "Energia estável"]
  },
  {
    icon: UsersRound,
    label: "06",
    title: "Comunidade",
    short: "Ambiente de cobrança",
    description:
      "Evoluir ao lado de homens comprometidos reduz isolamento e aumenta responsabilidade real.",
    mission: "Compartilhar uma vitória e uma pendência com o grupo.",
    rhythm: "ao vivo",
    progress: 79,
    checklist: ["Grupo ativo", "Cobrança direta", "Vitórias compartilhadas"]
  }
];

export function FeaturesSection() {
  const [activePillarIndex, setActivePillarIndex] = useState(2);
  const activePillar = systemPillars[activePillarIndex];
  const ActiveIcon = activePillar.icon;

  return (
    <section className="relative overflow-hidden bg-[#050806] py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_12%_18%,rgba(225,29,46,0.08),transparent_34%),radial-gradient(ellipse_at_78%_18%,rgba(116,138,76,0.18),transparent_36%),linear-gradient(180deg,rgba(6,12,8,0.94)_0%,rgba(4,7,5,1)_58%,rgba(5,5,5,1)_100%)]" />
      <div className="absolute inset-0 -z-0 opacity-25 [background-image:linear-gradient(rgba(205,220,160,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(205,220,160,0.055)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="section-shell relative z-10">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
          <div className="flex min-w-0 max-w-3xl flex-col gap-5">
            <SectionBadge>Sistema GOAT</SectionBadge>
            <h2 className="max-w-full break-words text-3xl font-black leading-tight text-ivory sm:text-5xl">
              O sistema que tira sua evolução do improviso.
            </h2>
          </div>

          <div className="border-l border-gold/30 pl-5">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Seis pilares trabalham juntos para transformar intenção em rotina:
              mente, agenda, disciplina, corpo, energia e ambiente.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="relative min-w-0 overflow-hidden rounded-lg border border-[#84945d]/30 bg-[#081009]/90 p-5 shadow-premium-card backdrop-blur-xl sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(212,175,55,0.2),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(116,138,76,0.24),transparent_32%)]" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(245,240,230,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(245,240,230,0.055)_1px,transparent_1px)] [background-size:42px_42px]" />

            <div className="relative z-10 flex flex-col gap-7">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                    Pilar ativo {activePillar.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight text-ivory sm:text-4xl">
                    {activePillar.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                    {activePillar.description}
                  </p>
                </div>

                <span className="flex size-14 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/10 text-gold shadow-gold-soft">
                  <ActiveIcon aria-hidden="true" className="size-6" />
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.8fr_1fr]">
                <div className="rounded-lg border border-white/10 bg-black/24 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b6c486]">
                    Foco da semana
                  </p>
                  <p className="mt-3 text-xl font-black leading-8 text-ivory">
                    {activePillar.mission}
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/24 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b6c486]">
                        Ritmo
                      </p>
                      <p className="mt-2 text-2xl font-black text-ivory">
                        {activePillar.rhythm}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                        progresso
                      </p>
                      <p className="mt-2 text-3xl font-black text-ivory">
                        {activePillar.progress}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#87965c] via-gold to-[#f1d774] transition-[width] duration-500"
                      style={{ width: `${activePillar.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {activePillar.checklist.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-20 items-start gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-gold"
                    />
                    <p className="text-sm font-bold leading-6 text-ivory/90">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-3 sm:grid-cols-2">
            {systemPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activePillarIndex === index;

              return (
                <button
                  key={pillar.title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActivePillarIndex(index)}
                  onFocus={() => setActivePillarIndex(index)}
                  onMouseEnter={() => setActivePillarIndex(index)}
                  className={cn(
                    "group relative min-h-40 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 text-left shadow-premium-card backdrop-blur-xl transition duration-300 hover:border-gold/40 hover:bg-[#87965c]/10 focus:outline-none focus:ring-2 focus:ring-gold/40",
                    isActive &&
                      "border-gold/45 bg-[#87965c]/12 [box-shadow:0_24px_70px_rgba(0,0,0,0.36),inset_0_0_42px_rgba(212,175,55,0.08)]"
                  )}
                >
                  <div className="absolute -right-14 -top-12 h-28 w-48 rotate-12 bg-[#87965c]/12 blur-3xl transition duration-300 group-hover:bg-gold/14" />
                  <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
                          Pilar {pillar.label}
                        </p>
                        <p className="mt-2 text-sm font-bold text-[#b8c39a]">
                          {pillar.short}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-gold transition duration-300",
                          isActive && "border-gold/35 bg-gold/12"
                        )}
                      >
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black leading-tight text-ivory">
                        {pillar.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                          <span
                            className={cn(
                              "block h-full rounded-full transition-all duration-500",
                              isActive
                                ? "w-full bg-gold"
                                : "w-1/3 bg-[#87965c]/70"
                            )}
                          />
                        </span>
                        <Target
                          aria-hidden="true"
                          className={cn(
                            "size-4 text-muted-foreground transition duration-300",
                            isActive && "text-gold"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
