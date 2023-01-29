import styles from "@/styles/section.module.css";

export const Section = ({ children, className }) => {
    return (
        <section className={`${styles.section} ${className}`}>
            {children}
        </section>
    );
};
