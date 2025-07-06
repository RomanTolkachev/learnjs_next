"use client"

import { TUser } from "@/entities";
import { createContext, FC, PropsWithChildren } from "react";

interface TUserProvider {
    user: TUser | undefined
}

export const AuthContext = createContext<TUserProvider>({ user: undefined })

export const UserProvider: FC<PropsWithChildren<TUserProvider>> = ({ children, user }) => {
    return <AuthContext value={{ user }}>{children}</AuthContext>
}