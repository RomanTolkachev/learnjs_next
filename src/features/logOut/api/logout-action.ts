"use server"

import { parseSetCookie } from "@/features/auth/lib";
import { logOut } from "@/shared/api";
import { cookies } from "next/headers";

type TResponse = {
    message: string
    isError: boolean
}

export const tryLogOut = async (): Promise<TResponse> => {

    try {

        const res = await logOut();

        if (!res.ok) {
            return {
                message: `${await res.json()}, ${res.status}`,
                isError: false,
            }
        }

        const cookiesStore = await cookies();
        const setCookieHeader = res.headers.getSetCookie();

        if (setCookieHeader) {
            const parsed = parseSetCookie(setCookieHeader);
            for (const cookie of parsed) {
                if (cookie.value === "") {  // мне кажется, тут будет проще на БЭКе сделать expires(0)
                    cookiesStore.set(cookie.name, cookie.value, {
                        ...cookie.options,
                        maxAge: 0
                    });
                } else {
                    cookiesStore.set(cookie.name, cookie.value, cookie.options);
                }
            }
        }

        return {
            isError: false,
            message: "success"
        }

    } catch (err) {
        return {
            isError: true,
            message: String(err) ?? "ошибка"
        }
    }

}