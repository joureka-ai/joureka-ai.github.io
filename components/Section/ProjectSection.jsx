import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./Section.module.scss";

const ProjectSection = () => {

  return (
    <React.Fragment>
        <div className="d-flex flex-row row justify-content-center align-items-center">
            <div className="col-12 col-md-10 pl-lg pr-md">
                <h1 className={styles.sectionTitle}>Über das Projekt</h1>
                <p className={styles.sectionDescription}>Vivamus ut quam quis augue egestas vulputate a 
                    vitae ligula. Suspendisse pulvinar nulla vel tellus 
                    dapibus rhoncus. Vivamus pharetra quam vitae 
                    vestibulum cursus. Nulla dictum vitae ipsum sagittis 
                    luctus. Morbi id congue dolor. Morbi nec purus eu justo
                    tincidunt volutpat sed eu purus. Aliquam egestas 
                    maximus ipsum, vel imperdiet lacus varius nec. In hac
                    habitasse platea dictumst. Donec gravida eleifend mi 
                    quis commodo. Duis sed leo justo. Fusce eget justo non 
                    risus tempor laoreet. Suspendisse ullamcorper magna 
                    quis velit ullamcorper suscipit.Vivamus ut quam quis augue egestas vulputate a 
                    vitae ligula. Suspendisse pulvinar nulla vel tellus 
                    dapibus rhoncus. Vivamus pharetra quam vitae 
                    vestibulum cursus. Nulla dictum vitae ipsum sagittis 
                    luctus. Morbi id congue dolor. Morbi nec purus eu justo
                    tincidunt volutpat sed eu purus. Aliquam egestas 
                    maximus ipsum, vel imperdiet lacus varius nec. In hac
                    habitasse platea dictumst. Donec gravida eleifend mi 
                    quis commodo. Duis sed leo justo. Fusce eget justo non 
                    risus tempor laoreet. Suspendisse ullamcorper magna 
                    quis velit ullamcorper suscipit.
                </p>
            </div>
            <div className={`col-12 col-md-2 ${styles.blueContainer} ${styles.right}`}>
                <div className="d-flex flex-column align-items-center p-5">
                    <Link href={`https://github.com/joureka-ai/joureka-app`}>
                        <a className="py-3"><img src="logo-pf.png" alt="image1" /></a>
                    </Link>
                    <Link href={`https://github.com/joureka-ai/joureka-app`}>
                        <a className="py-3"><FontAwesomeIcon size="3x" className="text-secondary" icon={faGithub} /></a>
                    </Link>
                    <Link href={`https://github.com/joureka-ai/joureka-app`}>
                        <a className="py-3"><img src="logo-aureka.png" alt="image1" /></a>
                    </Link>
                </div> 
            </div>
        </div>
    </React.Fragment>
  );
};

export default ProjectSection;