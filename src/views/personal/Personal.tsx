"use client"

import { LogOut } from "@/features/logOut";
import { AuthContext } from "@/providers/UserProvider";
import { FC, use } from "react";
import { UserData } from "./UserData";
import { Preloader } from "@/shared/ui/preloader";

type TData = {
    login: string,
    role: string
}

export const Personal: FC = () => {

    const { user } = use(AuthContext);

    if (!user) {
        location.href = '/login'
        return <Preloader /> // тут если ничего не вернуть то приложение крашнется т.к будет выполнен код выше. Как-то можно изящнее?
    }

    const data: TData[] = [
        {
            login: user.login,
            role: user.isAdmin ? "Администратор" : "Чебурек"
        }
    ]

    return (
        <section className="h-full w-full flex items-center justify-center py-20">
            <div className="w-fit min-w-xs flex flex-col gap-8">
                <UserData data={data} />
                <LogOut/>
            </div>
        </section>
    )

}