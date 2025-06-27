import { getProducts } from '@/shared/api';
import { LoadError } from '@/shared/ui/load_error';
import { FC } from 'react';
import { notFound } from 'next/navigation';
import { SidebarWithRackets } from '@/views/SidebarWIthRackets';

type Props = {
    params: Promise<{brand: string}>
}

const Page: FC<Props> = async ({params}) => {

    const { brand } = await params;
    const { data, isError } = await getProducts({ page: 1, limit: 20, brand });

    if (isError) {
        return <LoadError />
    }

    if (!data || !data.length) {
        return notFound();
    }

    return <SidebarWithRackets rackets={data}/>
}

export default Page;



