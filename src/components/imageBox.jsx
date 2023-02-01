import Image from "next/image";
import { ColorBox } from "./colorBox";

export const ImageBox = ({ src, size = 64, color = "#88888830", alt }) => {
    if (src) return <Image src={src} alt={alt} height={size} width={size} />;
    return <ColorBox color={color} size={size} content={alt} />;
};
