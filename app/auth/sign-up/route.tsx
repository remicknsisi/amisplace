import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const firstName = String(formData.get("firstName"));
    const lastName = String(formData.get("lastName"));
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName,
            },
        },
    });

    if (error) {
        return NextResponse.json({ success: false });
    }

    // This is a hacky way to check if the user has already registered.
    // See details at https://github.com/supabase/supabase-js/issues/296
    // Apparently we could use the prod API key to get a better error message instead
    if (data?.user?.identities?.length === 0) {
        // TODO: should probably be using some shared ENUM here
        return NextResponse.json({ success: false, alreadyInUse: true });
    }

    return NextResponse.json({ success: true });
}
