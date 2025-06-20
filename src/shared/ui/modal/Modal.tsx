import React, { FunctionComponent, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from './dialog';

interface Props {
    className?: string;
    children: ReactNode
    closeModal: () => void;
}

export const Modal: FunctionComponent<Props> = ({ className, children, closeModal }) => {
    return (
        <Dialog open onOpenChange={closeModal}>
            <DialogTitle className='hidden' />
            <DialogContent className={`${className}`}>
                {children}
            </DialogContent>
        </Dialog>
    )
};
