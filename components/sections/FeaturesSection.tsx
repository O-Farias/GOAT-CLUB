"use client";

import {
  BadgeCheck,
  BookOpenText,
  CalendarDays,
  Dumbbell,
  UsersRound,
  Utensils,
  type LucideIcon
} from "lucide-react";

import { GlowCard } from "@/components/shared/GlowCard";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { features } from "@/lib/constants";

const featureIcons: Record<(typeof features)[number]["icon"], LucideIcon> = {
  BookOpenText,
  CalendarDays,
  BadgeCheck,
  Dumbbell,
  Utensils,
  UsersRound
};

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:max-w-3xl">
          <SectionBadge>Benefícios</SectionBadge>
          <h2 className="text-4xl font-black leading-tight text-ivory sm:text-5xl">
            Tudo que você precisa para evoluir em um só lugar.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon];

            return (
              <GlowCard
                key={feature.title}
                glow={index === 4 ? "gold" : index === 5 ? "red" : "neutral"}
                className="min-h-64"
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                  <div className="flex size-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-gold">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-black text-ivory">
                      {feature.title}
                    </h3>
                    <p className="leading-7 text-muted-foreground">
                      {feature.description}
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
