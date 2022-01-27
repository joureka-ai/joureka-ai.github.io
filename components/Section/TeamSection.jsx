import React from "react";
import styles from "./Section.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const TeamSection = () => {

  return (
    <React.Fragment>
        <div className="d-flex flex-row row justify-content-center align-items-center h-100">
            <div className={`col-12 col-md-6 ${styles.blueContainer} ${styles.left}`}>
                <div className="d-flex flex-column justify-content-center align-center p-5">
                    <div className="d-flex flex-row justify-content-around align-items-center pb-5">
                        <div className="d-flex flex-column align-items-center p-1">
                            <a className="py-2" target="_blank" href={`https://de.linkedin.com/in/cecilia-maas-49850091`}>
                                <FontAwesomeIcon size="2x" className="text-secondary" icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center p-3">
                            <h5>Cecilia Maas</h5>
                            <div className="text-center"> Project Management | Content Developer</div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center pb-5">
                        <div className="d-flex flex-column justify-content-center align-items-center p-3">
                            <h5>Felix Mertineit</h5>
                            <div className="text-center">Backend Developer | Machine Learning |<br/>Project Management</div>
                        </div>
                        <div className="d-flex flex-column align-items-center p-1">
                            <a className="py-2" target="_blank" href={`https://github.com/FelixMertin`}>
                                <FontAwesomeIcon size="2x" className="text-secondary" icon={faGithub} />
                            </a>
                            <a className="py-2" target="_blank" href={`https://www.linkedin.com/in/felix-mertineit-9ba42058`}>
                               <FontAwesomeIcon size="2x" className="text-secondary" icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center">
                        <div className="d-flex flex-column align-items-center p-1">
                            <a className="py-2" target="_blank" href={`https://github.com/anatomi`}>
                                <FontAwesomeIcon size="2x" className="text-secondary" icon={faGithub} />
                            </a>
                            <a className="py-2" target="_blank" href={`https://www.linkedin.com/in/ana-maria-tomi-34a0a7157`}>
                                <FontAwesomeIcon size="2x" className="text-secondary" icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center p-3">
                            <h5>Ana Maria Tomi</h5>
                            <div className="text-center">Frontend Developer | UX Design</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="col-12 col-md-6 pl-lg pr-sm mt-3">
                <h1 className={styles.sectionTitle}>Über uns</h1>
                <p className={styles.sectionDescription}>Cecilia Maas ist promovierte 
                Medienhistorikerin und Ideengeberin für joureka als auch aureka. Sie 
                unterstützt die Entwickler:innen in Kommunikation und liefert Feedback.
                Felix Mertineit ist studierter Wirtschaftsinformatiker (M.Sc.) und 
                fungiert bei joureka als Projektmanager, Backend- und Deep-Learning-Entwickler. 
                Ana-Maria Tomi ist als angehende Medienformatikerin für die Designkonzepte und 
                -sprache sowie für die eigentliche Entwicklung eines interaktiven 
                und ansprechenden Frontends zuständig. 
                </p>
            </div>
        </div>
    </React.Fragment>
  );
};

export default TeamSection;