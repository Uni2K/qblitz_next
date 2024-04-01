import location from '../../../public/location.png'
import React from "react";
import IconEmail from "@/components/icons/iconEmail";
import IconPhone from "@/components/icons/iconPhone";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40  w-[70%] mx-auto"}>
            <div className={"flex flex-row"}>
                <div className={"basis-[47%] p-8 pl-0"}>
                    <div className={"text-sm text-accent-blue"}>Kontakt</div>
                    <h2>Wir helfen Ihnen gerne</h2>
                    <div className={"mb-4 mt-8"}>Egal ob allgemeine Frage, konkretes Anliegen<br/>
                        oder Angebotsanforderung. Wir helfen Ihnen gerne persönlich weiter.
                    </div>
                    <div className={"mb-4"}>Schreiben Sie uns eine E-Mail oder rufen Sie uns einfach direkt an.<br/>
                        Wir sind von Montag bis Freitag von <b>6:30</b> Uhr bis <b>17:00</b> Uhr erreichbar.
                    </div>

                    <div className={"flex gap-4 mt-12"}>
                        <div className={"flex w-fit px-4 py-2 gap-4 items-center"}>
                            <IconPhone className={"h-4 fill-white"}/>
                            036484 / 22457
                        </div>
                        <a href={"mailto:info@qblitz.de"}
                           className={"flex w-fit px-4 py-2 gap-4 items-center bg-white/10 cursor-pointer"}>
                            <IconEmail className={"h-4 fill-white"}/>
                            info@qblitz.de
                        </a>
                    </div>
                </div>
                <div className={"basis-[53%] p-0"}>
                    <Image
                        src={location} className={""}
                        alt={"background"}/>
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
            <div className={"z-10 my-32 bg-layout-separator h-[1px] w-full"}></div>
            <div>
                <h2 className={"mb-8"}>Impressum</h2>

                <p>Prüfdienst für Blitzschutz</p>
                <p>Bernd Zimmermann</p>
                <p>Am Gries 407381</p>
                <p>Pößneck</p>
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

