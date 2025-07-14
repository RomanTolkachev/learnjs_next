import { IProduct } from "@/entities";
import { LIMIT } from "../config";

export const getKey = (initialData: IProduct[]) => {
  return (page: number) => {
    if (page === 0 && typeof window !== undefined && initialData) {
      return initialData;
    }

    return `products?page=${page + 1}&limit=${LIMIT}`;
  };
};