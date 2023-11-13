import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// From https://github.com/vercel/next.js/blob/canary/examples/with-supabase/app/auth/callback/route.ts
// From https://supabase.com/docs/guides/auth/server-side/oauth-with-pkce-flow-for-ssr
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";

    if (code) {
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            return NextResponse.redirect(next);
        }
    }

    // return the user to an error page with instructions
    // TODO: Implement auth-code-error page
    return NextResponse.redirect("/auth/auth-code-error");
}
