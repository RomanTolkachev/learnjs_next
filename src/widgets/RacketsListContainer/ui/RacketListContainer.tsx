"use client"

import { FC } from 'react';
import { ProductList } from "@/shared/ui/product_list"
import useSWRInfinite from "swr/infinite";
import { IProduct } from '@/entities';
import { getKey } from '../lib';
import { fetcher } from '../api';
import { LIMIT } from '../config';
import { Button } from '@/shared/ui/button';
import { Preloader } from '@/shared/ui/preloader';


interface Props {
    initialData: IProduct[]
}


export const RacketListContainer: FC<Props> = ({ initialData }) => {

    const { data, error, isLoading, size, setSize } = useSWRInfinite<IProduct[]>(
        getKey(initialData),
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateFirstPage: false,
            parallel: true,
        }
    );

    const products: IProduct[] = data ? ([] as IProduct[]).concat(...data) : [];
    
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < LIMIT);

    if (error) {
        return "some error";
    }

    if (isLoading && !products.length) {
        return <Preloader />;
    }

    if (isEmpty) {
        return "no products";
    }

    return (
        <div className='overflow-y-auto'>
            <ProductList className='lg:!grid-cols-2 xl:!grid-cols-3' data={products}>
                {!isReachingEnd && (
                    <Button isActive={!isLoadingMore} onClick={() => setSize(size + 1)}>
                        Загрузить еще
                    </Button>
                )}
            </ProductList>
        </div>
    )

}
