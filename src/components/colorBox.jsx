import styles from "@/styles/colorBox.module.css";
import { useEffect, useState } from "react";

export const ColorBox = () => {
    const [background, setBackground] = useState(null);
    useEffect(() => {
        const hexArray = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += hexArray[Math.floor(Math.random() * 16)];
        }
        setBackground(`#${code}`);
    }, []);

    return (
        <div
            className={styles.colorBox}
            style={{ backgroundColor: background }}
        ></div>
    );
};
