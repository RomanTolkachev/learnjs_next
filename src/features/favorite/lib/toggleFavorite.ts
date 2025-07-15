import { API_URL } from "@/shared/config";

export async function toggleFavorite(isFavorite: boolean, racketId: number) {

    const url = `${API_URL}/product/${racketId}/favorite`;

    try {
        const res = isFavorite
            ? await fetch(url, {
                credentials: "include",
                method: "DELETE",
            })
            : await fetch(url, {
                credentials: "include",
                method: "POST",
            });

        if (res.ok) {
            return "success"
        }
    } catch (err) {
        throw new Error("Ошибка обработки избранного");
    }

}

