import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Login() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        redirect("/account");
    }
    return (
        <div className="w-full max-w-xs">
            <form
                action="/auth/login"
                method="post"
                className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
            >
                <div className="mb-4">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="email"
                    >
                        Username
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        name="email"
                        type="text"
                        placeholder="email"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        name="password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
                        Sign In
                    </button>
                    <button
                        formAction="/auth/sign-up"
                        className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </div>
                <a
                    className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                    href="/auth/forgot"
                >
                    Forgot Password?
                </a>
            </form>
        </div>
    );
}
