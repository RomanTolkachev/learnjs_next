"use client"

import { IProduct } from '@/entities';
import React, { FunctionComponent, use, useEffect } from 'react';
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { AuthContext } from '@/providers/UserProvider';
import { FavoriteButton } from '@/features/handleFavorite';
import { useIsFavorite } from '@/features/handleFavorite/lib';
import { FavoriteContext } from '@/providers/FavoriteProvider';


interface Prop {
    cardData: IProduct
}
export const ProductBio: FunctionComponent<Prop> = ({ cardData }) => {

    const { user } = use(AuthContext);
    const { setContextFavorite } = use(FavoriteContext);

    const isFavorite = cardData.userData?.isFavorite ?? false

    useEffect(() => {
        setContextFavorite({ id: cardData.id, isFavorite })
    }, [cardData.id, isFavorite, setContextFavorite])

    const isFavoriteComputed = useIsFavorite({ id: cardData.id });

    return (
        <div className={`max-w-3xl mx-auto grid grid-cols-[2fr_1fr]`}>
            <Card className=''>
                <CardHeader>
                    <CardTitle>{cardData.model}</CardTitle>
                    <CardDescription>{cardData.name}</CardDescription>
                </CardHeader>
                <CardContent className='shrink flex flex-col grow justify-between'>
                    {cardData.description}
                    <p className=''>{cardData.price} $</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => { }} isActive className="w-full md:max-w-[200px]">
                        В корзину
                    </Button>
                </CardFooter>
            </Card>
            <div className='relative'>
                <div className='relative h-120 radial-mask aspect-[2/3] place-self-center'>
                    <Image alt='img' src={cardData.imageUrl} priority fill className='object-contain' sizes="500px" />
                </div>
                {!!user?.login && <div className='absolute bottom-0 right-0 p-2 z-10'>
                    <Button asChild variant="secondary" isActive >
                        <FavoriteButton isFavoriteInitial={isFavoriteComputed} racketId={cardData.id} />
                    </Button>
                </div>}
            </div>
        </div>
    );
};

