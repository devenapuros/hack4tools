import styles from "@/styles/categoryCard.module.css";
import Link from "next/link";

export const CategoryCard = ({ content }) => {
    return (
        <Link href={`/tools?search=${content}`} className={styles.card}>
            {content}
        </Link>
    );
};
