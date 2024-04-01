import flaeche from '../../../../public/lightningtypes/fläche.webp'
import linie from '../../../../public/lightningtypes/linie.jpg'
import elms from '../../../../public/lightningtypes/elms.webp'
import jet from '../../../../public/lightningtypes/jet.jpg'
import perl from '../../../../public/lightningtypes/perlschnur.webp'
import elves from '../../../../public/lightningtypes/elves.webp'
import wolke from '../../../../public/lightningtypes/wolke-wolke.webp'
import kugel from '../../../../public/lightningtypes/kugel.webp'
import tscherenkov from '../../../../public/lightningtypes/tscherenkov.webp'
import sprites from '../../../../public/lightningtypes/sprites.webp'
import leuchten from '../../../../public/lightningtypes/leuchten.webp'

import React from "react";
import {StaticImageData} from "next/image";
import Image from "next/image";


type DataCard = {
    title: string,
    description: string,
    image?: StaticImageData,
    source?: { title: string, url?: string }
}

const data: DataCard[] = [
    {
        title: "Linienblitz",
        description: `Ein Linienblitz hat keinerlei Verzweigungen. Er sucht sich jedoch nicht immer den direkten Weg zum Erdboden, sondern kann auch Bögen beschreiben, die aus einer bestimmten Perspektive als Knoten und kreisförmige Verschlingungen gesehen werden können.`,
        image: linie,
        source: {title: "Andrea Szimon", url: 'https://commons.wikimedia.org/wiki/File:Linienblitz_Sachsen_07.JPG'}
    },
    {
        title: "Flächenblitz",
        description: `Ein Flächenblitz zeigt zahlreiche Verzweigungen vom Hauptblitzkanal.Ein Flächenblitz zeigt zahlreiche Verzweigungen vom Hauptblitzkanal.Ein Flächenblitz zeigt zahlreiche Verzweigungen vom Hauptblitzkanal.`,
        image: flaeche,
        source: {title: "Amelia Maloney", url: 'https://unsplash.com/de/fotos/blitze-in-der-nacht-dg5KvcVv7tU'}
    },
    {
        title: "Wolke-Wolke Blitz",
        description: `Die meisten Blitze verlaufen zwischen den Wolken und erreichen nicht den Boden. Von ihnen geht keine Gefahr aus. Es kann aber jederzeit zu einem gefährlichen Blitzschlag kommen.`,
        image: wolke,
        source: {
            title: "Joachim Siewert",
            url: 'https://www.fotocommunity.de/photo/wolke-wolke-blitz-joachim-siewert/10342887'
        }
    },
    {
        title: "Perlenschnurblitz",
        description: `Der Perlschnurblitz ist eine Blitzart, bei der der Blitz nicht durch einen zusammenhängenden Blitzkanal gekennzeichnet ist, sondern in einzelne, meistens nur wenige Meter lange Segmente zerfällt. Diese einzelnen Segmente leuchten heller und meistens auch etwas länger als ein "normaler" Linienblitz. Von weitem betrachtet sehen die kurzen, leuchtenden Segmente des Blitzes wie eine Perlenschnur aus.`,
        image: perl,
        source: {
            title: "Jo Blakesley",
            url: 'https://www.weatherandradar.ie/weather-news/strange-form-of-lightning-bead-lightning-in-northampton--4036bfc7-aa8f-4670-a244-2e2bb617f1c8'
        }
    },
    {
        title: "Kugelblitz",
        description: `Die Existenz des (meistens als etwa fußballgroße Erscheinung beschriebenen) Kugelblitzes ist eine heute noch umstrittene Frage, obwohl es durchaus Fotos gibt. Die nur selten berichteten Phänomene können angeblich durch Mauern dringen und sich langsam in Bodennähe bewegen. Künstliche Kugelblitze sollen in einigen Laboren schon erzeugt worden sein.`,
        image: kugel,
        source: {
            title: "Storm Wolf",
            url: 'https://nautil.us/a-new-explanation-for-one-of-the-strangest-occurrences-in-natureball-lightning-236734/'
        }
    },
    {
        title: "Wetterleuchten",
        description: `Unter Wetterleuchten (mittelhochdt. weterleichen zu "weter" (Wetter) + "leichen" (tanzen, hüpfen), nicht verwandt mit leuchten, wie oft angenommen) wird meistens der Widerschein von Blitzen verstanden, wenn man die Blitze selbst nicht sieht.`,
        image: leuchten,
        source: {
            title: "Gábor Paál",
            url: 'https://www.swr.de/wissen/1000-antworten/wie-entsteht-wetterleuchten-100.html'
        }
    },
    {
        title: "Red Sprite",
        description: `Die „Kobolde“ (engl.: Sprites) tauchen in der Mesosphäre in einer Höhe von etwa 70km ebenfalls über gewaltigen Gewittern auf. Sie breiten sich im Millisekundenbereich nach oben und unten aus, erscheinen meistens rötlich und haben unterschiedliche Formen, von Pilzgebilden bis hin zu Lattenzäunen.`,
        image: sprites,
        source: {
            title: "Stephane Vetter",
            url: 'http://www.nuitsacrees.fr/tle-du-28-mai-2017.html'
        }
    },
    {
        title: "Tscherenkov Blitze",
        description: `Die „Kobolde“ (engl.: Sprites) tauchen in der Mesosphäre in einer Höhe von etwa 70km ebenfalls über gewaltigen Gewittern auf. Sie breiten sich im Millisekundenbereich nach oben und unten aus, erscheinen meistens rötlich und haben unterschiedliche Formen, von Pilzgebilden bis hin zu Lattenzäunen.`,
        image: tscherenkov,
        source: {
            title: "European Southern Observatory",
            url: 'https://www.eso.org/public/germany/news/eso1841/'
        }
    },
    {
        title: "Blue Jets",
        description: `Erste Berichte stammen aus dem Jahr 1989, doch vermutlich gab es schon vor dieser Zeit Beobachtungen von Blue Jets und Red Sprites. Flugzeugpiloten, die dieses Phänomen beobachten konnten, behielten es für sich, da sie sonst eventuell außer Dienst gestellt worden wären, wenn man ihnen nicht geglaubt hätte.`,
        image: jet,
        source: {
            title: "ESA",
            url: 'https://www.scinexx.de/news/geowissen/blauer-strahl-entraetselt/'
        }
    },
    {
        title: "Elves",
        description: `Bei den „Elfen“ (engl.: Elves) handelt es sich um Blitzentladungen, die die Gase in der Ionosphäre erleuchten. Sie treten über großen Gewitterwolken als rötlicher Ring in etwa 90km Höhe auf und werden vermutlich durch Wolkenblitze induziert.`,
        image: elves,
        source: {
            title: "Valter Binotto",
            url: 'https://www.starobserver.org/image/2304/Elves_Binotto_2000.jpg'
        }
    },
    {
        title: "Elmsfeuer",
        description: `Ein Elbsfeuer ist ein atmosphärisches Phänomen, das durch die Reflexion des Sonnenlichts an kleinen Eisteilchen in hohen Wolken entsteht, wodurch der Himmel in intensiven Rot- und Orangetönen leuchtet. Dieses seltene und beeindruckende Schauspiel wird oft in den frühen Morgen- oder späten Abendstunden beobachtet und verleiht der Landschaft eine fast surreale, feurige Atmosphäre.`,
        image: elms,
        source: {
            title: "Silver Wings",
            url: 'https://die-wetterversicherung.de/blog/wp-content/uploads/2021/09/elmsfeuer-st.-elmos-feuer-flugzeug-spanien-wetterphaenomen-gefaehrlich-blitz-gewitter-haeufigkeit.jpg'
        }
    },
    // {
    //     title: "Plasmafäden",
    //     description: `Plasmafäden können im Nahbereich eines Blitzschlages auftreten. Kurz vor dem eigentlichen Blitz ist die Spannung zwischen dem Erdboden und der Luft sehr groß. Meistens ist es so, dass sich zunächst ein unsichtbarer Blitzkanal bildet, der dann den Kurzschluss verursacht, wobei sich die Spannung durch den dann sichtbaren Blitz abbaut. Manchmal bilden sich aber kurz bevor die Entladung erfolgt mehrere fadenartige, sichtbare Plasmastränge, die vom Erdboden nach oben streben und eine Länge von einigen cm bis hin zu mehreren Metern haben. Einer dieser Plasmafäden stellt dann den Kurzschluss her und es kommt zum Blitzschlag.`,
    // },
    // {
    //     title: "Positive Blitze",
    //     description: `Ein positiver Blitz ist ein Blitz, bei dem die Blitzentladung aus dem oberen, positiv geladenen Teil der Wolke zum Boden erfolgt. Diese Blitze sind um einiges stärker als "normale" negative Blitze und können kilometerweit vom eigentlichen Gewitter entfernt einschlagen.`,
    // }

]


export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40  w-[70%] mx-auto"}>
            <div className={"text-sm text-accent-blue"}>Wissenswertes</div>
            <h2>Blitzarten</h2>
            <div className={"mt-4"}>
                Die verschiedensten Arten von Blitzen sind heutzutage bekannt. Nachstehend die verschiedenen
                Erscheinungsformen.
            </div>
            <div className={"flex flex-wrap gap-20 mt-24"}>
                <div className={"w-full mb-20"}>
                    {data.slice(0, 1).map(value => <div className={"flex flex-row flex-grow flex-shrink gap-16"}>
                        <div className={"basis-1/2 bg"}>
                            {value.image && <Image alt={value.title} src={value.image} className={"w-full"}/>}
                        </div>
                        <div className={"basis-1/2"}>
                            <h3 className={"mb-2"}>{value.title}</h3>
                            <div className={"text-faded-navy max-w-[400px]"}>{value.description}</div>
                            <div className={"flex flex-row gap-8 text-sm mt-8"}>
                                <div className={"border border-accent-blue px-4 py-1 cursor-pointer"}>Mehr Informationen</div>
                                <div className={"border border-accent-blue px-4 py-1"}>Video aufrufen</div>
                            </div>
                        </div>

                    </div>)}

                </div>

                {data.slice(1).map((value, index) =>
                    <div className={"flex flex-col basis-[27%] max-w-[400px] flex-grow flex-shrink"}>
                        <div className={""}>
                            {value.image && <Image alt={value.title} src={value.image} className={"aspect-[16/12]"}/>}
                            <h3 className={"mt-4"}>{value.title}</h3>
                        </div>
                        <div className={"text-faded-navy mt-2"}>{value.description}</div>

                    </div>
                )}
            </div>

        </div>
    </div>
}

