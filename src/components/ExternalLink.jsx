import styles from "@/styles/menuLink.module.css";

export const ExternalLink = ({ children, href }) => {
    return (
        <a className={styles.link} href={href} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
};
