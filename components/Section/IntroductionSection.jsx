import React from "react";
import styles from "./Section.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const IntroductionSection = () => {

  return (
    <React.Fragment>
        <div className="d-flex flex-row row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-6 pl-lg pr-sm">
                <h1 className={styles.sectionTitle}>Mit mehr Muße<br/>vom Interview<br/>zum Artikel!</h1>
                <p className={styles.sectionDescription}>joureka macht die Arbeit von Journalist:innen 
                leichter! Mit joureka <span className="text-secondary fw-bold">transkribierst du deine Interviews und Tonaufnahmen automatisch </span>  
                 und bereitest deine Artikel auf: joureka bietet generierte Überblicke über die Textinhalte 
                der Aufnahmen. Zum einen werden unterschiedliche Themengebiete identifiziert und zum anderen 
                werden dir Vorschläge für erkannte Personen, Orte, Organisationen und Daten geliefert. 
                Auch wird ersichtlich, welche Wörter am häufigsten Vorkommen. All diese Funktionen verknüpfen 
                die Ergebnisse mit dem einzelnen korrespondierenden Interview. Um dich dabei zu unterstützen 
                den Stift wirklich auf das Papier zu setze, haben wir für dich auch die Möglichkeit eingebaut 
                <span className="text-secondary fw-bold"> Interviews zu kommentieren</span> und deine <span className="text-secondary fw-bold">Notizen zu visualisieren</span>. 
                In Zeiten, in denen investigativer Journalismus schwieriger und notwendiger wird, arbeitet joureka lediglich 
                lokal auf deinem eigenen Rechner und mit Verschlüsselung! Die <span className="text-secondary fw-bold">Sicherheit deiner Daten</span> und 
                Interviewpartner:innen werden so nicht gefährdet.
                </p>
            </div>
            <div className={`col-12 col-lg-6 ${styles.blueContainer} ${styles.right}`}>
                <div className="p-5">
                    <Carousel showStatus={false} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                            <div>
                                <img className="carousel-img" src="create_project_1.png" alt="image1" />
                            </div>
                            <div>
                                <img className="carousel-img" src="create_project_2.png" alt="image2" />
                            </div>
                            <div>
                                <img className="carousel-img" src="loading_transcripts2.png" alt="image3"/>
                            </div>
                            <div>
                                <img className="carousel-img" src="transcription.png" alt="image4"/>
                            </div>
                            <div>
                                <img className="carousel-img" src="chart_view.png" alt="image5"/>
                            </div>
                    </Carousel> 
                </div> 
            </div>
        </div>
    </React.Fragment>
  );
};

export default IntroductionSection;