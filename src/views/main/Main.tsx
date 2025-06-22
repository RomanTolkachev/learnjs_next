

import { Footer } from '@/shared/ui/footer';
import { Progress } from '@/shared/ui/progress';
import { Carousel } from '@/widgets/Carousel';
import React, { FC, Suspense } from 'react';

export const Main: FC = () => {

    return (
        <section className="h-full">
            <div className="h-full overflow-y-scroll grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <p className="text-8xl tracking-tighter text-chart-5 font-black ">
                        TENNIS<br />STORE
                    </p>
                </div>
                <Suspense fallback={<Progress />}>
                    <Carousel />
                </Suspense>
            </div>
            <Footer />
        </section>
    );
};
