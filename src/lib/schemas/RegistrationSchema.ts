import * as z from "zod";

export const RegistrationSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type RegistrationType = z.infer<typeof RegistrationSchema>;
