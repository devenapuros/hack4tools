import styles from "@/styles/primaryButton.module.css";

export const PrimaryButton = ({ children }) => {
    return <button className={styles.button}>{children}</button>;
};
