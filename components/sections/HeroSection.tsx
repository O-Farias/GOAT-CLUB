"use client";

import { type PointerEvent, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring
} from "framer-motion";
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
    eyebrow: "sequência ativa",
    insight: "+7 dias no mês",
    rhythm: "aceso",
    icon: Flame,
    path: "M6 124 C 48 118, 72 96, 108 94 S 164 114, 198 76 S 262 44, 304 56 S 360 36, 414 20",
    dot: { cx: 414, cy: 20 }
  },
  {
    label: "Disciplina",
    text: "92%",
    eyebrow: "consistência geral",
    insight: "+18% na semana",
    rhythm: "alto",
    icon: ShieldCheck,
    path: "M6 126 C 50 110, 72 92, 104 98 S 162 126, 198 86 S 260 58, 302 64 S 360 36, 414 18",
    dot: { cx: 414, cy: 18 }
  },
  {
    label: "Meta semanal",
    text: "5/7 concluídas",
    eyebrow: "execução semanal",
    insight: "5/7 concluídas",
    rhythm: "no alvo",
    icon: CalendarCheck2,
    path: "M6 130 C 52 120, 72 112, 104 96 S 158 74, 198 82 S 262 62, 306 48 S 366 40, 414 28",
    dot: { cx: 414, cy: 28 }
  },
  {
    label: "Treino de hoje",
    text: "Peito + Ombro",
    eyebrow: "treino de hoje",
    insight: "Peito + Ombro",
    rhythm: "pronto",
    icon: Dumbbell,
    path: "M6 112 C 48 86, 72 70, 110 76 S 164 98, 202 70 S 262 42, 304 46 S 362 24, 414 14",
    dot: { cx: 414, cy: 14 }
  }
] as const;

const proofCards = [
  ["+120", "membros fundadores"],
  ["5", "pilares de evolução"],
  ["24/7", "rotina acompanhada"]
] as const;

export function HeroSection() {
  const [activeMetricIndex, setActiveMetricIndex] = useState(1);
  const activeMetric = metricCards[activeMetricIndex];
  const panelRotateX = useSpring(useMotionValue(2), {
    stiffness: 170,
    damping: 24
  });
  const panelRotateY = useSpring(useMotionValue(-6), {
    stiffness: 170,
    damping: 24
  });
  const glowX = useMotionValue(72);
  const glowY = useMotionValue(25);
  const interactiveGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212,175,55,0.2), transparent 30%), linear-gradient(135deg, rgba(212,175,55,0.14), transparent 31%, rgba(225,29,46,0.12))`;

  const handlePanelPointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    panelRotateX.set(5 - y * 8);
    panelRotateY.set(-10 + x * 8);
    glowX.set(Math.round(x * 100));
    glowY.set(Math.round(y * 100));
  };

  const resetPanelTilt = () => {
    panelRotateX.set(2);
    panelRotateY.set(-6);
    glowX.set(72);
    glowY.set(25);
  };

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
          <motion.div
            data-hero-panel="true"
            onPointerLeave={resetPanelTilt}
            onPointerMove={handlePanelPointerMove}
            className="relative overflow-hidden rounded-lg border border-gold/30 bg-[#080808]/58 p-4 shadow-premium-card backdrop-blur-2xl [box-shadow:0_28px_76px_rgba(0,0,0,0.48),inset_0_0_54px_rgba(212,175,55,0.06)] [transform-style:preserve-3d] sm:p-6 lg:[transform:rotateY(-6deg)_rotateX(2deg)]"
            style={{
              rotateX: panelRotateX,
              rotateY: panelRotateY
            }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ background: interactiveGlow }}
            />
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
                <button
                  type="button"
                  aria-label="Alternar foco do painel de evolução"
                  onClick={() =>
                    setActiveMetricIndex(
                      (current) => (current + 1) % metricCards.length
                    )
                  }
                  className="group flex size-12 items-center justify-center rounded-md border border-neon-red/35 bg-neon-red/10 text-neon-red shadow-red-soft transition duration-300 hover:border-neon-red/70 hover:bg-neon-red/15 focus:outline-none focus:ring-2 focus:ring-neon-red/45"
                >
                  <Target aria-hidden="true" className="size-5" />
                </button>
              </div>

              <div className="relative mb-4 h-52 overflow-hidden rounded-lg border border-gold/20 bg-black/25 p-4 [box-shadow:0_18px_38px_rgba(0,0,0,0.28),inset_0_0_34px_rgba(212,175,55,0.045)] lg:[transform:translateZ(34px)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(212,175,55,0.2),transparent_32%),radial-gradient(circle_at_28%_72%,rgba(225,29,46,0.16),transparent_34%)]" />
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(245,240,230,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(245,240,230,0.07)_1px,transparent_1px)] [background-size:40px_40px]" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">
                      {activeMetric.eyebrow}
                    </p>
                    <motion.p
                      key={activeMetric.insight}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28 }}
                      className="mt-2 text-4xl font-black text-ivory"
                    >
                      {activeMetric.insight}
                    </motion.p>
                  </div>
                  <div className="rounded-md border border-gold/20 bg-gold/10 px-3 py-2 text-right">
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">
                      ritmo
                    </p>
                    <motion.p
                      key={activeMetric.rhythm}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.24 }}
                      className="mt-1 text-sm font-black text-ivory"
                    >
                      {activeMetric.rhythm}
                    </motion.p>
                  </div>
                </div>

                <svg
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-4 h-28 w-[calc(100%-2rem)] overflow-visible"
                  viewBox="0 0 420 150"
                >
                  <motion.path
                    key={`${activeMetric.label}-line-glow`}
                    d={activeMetric.path}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.72, ease: "easeOut" }}
                    stroke="rgba(212,175,55,0.95)"
                    strokeLinecap="round"
                    strokeWidth="6"
                  />
                  <motion.path
                    key={`${activeMetric.label}-line-soft`}
                    d={activeMetric.path}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.72, ease: "easeOut" }}
                    stroke="rgba(212,175,55,0.28)"
                    strokeLinecap="round"
                    strokeWidth="18"
                  />
                  <circle
                    cx={activeMetric.dot.cx}
                    cy={activeMetric.dot.cy}
                    fill="#e11d2e"
                    r="7"
                  />
                  <circle
                    className="animate-soft-pulse"
                    cx={activeMetric.dot.cx}
                    cy={activeMetric.dot.cy}
                    fill="none"
                    r="16"
                    stroke="#e11d2e"
                    strokeOpacity="0.45"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {metricCards.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.button
                      type="button"
                      key={metric.label}
                      aria-pressed={activeMetricIndex === index}
                      onClick={() => setActiveMetricIndex(index)}
                      onFocus={() => setActiveMetricIndex(index)}
                      onMouseEnter={() => setActiveMetricIndex(index)}
                      className="group rounded-lg border border-white/10 bg-white/[0.045] p-4 text-left backdrop-blur-xl transition duration-300 [box-shadow:0_14px_28px_rgba(0,0,0,0.18),inset_0_0_24px_rgba(212,175,55,0.035)] hover:border-gold/40 hover:bg-gold/[0.08] focus:outline-none focus:ring-2 focus:ring-gold/40 aria-pressed:border-gold/45 aria-pressed:bg-gold/[0.09] lg:[transform:translateZ(18px)]"
                      animate={{
                        y: activeMetricIndex === index ? -3 : 0
                      }}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        duration: 0.24,
                        ease: "easeOut"
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
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
