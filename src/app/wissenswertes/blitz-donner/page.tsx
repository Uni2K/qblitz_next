import donner from '../../../../public/wissenswertes/donner.jpeg'
import React from "react";
import Image from "next/image";
import LinkButton from "@/components/linkButton";
import IconLightning from "@/components/icons/iconLightning";
import {Metadata} from "next";
import SourceTag from '@/components/sourceTag';

export const metadata: Metadata = {
    title: 'Blitz & Donner',
    description: 'Informationen zu Gewittern, Blitzen und Donnern',
}

export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40 w-[70%] mx-auto max-w-content"}>
            <div className={"text-sm text-accent-blue"}>Wissenswertes</div>
            <h1>Blitz & Donner</h1>
            <div className={"mt-4"}>
                Im Inneren einer Gewitter- bzw. Cumulonimbuswolke finden sich sowohl Eisteilchen als auch Wassertropfen.<br/>
                Durch die starken Aufwinde sammeln sich die leichteren Eisteilchen im oberen Teil der Wolke und sind als
                riesiger Cirrusschirm in Form eines Ambosses zu sehen. Die großen und damit relativ schweren
                Regentropfen konzentrieren sich im mittleren und unteren Teil der Wolke.
            </div>
            <div className={"mt-16"}>
                <div className={"w-full mb-20 relative"}>
                    <Image alt={"donner"} className={"max-w-[1000px]"} src={donner}></Image>
                    <div className={"text-center text-sublabel text-faded-navy mt-2"}>Cumulonimbuswolke mit typischer Ambossform</div>
                    <SourceTag title={"picture alliance/dpa | Fabian Stoffers"} url={"https://www.br.de/nachrichten/wissen/gewitter-unwetter-superzelle-das-muessen-sie-wissen,TAKGmiJ"}/>
                </div>
            </div>

            <h2>Entladung führt zum Ausgleich</h2>
            <div>
                Verschiedene Vorgänge innerhalb der Wolke sorgen dafür, dass die Eisteilchen positiv und die
                Wassertröpfchen negativ geladen werden. Damit baut sich in der Wolke oben ein positives und unten eine
                negatives Ladungszentrum auf.
                Wird der Unterschied zu groß, sucht die Natur nach einem Ausgleich.<br/>
                <br/>
                Blitzentladungen stellen die Balance wieder her. Für uns Menschen sind allein die Blitze zwischen Wolke
                und Erde gefährlich, diese machen aber nur einen kleinen Anteil aus. Etwa 80 Prozent der Entladungen
                erfolgen innerhalb der Wolke oder zwischen verschiedenen Wolken.<br/>
                <br/>
                Ein Blitz beginnt mit einer so genannten Vorentladung. Beim Erdblitz wird dabei von der Wolke ausgehend
                zickzackförmig ein Blitzkanal in Richtung Erde aufgebaut. Kurz bevor er den Boden erreicht, wächst ihm
                von der Erdoberfläche eine Fangladung entgegen. Dies geschieht meist von erhöhten Punkten aus, zum
                Beispiel von Hausdächern, Kirchtürmen und Gipfelkreuzen.
            </div>
            <h2>Ströme von über 100.000 Ampere</h2>
            <div>
                Ist der Blitzkanal geschlossen, kommt es zur eigentlichen Hauptentladung in Form eines Blitzschlags.
                Dabei fließen Ströme von über 100.000 Ampère, so dass es innerhalb von Mikrosekunden zum
                Ladungsausgleich kommt. Nach der Hauptentladung folgen noch bis zu 40 Teilentladungen innerhalb von
                Tausendsteln bis Hundertsteln Sekunden.<br/>
                <br/>
                Der starke Stromfluss erhitzt die Luft im Blitzkanal plötzlich auf etwa 30.000 Grad. Die Luft dehnt sich
                explosionsartig aus, es entsteht eine Schockwelle. Die damit verbundenen Schallwellen hören wir als
                Donner. Ist der Blitzeinschlag sehr nah, kracht es heftig, bei größerer Entfernung hört man nur ein
                dumpfes Grollen. Die Zeit zwischen Blitz und Donner liefert einen Hinweis auf die Entfernung des
                Gewitters. Drei Sekunden entsprechen etwa einem Kilometer. Ein einfacher Rechner findet sich z.B. <a href={"https://www.bergfreunde.de/entfernung-gewitter-rechner/"} target={"_blank"}>
                hier
            </a>.
            </div>
            <h2>Verschiedene Blitze</h2>
            <div>
                Viele Legenden und Berichte ranken sich um den sehr seltenen Kugelblitz. Inzwischen zweifelt zwar
                niemand mehr an seiner Existenz, bei seiner Erklärung tappt man aber noch im Dunklen. Ein anderes
                Phänomen ist das Elmsfeuer. Man sieht es gelegentlich auf Kirchturmspitzen, Schiffsmasten oder anderen
                hohen Gegenständen. Das Elmsfeuer ist sehr gefährlich, denn es zeugt von großen Ladungsdifferenzen
                zwischen Wolke und Boden. Ein Blitzschlag folgt meist kurz darauf.Von einem Wetterleuchten spricht man,
                wenn ein Gewitter so weit entfernt ist, dass man zwar den Widerschein der Blitze sieht, den Donner aber
                (noch) nicht hört.
            </div>
            <div className={"mt-4"}>
                <LinkButton icon={<IconLightning className={"h-4"}/>} label={"Weiterlesen zu Blitzarten"} href={"/wissenswertes/blitzarten"}/>
            </div>

        </div>
    </div>
}

