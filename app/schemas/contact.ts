import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(100, "Name is too long"),
  email: z.email("Invalid email address"),
  subject: z.string().min(2).max(100, "Subject is too long"),
  message: z.string().min(10, "Message is too short"),
});

export type ContactSchemaType = z.output<typeof ContactSchema>;
