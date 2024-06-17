import location from '../../../public/location.webp'
import mapslogo from '../../../public/maps.png'

import React from "react";
import IconEmail from "@/components/icons/iconEmail";
import IconPhone from "@/components/icons/iconPhone";
import Image from "next/image";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Kontakt & Impressum',
    description: 'Kontakt & Impressum',
}

export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-20 md:mt-40 w-[85%] lg:w-[70%] mx-auto"}>
            <div className={"flex flex-row gap-8 flex-wrap xlmd:flex-nowrap"}>
                <div className={"xlmd:basis-[47%] p-8 pl-0"}>
                    <div className={"text-sm text-accent-blue"}>Kontakt</div>
                    <h1>Wir helfen Ihnen gerne</h1>
                    <div className={"mb-4 mt-8"}>Egal ob allgemeine Frage, konkretes Anliegen<br className={"hidden md:block"}/>
                        oder Angebotsanforderung. Wir helfen Ihnen gerne persönlich weiter.
                    </div>
                    <div className={"mb-4"}>Schreiben Sie uns eine E-Mail oder rufen Sie uns einfach direkt an.<br className={"hidden md:block"}/>
                        Wir sind von Montag bis Freitag von <b>6:30</b> Uhr bis <b>16:00</b> Uhr erreichbar.
                    </div>

                    <div className={"flex gap-4 mt-12 flex-wrap"}>
                        <div className={"flex w-fit px-4 py-2 gap-4 items-center"}>
                            <IconPhone className={"h-4 fill-white"}/>
                            036484 / 22457
                        </div>
                        <a href={"mailto:info@qblitz.de"}
                           className={"flex w-fit px-4 py-2 gap-4 items-center bg-white/5 cursor-pointer hover:bg-default-hover"}>
                            <IconEmail className={"h-4 fill-white"}/>
                            info@qblitz.de
                        </a>
                    </div>
                </div>
                <div className={"xlmd:basis-[53%] p-0"}>
                    <div className={"relative"}><Link href={"https://maps.app.goo.gl/RTRutB2RHsCGnzSR8"} target={"_blank"}><Image
                        src={location} className={""}
                        alt={"map"}/></Link>
                        <Image src={mapslogo} alt={"maps Logo"} className={"w-24 absolute bottom-4 right-4"}/>
                    </div>
                    <div className={"text-sm flex flex-row gap-12 p-4  w-fit items-end mt-4 text-faded-navy"}>
                        <div>
                            <div className={"font-bold"}>Postanschrift & Büro</div>
                            <div>Am Gries 4</div>
                            <div>07381 Pößneck</div>
                        </div>
                        <div>
                            <div className={"font-bold"}>Lieferadresse</div>
                            <div>Ortsstraße 4</div>
                            <div>07389 Quaschwitz</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"z-10 my-32 bg-layout-separator h-[1px] w-full max-w-content"}></div>
            <div>
                <h2 className={"mb-8 mt-0"}>Impressum</h2>

                <p>Prüfdienst für Blitzschutz</p>
                <p>Bernd Zimmermann</p>
                <p>Am Gries 4</p>
                <p>07381 Pößneck</p>
                <p>Tel: 015774476108</p>
                <p>info@qblitz.de</p>


                <h3 className={"mt-8 mb-4"}>Auskunfts- und Widerrufsrecht</h3>

                <div>Sie haben jederzeit das Recht, sich unentgeltlich und unverzüglich über die zu Ihrer
                    Person erhobenen Daten zu erkundigen. Ebenfalls können Sie Ihre Zustimmung zur
                    Verwendung Ihrer angegebenen persönlichen Daten mit Wirkung für die Zukunft
                    widerrufen.<br/>
                    Hierfür wenden Sie sich bitte an den im Impressum angegebenen Diensteanbieter.
                </div>


                <h3 className={"mt-8 mb-4"}>Datenschutz (allgemein)</h3>

                <div>Beim Zugriff auf unsere Webseite werden automatisch allgemeine Informationen (sog.
                    Server-Logfiles) erfasst. Diese beinhalten u.a. den von Ihnen verwendeten Webbrowser
                    sowie Ihr Betriebssystem und Ihren Internet Service Provider. Diese Daten lassen
                    keinerlei Rückschlüsse auf Ihre Person zu und werden von uns statistisch
                    ausgewertet, um unseren Internetauftritt technisch und inhaltlich zu verbessern. Das Erfassen dieser
                    Informationen ist notwendig, um den Inhalt der Webseite korrekt ausliefern zu
                    können.<br/>
                    <br/>
                    Die Nutzung der Webseite ist grundsätzlich ohne Angabe personenbezogener Daten
                    möglich.
                    Soweit personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen)
                    erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese
                    Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.<br/>
                    <br/>
                    Sofern ein Vertragsverhältnis begründet, inhaltlich ausgestaltet oder geändert
                    werden
                    soll oder Sie an uns eine Anfrage stellen, erheben und verwenden wir
                    personenbezogene
                    Daten von Ihnen, soweit dies zu diesem Zwecke erforderlich ist (Bestandsdaten). Wir
                    erheben, verarbeiten und nutzen personenbezogene Daten soweit dies erforderlich ist,
                    um Ihnen die Inanspruchnahme des Webangebots zu ermöglichen (Nutzungsdaten). Sämtliche
                    personenbezogenen Daten werden nur solange gespeichert wie dies für den genannten
                    Zweck (Bearbeitung Ihrer Anfrage oder Abwicklung eines Vertrags) erforderlich ist. Hierbei
                    werden steuer- und handelsrechtliche Aufbewahrungsfristen von uns berücksichtigt.<br/>
                    <br/>
                    Auf Anordnung der zuständigen Stellen müssen wir im Einzelfall Auskunft über diese Daten
                    (Bestandsdaten) erteilen, soweit dies für Zwecke der Strafverfolgung, zur
                    Gefahrenabwehr, zur Erfüllung der gesetzlichen Aufgaben der
                    Verfassungsschutzbehörden
                    oder des Militärischen Abschirmdienstes oder zur Durchsetzung der Rechte am
                    geistigen
                    Eigentum erforderlich ist.<br/>
                    Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im Internet (z. B. bei
                    der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Vor dem Zugriff auf
                    Daten kann nicht lückenlos geschützt werden.<br/>
                    <br/>
                    Die Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
                    Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und
                    Informationsmaterialien wird hiermit ausdrücklich untersagt. Ausgenommen hiervon
                    sind bestehende Geschäftsbeziehungen bzw. es liegt Ihnen eine entsprechende Einwilligung von uns
                    vor.<br/>
                    <br/>
                    Die Anbieter und alle auf dieser Website genannten Dritten behalten sich
                    ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen vor.
                    Gleiches gilt für die kommerzielle Verwendung und Weitergabe der Daten.
                </div>
            </div>
        </div>
    </div>
}

