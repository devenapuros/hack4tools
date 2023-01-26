import styles from "@/styles/toolsGrid.module.css";

export const ToolsGrid = ({ children }) => {
    return <div className={styles.grid}>{children}</div>;
};
