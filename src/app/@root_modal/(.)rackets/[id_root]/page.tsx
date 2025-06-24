"use server"

import { rackets } from '@/lib/mock';
import { Modal } from '@/shared/ui/modal';
import { Preloader } from '@/shared/ui/preloader';
import { ProductBio } from '@/shared/ui/product_bio';
import { Product } from '@/views/product';
import { useParams, useRouter } from 'next/navigation';
import React, { FC, Suspense } from 'react';

interface Props {
    params: Promise<{
        id_root: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { id_root } = await params;

    return (
        <Modal>
            <Suspense fallback={<Preloader />}>
                <Product racket_id={Number(id_root)} />
            </Suspense>
        </Modal>
    );
};

export default Page;