"use client"

import { LoadError } from "@/shared/ui/load_error";
import { FC } from "react";

type GlobalErrorProps = {
    error: Error & { digest?: string };
}

const GlobalError: FC<GlobalErrorProps> = ({ error }) => {
    return (
        <html lang='en' className=" h-svh">
            <body className="h-svh flex flex-col items-cented justify-center">
                <p>GLOBAL ERROR</p>
                <LoadError>{error.message}</LoadError>
            </body>
        </html>
    )
}

export default GlobalError;