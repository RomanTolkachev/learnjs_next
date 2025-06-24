import { Footer } from '@/shared/ui/footer';
import { Preloader } from '@/shared/ui/preloader';
import AsyncList from '@/widgets/AsyncList';
import { Carousel } from '@/widgets/Carousel';
import React, { FC, Suspense } from 'react';

export const Main: FC = () => {
    return (
        <section className="h-full">
            <div className="h-full overflow-hidden grid grid-cols-2 px-4 pb-4">
                <div className='overflow-y-scroll h-full flex items-center justify-center'>
                    <Suspense fallback={<Preloader />}>
                        <AsyncList />
                    </Suspense>
                </div>
                <Suspense fallback={<Preloader />}>
                    <Carousel />
                </Suspense>
            </div>
            <Footer />
        </section>
    );
};
