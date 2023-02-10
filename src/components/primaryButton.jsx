import styles from "@/styles/primaryButton.module.css";

export const PrimaryButton = ({ children, type }) => {
    return (
        <button type={type} className={styles.button}>
            {children}
        </button>
    );
};
