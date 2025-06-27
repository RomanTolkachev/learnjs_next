import { FC } from 'react';
import { Inbox } from 'lucide-react';

export const NoData: FC = () => {
    return (
        <div className={`h-full w-full gap-4 flex flex-col items-center justify-center`}>
            <div>
                <Inbox className='text-muted-foreground' strokeWidth={2.5} size={80}/>
            </div>
            <p className='text-2xl text-muted-foreground font-semibold'>данные не найдены</p>
        </div>
    );
};
