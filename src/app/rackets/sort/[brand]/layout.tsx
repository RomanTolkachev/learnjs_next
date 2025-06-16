import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
    sortedModal: ReactNode
    children: ReactNode
}

const layout: FunctionComponent<Props> = ({ sortedModal, children }) => {
    return (
        <>
            {sortedModal}
            {children}
        </>
    );
};

export default layout;