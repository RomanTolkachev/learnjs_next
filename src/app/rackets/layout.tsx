import React, { FunctionComponent, PropsWithChildren, ReactNode } from 'react';

interface Props {
    modal: ReactNode
}

const Layout: FunctionComponent<PropsWithChildren<Props>> = ({ children, modal }) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default Layout;