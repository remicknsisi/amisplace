import { createClient } from "@/utils/supabase/middleware";
import { type NextRequest } from "next/server";

// From https://github.com/vercel/next.js/blob/canary/examples/with-supabase/middleware.ts
export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request);

    // Refresh session if expired - required for Server Components
    await supabase.auth.getSession();

    return response;
}
