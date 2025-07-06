"use client"

import { AuthContext } from "@/providers/UserProvider";
import { redirect } from "next/navigation";
import { FC, use } from "react";

const Page: FC = () => {

    const { user } = use(AuthContext);

    if (!user?.isAdmin) {
        redirect("/403");
    }

    return (
        <section>
            Страничка Админа
        </section>
    )
}