"use client"

import { FC, useActionState } from "react";
import { tryLogOut } from "../api";
import { Button } from "@/shared/ui/button";
import { Loader } from "./Loader";

const initialState = {
    message: "",
    isError: false
}

export const LogOut: FC = () => {

    const [state, action, isPending] = useActionState(tryLogOut, initialState)

    return (
        <div className="flex flex-col relative justify-center">
            <form action={action}>
                <Button className="mx-auto w-fit block" isActive={!isPending}>Выйти</Button>
            </form>
            {isPending && <Loader />}
            {state.message && <div className="absolute bottom-0 translate-y-full -translate-x-1/2 left-1/2">{state.message}</div>}
        </div>
    )
}