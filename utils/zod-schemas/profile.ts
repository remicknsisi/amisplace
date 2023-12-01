import { z } from "zod";

// TODO add necessary fields
export const profileSchema = z.object({
    first_name: z.string().min(0).max(1000),
    last_name: z.string().min(0).max(1000),
    application_heard_from: z.string().min(0).max(1000),
    application_other: z.string().min(0).max(10_000),
});
