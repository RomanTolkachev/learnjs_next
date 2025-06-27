import { Header } from "@/shared/ui/header";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { Footer } from "@/shared/ui/footer";

const roboto = Roboto({
    subsets: ['latin'],
})

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <link rel="icon" type="image/png" href="favicon.png" />
            </head>
            <body className={`${roboto.className} h-svh overflow-hidden grid grid-rows-[auto_1fr_auto]`}>
                <Header />
                <main className="flex flex-col overflow-hidden py-5">
                    {children}
                    {modal}
                </main>
                <Footer />
                <div id="modal"></div>
            </body>
        </html>
    );
}
