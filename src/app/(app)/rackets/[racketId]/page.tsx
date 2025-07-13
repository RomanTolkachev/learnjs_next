import { getProduct, getProductMeta } from '@/shared/api';
import { Product } from '@/views/product';
import { Metadata } from 'next';
import { FC, Suspense } from 'react';
import { SWRConfig } from 'swr';

interface Props {
    params: Promise<{
        racketId: string;
    }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { racketId } = await params;
    const { isError, data } = await getProductMeta({ id: racketId })
    if (isError || !data) {
        return {
            title: "Теннисная ракетка",
            description: "Интернет магазин теннисных ракеток"
        }
    }

    return {
        title: data.name,
        description: data?.description
    }
}

const Page: FC<Props> = async ({ params }) => {

    const { racketId } = await params;
    return (
        <Suspense fallback={"SWR suspense"}>
            <SWRConfig
                value={{
                    fallback: {
                        [`product/${racketId}`]: getProduct({ id: racketId }),
                    },
                    revalidateOnFocus: false,
                }}
            >
                <Product racketId={Number(racketId)} />
            </SWRConfig>
        </Suspense>
    )

};

export async function generateStaticParams() {
    return [
        { racketId: "1", },
        { racketId: "2", },
        { racketId: "3", },
    ];
}

export default Page;