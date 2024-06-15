import Link from "next/link";
import IconClose from "@/components/icons/iconClose";
import IconBars from "@/components/icons/iconBars";
import React, {useEffect, useState} from "react";
import {NavbarEntry} from "@/components/navbar";


const SideNavbar = ({entries}:{entries: NavbarEntry[] }) => {
    const [showSidebar, setShowSidebar] = useState(false)

    useEffect(() => {
        if (showSidebar){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [showSidebar]);
    return <>
        <div onClick={() => setShowSidebar(false)}
             className={
                 showSidebar
                     ? `fixed right-0 top-0 h-[100vh] w-[100vw] bg-primary-navy/50  duration-300 ease-in-out`
                     : ''
             }
        >
            <div onClick={(e) => {
                e.stopPropagation()
                setShowSidebar(false)
            }}
                 className={`fixed right-0 top-0 h-full w-[88vw] max-w-[320px] overflow-auto overscroll-contain bg-background p-4 pl-5 pt-0 duration-300 ease-in-out hideScrollbar ${
                     showSidebar ? 'block translate-x-0' : 'hidden translate-x-full'
                 }`}
            >
                <nav className={"flex flex-row gap-2 sticky top-0  pt-4 z-10 pb-0"}>
                    <div className={"mt-20 flex  flex-col ml-4"}>
                        {entries.map((value, index) => getEntry(value, index))}
                    </div>

                </nav>


            </div>

        </div>
        {/*Sidebar Controls*/}
        {showSidebar ? (
            <IconClose
                className={`fixed right-2 top-4 z-[2001] block  h-8 rounded w-8 cursor-pointer items-center fill-white text-4xl hover:bg-dark-grey-hover p-2`}
                onClick={() => setShowSidebar(!showSidebar)}
            />
        ) : (
            <div onClick={() => setShowSidebar(!showSidebar)}
                 className={`fixed right-2 top-4 block cursor-pointer rounded bg-dark-grey p-2 hover:bg-dark-grey-hover`}>
                <IconBars
                    className="inline-block h-5 w-5  cursor-pointer items-center fill-white"
                />
            </div>
        )}
    </>
}


function getEntry(entry: NavbarEntry, index:number) {

    return <div className={`font-bold`} key={entry.label+"en_"+entry.subEntries?.length+" "+index}>
            <Link href={entry.link} key={entry.label}
                  className={`flex cursor-pointer py-1 hover:bg-default-hover  md:justify-normal items-center px-4  ${entry.selected ? "text-primary-error" : ""}`}>
                <div
                    className={`flex gap-3 py-1  text-[14px]`}><span
                    className={""}>{entry.label}</span>
                </div>
            </Link>
            <div className={"ml-6 !font-regular"}>
                {entry.subEntries?.map((value, index) => getEntry(value, index))}
            </div>
        </div>

}

export default SideNavbar