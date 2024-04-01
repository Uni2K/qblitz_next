'use client'

import React, {useEffect, useState} from 'react';
import 'react-image-lightbox/style.css';
import 'lightgallery/css/lightgallery.css';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
// @ts-ignore
import fjGallery from 'flickr-justified-gallery';


let fileNames = [
    "Alu Aufgeplatze Isolation.webp",
    "Aluknetlegierung und Kalk (1).webp",
    "Aluknetlegierung und Kalk (2).webp",
    "Aluknetlegierung und Kalk (3).webp",
    "Aluknetlegierung und Kalk (4).webp",
    "Anschluss Stahltreppe fehlt.webp",
    "Biogasanlage mit überspannter Fangeinrichtung.webp",
    "Biogasanlagen LPS (1).webp",
    "Biogasanlagen LPS (2).webp",
    "Biogasanlagen LPS (3).webp",
    "Blechanschluss unzureichend.webp",
    "Blitze über Quaschwitz (1).webp",
    "Blitze über Quaschwitz (2).webp",
    "Blitzeinschlag Baustelle Holzkonstruktion (1).webp",
    "Blitzeinschlag Baustelle Holzkonstruktion (2).webp",
    "Blitzeinschlag Dreba Feldkapelle (1).webp",
    "Blitzeinschlag Dreba Feldkapelle (2).webp",
    "Blitzeinschlag Fichte (1).webp",
    "Blitzeinschlag Fichte (2).webp",
    "Blitzeinschläge Kirchturmspitze.webp",
    "Blitzschaden Absprengung Dachkasten.webp",
    "Blitzschaden Austrittstelle Schlafraum.webp",
    "Blitzschaden Einschlag Ortblech.webp",
    "Blitzschutz.webp",
    "Defekte Erdung Korrosion.webp",
    "Defekte Halter.webp",
    "Einblicke unterm Pflaster (1).webp",
    "Einblicke unterm Pflaster (2).webp",
    "Erdanschluss Fehlt.webp",
    "Erdeinführung Kupfer (1).webp",
    "Erdeinführung Kupfer (2).webp",
    "Erderfahne.webp",
    "Erdstange Alu-Band (1).webp",
    "Erdstange Alu-Band (2).webp",
    "Erdung Fahne mangelhaft.webp",
    "Erdung Vorhangfassade.webp",
    "Fangspitze Alu 8 MM 1,2 M.webp",
    "Fangstangen Einsatzbeispiel (1).webp",
    "Fangstangen Einsatzbeispiel (2).webp",
    "Fangstangen Einsatzbeispiel (3).webp",
    "Fangstangen statt Masche.webp",
    "Fassadenanschluss fehlt.webp",
    "Fehlender PE Anschluss (1).webp",
    "Fehlender PE Anschluss (2).webp",
    "Frankreich Eifelturm Blitzschutz (1).webp",
    "Frankreich Eifelturm Blitzschutz (2).webp",
    "Frankreich Paris Ableitung Kupferband mit Trennstelle.webp",
    "HVI in der Leitung.webp",
    "Isolation um Aludraht defekt.webp",
    "Isolierte Fangeinrichtung.webp",
    "Isoliertes Regenfallrohr.webp",
    "Kabelnaeherung (2).webp",
    "Kabelnaeherung (3).webp",
    "Kabelnaeherung (4).webp",
    "Kabelnaeherung (5).webp",
    "Kabelnäherung parallele Leitungen.webp",
    "Kabelverlegung unzulässig (1).webp",
    "Kabelverlegung unzulässig (2).webp",
    "Klassische Kabelnaeherung.webp",
    "Knau Einschlag Eiche.webp",
    "Kroatien Blitzschutz.webp",
    "Lose Fangeinrichtung.webp",
    "Lose Leitung auf Foliendach.webp",
    "Lose Leitung auf Schieferdach.webp",
    "Lose Schelle und Kabelnäherung.webp",
    "Mangelhafte Erdung.webp",
    "Montagefehler elektrisches Fenster.webp",
    "Neustadt Orla Rep. Ableitung (1).webp",
    "Neustadt Orla Rep. Ableitung (2).webp",
    "Neustadt Orla Rep. Ableitung (3).webp",
    "Neustadt Orla Rep. Ableitung (4).webp",
    "Neustadt Orla Rep. Ableitung (5).webp",
    "Neustadt Orla Rep. Ableitung (6).webp",
    "Nord-Zypern Blitzschutz (1).webp",
    "Nord-Zypern Blitzschutz (2).webp",
    "Nord-Zypern Blitzschutz (3).webp",
    "Nord-Zypern Blitzschutz (4).webp",
    "Näherung elektrische  Bauteile.webp",
    "Näherung Klima.webp",
    "Näherung Lüfter (1).webp",
    "Näherung Lüfter (2).webp",
    "Ostsee Reetdächer Blitzschutz (1).webp",
    "Ostsee Reetdächer Blitzschutz (2).webp",
    "Ostsee Rügen Reetdächer Blitzschutz (1).webp",
    "Ostsee Rügen Reetdächer Blitzschutz (2).webp",
    "Ostsee Rügen Reetdächer HVI Blitzschutz (1).webp",
    "Ostsee Rügen Reetdächer HVI Blitzschutz (2).webp",
    "PA fehlt.webp",
    "PE nach Rohrwechsel nicht angeschlossen.webp",
    "Polnischer Blitzschutz.webp",
    "Portugal Blitzschutz.webp",
    "Portugal Neubau Fangstangen.webp",
    "Prüfen in schwierigen baulichen Gegebenheiten (1).webp",
    "Prüfen in schwierigen baulichen Gegebenheiten (2).webp",
    "Pößneck HVI Trafo.webp",
    "Rost Erdungleitung.webp",
    "Schottland Burgruine Urquhart Castle (1).webp",
    "Schottland Burgruine Urquhart Castle (2).webp",
    "Schottland Edinburgh (1).webp",
    "Schottland Edinburgh (2).webp",
    "Schottland Edinburgh (3).webp",
    "Sirene Isolation.webp",
    "Spezialbauwerke wie Schornsteine.webp",
    "Süd-Zypern Blitzschutz (1).webp",
    "Süd-Zypern Blitzschutz (2).webp",
    "Süd-Zypern Blitzschutz (3).webp",
    "Trafobrand.webp",
    "Unterputz Kupfer (1).webp",
    "Unterputz Kupfer (2).webp",
    "Unzulässige Fangspitzen.webp",
    "Unzulässige Kabelverlegung.webp",
    "Unzulässige Verlängerung Fangstange.webp",
    "Unzulässiger Anschluss (1).webp",
    "Unzulässiger Anschluss (2).webp",
    "Unzulässiger Anschluss (3).webp",
    "USA Blitzschutz.webp",
    "USA Bryce Canyon Nationalpark (1).webp",
    "USA Bryce Canyon Nationalpark (2).webp",
    "USA Grand Canyon Nationalpark (1).webp",
    "USA Grand Canyon Nationalpark (2).webp",
    "Wolke-Wolke Blitz (1).webp",
    "Wolke-Wolke Blitz (2).webp",
    "Zerstörte Halterungen nach Dachreparatur.webp",
    "Zerstörte Leitung nach Dachreparatur.webp"
]

const ImageGallery: React.FC = () => {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
            itemSelector: '.gallery__item',
            rowHeight: 280,
            lastRow: 'start',
            gutter: 4,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false,
        });
        setLoading(false)
    }, []);


    return (
        <div>
            <LightGallery
                plugins={[lgZoom]}
                mode="lg-fade"
                pager={false}
                thumbnail={true}
                galleryId={'images'}
                download={false}
                autoplayFirstVideo={false}
                elementClassNames={'gallery'}
                mobileSettings={{
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false,
                }}
            >
                {fileNames.map((value, index) => {
                    return <a
                        key={value}
                        className="gallery__item cursor-pointer"
                        data-src={"/gallery/" + fileNames[index]}
                        data-sub-html={value.replace(".webp", "")}
                    >
                        <img
                            alt={value}
                            className="img-responsive"
                            src={"/gallery/thumbnails/tn_" + value}
                        />
                    </a>

                })}

            </LightGallery>
        </div>
    );
};

export default ImageGallery;