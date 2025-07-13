import React, { FunctionComponent, PropsWithChildren } from 'react';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;