"use client"

import { rackets } from '@/lib/mock';
import { ProductBio } from '@/shared/ui/product_bio';
import { useParams, useRouter } from 'next/navigation';
import React, { FunctionComponent } from 'react';

interface Props {
    className?: string;
}

const page: FunctionComponent<Props> = ({ className }) => {

    const router = useRouter();
    const id = Number(useParams().racket_id);

    const cardData = rackets.find(item => item.id === id)


    console.log(id)

    return (
        <>
        
            {
                !cardData
                    ? <div>информация отсутствует</div>
                    : <ProductBio productData={cardData} />
            }
        </>
    );
};

export default page;