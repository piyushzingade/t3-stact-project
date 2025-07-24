import { z } from "zod";

export const showSchema = z.object({
  title:z.string().min(5),
  description: z.string().min(10),
  thumbnail : z.string(),
  price: z.number().min(1),
  location: z.string().min(3),
  date: z.string(),
});
