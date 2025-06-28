import { getProduct } from "@/shared/api";
import { FC } from "react";
import { notFound } from 'next/navigation';
import { ProductBio } from "@/shared/ui/product_bio";
import { LoadError } from "@/shared/ui/load_error";

interface Props {
    racketId: number
}

export const Product: FC<Props> = async ({ racketId }) => {

    const { data: cardData, isError } = await getProduct({ id: racketId });

    if (!cardData) {
        return notFound();
    }

    if (isError) {
        return <LoadError />
    }

    return <ProductBio cardData={cardData} />
}