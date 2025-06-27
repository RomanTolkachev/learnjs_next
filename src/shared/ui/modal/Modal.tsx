'use client'

import React, { FunctionComponent, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from './dialog';
import { useRouter } from 'next/navigation';

interface Props {
    className?: string;
    children: ReactNode
}

export const Modal: FunctionComponent<Props> = ({ className, children }) => {

    const router = useRouter();

    return (
        <Dialog open onOpenChange={router.back}>
                <DialogTitle className='hidden' />
                <DialogContent className={`${className}`}>
                    {children}
                </DialogContent>
        </Dialog>
    )
};
