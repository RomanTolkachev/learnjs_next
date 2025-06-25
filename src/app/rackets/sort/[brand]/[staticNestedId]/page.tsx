
import { Product } from '@/views/product';
import { FC } from 'react';

interface Props {
    params: Promise<{
        staticNestedId: string;
    }>;
}

const Page: FC<Props> = async ({ params }) => {

    const { staticNestedId } = await params;

    return <Product racketId={Number(staticNestedId)} />

};

export default Page;