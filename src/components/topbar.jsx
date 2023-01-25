import styles from "@/styles/topbar.module.css";
import { Logo } from "./logo";
import { Menu } from "./menu";

export const Topbar = () => {
    return (
        <nav className={styles.topbar}>
            <Logo />
            <Menu />
        </nav>
    );
};
