
import { Product } from '@/views/product';
import { FC } from 'react';

interface Props {
    params: Promise<{
        racketId: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { racketId } = await params;

    return <Product racketId={Number(racketId)} />

};

export default Page;