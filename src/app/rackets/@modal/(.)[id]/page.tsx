"use server"

import { Modal } from '@/shared/ui/modal';
import { Preloader } from '@/shared/ui/preloader';
import { Product } from '@/views/product';
import { FC, Suspense } from 'react';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { id } = await params

    return (
        <Modal>
            <Suspense fallback={<Preloader />}>
                <Product racketId={Number(id)} />
            </Suspense>
        </Modal>
    );
};

export default Page;