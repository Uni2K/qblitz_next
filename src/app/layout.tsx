import './globals.css'
import React from "react";
import Navbar from "@/components/navbar";

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
        <html lang="de">
        <body>
        <Navbar/>
        <main className="flex flex-col">
            {children}
        </main>
        <footer className={"flex items-center justify-center p-8 pt-8 text-sm text-faded-navy"}>
            Copyright 2024 | Erstellt mit <div className="inline-block cursor-grabbing  mx-1 hover:animate-spin">❤️</div> von Prüfdienst für Blitzschutz
        </footer>
        </body>
        </html>
    )
}




