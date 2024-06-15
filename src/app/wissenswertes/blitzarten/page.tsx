import flaeche from '../../../../public/lightningtypes/fläche.png'
import linie from '../../../../public/lightningtypes/linie.png'
import elms from '../../../../public/lightningtypes/elms.png'
import jet from '../../../../public/lightningtypes/jet.png'
import perl from '../../../../public/lightningtypes/perlschnur.png'
import elves from '../../../../public/lightningtypes/elves.png'
import wolke from '../../../../public/lightningtypes/wolke-wolke.png'
import kugel from '../../../../public/lightningtypes/kugel.png'
import tscherenkov from '../../../../public/lightningtypes/tscherenkov.png'
import sprites from '../../../../public/lightningtypes/sprites.png'
import leuchten from '../../../../public/lightningtypes/leuchten.png'

import React, {ReactNode} from "react";
import {StaticImageData} from "next/image";
import Image from "next/image";
import {Metadata} from "next";
import SourceTag from "@/components/sourceTag";
import IconYoutube from "@/components/icons/iconYoutube";


export const metadata: Metadata = {
    title: 'Blitzarten',
    description: 'Verschiedene Blitzarten',
}

type DataCard = {
    title: string,
    description: string | ReactNode,
    image?: StaticImageData,
    source?: { title: string, url?: string }
}

const data: DataCard[] = [
    {
        title: "Linienblitz",
        description: <>Ein Linienblitz ist eine spezifische Art von Blitz, bei der die elektrische Entladung in Form
            einer geraden oder leicht gebogenen Linie zwischen der Wolke und dem Boden verläuft. Im Gegensatz zu anderen
            Blitzarten, wie dem Verästelungsblitz, zeigt der Linienblitz keine Verzweigungen. Während er sich seinen Weg
            durch die Atmosphäre bahnt, folgt er nicht immer dem direktesten Weg, sondern kann Bögen und Kurven
            beschreiben. <br/><br/> Linienblitze sind eine der häufigsten Blitzarten und bieten ein eindrucksvolles
            Naturschauspiel, insbesondere wenn sie sich über große Entfernungen erstrecken.</>,
        image: linie,
        source: {title: "Andrea Szimon", url: 'https://commons.wikimedia.org/wiki/File:Linienblitz_Sachsen_07.JPG'}
    },
    {
        title: "Flächenblitz",
        description: `Ein Flächenblitz zeigt zahlreiche Verzweigungen vom Hauptblitzkanal und nimmt deshalb eine relativ große Fläche am Himmel ein. Diese Blitzentladung führt zum Aufleuchten ganzer Wolkenflächen.`,
        image: flaeche,
        source: {title: "Amelia Maloney", url: 'https://unsplash.com/de/fotos/blitze-in-der-nacht-dg5KvcVv7tU'}
    },
    {
        title: "Wolke-Wolke Blitz",
        description: `Ein Wolke-Wolke-Blitz ist ein Blitz, der zwischen zwei Wolken auftritt, ohne die Erdoberfläche zu erreichen. Er überbrückt die elektrische Spannung zwischen den Wolken und ist oft als leuchtender Streifen am Himmel zu sehen.`,
        image: wolke,
        source: {
            title: "Joachim Siewert",
            url: 'https://www.fotocommunity.de/photo/wolke-wolke-blitz-joachim-siewert/10342887'
        }
    },
    {
        title: "Perlenschnurblitz",
        description: `Der Perlschnurblitz ist eine besondere Blitzart, bei der der Blitzkanal in mehrere kurze, wenige Meter lange Segmente aufgeteilt ist. Diese leuchten intensiver und länger als ein gewöhnlicher Linienblitz, wodurch der Blitz wie eine Kette von Perlen erscheint.`,
        image: perl,
        source: {
            title: "Jo Blakesley",
            url: 'https://www.weatherandradar.ie/weather-news/strange-form-of-lightning-bead-lightning-in-northampton--4036bfc7-aa8f-4670-a244-2e2bb617f1c8'
        }
    },
    {
        title: "Kugelblitz",
        description: `Ein Kugelblitz ist ein seltenes, kugelförmiges Blitzphänomen, oft etwa fußballgroß, dessen Existenz noch umstritten ist. Diese Erscheinungen sollen durch Mauern dringen können und sich in Bodennähe bewegen. Es gibt Berichte, dass Kugelblitze in Laboren künstlich erzeugt wurden.`,
        image: kugel,
        source: {
            title: "Storm Wolf",
            url: 'https://nautil.us/a-new-explanation-for-one-of-the-strangest-occurrences-in-natureball-lightning-236734/'
        }
    },
    {
        title: "Wetterleuchten",
        description: `Wetterleuchten bezeichnet den Widerschein von Blitzen, die man selbst nicht sieht. Der Begriff stammt aus dem Mittelhochdeutschen "weterleichen", wobei "weter" für Wetter und "leichen" für tanzen oder hüpfen steht, und ist nicht mit "leuchten" verwandt, wie oft angenommen wird.`,
        image: leuchten,
        source: {
            title: "Gábor Paál",
            url: 'https://www.swr.de/wissen/1000-antworten/wie-entsteht-wetterleuchten-100.html'
        }
    },
    {
        title: "Red Sprite",
        description: `Red Sprites, auch als „Kobolde“ bekannt, sind leuchtende Erscheinungen in der Mesosphäre, etwa 70 km über gewaltigen Gewittern. Sie breiten sich innerhalb von Millisekunden nach oben und unten aus, erscheinen meist rötlich und zeigen unterschiedliche Formen, von Pilzgebilden bis hin zu Lattenzäunen.`,
        image: sprites,
        source: {
            title: "Stephane Vetter",
            url: 'http://www.nuitsacrees.fr/tle-du-28-mai-2017.html'
        }
    },
    {
        title: "Tscherenkov Blitze",
        description: `Tscherenkov-Blitze am Himmel entstehen, wenn hochenergetische kosmische Teilchen durch die Atmosphäre fliegen und sich schneller als das Licht in der Luft bewegen, wodurch ein charakteristisches blaues Leuchten erzeugt wird.`,
        image: tscherenkov,
        source: {
            title: "European Southern Observatory",
            url: 'https://www.eso.org/public/germany/news/eso1841/'
        }
    },
    {
        title: "Blue Jets",
        description: `Blue Jets sind seltene atmosphärische Phänomene, die als leuchtende blaue Lichtstrahlen erscheinen und sich von der Oberseite von Gewitterwolken in die Stratosphäre ausbreiten. Sie entstehen durch starke elektrische Entladungen in Gewitterwolken und erstrecken sich typischerweise bis in Höhen von etwa 50 Kilometern.`,
        image: jet,
        source: {
            title: "ESA",
            url: 'https://www.scinexx.de/news/geowissen/blauer-strahl-entraetselt/'
        }
    },
    {
        title: "Elves",
        description: `Elves sind leuchtende, ringförmige Phänomene in der Ionosphäre, die in Höhen von etwa 90 bis 100 Kilometern auftreten. Sie entstehen durch elektromagnetische Impulse von starken Blitzen und erscheinen als schnell expandierende, rote Lichtkreise, die nur wenige Millisekunden dauern.`,
        image: elves,
        source: {
            title: "Valter Binotto",
            url: 'https://www.starobserver.org/image/2304/Elves_Binotto_2000.jpg'
        }
    },
    {
        title: "Elmsfeuer",
        description: `Ein Elmsfeuer ist ein atmosphärisches Phänomen, bei dem elektrische Ladung die Luft ionisiert und ein bläuliches oder violettes Leuchten an spitzen Objekten während Gewittern erzeugt. Ein Elbsfeuer entsteht durch Sonnenlicht, das an Eisteilchen in hohen Wolken reflektiert wird, und führt zu intensiven Rot- und Orangetönen am Himmel, oft in den frühen Morgen- oder späten Abendstunden.`,
        image: elms,
        source: {
            title: "Silver Wings",
            url: 'https://die-wetterversicherung.de/blog/wp-content/uploads/2021/09/elmsfeuer-st.-elmos-feuer-flugzeug-spanien-wetterphaenomen-gefaehrlich-blitz-gewitter-haeufigkeit.jpg'
        }
    },
]


export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex flex-col pb-12 flex-grow max-w-extended mt-20 md:mt-40 w-[85%] mx-auto"}>
            <div className={"text-sm text-accent-blue"}>Wissenswertes</div>
            <h1>Blitzarten</h1>
            <div className={"mt-4"}>
                Die verschiedensten Arten von Blitzen sind heutzutage bekannt. Nachstehend die verschiedenen
                Erscheinungsformen.
            </div>
            <div className={"flex flex-wrap gap-20 mt-24"}>
                <div className={"w-full mb-20"}>
                    {data.slice(0, 1).map(value => <div key={value.title}
                                                        className={"flex flex-row flex-wrap min-[791px]:flex-nowrap flex-grow flex-shrink gap-16"}>
                        <div className={"md:basis-1/2 max-w-[600px]"}>
                            <div className={"relative"}>
                                {value.image && <Image alt={value.title} src={value.image} className={"w-full"}/>}
                                <div className={"relative bottom-8 sm:bottom-3"}>
                                    <SourceTag sourceUrl={value?.source?.url} sourceTitle={value?.source?.title}/>
                                </div>
                            </div>
                        </div>

                        <div className={"md:basis-1/2"}>
                            <h3 className={"mb-2"}>{value.title}</h3>
                            <div className={"text-faded-navy max-w-[450px]"}>{value.description}</div>
                            <div className={"flex flex-row gap-4 text-sm mt-8"}>
                                <button
                                    className={"hover:bg-default-hover border border-[#c4302b] px-4 pl-2 py-1 flex gap-2 items-center"}>
                                    <IconYoutube className={"w-6 h-6"}/><a
                                    href={"https://www.youtube.com/watch?v=p-TCPggwUzI"} target={"_blank"}
                                    className={""}>Video ansehen</a></button>
                            </div>
                        </div>

                    </div>)}

                </div>

                {data.slice(1).map((value, index) =>
                    <div key={"bl_" + index}
                         className={"flex flex-col md:basis-[27%] min-w-[300px] max-w-[400px] flex-grow flex-shrink"}>
                        <div className={"relative"}>
                            {value.image &&
                                <Image alt={value.title} src={value.image} className={"aspect-[16/12] flex-grow"}/>}
                            <div className={"relative bottom-8 sm:bottom-3"}>
                                <SourceTag sourceUrl={value?.source?.url} sourceTitle={value?.source?.title}/>
                            </div>
                            <div className={"mt-4 flex items-center pr-2"}>
                                <h3 className={""}>{value.title}</h3>
                            </div>

                        </div>
                        <div className={"text-faded-navy mt-2"}>{value.description}</div>
                    </div>
                )}
            </div>

        </div>
    </div>
}

