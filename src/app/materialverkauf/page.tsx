import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Materialverkauf',
    description: 'Informationen zum Verkauf von Blitzschutzmaterial',
}

export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-20 md:mt-40 w-[85%] mx-auto max-w-content"}>
            <div className={"text-sm text-accent-blue"}>Leistungen</div>
            <h1>Materialverkauf von allen Blitzschutz- und Erdungsbauteilen</h1>
            <div className={"mt-4"}>
                Umfassende Beratung zum jeweiligen Bauteil. Kleine Mengen können auch geliefert werden. Besser ist
                natürlich, Sie besuchen uns, dann können Sie alles in Ruhe ansehen und gleich mitnehmen.<br/> <br/>
                Hier eine kleine Auswahl der Klemmen und Drähte, die in Ausführungen Stahl verzinkt, Edelstahl V2A, V4A,
                Aluknetlegierung, und Kupfer lieferbar sind.<br/> <br/>

                Alle Materialien sind auf Wunsch und gegen Aufpreis  <span style={{ color: '#FF0000' }}>f</span>
                <span style={{ color: '#b700ff' }}>a</span>
                <span style={{ color: '#ff9100' }}>r</span>
                <span style={{ color: '#008000' }}>b</span>
                <span style={{ color: '#ffffff' }}>i</span>
                <span style={{ color: '#800080' }}>g</span> - pulverbeschichtet, erhältlich.

            </div>


            <h2>Klemmverbinder</h2>
            <ul className={"list-outside"}>
                <li>Multifunktionsklemmen</li>
                <li>Dachrinnenklemmen</li>
                <li>Blechfalzklemmen in diversen Ausführungen</li>
                <li>Stahlkonstruktionsklemmen in diversen Ausführungen</li>
                <li>Trennklemmen für Rund- und Flachleiter in diversen Ausführungen</li>
                <li>Kreuzklemmen für Rund- und Flachleiter in diversen Ausführungen</li>
                <li>Spezialklemmen für Anschlüsse im Erdbereich in diversen Ausführungen</li>
                <li>Klemmverbinder für Tiefenerder in diversen Ausführungen</li>
            </ul>
            <h2>Halterungen</h2>
            <ul className={"list-outside"}>
                <li>Halterungen für jedes Dach und jede Wand in allen Materialien lieferbar</li>
            </ul>
            <h2>Erder</h2>
            <ul className={"list-outside"}>
                <li>Tiefenerder steckbar in verschiedenen Längen, Ausführungen und Abmessungen</li>
                <li>Kreuzerder</li>
                <li>Plattenerder</li>
                <li>Erdungsfestpunkte in diversen Ausführungen</li>
            </ul>
            <h2>Drähte und Bänder</h2>
            <ul className={"list-outside"}>
                <li>Rundmaterial 8 - 10 mm (als isolierte Ausführung lieferbar bei Aluminium und Stahl verzinkt)</li>
                <li>Flachmaterial 20 x 2,5 mm / 30 x 3,5 mm / 40 x 4,0 mm</li>
                <li>flexible Seile in diversen Materialien und Stärken</li>
                <li>hochflexible Seile in diversen Materialien und Stärken</li>
            </ul>
            <h2> Isoliermaterial und Isoliertraversen aus GFK (Glasfaserverstärkter Kunststoff)</h2>
            <ul className={"list-outside"}>
                <li>Fettbinden für Erdverlegte Klemmen</li>
                <li>GFK Isoliertraversen in verschiedenen Längen und Stärken</li>
            </ul>
            <h2>Überspannungsschutz</h2>
            <ul className={"list-outside"}>
                <li>in allen Ausführungen und für alle Netze lieferbar</li>
                <li>Sonderlösungen für interne Netze</li>
                <li>Lösungen für Kommunikationssysteme</li>
                <li>Lösungen für Datensysteme</li>
            </ul>
        </div>
    </div>
}

