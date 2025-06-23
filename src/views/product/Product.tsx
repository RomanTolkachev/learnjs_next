import { getProduct } from "@/shared/api";
import { FC } from "react";
import { notFound } from 'next/navigation';
import { ProductBio } from "@/shared/ui/product_bio";

interface Props {
    racket_id: number
}

export const Product: FC<Props> = async ({ racket_id }) => {

    const { data: cardData } = await getProduct({ id: racket_id });

    if (!cardData) {
        return notFound();
    }

    return <ProductBio cardData={cardData} />
}