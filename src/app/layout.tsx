import "./globals.css";
import { Roboto } from 'next/font/google'
import NextTopLoader from "nextjs-toploader";

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
            <body className={`${roboto.className} h-svh overflow-hidden grid grid-rows-[auto_1fr_auto]`}>
                <NextTopLoader showSpinner={false}/>
                {children}
                <div id="modal"></div>
            </body>
        </html>
    );
}
