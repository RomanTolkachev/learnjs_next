"use client"

import { IBrand } from '@/entities';
import { SidebarSelect } from '@/shared/ui/sidebar_select';
import { usePathname, useRouter } from 'next/navigation';
import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode
    modal: ReactNode
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

const layout: FunctionComponent<Props> = ({ className, children, modal }) => {

    const pathname = usePathname();
    const router = useRouter();

    function navigate(to: string): void {
        router.push(to);
    }

    const regex = /\/rackets(?:\/([^\/]+))?$/;

    return (
        <section className={`${className} mx-auto px-10 w-full grid grid-cols-[auto_auto]`}>
            <aside>
                <h3 className='font-semibold text-xs text-muted-foreground/60 mb-1'>Бренд</h3>
                <SidebarSelect
                    values={routerValues}
                    currentValue={pathname.match(regex)?.[1] ?? "All"}
                    setter={to => navigate(to === "All" ? "/rackets" : `/rackets/${to as TBrands}`)}
                />
            </aside>
            <div>
                {children}
                {modal}
            </div>
        </section>
    );
};

export default layout;