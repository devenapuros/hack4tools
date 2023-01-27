import styles from "@/styles/categoryCard.module.css";

export const CategoryCard = ({ children }) => {
    return <article className={styles.card}>{children}</article>;
};
