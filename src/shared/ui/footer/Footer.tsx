import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface Props {
    className?: string;
}

export const Footer: FunctionComponent<Props> = ({ className }) => {
    return (
        <footer className={`${className} flex justify-between items-center`}>
            <p className='text-xs text-muted-foreground px-4'>
                © Tennis store. All rights are left
            </p>
            <span className='px-4 py-2 font-black opacity-30'>
                <Link href="/">Tennis store</Link>
            </span>
        </footer>
    );
};