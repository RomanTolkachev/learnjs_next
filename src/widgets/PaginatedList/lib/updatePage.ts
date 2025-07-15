import { LIMIT } from "@/shared/config";

export const updatePage = (page: number) => {
    window.history.pushState({}, "", `?page=${page}&limit=${LIMIT}`);
};