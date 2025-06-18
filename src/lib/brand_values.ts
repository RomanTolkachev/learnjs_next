import { IBrand } from "@/entities";

type TBrands = IBrand | "All";
export const brandValues: Record<TBrands, TBrands> = {
    All: "All",
    Babolat: "Babolat",
    Head: "Head",
    Wilson: "Wilson",
    Yonex: "Yonex"
}