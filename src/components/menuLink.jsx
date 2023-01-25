import Link from "next/link";
import styles from "@/styles/menuLink.module.css";

export const MenuLink = ({ href = "#", children }) => {
    return (
        <Link className={styles.link} href={href}>
            {children}
        </Link>
    );
};
