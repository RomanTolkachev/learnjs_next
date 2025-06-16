"use client"

import { IBrand } from '@/entities';
import { rackets } from '@/lib/mock';
import { ProductList } from '@/shared/ui/product_list';
import { SidebarSelect } from '@/shared/ui/sidebar_select';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { FunctionComponent } from 'react';

interface Props {
    className?: string;
}

type TBrands = IBrand | "All";

// тут, наверно, лучше объект т.к ключ это label для Select, а значение это само значение и они могут отличаться (теоретически)
const routerValues: Record<TBrands, TBrands> = {
    All: "All",
    Babolat: "Babolat",
    Head: "Head",
    Wilson: "Wilson",
    Yonex: "Yonex"
}

const Page: FunctionComponent<Props> = ({ className }) => {

    const pathname = usePathname();
    const router = useRouter();
    const { brand } = useParams();

    const filteredRackets = brand ? rackets.filter(racket => racket.brand.name === brand) : rackets;

    function navigate(to: string): void {
        router.push(to);
    }

    const regex = /^\/rackets\/sort\/([^\/]+)/;

    console.log(pathname.match(regex), "лог из вложенной")

    return (
        <section className={`${className} mx-auto px-10 w-full grid grid-cols-[auto_auto]`}>
            <aside>
                <h3 className='font-semibold text-xs text-muted-foreground/60 mb-1'>Бренд</h3>
                <SidebarSelect
                    values={routerValues}
                    currentValue={pathname.match(regex)?.[1] ?? "All"}
                    setter={to => navigate(to === "All" ? "/rackets" : `/rackets/sort/${to as TBrands}`)}
                />
            </aside>
            <ProductList data={filteredRackets} />
        </section>
    )

}

export default Page;


