
import { FavoriteContextProvider } from "@/features/favorite";
import { UserProvider } from "@/providers/UserProvider";
import { getUser } from "@/shared/api";
import { Footer } from "@/shared/ui/footer";
import { Header } from "@/shared/ui/header";
import { FC, PropsWithChildren, ReactNode } from "react";

type Props = {
    modal: ReactNode
}

const Layout: FC<PropsWithChildren<Props>> = async ({ children, modal }) => {

    const { data } = await getUser();

    return (
        <FavoriteContextProvider>
            <UserProvider user={data}>
                <Header />
                <main className="flex flex-col overflow-hidden py-5">
                    {children}
                    {modal}
                </main>
                <Footer />
            </UserProvider>
        </FavoriteContextProvider>
    )
}

export default Layout;