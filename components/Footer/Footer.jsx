import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-10">
                    <div className="d-flex flex-row justify-content-center">
                        Datenschutz | Kontakt
                    </div>
                    </div>
                    <div className="col-2">
                        <div className={styles.logoContainer}>
                            <img className="px-3" src="/logo.png" width="100" alt="joureka Logo"/>
                            <span>&#169; joureka 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;