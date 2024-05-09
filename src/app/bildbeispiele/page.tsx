import React from "react";
import ImageGallery from "@/components/imageGallery";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Bildbeispiele',
    description: 'Bilder von Blitzeinschlägen und Blitzschutzen',
}

export default async function Home() {
    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex max-w-extended flex-col pb-12 flex-grow mt-24 mx-auto"}>
            <ImageGallery />
        </div>
    </div>
}

