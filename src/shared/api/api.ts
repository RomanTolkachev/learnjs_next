import { IProduct, TUser } from "@/entities";
import { Response } from "./types"
import { URLSearchParams } from "url";
import { cookies } from "next/headers";
import { API_URL } from "../config";

export const getTop10 = async (): Promise<Response<IProduct[]>> => {
    const cookieStore = await cookies();
    try {
        const res = await fetch(`${API_URL}/top-10`, {
            next: { tags: ["getTop10"] },
            headers: {
                Cookie: cookieStore.toString(),
            }
        },)
        if (res.status === 404) {
            return { data: undefined, isError: false }
        }
        if (!res.ok) {
            return { data: undefined, isError: true }
        }
        return { data: await res.json(), isError: false }
    } catch (err) {
        console.error("Сервер не отвечает", err);
        return { data: undefined, isError: true }
    }
}


type params = {
    page?: number,
    limit?: number
    brand?: string
}

export async function getProducts({ page, limit, brand }: params): Promise<Response<IProduct[]>> {
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
    })
    if (brand) {
        params.set("brand", String(brand))
    }

    const cookieStore = await cookies();

    try {
        let res = await fetch(`${API_URL}/products?${params}`, {
            headers: {
                Cookie: cookieStore.toString(),
            },
        })
        if (!res.ok) {
            return {
                isError: true,
                data: undefined
            }
        }
        if (res.status === 404) {
            return {
                isError: false,
                data: undefined
            }
        }
        return {
            isError: false,
            data: await res.json()
        }
    } catch (err) {
        console.error("Сервер не отвечает", err);
        return {
            isError: true,
            data: undefined
        }
    }
}

type propParam = {
    id: string | number
}

export async function getProduct({ id }: propParam): Promise<Response<IProduct>> {

    const cookieStore = await cookies();
    try {
        const res = await fetch(`${API_URL}/product/${id}`, {
            headers: {
                Cookie: cookieStore.toString()
            }
        })
        if (!res.ok) {
            return {
                isError: true,
                data: undefined
            }
        }
        if (res.status === 404) {
            return {
                isError: false,
                data: undefined
            }
        }
        return {
            isError: false,
            data: (await res.json()).product
        }
    } catch (err) {
        return {
            isError: true,
            data: undefined
        }
    }
}

export async function getProductMeta({ id }: propParam): Promise<Response<IProduct>> {
    try {
        const res = await fetch(`${API_URL}/meta/product/${id}`)
        if (!res.ok) {
            return {
                isError: true,
                data: undefined
            }
        }
        if (res.status === 404) {
            return {
                isError: false,
                data: undefined
            }
        }
        return {
            isError: false,
            data: (await res.json()).product
        }
    } catch (err) {
        return {
            isError: true,
            data: undefined
        }
    }
}

export const getUser = async (): Promise<Response<TUser>> => {

    const cookieStorage = await cookies();

    try {
        const res = await fetch(`${API_URL}/auth/user`, {
            credentials: "include",
            headers: {
                Cookie: cookieStorage.toString(),
            }
        })

        if (res.status === 401) {
            return {
                isError: false,
                data: undefined
            }
        }
        return {
            isError: false,
            data: (await res.json()).user
        }
    } catch {
        return {
            isError: true,
            data: undefined
        }
    }
}

export const logOut = async (): Promise<globalThis.Response> => {
    const cookieStorage = await cookies();
    return fetch(`${API_URL}/auth/logout`, {
        credentials: "include",
        method: "DELETE",
        headers: {
            Cookie: cookieStorage.toString(),
        }
    })
}

export type TBrand = {
    id: number,
    name: string
}

export const getBrands = async (): Promise<Response<TBrand[]>> => {
    try {
        const res = await fetch(`${API_URL}/brands`)

        if (!res.ok) {
            return {
                isError: true,
                data: undefined
            }
        }

        return {
            isError: false,
            data: await res.json()
        }
    } catch (err) {
        console.log("ошибка", err)
        return {
            isError: true,
        }
    }
}

export const getRacketOgDataById = async ({
    id,
}: { id: string }): Promise<Response<IProduct>> => {
    const result = await fetch(`${API_URL}/product/${id}`, {
        cache: "force-cache",
    });

    if (result.status === 404) {
        return { isError: false, data: undefined };
    }

    if (!result.ok) {
        return { isError: true, data: undefined };
    }

    const data: { product: IProduct } = await result.json();

    return { isError: false, data: data.product };
};
