import React from "react";
import styles from "./Section.module.scss";

const AboutSection = () => {

  return (
    <React.Fragment>
        <div className="d-flex flex-row row justify-content-center align-items-center h-100">
            <div className="col-12 pl-lg pr-md">
                <h1 className={styles.sectionTitle}>Was ist joureka?</h1>
                <div className={styles.sectionDescription}>
                <div>joureka ist eine Open-Source-Anwendung, 
                die jedem zur Verfügung steht, der sie nutzen möchte. Wir - Cecilia Maas, Felix 
                Mertineit und Ana-Maria Tomi - veröffentlichen joureka unter der A-GPL-3.0 Lizenz, 
                welche weitere Nutzung, bei Vertrieb unter der gleichen Lizenz, ermöglicht. Die 
                Entwicklung kann auf GitHub nachverfolgt werden: 
                <a target="_blank" href="https://github.com/joureka-ai/joureka-app"><span className="text-secondary fw-bold">https://github.com/joureka-ai/joureka-app</span></a> .</div>
                <div className="mt-2">Der technische Funktionsumfang von joureka basiert auf <span className="text-secondary fw-bold">automatischer Spracherkennung</span> und 
                neuesten <span className="text-secondary fw-bold">Methoden des Natural Language Processing</span>. Die Spracherkennungsbibliothek VOSK liefert 
                die Transkripte und die semantischen sowie statistischen Zusammenfassungen erfolgen mit Hilfe 
                von aktuellen Deep-Learning-Modellen und Clustering-Algorithmen. Die Architektur von joureka 
                ist so konzipiert, dass die bisherigen Modelle einfach mit zukünftigen ausgetauscht werden können.</div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default AboutSection;