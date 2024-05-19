import background from '../../public/background.png'
import drawing1 from '../../public/technical_drawing.png'
import autocad from '../../public/autocad.png'
import image1 from '../../public/start_0.webp'
import image2 from '../../public/start_1.webp'
import image3 from '../../public/start_2.webp'
import image4 from '../../public/start_3.webp'
import image5 from '../../public/start_4.webp'

import Image from 'next/image'
import IconLightning from "@/components/icons/iconLightning";
import IconDrawing from "@/components/icons/iconDrawing";
import IconCoach from "@/components/icons/iconCoach";
import IconLadder from "@/components/icons/iconLadder";
import Link from "next/link";
import IconTeaching from "@/components/icons/iconTeaching";
import IconSelling from "@/components/icons/iconSelling";
import React from "react";
import {ImageCard} from "@/components/imageCard";


export default async function Home() {

    return <div className={""}>
        <div className={"flex justify-end flex-col pb-4 min-[571px]:pb-12 flex-grow -mt-48 h-screen w-[90%] mx-auto"}>
            <Image
                src={background} priority fetchPriority={'high'} className={"absolute top-0 left-0 z-0 max-h-full"}
                alt={"background"} placeholder="blur"/>
            <div className={"z-10 text-white flex flex-col min-[571px]:flex-row gap-4 min-[571px]:gap-8  min-[571px]:flex-wrap mx-auto items-center justify-center "}>
                <Link href={"#leistungen"}
                      className={"max-[753px]:w-[220px] flex gap-4 items-center cursor-pointer hover:bg-default-hover py-2 pr-5 px-4"}>
                    <IconLightning className={"h-6 fill-white"}/>Innerer
                    &<br/> Äußerer Blitzschutz
                </Link>
                <div className={"h-[40px] bg-layout-separator w-[1px] max-[571px]:hidden"}/>
                <Link href={"#zeichnungen"}
                    className={"max-[753px]:w-[220px] flex gap-4 items-center cursor-pointer hover:bg-default-hover py-2 pr-5 px-4"}>
                    <IconDrawing className={"h-6 fill-white"}/>Technische
                    &<br/> Zeichnungen
                </Link>
                <div className={"h-[40px] bg-layout-separator w-[1px] hidden min-[755px]:block  max-[571px]:hidden"}/>
                <Link href={"#andere_leistungen"}
                    className={"max-[753px]:w-[220px] flex gap-4 items-center cursor-pointer hover:bg-default-hover py-2 pr-5 px-4"}>
                    <IconCoach className={"h-6 fill-white"}/>Beratung
                    &<br/> Gutachten
                </Link>
                <div className={"h-[40px] bg-layout-separator w-[1px] invisible min-[1050px]:visible max-[753px]:visible max-[571px]:hidden"}/>
                <Link href={"#andere_leistungen"}
                    className={"max-[753px]:w-[220px] flex gap-4 items-center cursor-pointer hover:bg-default-hover py-2 pr-5 px-4"}>
                    <IconLadder className={"h-6 fill-white"}/>Materialverkauf
                    &<br/> Leiternprüfung
                </Link>
            </div>
        </div>
        <div className={"z-20 my-24 bg-layout-separator h-[1px] w-full"} id={"leistungen"}></div>
        <div className={"z-10 max-w-ultra w-[90%] mx-auto px-14"} >
            <h2 className={"flex gap-4 items-center -ml-14"}>
                <IconLightning className={"h-10 fill-white"}/>Innerer
                &<br/> Äußerer Blitzschutz
            </h2>
            <div className={"mt-6"}>
                Wir übernehmen für Ihre Anlage die komplette Bauabwicklung. Stehen Ihnen mit Rat und Tat zur Seite,<br/>
                damit Sie am Ende mit der Bauleistung <b>100%</b> zufrieden sind. <br/>
                <br/>
                Wir bieten deshalb folgende Leistungen an:

                <div className={"flex mt-12 gap-10 xll:gap-16 flex-wrap"}>
                    <ImageCard isForNewStatus={0}
                               image={image1}
                               title={"Planung"}
                               text={"Egal ob Wohnhaus, Industriegebäude, Schule oder Spezialbauwerk, wir planen und erarbeiten gemeinsam mit Ihnen eine optimale, normgerechte Blitzschutzanlage. Die dafür verwendeten technischen Bestandszeichnungen, werden von einer speziell geschulten Mitarbeiterin professionell angefertigt."}></ImageCard>

                    <ImageCard isForNewStatus={0}
                               title={"Errichtung"}
                               image={image2}
                               text={"Alle zur Blitzschutzanlage gehörenden Installationen werden von uns mit modernster Technik errichtet. Auch bauliche Maßnahmen durch Partnerfirmen werden von uns überprüft und abgenommen. Dabei können Sie sich jederzeit auf uns als Ansprechpartner verlassen."}></ImageCard>

                    <ImageCard isForNewStatus={2}
                               title={"Abnahme"}
                               image={image3}
                               text={"Für Kunde und Errichter gleichfalls wichtig, bestätigt die mängelfreie Abnahme die uneingeschränkte Funktionstüchtigkeit der Anlage. Nur eine intakte Anlage kann auch ihren Zweck erfüllen. Dazu sind Prüfungen in gleichbleibenden Zeitintervallen notwendig."}></ImageCard>

                </div>
                <p className={"mt-16 mb-12"}>
                    Für bestehende Hallen, Betriebsgebiete, Schulen etc. bieten wir folgende Leistungen an:
                </p>

                <div className={"flex gap-16 flex-wrap"}>

                    <ImageCard isForNewStatus={1}
                               title={"Prüfung"}
                               image={image4}
                               text={"Nicht selten werden bei der Überprüfung versteckte und/oder bauseitig verursachte Mängel aufgedeckt. Im dreijährigen Prüfturnus werden immer wieder Zerstörungen durch Fremdeinwirkung festgestellt."}></ImageCard>
                    <ImageCard isForNewStatus={1}
                               title={"Instandsetzung"}
                               image={image5}
                               text={"Sind bei der Prüfung Mängel festgestellt worden, stellen wir diese auf Wunsch sofort oder nach Angebot ab. Sind die Mängel so umfangreich, dass die Anlage als Gesamtheit erneuert werden muss, erstellen wir auf Wunsch Leistungsverzeichnisse für Reparaturen durch Partnerfirmen."}></ImageCard>


                </div>


            </div>


        </div>
        <div className={"z-10 my-24 bg-layout-separator h-[1px] w-full"} id={"zeichnungen"}></div>
        <div className={"z-10 max-w-ultra w-[90%] mx-auto px-14 pb-24"}>
            <div>
                <div className={"flex flex-row gap-8 lg:gap-12 flex-wrap lm:flex-nowrap"}>
                    <div className={"lm:basis-1/2 basis-full max-w-[500px] lm:max-w-[700px] flex flex-shrink-0 relative lm:p-8 mr-20"}>
                        <Image
                            src={drawing1} className={" border-layout-separator border h-full  rounded-lg flex-grow  w-full object-contain"}
                            alt={"background "}/>
                        <Image
                            src={autocad} className={"absolute -translate-y-1/2 -translate-x-[8px] bottom-0 right-0 rounded-lg w-12"}
                            alt={"background "}/>
                    </div>

                    <div className={"max-w-[800px] lm:max-w-[550px] lm:basis-1/2 basis-full flex  flex-col justify-center"}>
                        <h2 className={"font-bold mb-4 flex flex-row gap-4 -ml-14 mt-10 lm:mt-0"}><IconDrawing
                            className={"w-8 fill-white"}/>Technische Zeichnungen
                        </h2>
                        Die Grundlage jeder Blitzschutzanlage bilden professionell angefertigte Prüfunterlagen.
                        Sie zeigen für den Laien verständlich auf, aus welchen Komponenten Ihre Blitzschutzanlage
                        besteht.
                        Das Herzstück der Prüfunterlagen bilden dabei speziell anfertigte technische Zeichnungen, welche
                        alle auf dem Dach befindlichen Bauteilen erfassen. Darüber hinaus geben sie Ihnen einen
                        Gesamtüberblick über die Fülle der realisierten Schutzmaßnahmen.<br/>
                        <br/>
                        Alle von uns durchgeführten technischen Zeichnungen sind in Farbe und können den Prüfunterlagen
                        sowohl gedruckt als auch digital beigefügt werden.
                    </div>

                </div>
                <div className={"flex mt-24 gap-20 xll:gap-24 flex-wrap lm:pl-20 "} id={"andere_leistungen"}>
                    <div className={"lg:basis-[46%]"}>
                        <div className={"font-bold mb-4 flex flex-row gap-4 -ml-10"}><IconSelling
                            className={"w-6 fill-white"}/>Materialverkauf
                        </div>
                        Falls Sie einzelne Bauteile eines Blitzschutzsystems erwerben möchten, beraten wir Sie gerne.
                        Wir bieten
                        eine große Anzahl von unterschiedlichen Komponenten an, darunter
                        Klemmverbinder, Halterungen, Erder, Drähte, Bänder sowie Isoliermaterial.
                        Für den Inneren Blitzschutz verkaufen wir darüber hinaus auch Überspannungsschutze in mehreren
                        Ausführungen.
                    </div>
                    <div className={"lg:basis-[46%]"}>
                        <div className={"font-bold mb-4 flex flex-row gap-4 -ml-10"}><IconLadder
                            className={"w-6 fill-white"}/>Leiternprüfung
                        </div>
                        Leitern und Tritte sind technische Arbeitsmittel und stellen eine Gefahrenquelle dar. Für Sie
                        als Unternehmen, das Leitern im Betrieb einsetzt, bieten wir daher eine umfassende Prüfung
                        entsprechend der gesetzlichen Vorschriften an.
                        Die Erstellung von Prüfbericht, Prüfplaketten und Leiternkontrollbuch übernehmen wir
                        selbstverständlich ebenso.
                    </div>
                    <div className={"lg:basis-[46%]"}>
                        <div className={"font-bold mb-4 flex flex-row gap-4 -ml-10"}><IconTeaching
                            className={"w-6 fill-white"}/>Weiterbildungen / Seminare
                        </div>
                        Für Betriebe oder Einzelpersonen bieten wir Seminare über die gültige Erdernorm DIN 18014 an.
                        Während der Dauer des Seminars bringen wir Ihnen alles, was funktionsfähige Erdungsanlagen
                        ausmacht, näher.
                    </div>
                    <div className={"lg:basis-[46%]"}>
                        <div className={"font-bold mb-4 flex flex-row gap-4 -ml-10"}><IconCoach
                            className={"w-6 fill-white"}/>Beratungen & Gutachten
                        </div>
                        Sollten Sie Opfer von Blitzeinschlägen geworden sein, so unterstützen wir Sie gerne bei der
                        Überprüfung des Schaden. Dazu gehört eine umfassende Schadenanalyse mit Fotodokumentation sowie
                        die Erstellung eines Sachverständigengutachtens.
                    </div>
                </div>
            </div>
        </div>
    </div>
}

