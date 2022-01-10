import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./Section.module.scss";

const InstallationSection = () => {

  return (
    <React.Fragment>
        <div className="row">
            <div className="col-12 pl-lg pr-md">
                <h1 className={styles.sectionTitle}>Joureka lokal installieren</h1>
                <p className={styles.sectionDescription}>Vivamus ut quam quis augue egestas vulputate a 
                    vitae ligula. Suspendisse pulvinar nulla vel tellus 
                    dapibus rhoncus. Vivamus pharetra quam vitae 
                    vestibulum cursus. Nulla dictum vitae ipsum sagittis 
                    luctus. Morbi id congue dolor. Morbi nec purus eu justo
                    tincidunt volutpat sed eu purus. Aliquam egestas 
                    maximus ipsum, vel imperdiet lacus varius nec.
                </p>
          </div>
        </div>
        <div className="d-flex flex-row row">
            <div className={`col-11 ${styles.blueContainer} ${styles.left}`}>
                <div className="d-flex flex-column align-items-center p-5">
                </div> 
                <div className="col-1">
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default InstallationSection;