"use client"

import { IProduct } from '@/entities';
import React, { FunctionComponent } from 'react';
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';

interface Props {
    className?: string;
    productData: IProduct
}

export const ProductBio: FunctionComponent<Props> = ({ className, productData }) => {
    return (
        <div className={`${className} max-w-3xl mx-auto grid grid-cols-[2fr_1fr]`}>
            <Card className=''>
                <CardHeader>
                    <CardTitle>{productData.model}</CardTitle>
                    <CardDescription>{productData.name}</CardDescription>
                </CardHeader>
                <CardContent className='shrink flex flex-col grow justify-between'>
                    {productData.description}
                    <p className=''>{productData.price} $</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => { }} isActive className="w-full md:max-w-[200px]">
                        В корзину
                    </Button>
                </CardFooter>
            </Card>
            <div>
                <div className='relative h-120 radial-mask aspect-[2/3] place-self-center'>
                    <Image alt='img' src={productData.imageUrl} priority fill className='object-contain' sizes="500px" />
                </div>
            </div>
        </div>
    );
};