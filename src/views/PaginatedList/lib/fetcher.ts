import { API_URL } from "@/shared/config";

export const fetcher = async (path: string) => {
    const response = await fetch(`${API_URL}/${path}`, {
        credentials: "include",
    });

    const result = await response.json();

    return { data: result };
};