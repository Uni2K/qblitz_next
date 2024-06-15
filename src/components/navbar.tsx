'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import SideNavbar from "@/components/navbarSide";
import Image from "next/image";
import logo from '../../public/logo.png'


export type NavbarEntry = {
    label: string,
    selected?: boolean,
    link: string,
    subEntries?: NavbarEntry[]
    subSelected?: boolean
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

    let somethingSelected = false
    for (let entry of entries) {
        if (entry.link && pathname.includes(entry.link)) {
            entry.selected = true
            somethingSelected = true
            break
        }
        for (let subEntry of entry?.subEntries ?? []) {
            if (pathname.includes(subEntry.link)) {
                subEntry.selected = true
                entry.subSelected = true
                somethingSelected = true
                break
            }
        }
    }
    if (!somethingSelected) {
        entries[0].selected = true
    }

    return <nav
        className={`w-[100vw-8px]  h-[70px] md:h-[unset] mt-0 md:mt-16 md:flex-col items-center z-20 md:justify-center gap-3 sticky flex flex-grow transition-all `}>
        <Link href="/" className={"pl-8 md:px-10 mr-10 tiny:mr-20 sm:mr-0"}>
            <Image
                className={`min-[480px]:max-w-[400px] md:max-w-[unset]`}
                src={logo}
                alt="logo"
                width="509"
                height="57"
            />

        </Link>

        <div className={"block md:hidden"}><SideNavbar entries={entries}/></div>
        <div className={"mt-2 gap-4 overflow-hidden hidden md:flex "}>
            {entries.map((value, index) => getEntry(value, index))}
        </div>


    </nav>
}


function getEntry(entry: NavbarEntry, index:number) {

    return <div
            className={`${entry.subEntries && 'dropdown'} py-1 hover:bg-default-hover ${entry.subSelected ? "border-b  border-primary-error" : ""}`}
            key={entry.label+ "en"+entry.subEntries?.length+" "+index}>
            <Link href={entry.link} key={entry.label}
                  className={`flex cursor-pointer rounded  ${entry.subEntries ? "" : "hover:text-primary-error"} justify-center md:justify-normal items-center md:px-4  ${entry.selected ? "text-primary-error" : ""}`}>
                <div
                    className={`flex gap-3 py-1 items-center text-[14px] font-bold`}><span
                    className={""}>{entry.label}</span>
                </div>
            </Link>
            <div className={"dropdown-content"}>
                {entry.subEntries?.map((value, index) => getEntry(value,index ))}
            </div>
        </div>
}


export default DashboardSidebar



