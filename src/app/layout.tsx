import './globals.css'
import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import background from "../../public/background.png";


export const metadata = {
    title: 'Prüfdienst für Blitzschutz',
    icons: {
        icon: '/favicon/favicon.ico'
    }
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="de"
        >
        <body>
        {/*<Image*/}
        {/*    src={background} className={"absolute top-0 left-0"}*/}
        {/*    alt={"background"}/>*/}
        <Navbar/>
        <main className="flex flex-col">
            {children}
        </main>
        <footer className={"flex items-center justify-center p-16 pt-8"}>
            Copyright 2024 @ Prüfdienst für Blitzschutz
        </footer>

        </body>
        </html>
    )
}




