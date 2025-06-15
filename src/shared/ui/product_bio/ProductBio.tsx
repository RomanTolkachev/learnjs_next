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
        <article className={`${className} grid grid-cols-2`}>
            <Card>
                <CardHeader>
                    <CardTitle>{productData.model}</CardTitle>
                    <CardDescription>{productData.name}</CardDescription>
                </CardHeader>
                <CardContent className='shrink flex flex-col grow justify-between'>
                    {productData.description}
                    <p className=''>{productData.price} $</p>
                </CardContent>
                <CardFooter>        
                    <Button onClick={() => { }} isActive className="w-full">
                    В корзину
                </Button>
                </CardFooter>

            </Card>
            <div className='relative h-120 radial-mask'>
                <Image alt='img' src={productData.imageUrl} priority fill className='object-contain' sizes="500px" />
            </div>
        </article>
    );
};