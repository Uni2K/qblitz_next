import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Historisches',
    description: 'Die Historie der Blitzableiter',
}

export default function Layout({
                                   children,
                               }: {
    children: ReactNode
}) {

    return <>{children}</>
}