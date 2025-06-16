import { IProduct } from '@/entities';
import { Footer } from '@/shared/ui/footer';
import { ProductList } from '@/shared/ui/product_list';
import React, { FunctionComponent } from 'react';

interface Props {
    className?: string;
    filteredRackets: IProduct[]
}

const List: FunctionComponent<Props> = ({ className, filteredRackets }) => {
    return (
        <div className='h-full overflow-y-scroll'>
            <ProductList data={filteredRackets} className='min-h-min'/>
            <Footer />
        </div>
    );
};

export default List;