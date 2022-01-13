import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Section.module.scss";

const ContactSection = () => {

  return (
    <div className="d-flex flex-column justify-content-center h-100">
        <div className="row">
            <div className="col-3"></div>
            <div className={`col-6 ${styles.orangeContainer} ${styles.center}`}>
                <div className="p-3">
                    <h1 className={styles.sectionTitle}>Kontakt</h1>
                    <p className={styles.sectionDescription}>Vivamus ut quam quis augue egestas vulputate a 
                        vitae ligula. Suspendisse pulvinar nulla vel tellus 
                        dapibus rhoncus. 
                    </p>
                    <div className="d-flex justify-content-start align-items-center text-primary fw-bolder pt-2">
                        <FontAwesomeIcon icon={faPaperPlane}/>
                        <div className="px-2 bl"><a href="mailto:kontakt@joureka.ai">kontakt@joureka.ai</a></div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-primary fw-bolder pt-2">
                        <FontAwesomeIcon icon={faGithub}/>
                        <div className="px-2 bl"><a target="_blank" href={`https://github.com/joureka-ai/joureka-app`}>
                        https://github.com/joureka-ai/joureka-app</a></div>
                    </div>
                </div>
               
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  );
};

export default ContactSection;