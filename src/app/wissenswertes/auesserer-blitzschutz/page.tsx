import ueberspannung from '../../../../public/wissenswertes/ueberspannung.png'

import React from "react";
import Image from "next/image";


export default async function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40 w-[70%] mx-auto max-w-[1000px]"}>
            <div className={"text-sm text-accent-blue"}>Wissenswertes</div>
            <h1>Äußerer Blitzschutz</h1>
            <div className={"mt-4"}>
                Er hat in erst Linie die Aufgabe, das Gebäude zu schützen, in dem der Blitz über eine gut leitende
                Verbindung ins Erdreich (möglichst bis zum Grundwasser) abgeleitet wird. Die Hauptenergie des Blitzes
                wird so unschädlich gemacht. Sonst würde sich die Energie einen unkontrollierten Weg durch die
                Bausubstanz suchen und dort eventuell erheblichen Schaden verursachen.
            </div>
            <div className={"mt-16"}>
                <div className={" max-w-[700px] mb-20 text-faded-navy text-sm"}>
                    <Image alt={"donner"}
                           className={" border-layout-separator border h-full  rounded-lg flex-grow  w-full object-contain"}
                           src={ueberspannung}></Image>
                    <div className={"mt-2"}>
                        Schematische Darstellung eines Spannungsverlaufs unter Einfluss von Überspannungen.
                        Basierend auf: <a
                        href={"https://www.elektro-plus.com/sicherheit/blitz-und-ueberspannungsschutz/ursachen-von-ueberspannungen"}>hier</a>
                    </div>
                </div>
            </div>

            <h2>Potentialausgleich</h2>
            <div>
                Die Funktion des Potentialausgleiches sorgt dafür, das alle metallischen Leitungen auf das gleiche
                elektrische Potential (= das des Blitzes) gebracht werden. Dadurch wird verhindert, dass es innerhalb
                des Gebäudes zwischen unterschiedlichen Leitungs-Potentialen zum Potentialausgleich durch
                Spannungsüberschlag/ Funkenentladung kommt. Durch Funkenentladungen im Gebäude wären die Bewohner stark
                gefährdet.
                Es ist jedoch nicht Aufgabe des äußeren Blitzschutzes Schäden an den elektrischen Anlagen zu verhindern.
                Bei einem Blitzschlag in elektrischen Leitungen schmelzen deren Isolierungen und Leiter in
                Sekundenbruchteilen (Kurzschluss).

                Ein Potentialausgleich ergibt sich bei der Zerstörung ohnehin. Das umgebende Baumaterial wird erhitzt
                und das darin enthaltene Wasser verdampft explosionsartig. Die elektrischen Leitungen werden zum Teil
                aus der Wand herausgesprengt.Wenn Sie solche Schäden verhindern (begrenzen) wollen, müssen Sie
                zusätzlich inneren Blitzschutz installieren. Dort wird versucht, die Blitzenergie am empfindlichen
                Stromnetz und den Elektrogeräten vorbeizuleiten.<br/>
                <br/>
                Das funktioniert ganz gut, wenn der Blitz (Überspannung) aus den öffentlichen Versorgungsnetzen ins
                Gebäude eindringt. Die Energie wird unmittelbar an der Hauseinleitung abgefangen und über den
                Potentialausgleich / Fundamenterder in das Erdreich versenkt.<br/>
                Keine Schutzwirkung ist allerdings bei direktem Blitzübergang in das Leitungsnetz zu erwarten, z.B. wenn
                die Sicherheitsabstände (=Näherungen) zwischen äußerer Blitzschutzanlage und Leitungsnetzen nicht
                eingehalten wurden.<br/>
                <br/>
                Bei Personen, die unmittelbaren Kontakt zu metallischen Leitungsnetzen im Augenblick des Blitzschlages
                haben, sind Schäden nicht auszuschließen.<br/>
                <br/>
                Allerdings ist der Blitz oft wenig geneigt seine gute leitfähige Verbindung über metallische Leitungen
                aufzugeben und stattdessen über den relativ schlecht leitenden menschlichen Körper sein (Erdungs-) Glück
                zu versuchen.
            </div>
            <h2>Verdeutlichung des Potentialausgleich</h2>
            <div>
                Der Strom ist der Wasserfluss (Menge und Geschwindigkeit) die Ladung ist die Wassermenge. Im normalen
                Flussleben fließt das Wasser vom Berg in Richtung Meer dabei hat es Hindernisse (Widerstände) zu
                überwinden. Kommen jetzt Wasserläufe mit unterschiedlich hohem Niveau zusammen, versucht das Wasser
                dieses Niveau auszugleichen z.B. an einem Wasserfall. <br/>
                Dieser Wasserfall (Ausgleichsstrom) kann hoch sein oder auch nur klein (z.B. ein einfaches Wehr) An
                dieser Stelle ist also ein Potentialausgleich. <br/>
                <br/>
                Jetzt gibt es aber Ausnahme Situationen z. B. starke Regenfälle dadurch kann es passieren, das ein See
                überläuft, hat dieser See keinen &quot;Potentialausgleich&quot; also einen natürlichen oder künstlichen
                Abfluss,
                dann entsteht eine unkontrollierte Überschwemmung, die Schäden verursachen kann. <br/>
                So ähnlich kann man sich Überspannungen (z.B. elektrostatische Aufladungen) vorstellen, die auf
                Installationen entstehen, die nicht am Potentialausgleich angeschlossen sind. Noch schlimmer wird es,
                wenn z.B. eine Staumauer bricht.
                <br/>
                Wenn der Bach unterhalb der Staumauer nicht in der Lage ist das Wasser aufzunehmen, dann kommt es zur
                Katastrophe. Das ist mit der Blitzstromtragfähigkeit der Installation gemeint. Plötzlich enorm hohe
                Ströme müssen innerhalb kürzester Zeit abgeführt werden, eben wie das Wasser eines Stausees beim Bruch
                der Staumauer.
                <br/>
                Bei einer Antennenerdung, die DIN gerecht errichtet wurde, ist also gewährleistet, das ein Überlaufen
                des Stausees nicht zu Schäden führen kann, da durch den gezielten Überlauf das Wasser / die Spannung z.
                B. durch elektrostatische Aufladungen in das Erdreich abfließen kann. <br/>
                Diese Erdung reicht aber meistens nicht aus um bei einem Staudammbruch / Blitzeinschlag den gesamten
                Blitzstrom abzuleiten.
                <br/>
                Der Vorteil, der uns die Nutzung der elektrischen Eigenschaften eines Blitzes beim Bau der äußeren
                Blitzschutzanlage bringt, wird im inneren zu einem großen Nachteil, über den Potentialausgleich wird das
                durch den Blitzeinschlag beim Übergang ins Erdreich entstandene Potential an alle Geräte geführt.
                Durch den Potentialausgleich und dem relativ hohen Isolationswiderstand innerhalb der meisten Gebäude
                sind wir als Person recht gut geschützt. In den Elektrogeräten jedoch entsteht eine Potentialdifferenz
                zwischen den geerdeten Leitern und den nicht geerdeten.
                <br/>
                Diese Potentialdifferenz ist die Ursache für die Schäden, weil es zu Überschlägen kommt. Etwa die Hälfte
                des Blitzstromes wird über die Erdungsanlage abgeleitet, die andere Hälfte geht z.B. über die anderen
                metallen leitenden Installationen ins Erdreich.
                <br/>
                Dadurch kann aber z.B. ein, in ein Elektrokabel eingespeister Blitzteilstrom noch Schäden in
                Installationen anrichten die über einen Kilometer entfernt sind. D.h. der innere Blitzschutz erlangt
                dadurch eine immer höhere Bedeutung, da nicht nur direkte Blitzschläge, sondern auch Einschläge in der
                näheren (bis 1km)Umgebung Schäden anrichten können. (Und das sind nur die ohmschen Einkopplungen die
                hier beschrieben wurden es gibt noch weitere.)
            </div>
            <h2>Sinn und Aufgabe des PA</h2>
            <div>
                Der Potentialausgleich (PA) dient in erster Linie der Sicherheit. Seine Aufgabe besteht darin, metallen
                leitende Installationen so miteinander zu verbinden, damit unterschiedliche Potentiale sich ausgleichen
                können.<br/>
                <br/>
                Beispiel: Ein älteres Gebäude ohne PA, Elektroinstallation, noch mit klassischer Nullung in den
                Steckdosen wurde dann nur der Null mit dem Schutzleiterkontakt verbunden. (d.h. am Gerätegehäuse liegt
                nicht der Schutzleiter, sondern der Nullleiter ein Spannungsführender Leiter an!)
                <br/>
                Jetzt baut jemand eine Antenne auf das Dach und installiert vorschriftsmäßig eine Antennenerdung. Da der
                Betreiber der Antennenanlage Angst vor Blitzeinschlägen hat steckt er die Antenne immer erst in sein
                Gerät, wenn er es benutzt.
                <br/>
                Gerätegehäuse aus Metall und der Stecker ebenfalls. In dem Moment, wo er beide Teile gleichzeitig
                berührt fließen über seinen Körper Ausgleichsströme.
                <br/>
                Wäre ein Potentialausgleich vorhanden, würden diese Ausgleichströme darüber fließen. Es gibt die
                unterschiedlichsten Konstellationen, warum verschiedene Potentiale auf metallen leitenden Objekten
                entstehen, deshalb wird einfach gefordert, herstellen des PA.
                <br/>
                Wenn jetzt eine Blitzschutzanlage errichtet wird, ändert sich an der Funktion des PA gar nichts. Er wird
                nur mit der Blitzschutzanlage verbunden.
            </div>
        </div>
    </div>
}

