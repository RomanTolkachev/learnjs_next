import { Header } from "@/shared/ui/header";
import "./globals.css";
import { Roboto } from 'next/font/google'

    const roboto = Roboto({
        subsets: ['latin'],
    })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <link rel="icon" type="image/png" href="favicon.png" />
            </head>
            <body className={`${roboto.className} h-svh overflow-hidden grid grid-rows-[auto_auto]`}>
                <Header />
                <main className="pt-5 min-h-[calc(100svh-4.75rem)] h-full overflow-hidden">
                    {children}
                </main>
                <div id="modal"></div>
            </body>
        </html>
    );
}
