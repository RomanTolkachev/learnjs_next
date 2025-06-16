import { rackets } from '@/lib/mock';
import { ProductBio } from '@/shared/ui/product_bio';
import { useParams } from 'next/navigation';
import React, { FunctionComponent } from 'react';

interface Props {
    params: Promise<{ racket_id: string }>
}

const page: FunctionComponent<Props> = async ({ params }) => {

    const id = Number((await params).racket_id);

    const cardData = rackets.find(item => item.id === id)

    return (
        !cardData
            ? <div>информация отсутствует</div>
            : <ProductBio productData={cardData} />
    );
};

export async function generateStaticParams() {
    return [
        { racket_id: "1", },
        { racket_id: "3", },
        { racket_id: "8", },
    ];
}

export default page;