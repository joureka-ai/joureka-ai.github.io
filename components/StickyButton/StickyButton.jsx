import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./StickyButton.module.scss";

const StickyButton = ({icon, action}) => {
    return (
        <button
            type="button"
            className={`${styles.stickyButton} btn btn-secondary`}
            id="btn-back-to-top"
            onClick={() => action()}
            >
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </button>
    )
}

export default StickyButton;