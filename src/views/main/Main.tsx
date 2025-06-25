import { Preloader } from '@/shared/ui/preloader';
import { RacketListContainer } from '@/widgets/RacketListContainer';
import { Carousel } from '@/widgets/Carousel';
import React, { FC, Suspense } from 'react';

export const Main: FC = () => {
    return (
        <section className="h-full px-5">
            <div className="h-full overflow-hidden grid grid-cols-2">
                <div className='overflow-y-hidden h-full flex flex-col'>
                    <Suspense fallback={<Preloader />}>
                        <RacketListContainer />
                    </Suspense>
                </div>
                <Suspense fallback={<Preloader />}>
                    <Carousel />
                </Suspense>
            </div>
        </section>
    );
};
