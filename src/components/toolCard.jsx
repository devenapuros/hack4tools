import styles from "@/styles/toolCard.module.css";
import { ColorBox } from "./colorBox";

export const ToolCard = () => {
    return (
        <article className={styles.card}>
            <ColorBox />
            <div className={styles.data}>
                <header className={styles.header}>
                    <h1>Awesome Tool</h1>
                    <small>
                        By&nbsp;
                        <a className={styles.autor} href="#">
                            Devenapuros
                        </a>
                    </small>
                </header>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <ul className={styles.categories}>
                    <li className={styles.category}>Backdoors</li>
                    <li className={styles.category}>Osint</li>
                </ul>
            </div>
        </article>
    );
};
