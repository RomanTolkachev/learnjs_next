"use client"

import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { ProductCard } from '../product_card';
import { IProduct } from '@/entities';
import { usePathname } from 'next/navigation';

interface Props {
    className?: string;
    data: IProduct[]
}

export const ProductList: FunctionComponent<Props> = ({ className, data }) => {

    const pathname = usePathname();

    return (
        <ul className={`${className} grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            {
                data.map((card, key) => (
                    <li key={key}>
                        <Link href={`${pathname}/${card.brand.name}/${card.id.toString()}`} as={`${card.id.toString()}`}  scroll={false}>
                            <ProductCard cardData={card} />
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};
