import { LIMIT } from "@/shared/config";

export const updateBrand = (brand: unknown) => {
    if (brand === "All") {
        return window.history.pushState({}, "", `?page=1&limit=${LIMIT}`);
    }
    window.history.pushState({}, "", `?page=1&limit=${LIMIT}&brand=${brand}`);
};