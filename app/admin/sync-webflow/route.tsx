import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export async function GET() {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        return NextResponse.json({ error: "Not logged in" }, { status: 400 });
    }

    const { data, error } = await supabase.functions.invoke("webflow_homes");
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // TODO insert logic to upsert all homes from webflow here

    return NextResponse.json(data);
}
