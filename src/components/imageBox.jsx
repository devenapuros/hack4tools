import styles from "@/styles/imageBox.module.css";

export const ImageBox = ({ src, size = "4rem", color = "#88888830", alt }) => {
    return (
        <figure
            className={styles.box}
            style={{ height: size, width: size, background: color }}
        >
            {src && <img src={src} alt={alt} />}
        </figure>
    );
};
