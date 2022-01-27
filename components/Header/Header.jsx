import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

    return (
        <div className={`${scroll ? "sticky": ""} d-flex flex-row justify-content-between align-center p-2`}>
            <div className={`${styles.logoContainer} d-flex align-items-center`}>
                <img className="px-3" src="logo.png" alt="joureka Logo"/>
            </div>
            <div className="mobileNav d-flex flex-row align-items-center d-block d-lg-none">
                <div className="dropdown m-3">
                    <button
                    className="btn btn-primary text-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    id="dropdownMenuButton1"
                    aria-expanded="false"
                    >
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                    <ul className={`dropdown-menu`} aria-labelledby="dropdownMenuButton1">
                    <li>
                        <Link href={`#Install`}>
                            <span className={styles.navLink}>Installieren</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={`#About`}>
                            <span className={styles.navLink}>Über das Projekt</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={`#Team`}>
                            <span className={styles.navLink}>Über das Team</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={`#Contact`}>
                            <span className={styles.navLink}>Kontakt</span>
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
            <nav className={`${styles.nav} d-none d-lg-flex align-items-center`}>
                <Link href={`#Install`}>
                    <span className={styles.navLink}>Installieren</span>
                </Link>
                <Link href={`#About`}>
                    <span className={styles.navLink}>Über das Projekt</span>
                </Link>
                <Link href={`#Team`}>
                    <span className={styles.navLink}>Das Team</span>
                </Link>
                <Link href={`#Contact`}>
                    <span className={styles.navLink}>Kontakt</span>
                </Link>
                <a target="_blank" href={`https://github.com/joureka-ai/joureka-app`}>
                    <FontAwesomeIcon size="2x" className="text-secondary" icon={faGithub} />
                </a>
            </nav>
        </div>
    )
}

export default Header;