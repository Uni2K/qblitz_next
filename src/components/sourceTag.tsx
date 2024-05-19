import IconLink from "@/components/icons/iconLink";
import React from "react";

type SourceTagProps = {
    title?:string
    sourceUrl?: string
    sourceTitle?: string
    classes?: string
}
const SourceTag: React.FC<SourceTagProps> = ({sourceUrl, sourceTitle, title, classes}) => {

    return <div className={"group"}>
        <div className={"group-hover:invisible xlmd:text-center text-sublabel text-faded-navy mt-2"}>{title}</div>
        <div className="-mt-[22px] right-3 absolute">
            <a href={sourceUrl} target={"_blank"}
               className={`${classes} !no-underline flex items-center gap-2 text-sublabel !text-faded-navy hover:text-faded-navy-dark  overflow-hidden`}>
                                    <span
                                        className="transform -translate-x-[101%] translate-y-[1px] group-hover:translate-x-0 transition-transform duration-300 ease-in-out">{sourceTitle}</span>
                <IconLink className="fill-faded-navy w-4"/>
            </a>
        </div>
    </div>
}

export default SourceTag;