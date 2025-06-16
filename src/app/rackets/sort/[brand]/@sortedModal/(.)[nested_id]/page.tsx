"use client"

import { rackets } from '@/lib/mock';
import { Modal } from '@/shared/ui/modal';
import { ProductBio } from '@/shared/ui/product_bio';
import { useParams, useRouter } from 'next/navigation';
import React, { FunctionComponent } from 'react';

interface Props {
    
}

const page: FunctionComponent<Props> = () => {

    const router = useRouter();
    const id = Number(useParams().nested_id);

    const cardData = rackets.find(item => item.id === id)

    return (
        <Modal closeModal={() => router.back()}>
            {
                !cardData
                    ? <div>информация отсутствует</div>
                    : <ProductBio productData={cardData} />
            }
        </Modal>
    );
};

export default page;