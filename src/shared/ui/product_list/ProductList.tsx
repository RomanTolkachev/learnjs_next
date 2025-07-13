"use client"

import Link from 'next/link';
import React, { FunctionComponent, use } from 'react';
import { ProductCard } from '../product_card';
import { IProduct } from '@/entities';
import { AuthContext } from '@/providers/UserProvider';

interface Props {
    className?: string;
    data: IProduct[]
}

export const ProductList: FunctionComponent<Props> = ({ className, data }) => {

   const { user } = use(AuthContext);

    return (
        <ul className={`${className} grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full overflow-x-hidden`}>
            {
                data.map((product, key) => (
                    <li key={key}>
                        <Link href={`${"/rackets"}/${product.id.toString()}`} scroll={false}>
                            <ProductCard canBeFavorite={!!user?.login} cardData={product} />
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};
