import styles from "@/styles/logo.module.css";

export const Logo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}></div>
            <h1 className={styles.brand}>Hack4tools</h1>
        </div>
    );
};
