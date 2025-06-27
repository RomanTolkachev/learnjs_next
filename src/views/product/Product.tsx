import { getProduct } from "@/shared/api";
import { FC } from "react";
import { notFound } from 'next/navigation';
import { ProductBio } from "@/shared/ui/product_bio";

interface Props {
    racketId: number
}

export const Product: FC<Props> = async ({ racketId }) => {

    const { data: cardData } = await getProduct({ id: racketId });

    if (!cardData) {
        return notFound();
    }

    return <ProductBio cardData={cardData} />
}