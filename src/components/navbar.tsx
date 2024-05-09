'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import Logo from "@/components/logo";


type NavbarEntry = {
    label: string,
    selected?: boolean,
    link: string,
    subEntries?: NavbarEntry[]
    subSelected?:boolean
}


export const DashboardSidebar = () => {
    const pathname = usePathname()

    const entries: NavbarEntry[] = [

        {
            label: "Leistungen",
            link: "/#leistungen",
        },
        {
            label: "Firmenhistorie",
            link: "/firmenhistorie"
        },
        {
            label: "Wissenswertes",
            link: "",
            subEntries: [
                {label: "Blitzarten", link: "/wissenswertes/blitzarten"},
                {label: "Blitz & Donner", link: "/wissenswertes/blitz-donner"},
                {label: "Historisches", link: "/wissenswertes/historisches"},
                {label: "Überspannungsschutz", link: "/wissenswertes/ueberspannungsschutz"},
                {label: "Äußerer Blitzschutz", link: "/wissenswertes/auesserer-blitzschutz"},
            ]
        },
        {
            label: "Bildbeispiele",
            link: "/bildbeispiele"
        },
        {
            label: "Kontakt & Impressum",
            link: "/kontakt"
        },
    ]

    let somethingSelected=false
    for (let entry of entries) {
        if (entry.link && pathname.includes(entry.link)) {
            entry.selected = true
            somethingSelected=true
            break
        }
        for (let subEntry of entry?.subEntries ?? []) {
            if (pathname.includes(subEntry.link)) {
                subEntry.selected = true
                entry.subSelected=true
                somethingSelected=true
                break
            }
        }
    }
    if (!somethingSelected){
        entries[0].selected = true
    }

    return <nav
        className={`w-[100vw-8px] mt-16 flex-col z-20  items-center gap-3  sticky flex flex-grow transition-all `}>
        <Logo icon={false}/>
        <div className={"flex mt-2 gap-4 overflow-hidden "}>
            {entries.map((value) => getEntry(value))}
        </div>
    </nav>
}


function getEntry(entry: NavbarEntry) {

    return <div className={`${entry.subEntries && 'dropdown'} py-1 hover:bg-default-hover ${entry.subSelected? "border-b  border-primary-error":""}`} key={entry.label}>
        <Link href={entry.link} key={entry.label}
              className={`flex cursor-pointer rounded  ${entry.subEntries ? "" : "hover:text-primary-error"} justify-center md:justify-normal items-center md:px-4  ${entry.selected ? "text-primary-error" : ""}`}>
            <div
                className={`flex gap-3 py-1 items-center text-[14px] font-bold`}><span
                className={"hidden md:block"}>{entry.label}</span>
            </div>
        </Link>
        <div className={"dropdown-content"}>
            {entry.subEntries?.map((value) => getEntry(value))}
        </div>
    </div>
}


export default DashboardSidebar



