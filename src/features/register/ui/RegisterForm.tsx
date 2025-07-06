"use client"

import { Button } from "@/shared/ui/button";
import { Input, Label } from "@/shared/ui/input";
import { FC, useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { tryRegister } from "../api";
import { defaultState, TRegisterState } from "../model";
import { Success, Error, Loader } from "./ResultMessages";

export const RegisterForm: FC = () => {

    const router = useRouter();

    const [{ error, fieldErrors, success }, registerAction, isPending] = useActionState<TRegisterState, FormData>(tryRegister, defaultState)

    useEffect(() => {
        if (success) {
                setTimeout(() => router.push('/personal'), 1000)
        }
    }, [success])

    return (
        <form className="flex flex-col gap-8" action={registerAction}>
            <div className="relative flex flex-col gap-2">
                <Label htmlFor="login">Придумайте логин</Label>
                <Input name="login" id="login" />
                <Error>{!isPending && fieldErrors?.login}</Error>
            </div>
            <div className="relative flex flex-col gap-2 mb-10">
                <Label htmlFor="password">Придумайте пароль</Label>
                <Input name="password" id="password" type="password" />

                {isPending ? <Loader /> : (
                    <>
                        <Error>{fieldErrors?.password}</Error>
                        <Error>{error}</Error>
                        <Success>{success && "успешно"}</Success>
                    </>
                )}

            </div>
            <Button isActive={!isPending}>Отправить</Button>
        </form>
    )
}