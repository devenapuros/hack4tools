import Link from "next/link";
import styles from "@/styles/toolCard.module.css";
import { ImageBox } from "@/components/imageBox";

export const ToolCard = ({ allowTag }) => {
    return (
        <Link href="/tool/1" className={styles.card}>
            <ImageBox />
            <div className={styles.data}>
                <header className={styles.header}>
                    <h1>Awesome Tool</h1>
                    <small>By Devenapuros</small>
                </header>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <ul className={styles.categories}>
                    <li className={styles.category}>Backdoors</li>
                    <li className={styles.category}>Osint</li>
                </ul>
            </div>
            {allowTag && <div className={styles.newLabel}>new</div>}
        </Link>
    );
};
