"use client"

import { rackets } from '@/lib/mock';
import { ProductBio } from '@/shared/ui/product_bio';
import { useParams } from 'next/navigation';
import React, { FunctionComponent } from 'react';


interface Props {
    className?: string;
    params: Promise<{ brand: string, id: string }>
}

const Page: FunctionComponent<Props> = ({ className, params }) => {

    const id = Number(useParams().id);
    const cardData = rackets.find(item => item.id === id)

    if (!cardData) {
        return <div>Товар не найден</div>
    }

    return (
        <div className={`${className}`}>
            <ProductBio productData={cardData} />
        </div>
    );
};

export default Page;