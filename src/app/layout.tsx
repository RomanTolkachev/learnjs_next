import { Header } from "@/shared/ui/header";
import "./globals.css";
import { Footer } from "@/shared/ui/footer";
import { Roboto } from 'next/font/google'

    const roboto = Roboto({
        subsets: ['latin'],
    })

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <head>
                <link rel="icon" type="image/png" href="favicon.png" />
            </head>
            <body className={`${roboto.className} min-h-svh grid grid-rows-[auto_1fr_auto]`}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
                <div id="modal"></div>
            </body>
        </html>
    );
}
