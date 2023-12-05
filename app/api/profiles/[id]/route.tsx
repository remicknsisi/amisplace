import { createClient } from "@/utils/supabase/server";
import { profileSchema } from "@/utils/zod-schemas/profile";
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

    // TODO: allow if admin?
    if (session.user.id != id) {
        return NextResponse.json(
            { error: "Unauthorized action" },
            { status: 401 }
        );
    }

    const formData = await request.formData();
    const formDataParsed = profileSchema
        .partial()
        .safeParse(Object.fromEntries(formData.entries()));
    if (!formDataParsed.success) {
        // Probably want to parse the error before returning?
        return NextResponse.json({ error: formDataParsed.error });
    }
    // TODO: should do some checks on what field can be updated depending on the user's status
    const { error } = await supabase
        .from("profiles")
        .update(formDataParsed.data)
        .eq("id", id);

    if (error) {
        return NextResponse.json({ error });
    }

    console.log("Updated profile", id);
    return NextResponse.json({ success: true });
}
