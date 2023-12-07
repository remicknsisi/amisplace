import { createClient } from "@/utils/supabase/middleware";
import { type NextRequest } from "next/server";

// From https://github.com/vercel/next.js/blob/canary/examples/with-supabase/middleware.ts
export async function middleware(request: NextRequest) {
    // Refresh session if expired - required for Server Components
    const { supabase, response } = createClient(request);
    const res = await supabase.auth.getSession();

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico or icon.png (favicon file)
         */
        "/((?!_next/static|_next/image|assets|favicon.ico|icon.png).*)",
    ],
};
