"use client"

import React, { FunctionComponent, use, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';
import { IProduct } from '@/entities';
import Image from 'next/image'
import { FavoriteButton, FavoriteContext } from '@/features/favorite';
import { useIsFavorite } from '@/features/favorite/lib/hooks/useIsFavorite';

interface Props {
    cardData: IProduct
    canBeFavorite?: boolean
}

export const ProductCard: FunctionComponent<Props> = ({ canBeFavorite, cardData }) => {

    const { setContextFavorite } = use(FavoriteContext);

    const isFavorite = Array.isArray(cardData.userData)
        ? cardData.userData[0]?.isFavorite ?? false
        : false;

    useEffect(() => { // Андрей, я видел, что это лучше вынести в хук, но для наглядности самому себе - сдалал так.
        setContextFavorite({ id: cardData.id, isFavorite })
    }, [cardData.id, isFavorite, setContextFavorite])

    const isFavoriteComputed = useIsFavorite({ id: cardData.id })

    return (
        <Card className='min-w-56 max-w-sm grid grid-rows-[auto_1fr_auto]'>
            <CardHeader className='text-xl font-bold min-h-12 flex justify-center'>
                <CardTitle>{cardData?.name ?? "Заголовок"}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='w-full aspect-square relative radial-mask'>
                    <Image alt='img' src={cardData.imageUrl} fill className='object-contain' sizes="500px" />
                </div>
                <span>{cardData.price} $</span>
            </CardContent>
            <CardFooter>
                {canBeFavorite &&
                    <div className='w-full flex justify-end'>
                        <FavoriteButton isFavoriteInitial={isFavoriteComputed} racketId={cardData.id} />
                    </div>
                }
            </CardFooter>
        </Card>
    );
};
