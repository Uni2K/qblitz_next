import Link from "next/link";
import Image from "next/image";


export const Logo = ({icon}: {icon: boolean}) => <Link href="/" className={"flex items-center gap-2 mt-6"}>
     <Image
            className={`block flex-shrink-0`}
            src="/logo.png"
            alt="logo"
            width="509"
            height="57"
     />

</Link>

export default Logo



