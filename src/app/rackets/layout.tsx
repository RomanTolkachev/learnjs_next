import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
    children: ReactNode
    modal: ReactNode
}

const layout: FunctionComponent<Props> = ({ children, modal }) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default layout;