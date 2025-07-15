import { Preloader } from '@/shared/ui/preloader';
import { RacketListContainer } from '@/widgets/RacketsListContainer/ui/RacketListContainer';
import { Carousel } from '@/widgets/Carousel';
import React, { FC, Suspense } from 'react';
import { SWRConfig, unstable_serialize } from 'swr';
import { getKey } from '@/widgets/RacketsListContainer/lib';
import { IProduct } from '@/entities';


interface Props {
    initialData: IProduct[]
}

export const Main: FC<Props> = ({initialData}) => {

    console.log("из родителя", getKey(initialData))

    return (
        <section className="h-full px-5">
            <div className="h-full overflow-hidden grid grid-cols-2">
                <div className='overflow-y-hidden h-full flex flex-col'>
                    <Suspense fallback="саспенс в МЭЙН">
                        <SWRConfig
                            value={{
                                fallback: {
                                    [unstable_serialize(getKey(initialData))]: initialData,
                                },
                                revalidateOnFocus: false,
                            }}
                        >

                        <RacketListContainer initialData={initialData} />
                        </SWRConfig>
                    </Suspense>
                </div>
                <Suspense fallback={<Preloader />}>
                    <Carousel />
                </Suspense>
            </div>
        </section>
    );
};
