"use client"

import { TUser } from "@/entities";
import { createContext, FC, PropsWithChildren } from "react";

interface TUserProvider {
    user: TUser | null
}

export const AuthContext = createContext<TUserProvider>({ user: null })

export const UserProvider: FC<PropsWithChildren<{ user: TUser }>> = ({ children, user }) => {
    return <AuthContext value={{ user }}>{children}</AuthContext>
}