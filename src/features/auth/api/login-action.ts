"use server"

import { cookies } from "next/headers";
import { LoginFormState } from "../model";
import { parseSetCookie } from "../lib";

export const tryLogin = async (prevState: LoginFormState, formData: FormData) => {
    const login = formData.get("login")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (!login) {
        return {
            fieldErrors: {
                login: "введите логин"
            }
        }
    }

    if (!password) {
        return {
            fieldErrors: {
                password: "введите пароль"
            }
        }
    }

    try {
        const result = await fetch('http://localhost:4000/api/auth/login', {
            method: "POST",
            body: JSON.stringify({
                login,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!result.ok) {
            return { error: "invalid login or password" }
        }

        const cookiesStore = await cookies();
        const setCookieHeader = result.headers.getSetCookie();

        if (setCookieHeader) {
            const parsed = parseSetCookie(setCookieHeader);
            for (const cookie of parsed) {
                cookiesStore.set(cookie.name, cookie.value, cookie.options)
            }
        }

        return { success: true };

    } catch (err: unknown) {
        const errorMessage = err instanceof Error
            ? err.message
            : typeof err === 'string'
                ? err
                : 'Unknown error';

        return { error: errorMessage };
    }

}