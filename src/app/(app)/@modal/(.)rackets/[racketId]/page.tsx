import { getProduct } from '@/shared/api';
import { Modal } from '@/shared/ui/modal';
import { Preloader } from '@/shared/ui/preloader';
import { Product } from '@/views/product';
import React, { FC, Suspense } from 'react';
import { SWRConfig } from 'swr';

interface Props {
    params: Promise<{
        racketId: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { racketId } = await params;

    return (
        <Modal>
            <Suspense fallback={<Preloader />}>
                <SWRConfig
                    value={{
                        fallback: {
                            [`product/${racketId}`]: getProduct({ id: racketId }),
                        },
                        revalidateOnFocus: false,
                    }}
                >
                </SWRConfig>
                <Product racketId={Number(racketId)} />
            </Suspense>
        </Modal>
    );
};

export default Page;