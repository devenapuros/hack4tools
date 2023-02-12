import { Ghost } from "@/icons/Ghost";
import styles from "@/styles/notFoundTool.module.css";

export const NotFoundTool = () => {
    return (
        <div className={styles.container}>
            <Ghost size={70} />
            <span>No matching results found</span>
        </div>
    );
};
