import { rackets } from '@/lib/mock';
import { ProductList } from '@/shared/ui/product_list';
import React, { FunctionComponent } from 'react';

interface Props {
    className?: string;
    params: Promise<{ brand: string }>
}

const Page: FunctionComponent<Props> = async ({ params }) => {

    const { brand } = await params;

    const filteredRackets = brand ? rackets.filter(racket => racket.brand.name === brand) : rackets;

    return <ProductList data={filteredRackets} />;

};

export default Page;

