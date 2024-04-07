'use client'

import React, {useState} from 'react';
import {Gallery} from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


let fileNames = [
    {
        "src": "tn_Alu Aufgeplatze Isolation.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Aluknetlegierung und Kalk (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Aluknetlegierung und Kalk (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Aluknetlegierung und Kalk (3).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Aluknetlegierung und Kalk (4).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Anschluss Stahltreppe fehlt.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Biogasanlage mit überspannter Fangeinrichtung.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Biogasanlagen LPS (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Biogasanlagen LPS (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Biogasanlagen LPS (3).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blechanschluss unzureichend.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blitze über Quaschwitz (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blitze über Quaschwitz (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blitzeinschlag Baustelle Holzkonstruktion (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Blitzeinschlag Baustelle Holzkonstruktion (2).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Blitzeinschlag Dreba Feldkapelle (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blitzeinschlag Dreba Feldkapelle (2).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Blitzeinschlag Fichte (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Blitzeinschlag Fichte (2).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Blitzeinschläge Kirchturmspitze.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blitzschaden Absprengung Dachkasten.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blitzschaden Austrittstelle Schlafraum.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Blitzschaden Einschlag Ortblech.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Blitzschutz.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Defekte Erdung Korrosion.webp",
        "width": 300,
        "height": 238
    },
    {
        "src": "tn_Defekte Halter.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Einblicke unterm Pflaster (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Einblicke unterm Pflaster (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Erdanschluss Fehlt.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Erdeinführung Kupfer (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Erdeinführung Kupfer (2).webp",
        "width": 189,
        "height": 300
    },
    {
        "src": "tn_Erderfahne.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Erdstange Alu-Band (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Erdstange Alu-Band (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Erdung Fahne mangelhaft.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Erdung Vorhangfassade.webp",
        "width": 300,
        "height": 169
    },
    {
        "src": "tn_Fangspitze Alu 8 MM 1,2 M.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Fangstangen Einsatzbeispiel (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Fangstangen Einsatzbeispiel (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Fangstangen Einsatzbeispiel (3).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Fangstangen statt Masche.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Fassadenanschluss fehlt.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Fehlender PE Anschluss (1).webp",
        "width": 300,
        "height": 169
    },
    {
        "src": "tn_Fehlender PE Anschluss (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Frankreich Eifelturm Blitzschutz (1).webp",
        "width": 300,
        "height": 200
    },
    {
        "src": "tn_Frankreich Eifelturm Blitzschutz (2).webp",
        "width": 300,
        "height": 200
    },
    {
        "src": "tn_Frankreich Paris Ableitung Kupferband mit Trennstelle.webp",
        "width": 200,
        "height": 300
    },
    {
        "src": "tn_HVI in der Leitung.webp",
        "width": 170,
        "height": 300
    },
    {
        "src": "tn_Isolation um Aludraht defekt.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Isolierte Fangeinrichtung.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Isoliertes Regenfallrohr.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Kabelnaeherung (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Kabelnaeherung (3).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Kabelnaeherung (4).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Kabelnaeherung (5).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Kabelnäherung parallele Leitungen.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Kabelverlegung unzulässig (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Kabelverlegung unzulässig (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Klassische Kabelnaeherung.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Knau Einschlag Eiche.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Kroatien Blitzschutz.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Lose Fangeinrichtung.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Lose Leitung auf Foliendach.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Lose Leitung auf Schieferdach.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Lose Schelle und Kabelnäherung.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Mangelhafte Erdung.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Montagefehler elektrisches Fenster.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Neustadt Orla Rep. Ableitung (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Neustadt Orla Rep. Ableitung (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Neustadt Orla Rep. Ableitung (3).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Neustadt Orla Rep. Ableitung (4).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Neustadt Orla Rep. Ableitung (5).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Neustadt Orla Rep. Ableitung (6).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Nord-Zypern Blitzschutz (1).webp",
        "width": 169,
        "height": 300
    },
    {
        "src": "tn_Nord-Zypern Blitzschutz (2).webp",
        "width": 169,
        "height": 300
    },
    {
        "src": "tn_Nord-Zypern Blitzschutz (3).webp",
        "width": 300,
        "height": 169
    },
    {
        "src": "tn_Nord-Zypern Blitzschutz (4).webp",
        "width": 169,
        "height": 300
    },
    {
        "src": "tn_Näherung elektrische  Bauteile.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Näherung Klima.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Näherung Lüfter (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Näherung Lüfter (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Ostsee Reetdächer Blitzschutz (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Ostsee Reetdächer Blitzschutz (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Ostsee Rügen Reetdächer Blitzschutz (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Ostsee Rügen Reetdächer Blitzschutz (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Ostsee Rügen Reetdächer HVI Blitzschutz (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Ostsee Rügen Reetdächer HVI Blitzschutz (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_PA fehlt.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_PE nach Rohrwechsel nicht angeschlossen.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Polnischer Blitzschutz.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Portugal Blitzschutz.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Portugal Neubau Fangstangen.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Prüfen in schwierigen baulichen Gegebenheiten (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Prüfen in schwierigen baulichen Gegebenheiten (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Pößneck HVI Trafo.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Rost Erdungleitung.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Schottland Burgruine Urquhart Castle (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Schottland Burgruine Urquhart Castle (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Schottland Edinburgh (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Schottland Edinburgh (2).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Schottland Edinburgh (3).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Sirene Isolation.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Spezialbauwerke wie Schornsteine.webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Süd-Zypern Blitzschutz (1).webp",
        "width": 169,
        "height": 300
    },
    {
        "src": "tn_Süd-Zypern Blitzschutz (2).webp",
        "width": 169,
        "height": 300
    },
    {
        "src": "tn_Süd-Zypern Blitzschutz (3).webp",
        "width": 169,
        "height": 300
    },
    {
        "src": "tn_Trafobrand.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Unterputz Kupfer (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Unterputz Kupfer (2).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Unzulässige Fangspitzen.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Unzulässige Kabelverlegung.webp",
        "width": 300,
        "height": 169
    },
    {
        "src": "tn_Unzulässige Verlängerung Fangstange.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Unzulässiger Anschluss (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Unzulässiger Anschluss (2).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Unzulässiger Anschluss (3).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_USA Blitzschutz.webp",
        "width": 300,
        "height": 169
    },
    {
        "src": "tn_USA Bryce Canyon Nationalpark (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_USA Bryce Canyon Nationalpark (2).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_USA Grand Canyon Nationalpark (1).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_USA Grand Canyon Nationalpark (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Wolke-Wolke Blitz (1).webp",
        "width": 225,
        "height": 300
    },
    {
        "src": "tn_Wolke-Wolke Blitz (2).webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Zerstörte Halterungen nach Dachreparatur.webp",
        "width": 300,
        "height": 225
    },
    {
        "src": "tn_Zerstörte Leitung nach Dachreparatur.webp",
        "width": 300,
        "height": 225
    }

]

const ImageGallery: React.FC = () => {
    const [index, setIndex] = useState(-1);

    const currentImage = fileNames[index];
    const nextIndex = (index + 1) % fileNames.length;
    const prevIndex = (index + fileNames.length - 1) % fileNames.length;

    const handleClick = (index: number, item: any) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <div>
            <Gallery

                images={fileNames}
                thumbnailImageComponent={props => (
                    // @ts-ignore
                    <img
                        {...props.imageProps}
                        width={props.item.width * 2}
                        height={props.item.height * 2}
                        className="img-responsive"
                        src={"/gallery/thumbnails/" + props.item.src}
                    />)
                }
                onClick={handleClick}
                enableImageSelection={false}
            />
            {!!currentImage && (
                <Lightbox
                    clickOutsideToClose={true}
                    mainSrc={"/gallery/" + fileNames[index].src.replace("tn_", "")}
                    imageTitle={fileNames[index].src.replace("tn_", "").replace(".webp","")}
                    mainSrcThumbnail={fileNames[index].src}
                    nextSrc={"/gallery/" + fileNames[nextIndex].src.replace("tn_", "")}
                    nextSrcThumbnail={fileNames[nextIndex].src}
                    prevSrc={"/gallery/" + fileNames[prevIndex].src.replace("tn_", "")}
                    prevSrcThumbnail={fileNames[prevIndex].src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </div>
    );
};

export default ImageGallery;