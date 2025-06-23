"use server"

import { Product } from '@/views/product';
import { FC, Suspense } from 'react';

interface Props {
    params: Promise<{
        racket_id: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { racket_id } = await params;

    return <Product racket_id={Number(racket_id)} />

};

export async function generateStaticParams() {
    return [
        { racket_id: "1", },
        { racket_id: "3", },
        { racket_id: "8", },
    ];
}

export default Page;