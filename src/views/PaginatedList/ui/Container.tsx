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
import { SidebarSelect } from "@/shared/ui/sidebar_select";
import { updateBrand } from "../lib/updateBrand";

interface Props {
    parsedBrands: { [key: string]: string };
}

export const Container: FC<Props> = ({ parsedBrands }) => {

    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get("page") || "") || 1;
    const brand = searchParams.get("brand") || "";

    const { data, error, isLoading } = useSWR(
        `products?page=${page}&limit=${LIMIT}${brand ? `&brand=${brand}` : ''}`,
        fetcher,
        {
            revalidateIfStale: true,
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
        <div className="mx-auto px-10 w-full flex flex-col h-full">
            <div className="grid grid-cols-[auto_auto] h-full shrink grow overflow-hidden">
                <aside className="h-full">
                    <h3 className='font-semibold text-xs text-muted-foreground/60 mb-1'>Бренд</h3>
                    <SidebarSelect
                        setter={updateBrand}
                        values={parsedBrands}
                        currentValue={brand}
                    />
                </aside>
                <div className="h-full overflow-y-auto flex flex-col">
                    <div className=" h-full">
                        <ProductList className="min-h-min" data={rackets} />
                    </div>
                </div>
            </div>
            <div className="flex justify-end py-2 h-fit gap-4 items-center border-y px-10">
                <Button isActive={page > 1} onClick={() => updatePage(page - 1, brand)}>prev</Button>
                <span>{page}</span>
                <Button isActive={rackets.length >= LIMIT} onClick={() => updatePage(page + 1, brand)}>next</Button>
            </div>
        </div>
    );
}