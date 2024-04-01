import location from '../../../public/location.png'
import React from "react";
import IconEmail from "@/components/icons/iconEmail";
import IconPhone from "@/components/icons/iconPhone";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40  w-[70%] mx-auto"}>
            <div className={"text-sm text-accent-blue"}>Firmenhistorie</div>
            <h2>Sachverstand mit über 30 Jahren Erfahrung</h2>
            <div className={"mt-4"}>
                Die Firma blickt auf eine langjährige Erfahrung im Blitzschutzbau zurück.<br/>
                Bereits seit den 1990er Jahren prüfen und errichten wir hauptberuflich Blitzschutzsystemen für Privat-
                und Gewerbekunden. <br/>Da sich mit der Zeit gesetzliche Vorschriften und Normen ändern, bilden wir uns
                regelmäßig über Seminare und Fachtagungen weiter.<br/>
                <br/>
                Darüber hinaus sind wir seit 1997 Mitglied im Bundesverband Deutscher Sachverständiger des Handwerks
                (BDSH gepr. Sachverständiger).<br/>
                <br/>
                Einige relevante Ereignisse in der Firmengeschichte entnehmen Sie bitte dem nachfolgenden Zeitstrahl:
            </div>


        </div>

    </div>
}

