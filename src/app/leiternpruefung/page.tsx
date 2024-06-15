import React from "react";
import {Metadata} from "next";
import leiter1 from '../../../public/leiter_1.webp'
import leiter2 from '../../../public/leiter_2.webp'
import Image from "next/image";
import donner from "../../../public/wissenswertes/donner.jpeg";


export const metadata: Metadata = {
    title: 'Leiternprüfung',
    description: 'Informationen zur Prüfung von Leitern',
}

export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-20 md:mt-40 w-[85%] mx-auto max-w-content"}>
            <div className={"text-sm text-accent-blue"}>Leistungen</div>
            <h1>Leiternprüfung</h1>
            <div className={"mt-4"}>
                Leitern und Tritte sind technische Arbeitsmittel und stellen eine Gefahrenquelle dar.
                Für Sie als Unternehmen, das Leitern im Betrieb einsetzt, besteht eine Prüfpflicht: Leitern, Tritte und
                Gerüste müssen regelmäßig durch eine befähigte Person auf ihren ordnungsgemäßen Zustand überprüft
                werden.<br className={"hidden md:block"}/> <br className={"hidden md:block"}/>
                Im §4 Betriebssicherheitsverordnung (BetrSichV) heißt es unter anderem:
                „Ein Arbeitgeber hat seinen Beschäftigten nur solche Arbeitsmittel bereit zu stellen, die für den
                Arbeitsplatz geeignet sind und bei deren bestimmungsgemäßer Benutzung Sicherheit und Gesundheitsschutz
                gewährleistet sind.“
                In §10 der BetrSichV wird genauer auf die Prüfung der Arbeitsmittel eingegangen.
                Laut den Berufsgenossenschaftlichen Informationen (BGI) hat ein Unternehmer dafür zu sorgen, dass eine
                von ihm beauftragte und befähigte Person Leitern und Tritte regelmäßig auf ordnungsgemäßen Zustand
                prüft.<br className={"hidden md:block"}/><br className={"hidden md:block"}/>
                Die Sicherheit von Leitern im Sinne unserer Kunden ist für uns von äußerster Wichtigkeit.
                Wir bieten Ihnen daher eine regelmäßige Überprüfung Ihrer Leitern und Tritte durch eine befähigte Person
                an.
            </div>


            <h2>Was ist eine „befähigte Person“?</h2>
            <div>
                Eine befähigte Person nach Betriebssicherheitsverordnung (BetrSichV) hat an einer Schulung bei TÜV,
                Berufsgenossenschaft oder bei einem Leitern-Hersteller absolviert.
                In den Technischen Regeln für Betriebssicherheit 1203 (TRBS) sind die Anforderungen an die befähigte
                Person weiter konkretisiert.
            </div>
            <h2>Wer führt die Prüfungen von Leitern und Tritten durch?</h2>
            <div>
                Wir führen die Prüfung ihrer Leitern und Tritte für Sie durch. Das Auslagern der Leiternprüfung an einen
                Spezialisten minimiert Ihren internen Aufwand.
            </div>
            <h2>Auf welche Mängel wird geprüft?</h2>
            <div>
                Der Prüfer führt eine Sicht- und Funktionsprüfung jeder Leiter durch:
                <ul className={"list-outside pb-8"}>
                    <li>Sind alle Sprossen fest und unbeschädigt?</li>
                    <li>Sind Schrauben und Muttern gegen selbstständiges Lösen gesichert?</li>
                    <li>Sind allen Nieten und Schrauben fest und vorhanden?</li>
                    <li>Fehlen Bauteile?</li>
                    <li>Gibt es Risse und Verformungen?</li>
                    <li>Gibt es scharfe Kanten oder Brüche?</li>
                    <li>Sind die Fußenden der Leiter rutschfest und intakt?</li>
                    <li>Gibt es relevante Abnutzungserscheinungen, die eine Funktion beeinträchtigen?</li>
                    <li>Diese Fragen sind in Form einer detaillierten Checkliste vorgegeben.</li>
                </ul>
                <Image alt={"Unzulässige Reparatur einer Leiter"} className={"max-w-[800px] w-full"} src={leiter1}></Image>
            </div>

            <h2>Wie läuft eine Prüfung von Leitern und Tritten ab?</h2>
            <div>
                Der Prüfer arbeitet ein Leiternkontrollblatt (Checkliste) mit einer Vielzahl von Fragen ab und hält das
                Prüfergebnis jeder Leiter in einem Kontrollblatt fest. Für jede Leiter muss eine Dokumentation erstellt
                werden.
                Auf geprüfte Leitern wird eine Prüfplakette (Jahresplakette) angebracht oder aber sie wird ausgesondert
                (zur Reparatur oder zur Verschrottung). Kleine Defekte an Leitern können entweder repariert werden oder
                bei größeren Defekten die Leiter für weitere Nutzungen gesperrt werden.
            </div>
            <h2>Wie wird eine Leiternprüfung dokumentiert?</h2>
            <div>
                Das während der Prüfung jeder Leiter ausgefüllte und vom Prüfer unterschriebene Kontrollblatt wird im
                Leiternkontrollbuch (Prüfordner) abgeheftet, um den zuständigen Behörden einen Nachweis regelmäßiger
                Leiternprüfungen nachzuweisen. Das Kontrollbuch verbleibt im Unternehmen und enthält auch weitere
                Informationen und Hilfen wie z.B. Prüflisten. Es bietet sich an, alle Leitern im Betrieb zu nummerieren
                und eine Liste der Leitern im Leiternkontrollbuch zu hinterlegen.
            </div>

            <h2>Wie oft müssen Leitern überprüft werden?</h2>
            <div>
                Die Zeitabstände für die Prüfung richten sich nach den Betriebsverhältnissen. Ausschlaggebend sind die
                Nutzungshäufigkeit, die Beanspruchung bei der Benutzung sowie die Häufigkeit und Schwere festgestellter
                Mängel bei vorangegangenen Prüfungen.
            </div>

            <h2>Wo steht, dass Leitern und Tritte geprüft werden müssen?</h2>
            <div>
                Es gibt diverse Gesetze, Vorschriften und Normen, die sich im engeren und weiteren Sinne mit der
                Sicherheit von Leitern und Tritten beschäftigen. Die wichtigsten sind:
                <ul className={"list-outside"}>
                    <li>Betriebssicherheitsverordnung (BetrSichV)</li>
                    <li>BGI 694 (neue Bezeichnung: DGUV Information 208-017) als Handlungsanleitung für den Umgang mit
                        Leitern und Tritten
                    </li>
                    <li>Unfallverhütungsvorschriften BGI 694 (neue Bezeichnung: DGUV Information 208-017)</li>
                </ul>
            </div>

            <h2>Die Prüfung Ihrer Leitern und Tritte beinhaltet:</h2>
            <ul className={"list-outside pb-8"}>
                <li>Leiternprüfung: Die Überprüfung Ihrer Leitern und Tritte auf ordnungsgemäßen Zustand entsprechend
                    der gesetzlichen Vorschriften.
                </li>
                <li>Prüfbericht: Erstellung der erforderlichen Prüfdokumentation sowie Kennzeichnung durch Aufbringen
                    von Prüfplaketten. Führen eines Leiternkontrollbuchs.(Extern oder Intern)
                </li>
            </ul>
            <Image alt={"Unzulässige Reparatur einer Leiter"} className={"max-w-[800px] w-full"} src={leiter2}></Image>

        </div>
    </div>
}

