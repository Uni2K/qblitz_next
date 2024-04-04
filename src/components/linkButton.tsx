import Link from "next/link";
import Image from "next/image";


export const LinkButton = ({icon, label, href}: { icon: JSX.Element, label: string, href: string }) => {

    return <Link href={href} className={"flex items-center gap-2 border border-accent-blue w-fit px-4 py-1.5 hover:bg-default-hover"}>
        {label} {icon}
    </Link>
}

export default LinkButton



