import {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Firmenhistorie',
    description: 'Die Historie der Firma Prüfdienst für Blitzschutz',
}

export default function Layout({
                                   children,
                               }: {
    children: ReactNode
}) {

    return <>{children}</>
}