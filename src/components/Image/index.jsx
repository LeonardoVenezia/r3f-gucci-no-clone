import { Image as Img } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

const Image = ({ c, index, handleClick}) => {
    const [IsHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState(0);

    useFrame(() => {
        if (!IsHovered) return;
        setRotation(rotation +.05);
    });

    const handleOver = () => setIsHovered(true);

    const handleOut = ()=> {
        setIsHovered(false);
    }

    return (
        <Img
            key={c.url + index}
            url={c.url}
            position={c.position}
            rotation={[0, 0, rotation]}
            onPointerOver={handleOver}
            onPointerOut={handleOut}
            onClick={handleClick}
        />
    );
}

export default Image;
