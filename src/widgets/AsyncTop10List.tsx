import { getTop10 } from '@/shared/api';
import { FC } from 'react';
import { notFound } from 'next/navigation';
import { ProductList } from "@/shared/ui/product_list"

export const AsyncTop10List: FC = async () => {

    const {data: rackets, isError} = await getTop10()

    if (!rackets || !rackets.length) {
        return notFound();
    }

    if (isError) {
        throw new Error("ошибка загрузки")
    }

    return (
        <div className='h-full overflow-hidden'>
            <ProductList className='h-full overflow-y-auto mx-auto px-5' data={rackets}/>
        </div>
    )
};