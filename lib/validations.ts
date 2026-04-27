import { z } from "zod";
import { waitlistObjectives } from "@/lib/constants";

export const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome.")
    .max(80, "Use um nome mais curto."),
  email: z.string().email("Informe um e-mail válido."),
  age: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.coerce
      .number({
        required_error: "Informe sua idade.",
        invalid_type_error: "Informe sua idade."
      })
      .int("Informe uma idade válida.")
      .min(18, "A idade mínima recomendada é 18 anos.")
      .max(99, "Informe uma idade válida.")
  ),
  objective: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.enum(waitlistObjectives, {
      required_error: "Selecione seu principal objetivo.",
      invalid_type_error: "Selecione seu principal objetivo."
    })
  )
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
