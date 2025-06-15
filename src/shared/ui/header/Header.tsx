"use client"

import React, { FunctionComponent } from 'react';
import { Button } from '../button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    className?: string;
}

export const Header: FunctionComponent<Props> = ({ className }) => {

    const pathname = usePathname();

    return (
        <header className={`${className} flex justify-between items-center px-6`}>
            <span style={{transform: "skewX(-20deg) scaleX(1.6)"}} className='tracking-tighter pl-8 pr-4 py-2 text-2xl font-black text-chart-5 text-shadow-neutral-700/50 text-shadow-lg/20'>
                <Link href="/">Tennis store</Link>
            </span>
            <nav className='flex justify-end '>
                <Button asChild variant="link" isActive={pathname === "/"}>
                    <Link href="/">главная</Link>
                </Button>
                <Button asChild variant="link" isActive={pathname.includes("rackets")}>
                    <Link href="/rackets">ракетки</Link>
                </Button>
            </nav>
        </header>
    );
};