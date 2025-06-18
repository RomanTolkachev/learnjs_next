"use client"

import { rackets } from '@/lib/mock';
import { ProductBio } from '@/shared/ui/product_bio';
import { useParams } from 'next/navigation';
import React, { FunctionComponent } from 'react';

const Page: FunctionComponent = () => {

    const id = Number(useParams().static_nested_id);

    const cardData = rackets.find(item => item.id === id)

    return (
        !cardData 
        ? <div>информация отсутствует</div>
        : <ProductBio productData={cardData} />
    )
};

export default Page;