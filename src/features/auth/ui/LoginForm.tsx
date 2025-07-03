"use client"

import { Button } from "@/shared/ui/button";
import { Input, Label } from "@/shared/ui/input";
import { FC, useActionState, useEffect } from "react";
import { LoginFormState } from "../model";
import { tryLogin } from "../api";
import { useRouter } from "next/navigation";
import { Success, Error, Loader } from "./ResultMessages";

const initialState = {
    error: "",
    success: false,
    fieldErrors: {
        login: "",
        password: ""
    }
}

export const LoginForm: FC = () => {

    const router = useRouter();

    const [{ error, fieldErrors, success }, loginAction, isPending] = useActionState<LoginFormState, FormData>(tryLogin, initialState)

    useEffect(() => {
        if (success) {
            if (history.length > 1) {
                setTimeout(() => router.back(), 1000)
            } else {
                setTimeout(() => router.push('/'), 1000)
            }
        }
    }, [success])

    return (
        <form className="flex flex-col gap-8" action={loginAction}>
            <div className="relative flex flex-col gap-2">
                <Label htmlFor="login">Логин</Label>
                <Input name="login" id="login" />
                <Error>{!isPending && fieldErrors?.login}</Error>
            </div>
            <div className="relative flex flex-col gap-2 mb-10">
                <Label htmlFor="password">Пароль</Label>
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