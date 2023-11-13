import { createClient } from "@/utils/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// From https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const token_hash = searchParams.get("token_hash");
    // TODO support token here (not just token_hash)
    const type = searchParams.get("type") as EmailOtpType | null;
    const next = searchParams.get("next") ?? "/";

    if (token_hash && type) {
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        });
        if (!error) {
            return NextResponse.redirect(next);
        }
    }

    // return the user to an error page with some instructions
    return NextResponse.redirect("/auth/auth-code-error");
}
