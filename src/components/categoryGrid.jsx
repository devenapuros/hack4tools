import styles from "@/styles/categoryGrid.module.css";

export const CategoryGrid = ({ children }) => {
    return <div className={styles.grid}>{children}</div>;
};
