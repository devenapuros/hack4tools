import styles from "@/styles/menuLink.module.css";

export const ExternalLink = ({ children, href, className }) => {
    return (
        <a
            className={`${styles.link} ${className}`}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
};
