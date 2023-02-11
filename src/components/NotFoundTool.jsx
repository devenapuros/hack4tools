import { Ghost } from "@/icons/Ghost";
import styles from "@/styles/notFoundTool.module.css";

export const NotFoundTool = ({ searchQuery }) => {
    return (
        <div className={styles.container}>
            <Ghost size={70} />
            <span>We cannot found any result matching {searchQuery}</span>
        </div>
    );
};
