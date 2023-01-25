import { Moon } from "@/icons/moon";
import { Sun } from "@/icons/sun";
import styles from "@/styles/themeToggler.module.css";

export const ToggleTheme = () => {
    return (
        <button className={styles.toggleButton}>
            <Moon className={styles.moon} size={20} />
            <Sun className={styles.sun} size={22} />
        </button>
    );
};
