import styles from "@/styles/colorBox.module.css";

export const ColorBox = ({ content = " ", size, color }) => {
    return (
        <div
            className={styles.box}
            style={{
                height: `${size}px`,
                width: `${size}px`,
                background: color,
            }}
        >
            {content[0]}
        </div>
    );
};
