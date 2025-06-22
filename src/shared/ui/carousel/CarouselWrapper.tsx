"use client"

import Autoplay from 'embla-carousel-autoplay';
import { FC, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import Link from 'next/link';
import Fade from 'embla-carousel-fade';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image'
import { Button } from '../button';
import { IProduct } from '@/entities';
import { Badge } from '../badge';

interface Props {
    rackets: IProduct[]
}

export const CarouselWrapper: FC<Props> = ({ rackets }) => {

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    )

    return (
        <>
            <Carousel plugins={[plugin.current, Fade()]} className="relative w-full h-full max-w-sm mx-auto">
            <Badge variant="secondary" className='absolute left-2/3 h-8 text-2xl px-5 z-30 font-bold top-3/4 text-white bg-red-500'>TOP SALES</Badge>
                <Button isActive={false} asChild variant="ghost">
                    <Link className="absolute z-20 right-5 top-0 text-muted-foreground" href={"rackets"}>
                        все{<MoveUpRight strokeWidth={4} />}
                    </Link>
                </Button>
                <CarouselContent>
                    {
                        rackets.map((racket, key) => {
                            return (
                                <CarouselItem className="relative" key={key}>
                                    <Link href={`rackets/${racket.id}`}>
                                        <div className="relative aspect-[2/3] radial-mask">
                                            <Image sizes={"500px"} priority className="object-cover" fill alt="" src={racket.imageUrl} />
                                        </div>
                                        <p className="absolute bottom-0 left-0 font-bold text-sm text-muted-foreground translate-x-1/2 z-10">{racket.model}</p>
                                    </Link>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </>
    );
};
