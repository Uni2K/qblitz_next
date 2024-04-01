'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {ReactNode} from "react";

import IconOverview from "@/components/icons/iconOverview";
import IconActions from "@/components/icons/iconActions";
import IconSelling from "@/components/icons/iconSelling";
import Logo from "@/components/logo";
import IconDrawing from "@/components/icons/iconDrawing";
import IconBackend from "@/components/icons/iconBackend";
import IconRebuild from "@/components/icons/iconRebuild";


type NavbarEntry = {
    label: string,
    selected?: boolean,
    link: string,
    subEntries?: NavbarEntry[]
}


export const DashboardSidebar = () => {
    const pathname = usePathname()


    let selectedItem = 0


    const entries: NavbarEntry[] = [

        {
            label: "Leistungen",
            link: "/#leistungen"
        },
        {
            label: "Firmenhistorie",
            link: "/geschichte"
        },
        {
            label: "Wissenswertes",
            link: "/wissenswertes",
            subEntries: [{label: "Blitzarten", link: "/arten"}]
        },
        {
            label: "Bildbeispiele",
            link: "/gallerie"
        },
        {
            label: "Kontakt & Impressum",
            link: "/kontakt"
        },
    ]


    for (let entry of entries) {
        if (pathname.includes(entry.link)) {
            selectedItem = entries.indexOf(entry);
        }
    }


    if (entries[selectedItem]) {
        entries[selectedItem].selected = true
    }


    return <nav
        className={`w-[100vw-8px] mt-16 flex-col z-10  items-center gap-3  sticky flex flex-grow transition-all `}>
        <Logo icon={false}/>
        <div className={"flex mt-2 gap-4 "}>
            {entries.map((value) => getEntry(value))}
        </div>
    </nav>
}


function getEntry(entry: NavbarEntry) {

    return <Link href={entry.link} key={entry.label}
                 className={`flex cursor-pointer rounded hover:text-primary-error justify-center md:justify-normal items-center md:px-4   ${entry.selected ? "text-primary-error" : ""}`}>
        <div
            className={` flex gap-3 py-1 items-center text-[14px] font-bold`}><span
            className={" hidden md:block"}>{entry.label}</span>
        </div>
    </Link>
}


export default DashboardSidebar



