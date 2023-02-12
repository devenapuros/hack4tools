import Link from "next/link";
import { ImageBox } from "./imageBox";
import styles from "@/styles/carouselItem.module.css";

export const CarouselItem = ({ tool, dataIndex = 0 }) => {
    return (
        <li className={styles.item} data-index={dataIndex}>
            <Link href={`/tool/${tool.id}`} className={styles.link}>
                <ImageBox
                    size={100}
                    color={tool.color}
                    alt={tool.name}
                    corner={18}
                />
                <div>
                    <h1>{tool.name}</h1>
                    <small>By {tool.autor}</small>
                </div>
                <p>{tool.slogan || tool.description}</p>
            </Link>
        </li>
    );
};
