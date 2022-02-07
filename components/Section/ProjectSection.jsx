import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./Section.module.scss";

const ProjectSection = () => {

  return (
    <React.Fragment>
        <div className="d-flex flex-row row justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 pl-lg pr-md">
                <h1 className={styles.sectionTitle}>Über das Projekt</h1>
                <p className={styles.sectionDescription}>joureka ist Teil des 
                <span className="text-secondary fw-bold"> aureka-Ökosystems</span>. aureka ist ein Startup, das digitale Tools für 
                das audiovisuelle Erbe und die Wissensproduktion entwickelt. Wir 
                gestalten <span className="text-secondary fw-bold">künstliche Intelligenz für den gesellschaftlichen Nutzen</span>. 
                Die cloud-basierte App von aureka für Archive, Bibliotheken und 
                wissenschaftliche Einrichtungen unterstützt die Erschließung und 
                Forschung mit audiovisuellen Medien. Bei aureka sind wir uns der 
                Entwicklung bewusst das zu verarbeitende Datenmengen wachsen und 
                Herausforderungen an Journalist:innen stetig steigen. Mit joureka 
                möchten wir eine effiziente Lösung anbieten, die wichtige investigativ 
                Arbeit unterstützt und Journalist:innen hilft, die <span className="text-secondary fw-bold">Sicherheit und 
                Souveränität ihrer Daten</span> und Informant:innen zu wahren. joureka wurde 2021-2022 durch den Prototype Fund finanziert.
                </p>
            </div>
            <div className={`col-12 col-md-3 ${styles.blueContainer} ${styles.right}`}>
                <div className="d-flex flex-column align-items-center p-3">
                    <a target="_blank" href={`https://prototypefund.de/project/joureka-mit-mehr-musse-vom-interview-zum-artikel/`} className="py-3"><img className="img-xs" src="logo_pf.png" alt="Logo Prototype Fund" /></a>
                    <a target="_blank" href={`https://github.com/joureka-ai/joureka-app`} className="py-3">
                        <FontAwesomeIcon size="3x" className="text-secondary" icon={faGithub} />
                    </a>
                    <a target="_blank" href={`https://aureka.ai/`} className="py-3"><img className="img-xs" src="logo_aureka.png" alt="Logo aureka" /></a>
                </div> 
            </div>
        </div>
    </React.Fragment>
  );
};

export default ProjectSection;