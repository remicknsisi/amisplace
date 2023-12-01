import { createClient } from "@/utils/supabase/server";
import { listingSchema } from "@/utils/zod-schemas/listings";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PATCH(
    request: Request,
    { params: { id } }: { params: { id: string } }
) {
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
    const response = listingSchema
        .partial()
        .safeParse(Object.fromEntries(formData.entries()));
    if (!response.success) {
        // Probably want to parse the error before returning?
        return NextResponse.json({ error: response.error });
    }

    // TODO verify we have any fields set
    // TODO update listing
    console.log("Updating lisitng", id);
    return NextResponse.json({ success: true });
}
