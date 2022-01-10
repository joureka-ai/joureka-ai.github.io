import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {

    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-center p-4">
            <div className="logo-container d-flex align-items-center">
                <img className="px-3 img-fluid" src="logo.png" width="150" alt="joureka Logo"/>
            </div>
            <nav className={styles.nav}>
                <Link href={`#About`}>
                    <span className={styles.navLink}>Über das Projekt</span>
                </Link>
                <Link href={`#Install`}>
                    <span className={styles.navLink}>Installieren</span>
                </Link>
                <Link href={`#Contact`}>
                    <span className={styles.navLink}>Kontakt</span>
                </Link>
                <Link href={`https://github.com/joureka-ai/joureka-app`}>
                    <a><FontAwesomeIcon size="2x" className="text-secondary" icon={faGithub} /></a>
                </Link>
            </nav>
        </div>
    )
}

export default Header;