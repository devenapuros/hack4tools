import Link from "next/link";
import styles from "@/styles/toolCard.module.css";
import { ImageBox } from "@/components/imageBox";

export const ToolCard = ({
    id,
    name,
    newRelease,
    autor,
    logo,
    color,
    description,
    slogan,
    categories,
    allowTag,
}) => {
    return (
        <Link href={`/tool/${id}`} className={styles.card}>
            <ImageBox color={color} src={logo} alt={name} />
            <div className={styles.data}>
                <header className={styles.header}>
                    <h1>{name}</h1>
                    <small>By {autor}</small>
                </header>
                <p className={styles.description}>{slogan || description}</p>
                <ul className={styles.categories}>
                    {categories &&
                        categories.length > 0 &&
                        categories.map((category) => (
                            <li key={category} className={styles.category}>
                                {category}
                            </li>
                        ))}
                </ul>
            </div>
            {allowTag && newRelease && (
                <div className={styles.newLabel}>new</div>
            )}
        </Link>
    );
};
