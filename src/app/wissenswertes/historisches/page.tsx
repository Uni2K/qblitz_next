'use client'

import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex  flex-col pb-12 flex-grow mt-40 w-[70%] mx-auto max-w-[1000px]"}>
            <div className={"text-sm text-accent-blue"}>Wissenswertes</div>
            <h1>Historisches</h1>
            <div className={"mt-4"}>
                Ein Ausflug in die Geschichte des Blitzableiters*<br/>
                <br/>
                Blitzableiter gab es bereits im Altertum. An den Tempeln der Pharaonen wurden bis zu 30m hohe Maste
                aufgestellt, die mit Klammern an den Mauern befestigt waren und an der Spitze mit reinem Kupfer
                verkleidet.Ihre Verwendung als Schutz gegen Blitze ist aus einer Inschrift belegt, die eine solche
                Anlage und deren Zweck am Tempel von Edfu aus dem 15. Jahrhundert v.Chr. wie folgt beschreibt:<br/>
                <br/>
                Dies ist der hohe Pylonbau des Gottes von Edfu, am Hauptsitz des leuchtenden Horus, Mastbäume befinden
                sich paarweise an ihrem Platz, um das Ungewitter an der Himmelshöhe zu scheiden.
                Weiter heißt es in der Bauvorschrift:
            </div>

            <div className={"py-14"}>
                <VerticalTimeline layout={"1-column-left"} lineColor={'#0293E4'} className={'timeLiner'}>
                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="925–587 v.Chr."
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Erste Blitzschutzanlagen sind nachweisbar</div>
                        <div className={"timeLinerDescription"}>
                            <b>Tempel der Juden in Jerusalem</b><br/>
                            Das Dach des Tempels, mit stark vergoldetem Zedernholz bekleidet, war von einem Ende bis zum
                            anderen mit langen eisernen oder stählernen und oben vergoldeten Lanzen besetzt. Die
                            Frontwände
                            des Gebäudes waren gleichfalls in ihrer ganzen Ausdehnung mit stark vergoldetem Holz
                            bedeckt.
                            Unter dem Vorhofe des Tempels endlich befanden sich Cisternen, in welche das von den Dächern
                            laufende Wasser durch metallene Röhren abfloss. Wir finden hier Schäfte von Blitzableitern
                            und
                            eine Menge von Conductoren.
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1750"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Benjamin Franklin führt Versuche zu Blitzschlägen durch</div>
                        <div className={"timeLinerDescription"}>
                            <b>Er kommt zu folgendem Ergebnis:</b><br/>
                            &quot;Zur Bewahrung der Häuser und Kirchenspitze vor einem Blitzschlag
                            sind die höchsten Stellen mit schärfe eisernen Stangen zu versehen.
                            Von hier führt dieser Stangen nächste einzige Draht an der Außenseite der
                            Gebäude bis in die Erde geführt werden&quot;.
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1769"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Erster Blitzableiter Deutschlands errichtet auf der
                            St.-Jacobi-Kirche in Hamburg
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1775"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Dresdner Schloß wird mit Blitzschutz versehen</div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1781"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Maximilian Theodor scheitert mit der Installation von
                            Blitzschutz
                        </div>
                        <div className={"timeLinerDescription"}>
                            <b>Der Pfälzer und bayrische Kurfürst Maximilian Theodor</b><br/>
                            auf seinem Münchner Schloß und seinem Sommeraschloß zu
                            Nymphenburg, &quot;Wetterableiter&quot; errichten
                            lassen.
                            In Unterfrank vom Blitz und den Blitz- und Wetterableitern- Luz, F.J. Frankfurter und
                            Leitgeb,
                            wiegel und Schneider, 1784 kann man heut lesen: &quot;Der Pöbel wurde von der Geistlichkeit
                            angestiftet, sich diesem Unternehmen zu widersetzen. Es entstand also ein Tumult, und die
                            Wetterableiter mussten unter den Schutz der Waffen aufgerichtet werden. Kaum aber hatte sich
                            die
                            erste Furcht etwas verloren, so waren die Geistlichen, die sich am meisten wider die
                            Wetterableiter setzten, die ersten, die sie an ihren Klöstern auffrichteten&quot;.
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1794"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">J.A.H. Reimarus gibt die ersten Vorschriften zur Blitzableitung
                            heraus
                        </div>
                    </VerticalTimelineElement>

                </VerticalTimeline></div>
            <div className={"text-faded-navy"}>
                <b>*Quellen</b>:
                <ul className={"list-outside"}>
                    <li>Blitzschutzanlagen: W.Trommler und E. A. Hampe, Hüthig Verlag 1997;</li>
                    <li>Die ältesten Blitzableiter. Archiv für Post und Telegraphie (1893) Nr. 21, Seite 779 – 780;</li>
                    <li>Blitzableiteranlagen an dem altjüdischen Tempel in Jerusalem. Archiv für Post und Telegraphie
                        (1898) Nr.9, Seite 295–296
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

