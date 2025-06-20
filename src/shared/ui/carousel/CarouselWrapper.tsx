"use client"

import { rackets } from '@/lib/mock';
import Autoplay from 'embla-carousel-autoplay';
import React, { FunctionComponent, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';
import Link from 'next/link';
import Fade from 'embla-carousel-fade';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image'
import { Button } from '../button';

interface Props {
    className?: string;
}

const topRackets = rackets.filter(racket => racket.top10)

export const CarouselWrapper: FunctionComponent<Props> = ({ className }) => {

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false }),
    )

    return (
        <Carousel plugins={[plugin.current, Fade()]} className="w-full h-full max-w-sm mx-auto">
            <Button isActive={false} asChild variant="ghost">
                <Link className="absolute z-20 right-5 top-0 text-muted-foreground" href={"rackets"}>
                    все{<MoveUpRight strokeWidth={4} />}
                </Link>
            </Button>
            <CarouselContent>
                {
                    topRackets.map((racket, key) => {
                        return (
                            <CarouselItem className="relative" key={key}>
                                <Link href={`rackets/${racket.id}`}>
                                    <div className="relative aspect-[2/3] radial-mask">
                                        <Image className="object-cover" fill alt="" src={racket.imageUrl} />
                                    </div>
                                    <p className="absolute bottom-0 left-0 font-bold text-sm text-muted-foreground translate-x-1/2 z-10">{racket.model}</p>
                                </Link>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    );
};
