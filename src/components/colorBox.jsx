/* eslint-disable no-unused-vars */
import styles from "@/styles/colorBox.module.css";

export const ColorBox = ({ content = " ", size, color, corner }) => {
    return (
        <figure
            className={styles.box}
            style={{
                height: `${size}px`,
                width: `${size}px`,
                // background: color,
                borderRadius: `${corner}px`,
            }}
        >
            {content[0]}
        </figure>
    );
};
