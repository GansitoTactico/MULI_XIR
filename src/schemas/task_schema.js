import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Titulo es requerido",
  }),
  descripcion: z.string({
    required_error: "La descripcion es obligatoria",
  }),
  date: z.string().datetime().optional(),
});
