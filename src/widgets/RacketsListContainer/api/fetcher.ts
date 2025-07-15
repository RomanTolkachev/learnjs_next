import { IProduct } from "@/entities";
import { API_URL } from "@/shared/config";

export const fetcher = async (path: string | IProduct[] | undefined) => {
  if (typeof path !== "string" && path !== undefined) {
    return path;
  }

  const result = await fetch(`${API_URL}/${path}`, {
    credentials: "include",
  });

  return result.json();
};