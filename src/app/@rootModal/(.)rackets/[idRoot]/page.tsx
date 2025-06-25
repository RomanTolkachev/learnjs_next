import { Modal } from '@/shared/ui/modal';
import { Preloader } from '@/shared/ui/preloader';
import { Product } from '@/views/product';
import React, { FC, Suspense } from 'react';

interface Props {
    params: Promise<{
        idRoot: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { idRoot } = await params;

    return (
        <Modal>
            <Suspense fallback={<Preloader />}>
                <Product racketId={Number(idRoot)} />
            </Suspense>
        </Modal>
    );
};

export default Page;