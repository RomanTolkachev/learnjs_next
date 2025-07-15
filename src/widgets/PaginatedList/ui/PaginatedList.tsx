import { getProducts } from "@/shared/api";
import { LIMIT } from "@/shared/config";
import { Preloader } from "@/shared/ui/preloader";
import { FC, Suspense } from "react";
import { SWRConfig } from "swr";
import { Container } from "./Container";

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const PaginatedList: FC<Props> = async ({ searchParams }) => {

    const { page = "1" } = await searchParams;

    let pageNumber = 1;
    if (typeof page === "string") {
        pageNumber = parseInt(page) || 1;
    }

    return (
        <Suspense fallback={<Preloader />}>
            <SWRConfig
                value={{
                    fallback: {
                        [`products?page=${page}&limit=${LIMIT}`]: getProducts({
                            page: pageNumber,
                            limit: LIMIT,
                        }),
                    },
                }}
            >
                <Container />
            </SWRConfig>
        </Suspense>
    );
}