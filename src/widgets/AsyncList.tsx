import { getProducts } from '@/shared/api';
import { FC } from 'react';
import { notFound } from 'next/navigation';
import { LoadError } from "@/shared/ui/load_error"
import { ProductList } from "@/shared/ui/product_list"

const AsyncList: FC = async () => {

    const {data: rackets, isError} = await getProducts({page: 1, limit: 20})

    if (!rackets || !rackets.length) {
        return notFound();
    }

    if (isError) {
        return <LoadError />
    }

    return <ProductList className='lg:!grid-cols-2 xl:!grid-cols-3' data={rackets}/>;
};

export default AsyncList;