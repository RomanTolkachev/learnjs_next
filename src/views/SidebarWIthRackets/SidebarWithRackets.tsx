"use client"

import { IBrand, IProduct } from '@/entities';
import { brandValues } from '@/lib/brand_values';
import { SidebarSelect } from '@/shared/ui/sidebar_select';
import List from '@/widgets/List';
import { useParams, useRouter } from 'next/navigation';
import React, { FC } from 'react';

type Props = {
    rackets: IProduct[]
}

export const SidebarWithRackets: FC<Props> = ({rackets}) => {

    const router = useRouter();
    const { brand } = useParams();
    
    return (
        <>
            <section className={`mx-auto px-10 w-full grid grid-cols-[auto_auto] h-full`}>
                <aside className=''>
                    <h3 className='font-semibold text-xs text-muted-foreground/60 mb-1'>Бренд</h3>
                    <SidebarSelect
                        values={brandValues}
                        currentValue={brand as IBrand ?? "All"}
                        setter={to => router.push(to === "All" ? "/rackets" : `/rackets/sort/${to}`)}
                    />
                </aside>
                <List filteredRackets={rackets}/>
            </section>
        </>
    )
}