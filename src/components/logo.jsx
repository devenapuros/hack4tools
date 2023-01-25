import styles from "@/styles/logo.module.css";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" className={styles.container}>
            <div className={styles.logo}></div>
            <h1 className={styles.brand}>Hack4tools</h1>
        </Link>
    );
};
