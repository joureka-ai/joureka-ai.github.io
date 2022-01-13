import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className="d-flex justify-content-end w-100">
                <div className={styles.logoContainer}>
                    <img className="px-3" src="logo.png" width="100" alt="joureka Logo"/>
                    <span>&#169; joureka 2021</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;