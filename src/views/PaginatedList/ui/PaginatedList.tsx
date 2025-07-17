import { getProducts } from "@/shared/api";
import { LIMIT } from "@/shared/config";
import { Preloader } from "@/shared/ui/preloader";
import { FC, Suspense } from "react";
import { SWRConfig } from "swr";
import { Container } from "./Container";
import { getBrands } from "@/shared/api/api";
import { notFound } from "next/navigation";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

interface BrandMap {
    [key: string]: string;
}


export const PaginatedList: FC<Props> = async ({ searchParams }) => {

    const { page = "1", brand } = await searchParams;

    let pageNumber = 1;
    if (typeof page === "string") {
        pageNumber = parseInt(page) || 1;
    }

    const { data, isError } = await getBrands();

    if (isError || !data) {
        return notFound()
    }

    const brands = data.reduce<BrandMap>((acc, brand) => {
        acc[brand.name] = brand.name;
        return acc;
    }, { All: "All" });

    return (
        <section className="h-full">
            <Suspense fallback={<Preloader />}>
                <SWRConfig
                    value={{
                        fallback: {
                            [`products?page=${page}&limit=${LIMIT}${brand ? `&brand=${brand}` : ''}`]: getProducts({
                                page: pageNumber,
                                limit: LIMIT,
                                brand: Array.isArray(brand) ? undefined : brand ?? undefined
                            }),
                        },
                    }}
                >
                    <Container parsedBrands={brands} />
                </SWRConfig>
            </Suspense>
        </section>
    );
}