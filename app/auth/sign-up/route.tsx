import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${requestUrl.origin}/auth/callback`,
        },
    });

    if (error) {
        return NextResponse.redirect(
            // The error in the URL should probably be an enum that we match back to a string
            // We want to avoid people injecting whatever mesage they want
            `${requestUrl.origin}/login?error=${error.message}`,
            {
                // a 301 status is required to redirect from a POST to a GET route
                status: 301,
            }
        );
    }

    // This is a hacky way to check if the user has already registered.
    // See details at https://github.com/supabase/supabase-js/issues/296
    if (data?.user?.identities?.length === 0) {
        return NextResponse.redirect(
            `${requestUrl.origin}/login?alreadyExists=true`,
            {
                // a 301 status is required to redirect from a POST to a GET route
                status: 301,
            }
        );
    }

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    });
}
