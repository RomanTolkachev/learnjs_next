import { getTop10 } from '@/shared/api';
import { FC } from 'react';
import { notFound } from 'next/navigation';
import { LoadError } from "@/shared/ui/load_error"
import { ProductList } from "@/shared/ui/product_list"

const AsyncTop10List: FC = async () => {

    const {data: rackets, isError} = await getTop10()

    if (!rackets || !rackets.length) {
        return notFound();
    }

    if (isError) {
        return <LoadError />
    }

    return (
        <div className='h-full p-5 overflow-hidden'>
            <ProductList className='h-full overflow-y-auto mx-auto' data={rackets}/>
        </div>
    )
};

export default AsyncTop10List;