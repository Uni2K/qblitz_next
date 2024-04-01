
import React from "react";
import ImageGallery from "@/components/imageGallery";



export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40 mx-auto"}>
            <ImageGallery />
        </div>
    </div>
}

