import { FC, PropsWithChildren } from "react"

export const Success: FC<PropsWithChildren> = ({ children }) => {
    if (!children) {
        return null
    }
    return <p className="absolute bottom-0 translate-y-full text-chart-2">{children}</p>
}

