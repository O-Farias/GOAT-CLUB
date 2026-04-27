"use client";

import {
  BatteryLow,
  Compass,
  Flame,
  Repeat2,
  type LucideIcon
} from "lucide-react";

import { GlowCard } from "@/components/shared/GlowCard";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { painPoints } from "@/lib/constants";

const painIcons: Record<(typeof painPoints)[number]["icon"], LucideIcon> = {
  Repeat2,
  Compass,
  BatteryLow,
  Flame
};

export function PainSection() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <SectionBadge>O ponto de virada</SectionBadge>
          <h2 className="text-4xl font-black leading-tight text-ivory sm:text-5xl">
            Pare de viver no automático.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            A maioria dos homens não falha por falta de potencial, mas por falta
            de constância, direção e foco no que realmente importa.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((pain, index) => {
            const Icon = painIcons[pain.icon];

            return (
              <GlowCard
                key={pain.title}
                glow={index === 3 ? "red" : "neutral"}
                className="min-h-60"
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="relative z-10 flex h-full flex-col gap-5">
                  <span className="flex size-12 items-center justify-center rounded-md border border-gold/20 bg-gold/10 text-gold">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-ivory">{pain.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
