import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

// TODO add necessary fields
const ListingSchema = z.object({
    description: z.string().min(0).max(1000),
    price: z.number().min(0).max(10_000),
    available_dates: z.string().min(0).max(1000),
});

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        return NextResponse.redirect(`${requestUrl.origin}/login`, {
            // a 301 status is required to redirect from a POST to a GET route
            status: 301,
        });
    }

    const formData = await request.formData();
    const response = ListingSchema.safeParse(
        Object.fromEntries(formData.entries())
    );
    if (!response.success) {
        // Probably want to parse the error before returning?
        return NextResponse.json({ error: response.error });
    }

    // TODO create listing
    return NextResponse.json({ success: true });
}

export async function PATCH(request: Request) {
    const requestUrl = new URL(request.url);

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        return NextResponse.redirect(`${requestUrl.origin}/login`, {
            // a 301 status is required to redirect from a POST to a GET route
            status: 301,
        });
    }

    const formData = await request.formData();
    const response = ListingSchema.partial().safeParse(
        Object.fromEntries(formData.entries())
    );
    if (!response.success) {
        // Probably want to parse the error before returning?
        return NextResponse.json({ error: response.error });
    }

    // TODO verify we have any fields set
    // TODO update listing
    return NextResponse.json({ success: true });
}
