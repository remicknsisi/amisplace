import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.log(error);
        // The error in the URL should probably be an enum that we match back to a string
        // We want to avoid people injecting whatever mesage they want
        return NextResponse.redirect(
            `${requestUrl.origin}/login?error=${error.message}`,
            {
                // a 301 status is required to redirect from a POST to a GET route
                status: 301,
            }
        );
    }
    console.log(data);

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    });
}
