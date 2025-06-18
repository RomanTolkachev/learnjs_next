import React, { FunctionComponent, PropsWithChildren, ReactNode } from 'react';

interface Props {
    sortedModal: ReactNode
}

const Layout: FunctionComponent<PropsWithChildren<Props>> = ({ sortedModal, children }) => {
    return (
        <>
            {sortedModal}
            {children}
        </>
    );
};

export default Layout;