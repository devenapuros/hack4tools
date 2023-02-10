import styles from "@/styles/hero.module.css";
import { SearchInput } from "@/components/searchInput";
import { ImageBox } from "./imageBox";

export const Hero = () => {
    return (
        <header className={styles.container}>
            <ImageBox size={100} color="black" alt="A" corner={18} />
            <div>
                <h1>Awesome tool</h1>
                <small>By Devenpauros</small>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                magni non corrupti repellendus fuga.
            </p>
            <form className={styles.form}>
                <SearchInput placeholder="Search tools here by name, category or keywords" />
            </form>
        </header>
    );
};
