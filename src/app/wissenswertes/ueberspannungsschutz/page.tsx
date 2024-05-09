import ueberspannung from '../../../../public/wissenswertes/ueberspannung.png'

import React from "react";
import Image from "next/image";
import {Metadata} from "next";
import SourceTag from "@/components/sourceTag";

export const metadata: Metadata = {
    title: 'Überspannungsschutz',
    description: 'Informationen zu Überspannungsschutzen',
}

export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40 w-[70%] mx-auto max-w-content"}>
            <div className={"text-sm text-accent-blue"}>Wissenswertes</div>
            <h1>Überspannungsschutz</h1>
            <div className={"mt-4"}>
                Eine Überspannung entsteht, wenn der Blitz irgendwo in der Umgebung eines Hauses einschlägt. Das kann
                ein Laternenmast sein, ein Nachbarhaus oder eine Wiese. Häufig schlägt der Blitz auch in eine Strom-
                oder eine Telefonleitung ein. Die dabei entstehende hohe Energieladung wird dann über alles was leitet
                weitertransportiert.<br/>
                <br/>
                Dem Blitz ist es egal, ob eine Stromleitung in der Nähe ist oder nicht. Er sucht sich immer den Weg, der
                ihm den geringsten Widerstand bietet und das Material, das am besten leitet. Wird die Energie im Haus
                nicht abgeleitet oder gezielt dazu genötigt, sich an einem Blitzschutz auszutoben, dann sucht sie sich
                selbst ein &quot;schwaches&quot; Gerät, das sie dann zerstört. Moderne Computer, HiFi- oder TV-Geräte
                haben meist
                sehr viel, hochkomplexe Technik auf kleinem Raum und sind deshalb anfällig für Überspannungen. Kommt
                noch eine Vernetzung der Geräte hinzu, hat der Strom erneut leichtes Spiel.<br/>
                <br/>
                Überspannungen können auch durch Spannungsschwankungen im Stromnetz entstehen - auch ohne
                Blitzeinschlag.
            </div>
            <div className={"mt-16"}>
                <div className={" relative max-w-[800px] mb-20 text-faded-navy text-sm"}>
                    <Image alt={"donner"}
                           className={" border-layout-separator border h-full  rounded-lg flex-grow  w-full object-contain"}
                           src={ueberspannung}></Image>
                    <div className={"text-left text-sublabel text-faded-navy mt-2"}> Schematische Darstellung eines
                        Spannungsverlaufs unter Einfluss von Überspannungen
                    </div>
                    <SourceTag title={"Basierend auf"}
                               url={"https://www.elektro-plus.com/sicherheit/blitz-und-ueberspannungsschutz/ursachen-von-ueberspannungen"}/>

                </div>
            </div>

            <h2>Wie kommt die Energieladung ins Haus?</h2>
            <div>
                Bei Überspannungen vor allem über Leitungen, also die Stromleitung, an die das Haus angeschlossen ist,
                oder die Telefon- oder Breitbandleitung, die ins Haus führt. Sie kann aber auch von einem Blitzableiter
                überspringen, wenn andere Leitungen im Haus oder Datennetze zu nah am Blitzableiter liegen. <br/>
                Warum verhindern die Energieversorger nicht, dass hohe Überspannungen in die Häuser gelangen? Sie
                verhindern es so gut sie können. Auch die Energieversorger schützen ihre Netze, weil jeder Ausfall
                Kosten verursacht. <br/>
                <br/>
                Die Energiemengen, die bei einem Blitzschlag frei gesetzt werden, sind aber so hoch und entstehen in
                einer extrem kurzen Zeit, sodass ein hundertprozentiger Schutz nicht möglich ist. Schlägt ein Blitz in
                das Leitungsnetz der Versorger ein, wird er durch deren Schutzsystem geschwächt. Trotzdem können noch
                über tausend Volt beim Haus des Verbrauchers ankommen.
            </div>
            <h2>Kann Überspannung auch ins Haus kommen, wenn mein Haus geerdet ist?</h2>
            <div>
                Leider ja. Der Blitzexperte Karl-Heinz Otto - er arbeitet auch als Sachverständiger für die Industrie-
                und Handelskammer Lippe geht davon aus, dass viele, auch moderne Häuser nicht ausreichend geerdet
                sind.Die Erdungssysteme im Fundament eines Hauses würden nach einigen Jahren austrocknen, argumentiert
                Otto, und dem Blitz damit die Möglichkeit nehmen ins feuchte Erdreich auszuweichen. Es kann sogar
                passieren, dass die Energiemengen über das Erdreich ins Haus gelangen, praktisch durch die Hintertür und
                sich dort, weil sie nicht abgeleitet werden, austoben.
            </div>
            <h2>Was kann man tun, um sich zu schützen?</h2>
            <div>
                Nachträglich kann man Überspannungsschutzsysteme in Häuser einbauen lassen. Gefährdet sind Häuser immer,
                wo bereits ein Überspannungsschaden aufgetreten ist. Am besten ist ein Drei-Stufen-Schutz, den die
                Fachleute in Grobschutz (im Strom-Anschlusskasten am Haus), Mittelschutz (in den Verteilerkästen im
                Haus) und Feinschutz (zwischen Steckdose und Gerät) einteilen. Grob- und Mittelschutz sollten nur von
                ausgebildeten Fachhandwerkern installiert werden. Für ein normales Wohnhaus wird der Einbau dieses
                Schutzes zwischen 650 und 1000€ kosten.
            </div>
            <h2>Welcher Feinschutz ist sinnvoll?</h2>
            <div>
                Feinschutzgeräte sind Adapter oder Steckerleisten, die zwischen Steckdose und Geräte gesetzt werden. Sie
                können im Einzelhandel, bei Elektrofachmärkten oder bei Fachhandwerkern gekauft werden.<br/>
                Herbert Schmolke vom Verband der Schadensversicherer (VdS) warnt aber vor Wühltischware, z.B. aus
                Baumärkten. Sie würden häufig zu viel versprechen und zu wenig halten. Leider gibt es derzeit keine
                unabhängigen, vergleichenden Warentests zu Feinschutzgeräten. Deshalb gibt es wenig Infos dazu, welche
                Adapter oder Steckerleisten wirklich gut sind und welche nur bedingt nützlich sind.<br/>
                Experten empfehlen Verbrauchern fünf Punkte zur Orientierung:
                <ul>
                    <li>Produkte von Markenfirmen kaufen (z.B. Pröbster, Dehn, OBO Bettermann, Phönix Contact)</li>
                    <li> Die Hersteller sollten eine Garantie für die Funktionsfähigkeit der Geräte übernehmen</li>
                    <li>Das Geräte sollte solide aussehen und aus guten Materialien bestehen.</li>
                    <li> Es sollte auf jeden Fall die Schutzklasse D erfüllen.</li>
                </ul>
                Der Verband der Schadenversicherer will ab Mitte 2005 ein VDS-Zertifikat für
                Feinschutzgeräte vergeben. Derzeit verhandelt er noch mit den Herstellern über die Kriterien, die gute
                Feinschutzgeräte erfüllen müssen.
            </div>
            <h2>Die schlechte Nachricht, fast zum Schluss:</h2>
            <div>
                Einen hundertprozentigen Schutz bieten alle diese Schutzsysteme nicht. Vor allem wenn die Überspannung,
                wie oben beschrieben durch die Hintertür kommt und sich nicht an die für Strom gedachten Leitungen hält.
                Deshalb sollten Mieter und Hausbesitzer darauf achten, dass Überspannungsschäden über die
                Hausratversicherung mit abgedeckt sind. Das ist nicht immer der Fall. Außerdem sollte der
                Versicherungskunde vorher abschätzen, ob er mit der vereinbarten Entschädigungsgrenze (oft nur 5% der
                Versicherungssumme) auch hinkommt.
            </div>
        </div>
    </div>
}

