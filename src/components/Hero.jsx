import styles from "@/styles/hero.module.css";
import { SearchInput } from "@/components/searchInput";

export const Hero = () => {
    return (
        <header className={styles.container}>
            <h1>Awesome tool</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                magni non corrupti repellendus fuga.
            </p>
            <SearchInput className={styles.searchInput} />
        </header>
    );
};
