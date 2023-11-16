import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        return NextResponse.redirect(`${requestUrl.origin}/account`, {
            // a 301 status is required to redirect from a POST to a GET route
            status: 301,
        });
    }
    // TODO Deal with errors
    await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${requestUrl.origin}/reset/new`,
    });
    return NextResponse.json({ success: true });
}
