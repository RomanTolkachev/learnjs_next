
import React, { FunctionComponent } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';
import { IProduct } from '@/entities';
import Image from 'next/image'

interface Props {
    className?: string;
    cardData: IProduct
}

export const ProductCard: FunctionComponent<Props> = ({ className, cardData }) => {
    return (
        <Card className='min-w-56 max-w-sm grid grid-rows-[auto_1fr_auto]'>
            <CardHeader className='text-xl font-bold min-h-12'>
                <CardTitle>{cardData?.name ?? "Заголовок"}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='w-full aspect-square relative radial-mask'>
                    <Image alt='img' src={cardData.imageUrl} fill className='object-contain' sizes="500px" />
                </div>
                <span>{cardData.price} $</span>
            </CardContent>
            <CardFooter>
                Футер
            </CardFooter>
        </Card>
    );
};
