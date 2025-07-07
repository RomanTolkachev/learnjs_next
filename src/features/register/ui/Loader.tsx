import { Preloader } from "@/shared/ui/preloader"
import { FC } from "react"

export const Loader: FC = () => {
    return <div className="absolute bottom-0 transform scale-75 translate-y-full size-12 p-2 w-full flex justify-center"><Preloader /></div>
}