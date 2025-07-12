"use client"

import { LoginForm } from "@/features/auth";
import { AuthContext } from "@/providers/UserProvider";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC, use } from "react";

export const LoginPage: FC = () => {

    const { user } = use(AuthContext);

    if (user) {
        redirect("/personal")
    }

    return (
        <section className="h-full w-full flex flex-col gap-8 items-center justify-center py-20">
            <LoginForm />
            <div className="flex gap-4 text-sm">
                <span className="text-muted-foreground">нет аккаунта?</span>
                <Link className="underline" href={'/register'}>зарегистрироваться</Link>
            </div>
        </section>
    )
}