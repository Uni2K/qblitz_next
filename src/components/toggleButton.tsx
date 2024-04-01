import {ReactNode} from "react";
import IconCheck from "@/components/icons/iconCheck";
import {useLocalStorage} from "@/utils/hooks";


export const ToggleButton = ({
                                 text,
                                 textHighlight,
                                 icon,
                                 onClick = undefined,
                                 colorSchema,
                                 isSelected = false,
                                 classes = "",
                                 id, hasToggle = true
                             }: {
    text: string,
    textHighlight: string,
    isSelected?: boolean,
    icon: ReactNode,
    colorSchema?: string
    onClick?: () => void | undefined
    classes?: string
    id: string
    hasToggle?: boolean
}) => {
    const [hasFinished, setHasFinished] = useLocalStorage(id, false);

    return <div onClick={onClick}
                className={`${classes} ${colorSchema} rounded transition-colors pl-2  cursor-pointer flex gap-1 items-center w-fit hover:bg-default-hover border-b ${isSelected ? " text-white bg-accent-blue hover:border-default-hover hover:text-primary-navy fill-white hover:fill-primary-navy" : "border-default-hover"}`}>
    <span
        className={`${isSelected ? "" : ""} w-5 mx-1 aspect-square flex items-center justify-center rounded-full`}>{icon}</span><span
        className={"mr-2"}><b
        className={"mr-1"}>{textHighlight}</b> {text}</span>
        {hasToggle ? <div
            className={`ml-auto  pr-2 pl-1.5 py-2 flex items-center rounded justify-center ${isSelected ? "bg-[inherit]" : "bg-default-hover"} fill-secondary-text/30 hover:fill-primary-success`}
            onClick={(e?: any) => {
                e.stopPropagation()
                e.preventDefault()
                setHasFinished(!hasFinished)
            }}>
            <IconCheck
                className={`hover:bg-primary-background h-6  rounded-full fill-grey-navy ${hasFinished ? "!fill-primary-success" : ""}`}
            /></div> : <div className={"py-2 invisible"}>d</div>
        }
    </div>

}


export default ToggleButton



