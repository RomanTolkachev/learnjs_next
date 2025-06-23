"use client"

import { rackets } from '@/lib/mock';
import { Modal } from '@/shared/ui/modal';
import { ProductBio } from '@/shared/ui/product_bio';
import { useParams, useRouter } from 'next/navigation';
import React, { FunctionComponent } from 'react';


const Page: FunctionComponent = () => {

    const router = useRouter();
    const id_root = Number(useParams().id_root);

    const cardData = rackets.find(item => item.id === id_root)

    return (
        <Modal closeModal={router.back}>
            {
                !cardData
                    ? <div>информация отсутствует</div>
                    : <ProductBio productData={cardData} />
            }
        </Modal>
    );
};

export default Page;