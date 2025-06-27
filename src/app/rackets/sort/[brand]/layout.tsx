import React, { FunctionComponent, PropsWithChildren, ReactNode } from 'react';


const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;