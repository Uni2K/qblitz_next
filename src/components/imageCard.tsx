import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";


type ImageCardProps = {
    title: string,
    isForNewStatus: number,
    text: string
    image: string | StaticImport
}
export const ImageCard = ({title, image, isForNewStatus, text}: ImageCardProps) => {

    return <div className={"imageFeature p-6 px-6 border-layout-separator rounded-lg w-fit  relative"}>
        <Image
            src={image} className={"w-full h-full object-cover rounded-lg absolute top-0 left-0"}
            alt={"background"}/>
        <div className={"relative"}>
            <div className={"mb-4 flex items-center"}>
                <div className={"font-bold"}>{title}</div>
                <div
                    className={`ml-auto text-[13px] ${isForNewStatus != 1 ? "bg-badge1-bg text-badge1-text" : "bg-badge2-bg text-badge2-text"} px-2 py-0.5 w-fit rounded-full`}>{isForNewStatus == 0 ? "Neue Anlagen" : (isForNewStatus == 1 ? "Bestehende Anlagen" : "Neue- & Bestehende Anlagen")}
                </div>
            </div>

            <div className={"max-w-[550px] textContent opacity-80"}>{text}
            </div>
        </div>
    </div>
}