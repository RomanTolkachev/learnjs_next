import { FC, PropsWithChildren } from 'react';
import { Ban } from 'lucide-react';

export const LoadError: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={`h-full w-full gap-4 flex flex-col items-center justify-center`}>
            <div>
                <Ban className='text-destructive' strokeWidth={2.5} size={80}/>
            </div>
            <p className='text-2xl text-muted-foreground font-semibold'>ошибка загрузки</p>
            <p>{children}</p>
        </div>
    );
};
