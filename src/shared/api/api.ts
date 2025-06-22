import { IProduct } from "@/entities";
import { Response } from "./types"

const API_URL = "http://localhost:4000/api";

export const getTop10 = async (): Promise<Response<IProduct[]>> => {

    try {
        let res = await fetch(`${API_URL}/top-10`, {cache: "no-store"})

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