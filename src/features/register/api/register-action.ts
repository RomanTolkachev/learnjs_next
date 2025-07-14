"use server"

import { parseSetCookie } from "@/shared/api";
import { cookies } from "next/headers";
import { defaultState, TRegisterState } from "../model";

export const tryRegister = async (_: TRegisterState, formData: FormData) => {
    const login = formData.get("login")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (!login) {
        return {
            ...defaultState,
            fieldErrors: {
                login: "введите логин",
                password: ""
            }
        }
    }

    if (!password) {
        return {
            ...defaultState,
            fieldErrors: {
                login: "",
                password: "придумайте пароль"
            }
        }
    }

    try {
        const result = await fetch('http://localhost:4000/api/auth/signup', {
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
            return {
                ...defaultState,
                error: await result.json() ?? "ошибка"
            }
        }

        const cookiesStore = await cookies();
        const setCookieHeader = result.headers.getSetCookie();

        if (setCookieHeader) {
            const parsed = parseSetCookie(setCookieHeader);
            for (const cookie of parsed) {
                cookiesStore.set(cookie.name, cookie.value, cookie.options)
            }
        }

        return {...defaultState, success: true };

    } catch (err: unknown) {
        const errorMessage = err instanceof Error
            ? err.message
            : typeof err === 'string'
                ? err
                : 'Unknown error';

        return {...defaultState, error: errorMessage };
    }

}