import { Footer } from '@/shared/ui/footer';
import { Progress } from '@/shared/ui/progress';
import AsyncList from '@/widgets/AsyncList';
import { Carousel } from '@/widgets/Carousel';
import React, { FC, Suspense } from 'react';

export const Main: FC = () => {

    return (
        <section className="h-full">
            <div className="h-full overflow-hidden grid grid-cols-2 px-4 pb-4">
                {/* <div className="flex items-center justify-center">
                    <p className="text-8xl tracking-tighter text-chart-5 font-black ">
                        TENNIS<br />STORE
                    </p>
                </div> */}

                <div className='overflow-y-scroll h-full flex items-center justify-center'>
                    <Suspense fallback={<Progress />}>
                        <AsyncList />
                    </Suspense>
                </div>
                <Suspense fallback={<Progress />}>
                    <Carousel />
                </Suspense>
            </div>
            <Footer />
        </section>
    );
};
