import { Preloader } from "@/shared/ui/preloader"
import { FC, PropsWithChildren } from "react"

export const Error: FC<PropsWithChildren> = ({ children }) => {
    if (!children) {
        return null
    }
    return <p className="absolute bottom-0 translate-y-full text-destructive">{children}</p>
}

export const Success: FC<PropsWithChildren> = ({ children }) => {
    if (!children) {
        return null
    }
    return <p className="absolute bottom-0 translate-y-full text-chart-2">{children}</p>
}

export const Loader: FC = () => {
    return <div className="absolute bottom-0 transform scale-75 translate-y-full size-12 p-2 w-full flex justify-center"><Preloader /></div>
}