"use client"

import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { ProductCard } from '../product_card';
import { IProduct } from '@/entities';
import { useParams, usePathname } from 'next/navigation';

interface Props {
    className?: string;
    data: IProduct[]
}

export const ProductList: FunctionComponent<Props> = ({ className, data }) => {

    const { brand } = useParams();
    const path = usePathname()

    return (
        <ul className={`${className} grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full`}>
            {
                data.map((product, key) => (
                    <li key={key}>
                        <Link href={`${brand ? path : "rackets"}/${product.id.toString()}`} scroll={false}>
                            <ProductCard cardData={product} />
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};
