import { type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

// From https://github.com/vercel/next.js/blob/canary/examples/with-supabase/middleware.ts
export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request);

    // Refresh session if expired - required for Server Components
    await supabase.auth.getSession();

    return response;
}
