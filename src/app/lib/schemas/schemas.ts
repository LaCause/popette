import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Le prénom est requis").max(100),
  email: z.string().email("Adresse email invalide").max(100),
  message: z.string().min(1, "Le message est requis").max(1000),
  company: z.string().optional(), // honeypot invisible
});

export const postSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date invalide",
  }),
  image: z.string().url().optional(),
  content: z.string().min(1),
  excerpt: z.string().optional(), // facultatif
});

export type ContactFormData = z.infer<typeof contactSchema>;
