"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { APIError } from "better-auth/api";

export async function signInEmailAction(formData: FormData) {

    const email = String(formData.get('email'));
    if (!email) return { error: 'Email is required' };

    const password = String(formData.get('password'));
    if (!password) return { error: 'Password is required' };

    try {
        await auth.api.signInEmail({
            headers: await headers(),
            body: {
                email,
                password,
            },
        });

        // TODO: clean up
        // const setCookieHeader = res.headers.get('set-cookie');

        // if (setCookieHeader) {
        //     const cookie = parseSetCookieHeader(setCookieHeader);
        //     const cookieStore = await cookies();

        //     const [key, cookieAttributes] = [...cookie.entries()][0];
        //     const { value, "max-age": maxAge, path, httpOnly, sameSite } = cookieAttributes;
        //     cookieStore.set(key, decodeURIComponent(value), { maxAge, path, httpOnly, sameSite });
        // }

        return { error: null }
    } catch (err) {
        if (err instanceof APIError) {
            return { error: err.message };
        }

        return { error: "Internal Server Error" };

    }

}