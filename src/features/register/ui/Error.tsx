import { FC, PropsWithChildren } from "react"

export const Error: FC<PropsWithChildren> = ({ children }) => {
    if (!children) {
        return null
    }
    return <p className="absolute bottom-0 translate-y-full text-destructive">{children}</p>
}