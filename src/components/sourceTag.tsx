import IconLink from "@/components/icons/iconLink";
import React from "react";

type SourceTagProps = {
    url?:string
    title?:string
    classes?:string
}
const SourceTag:React.FC<SourceTagProps> = ({url,title, classes}) => {

    return <div className="-mt-6 right-3 absolute">
        <a href={url} target={"_blank"}
           className={`${classes} !no-underline flex items-center gap-2 text-sublabel !text-faded-navy hover:text-faded-navy-dark group overflow-hidden`}>
                                    <span
                                        className="transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out">{title}</span>
            <IconLink className="fill-faded-navy w-4"/>
        </a>
    </div>
}

export default SourceTag;