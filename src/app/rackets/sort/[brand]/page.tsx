import { getProducts } from '@/shared/api';
import { FC } from 'react';
import { notFound } from 'next/navigation';
import { SidebarWithRackets } from '@/views/SidebarWIthRackets';
import { Metadata } from 'next';

type Props = {
    params: Promise<{brand: string}>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const { brand } = await params;
    return {
        title: `Ракетки бренда ${brand} - отличный выбор`,
        description: `Купи ракетки ${brand}! И другие тоже купи.`
    }
}

const Page: FC<Props> = async ({params}) => {

    const { brand } = await params;
    const { data, isError } = await getProducts({ page: 1, limit: 20, brand });

    if (isError) {
        throw new Error("ошибка загрузки")
    }

    if (!data || !data.length) {
        return notFound();
    }

    return <SidebarWithRackets rackets={data}/>
}

export default Page;



