import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const newPassword = String(formData.get("password"));
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
    const { error } = await supabase.auth.updateUser({
        password: newPassword,
    });
    if (error) {
        return NextResponse.json({ success: false, error });
    }
    return NextResponse.json({ success: true });
}
