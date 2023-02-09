import Image from "next/image";
import { ColorBox } from "./colorBox";

export const ImageBox = ({
    src,
    size = 64,
    color = "#88888830",
    alt,
    corner = 0,
}) => {
    if (src)
        return (
            <Image
                src={`/logos/${src}`}
                alt={alt}
                height={size}
                width={size}
                style={{ borderRadius: `${corner}px` }}
            />
        );
    return <ColorBox color={color} size={size} content={alt} corner={corner} />;
};
