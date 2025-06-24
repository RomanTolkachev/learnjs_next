"use server"

import { Modal } from '@/shared/ui/modal';
import { Preloader } from '@/shared/ui/preloader';
import { Product } from '@/views/product';
import React, { FC, Suspense } from 'react';


interface Props {
    params: Promise<{
        nested_id: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { nested_id } = await params;

    return (
        <Modal>
            {
                <Suspense fallback={<Preloader />}>
                    <Product racket_id={Number(nested_id)} />
                </Suspense>
            }
        </Modal>
    );

};

export default Page;