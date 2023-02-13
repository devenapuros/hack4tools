import { Ghost } from "@/icons/Ghost";
import styles from "@/styles/moduleError.module.css";

export const ModuleError = ({ children }) => {
    return (
        <div className={styles.container}>
            <Ghost size={70} />
            <span>
                {children ||
                    "Sorry! We are having problems loading this module"}
            </span>
        </div>
    );
};
