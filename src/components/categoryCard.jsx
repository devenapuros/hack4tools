import styles from "@/styles/categoryCard.module.css";
import Link from "next/link";

export const CategoryCard = ({ children }) => {
    return (
        <Link href="/tools" className={styles.card}>
            {children}
        </Link>
    );
};
