import { getTop10 } from '@/shared/api';
import { CarouselWrapper } from '@/shared/ui/carousel';
import { LoadError } from '@/shared/ui/load_error';
import { notFound } from 'next/navigation';
import React, { FC } from 'react';

export const Carousel: FC = async () => {

    const { data, isError } = await getTop10();

    if (isError) {
        return <LoadError />
    }

    if (!data || !data.length) {
        return notFound();
    }

    return  <CarouselWrapper rackets={data} />

}