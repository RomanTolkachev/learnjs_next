import { LIMIT } from "@/shared/config";

export const updatePage = (page: number, brand: string | undefined) => {
    window.history.pushState({}, "", `?page=${page}&limit=${LIMIT}${brand ? `&brand=${brand}` : ''}`);
};