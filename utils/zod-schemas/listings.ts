import { z } from "zod";

// TODO add necessary fields
export const listingSchema = z.object({
    description: z.string().min(0).max(1000),
    price: z.number().min(0).max(10_000),
    available_dates: z.string().min(0).max(1000),
});
