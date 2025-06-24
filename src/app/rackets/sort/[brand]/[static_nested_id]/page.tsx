
import { Product } from '@/views/product';
import { FC } from 'react';

interface Props {
    params: Promise<{
        static_nested_id: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { static_nested_id } = await params;

    return <Product racket_id={Number(static_nested_id)} />

};

export default Page;