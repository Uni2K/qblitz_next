'use client'

import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from "next/image";
import image1 from '../../../public/history/image1.png'
import image2 from '../../../public/technical_drawing.png'



export default function Home() {

    return <div className={"z-10 bg-background/80 bg"}>
        <div className={"flex flex-col pb-12 flex-grow mt-20 md:mt-40 max-w-content w-[85%] mx-auto"}>
            <div className={"text-sm text-accent-blue"}>Firmenhistorie</div>
            <h1>Sachverstand mit über 30 Jahren Erfahrung</h1>
            <div className={"mt-4"}>
                Die Firma blickt auf eine langjährige Erfahrung im Blitzschutzbau zurück.<br className={"hidden md:block"}/>
                Bereits seit den 1990er Jahren prüfen und errichten wir hauptberuflich Blitzschutzsystemen für Privat-
                und Gewerbekunden. <br className={"hidden md:block"} />Da sich mit der Zeit gesetzliche Vorschriften und Normen ändern, bilden wir uns
                regelmäßig über Seminare und Fachtagungen weiter.<br/>
                <br/>
                Darüber hinaus sind wir seit 1997 Mitglied im Bundesverband Deutscher Sachverständiger des Handwerks
                (BDSH gepr. Sachverständiger).<br/>
                <br/>
                Einige relevante Ereignisse in der Firmengeschichte entnehmen Sie bitte dem nachfolgenden Zeitstrahl:
            </div>
            <div className={"py-14"}>
                <VerticalTimeline layout={"2-columns"} lineColor={'#0293E4'} className={'timeLiner'}>
                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1990"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Erstmalige Tätigkeit im Blitzschutzbau</div>
                        <div className={"timeLinerDescription"}>
                            Prüfung und Bau von Blitzschutzanlagen im Bereich Nürnberg.
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1992"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Absolvierung LGA Fachprüfung</div>
                        <div className={"timeLinerDescription"}>
                            Erfolgreicher Abschluss als geprüfter Blitzableitersetzer an der Landesgewerbeanstalt Nürnberg
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="1997"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Grund- und Aufbauseminar für Sachverständige</div>
                        <div className={"timeLinerDescription mb-4"}>
                            Erfolgreiche Absolvierung des Grund- und Aufbauseminars für Sachverständige des Handwerks der HWK Ostthüringen (geprüft d. Akademie des HW, staatlich anerkannt)
                        </div>
                        <Image alt={"firmenhistorie"}  className={" border-layout-separator border h-full rounded-lg flex-grow max-w-[400px] w-full object-contain"} src={image1}></Image>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '0px', borderWidth: '0px', borderRightColor: '#0293E4'}}
                         contentStyle={{background: 'none', boxShadow: 'none'}}
                        date="2012"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader border-0 py-0 -mt-2 -ml-10 px-0"><span className={"mr-2"}>🎉</span> 10 Jähriges Firmenjubiläum</div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="2015"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Schulung zur Leiternprüfung</div>
                        <div className={"timeLinerDescription"}>
                            Erklärung zur “befähigte Person” nach Betriebssicherheitsverordnung (BetrSichV).
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        visible={true}
                        position={''}
                        contentArrowStyle={{borderRightWidth: '4px', borderWidth: '4px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', padding: '0', boxShadow: 'none'}}
                        date="2019"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader">Weiterbildung Technische Zeichnungen</div>
                        <div className={"timeLinerDescription mb-4"}>
                            Zweiwöchige Weiterbildung zum Vertiefen der Kenntnisse in der Erstellung von technischen Zeichnungen mithilfe  von AutoCAD
                        </div>
                        <Image alt={"firmenhistorie"}  className={" border-layout-separator border h-full rounded-lg flex-grow max-w-[400px] w-full object-contain"} src={image2}></Image>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        visible={true}
                        position={'right'}
                        contentArrowStyle={{borderRightWidth: '0px', borderWidth: '0px', borderRightColor: '#0293E4'}}
                        contentStyle={{background: 'none', boxShadow: 'none'}}
                        date="2022"
                        iconClassName={"timeLinerIcon"}
                    >
                        <div className="timeLinerHeader border-0 py-0 -mt-2 px-0 -ml-10"><span className={"mr-2"}>🎉</span> 20 Jähriges Firmenjubiläum</div>

                    </VerticalTimelineElement>
                </VerticalTimeline></div>


        </div>

    </div>
}

