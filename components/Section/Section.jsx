import styles from "./Section.module.scss";

const Section = ({children}) => {

    return (
        <div className={styles.section}>
            <div className={styles.sectionContent}>{children}</div>
        </div>
    );
};

export default Section;