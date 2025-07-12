"use client"

import { RegisterForm } from "@/features/register";
import { AuthContext } from "@/providers/UserProvider";
import { redirect } from "next/navigation";
import { FC, use } from "react";

export const RegisterPage: FC = () => {

    const { user } = use(AuthContext);

    if (user) {
        redirect("/personal")
    }

    return (
        <section className="h-full w-full flex items-center justify-center py-20">
            <RegisterForm />
        </section>
    )
}