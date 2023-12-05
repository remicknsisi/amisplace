import { z } from "zod";

export const profileSchema = z.object({
    id: z.string().uuid(),
    first_name: z.string().min(0).max(1000),
    last_name: z.string().min(0).max(1000),
    location_full: z.string().min(0).max(1000),
    application_heard_from: z.string().min(0).max(1000),
    application_referral_first_name: z.string().min(0).max(1000),
    application_referral_last_name: z.string().min(0).max(1000),
    application_other: z.string().min(0).max(10_000),
    application_about: z.string().min(0).max(10_000),
});

export const profilePartialSchema = profileSchema
    .partial()
    .required({ id: true });

export type profilePartialType = z.infer<typeof profilePartialSchema>;
