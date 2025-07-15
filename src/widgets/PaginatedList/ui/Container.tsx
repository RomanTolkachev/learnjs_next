"use client"

import { LIMIT } from "@/shared/config";
import { useSearchParams } from "next/navigation";
import { FC } from "react"
import useSWR from "swr";
import Preloader from "../../../app/(app)/rackets/loading";
import { ProductList } from "@/shared/ui/product_list";
import { Button } from "@/shared/ui/button";
import { fetcher, updatePage } from "../lib";
import { NoData, LoadError } from "@/shared/ui/load_error"


export const Container: FC = () => {

    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get("page") || "") || 1;

    const { data, error, isLoading } = useSWR(
        `products?page=${page}&limit=${LIMIT}`,
        fetcher,
        {
            revalidateIfStale: false,
        }
    );

    const rackets = data?.data;

    if (error) {
        return <LoadError />;
    }

    if (isLoading && !rackets?.length) {
        return <Preloader />;
    }

    if (!rackets?.length) {
        return <NoData />;
    }

    return (
        <div className="h-full flex flex-col">
            <div className="overflow-y-auto shrink grow">
                <ProductList className="h-min" data={rackets} />
            </div>
            <div className="flex justify-center py-4 h-fit gap-4 items-center border-y">
                <Button isActive={page > 1} onClick={() => updatePage(page - 1)}>prev</Button>
                <span>{page}</span>
                <Button isActive={rackets.length >= LIMIT} onClick={() => updatePage(page + 1)}>next</Button>
            </div>
        </div>
    );
}