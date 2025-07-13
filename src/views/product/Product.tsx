"use client"

import { FC } from "react";
import { notFound } from 'next/navigation';
import { ProductBio } from "@/shared/ui/product_bio";
import { LoadError } from "@/shared/ui/load_error";
import { IProduct } from "@/entities";
import useSWR from "swr";
import { Response } from "@/shared/api"
import { Preloader } from "@/shared/ui/preloader";

interface Props {
    racketId: number
}

const API_URL = "http://localhost:4000/api";

export const Product: FC<Props> = ({ racketId }) => {

    const fetcher = async (path: string) => {
        const result = await fetch(`${API_URL}/${path}`, {
            credentials: "include",
        });

        if (result.status === 404) {
            return { isError: false, data: undefined };
        }

        if (!result.ok) {
            return { isError: true, data: undefined };
        }

        const data: { product: IProduct } = await result.json();

        return { isError: false, data: data.product };
    };

    const { data, isLoading } = useSWR<Response<IProduct>>(
        `product/${racketId}`,
        fetcher,
        { suspense: true, revalidateIfStale: false, revalidateOnFocus: false }
    );

    if (isLoading) {
        return <Preloader />;
    }

    if (!data?.data) {
        return notFound();
    }

    if (data?.isError) {
        return <LoadError />
    }

    return <ProductBio cardData={data.data} />
}