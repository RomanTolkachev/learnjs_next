"use client"

import React, { FunctionComponent, use } from 'react';
import { Button } from '../button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AuthContext } from '@/providers/UserProvider';

interface Props {
    className?: string;
}

export const Header: FunctionComponent<Props> = ({ className }) => {

    const pathname = usePathname();
    const { user } = use(AuthContext);
    const name = user?.login;

    return (
        <header className={`${className} h-14 flex justify-between items-center px-6 sticky top-0 z-50 bg-background shadow-sm`}>
            <span style={{ transform: "skewX(-20deg) scaleX(1.6)" }} className='tracking-tighter pl-8 pr-4 py-2 text-2xl font-black text-chart-5 text-shadow-neutral-700/50 text-shadow-lg/20'>
                <Link href="/">Tennis store</Link>
            </span>
            <nav className='flex justify-end '>
                <Button asChild variant="link" isActive={pathname === "/"}>
                    <Link href="/">главная</Link>
                </Button>
                <Button asChild variant="link" isActive={pathname.includes("rackets")}>
                    <Link href="/rackets">ракетки</Link>
                </Button>
                <Button asChild variant="link" isActive={pathname.includes("login")}>
                    <Link href={name ? "/personal" : "/login"}>
                        {name ?? "войти"}
                    </Link>
                </Button>
            </nav>
        </header>
    );
};