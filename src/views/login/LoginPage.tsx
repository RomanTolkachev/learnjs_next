import { LoginForm } from "@/features/auth";
import { FC } from "react";

export const LoginPage: FC = () => {
    return (
        <section className="h-full w-full flex items-center justify-center py-20">
            <LoginForm />
        </section>
    )
}