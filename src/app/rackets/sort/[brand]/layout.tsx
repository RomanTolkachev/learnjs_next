import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
    className?: string;
    sortedModal: ReactNode
    children: ReactNode
}

const layout: FunctionComponent<Props> = ({ className, sortedModal, children }) => {
    return (
        <>
            {sortedModal}
            {children}
        </>
    );
};

export default layout;