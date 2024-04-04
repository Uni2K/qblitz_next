'use client'
import React from "react";
// @ts-ignore
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import IconLightning from "@/components/icons/iconLightning";



export default async function Home() {

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

            {/*<VerticalTimeline >*/}
            {/*    <VerticalTimelineElement*/}

            {/*        className="vertical-timeline-element--work"*/}
            {/*        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}*/}
            {/*        date="2011 - present"*/}
            {/*        visible={true}*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Creative Director</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design, Project Management, Team Leading*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2010 - 2011"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Art Director</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design, SEO, Online Marketing*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2008 - 2010"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Web Designer</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>*/}
            {/*        <p>*/}
            {/*            User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2006 - 2008"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Web Designer</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
            {/*        <p>*/}
            {/*            User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="April 2013"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>*/}
            {/*        <p>*/}
            {/*            Strategy, Social Media*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="November 2012"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Certification</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="2002 - 2006"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}*/}
            {/*        icon={<IconLightning className={"h-5"}/>}*/}
            {/*    />*/}
            {/*</VerticalTimeline>*/}
        </div>
    </div>
}

