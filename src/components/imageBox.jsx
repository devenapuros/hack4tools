import styles from "@/styles/imageBox.module.css";
import Image from "next/image";

export const ImageBox = ({ src, size = 64, color = "#88888830", alt }) => {
    if (src) return <Image src={src} alt={alt} height={size} width={size} />;
    return (
        <figure
            className={styles.box}
            style={{
                height: `${size}px`,
                width: `${size}px`,
                background: color,
            }}
        />
    );
};
