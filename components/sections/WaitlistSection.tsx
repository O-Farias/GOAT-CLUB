"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SectionBadge } from "@/components/shared/SectionBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { waitlistObjectives } from "@/lib/constants";
import {
  type WaitlistFormValues,
  waitlistSchema
} from "@/lib/validations";

async function createWaitlistLead(values: WaitlistFormValues) {
  const payload = {
    ...values,
    source: "goat-club-landing",
    createdAt: new Date().toISOString()
  };

  return payload;
}

export function WaitlistSection() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: ""
    }
  });

  const onSubmit = async (values: WaitlistFormValues) => {
    await createWaitlistLead(values);
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSuccess(true);
    reset();
  };

  return (
    <section id="lista-de-espera" className="relative py-20 sm:py-28">
      <div className="section-shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <SectionBadge>Lista de espera</SectionBadge>
          <h2 className="text-4xl font-black leading-tight text-ivory sm:text-5xl">
            Entre para a lista de espera.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Seja um dos primeiros membros do GOAT CLUB e receba acesso antecipado
            à comunidade.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Acesso antecipado", "Comunidade privada", "Founders drop"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-ivory"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel rounded-lg p-5 sm:p-7"
        >
          {success ? (
            <div
              role="status"
              className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold shadow-gold-soft">
                <CheckCircle2 aria-hidden="true" className="size-8" />
              </div>
              <div className="flex max-w-md flex-col gap-3">
                <h3 className="text-3xl font-black text-ivory">
                  Bem-vindo ao próximo nível.
                </h3>
                <p className="leading-7 text-muted-foreground">
                  Você entrou para a lista de espera do GOAT CLUB. Bem-vindo ao
                  próximo nível.
                </p>
              </div>
              <Button variant="outline" onClick={() => setSuccess(false)}>
                Cadastrar outro nome
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-5"
              noValidate
            >
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="text-sm text-neon-red">{errors.name.message}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="voce@email.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="text-sm text-neon-red">{errors.email.message}</p>
                ) : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="age">Idade</Label>
                  <Input
                    id="age"
                    type="number"
                    inputMode="numeric"
                    placeholder="Ex: 24"
                    aria-invalid={Boolean(errors.age)}
                    {...register("age")}
                  />
                  {errors.age ? (
                    <p className="text-sm text-neon-red">{errors.age.message}</p>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="objective">Principal objetivo</Label>
                  <Select
                    id="objective"
                    aria-invalid={Boolean(errors.objective)}
                    defaultValue=""
                    {...register("objective")}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {waitlistObjectives.map((objective) => (
                      <option key={objective} value={objective}>
                        {objective}
                      </option>
                    ))}
                  </Select>
                  {errors.objective ? (
                    <p className="text-sm text-neon-red">
                      {errors.objective.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                variant="premium"
                disabled={isSubmitting}
                aria-label="Quero fazer parte da lista de espera"
                className="mt-2 w-full"
              >
                {isSubmitting ? "Enviando..." : "Quero fazer parte"}
                <Send aria-hidden="true" data-icon="inline-end" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
