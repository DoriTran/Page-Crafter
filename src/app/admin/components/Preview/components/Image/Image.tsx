import { FC, useMemo } from "react";
import Image from "next/image";
import ComponentProps from "../type";
import css from "./Image.module.scss";

interface ImageProps extends ComponentProps {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const defaultImageProps = {
  alt: "Alternative",
  width: 200,
  height: 200,
  borderRadius: "0px",
  objectFit: "cover",
};

export const ImageComponent: FC<ImageProps> = ({
  src,
  alt = "Alternative",
  width = defaultImageProps.width,
  height = defaultImageProps.height,
  borderRadius = defaultImageProps.borderRadius,
  objectFit = defaultImageProps.objectFit,
  onClick,
}) => {
  const styles = useMemo<object>(() => {
    return {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      borderRadius,
      objectFit,
    };
  }, [width, height, borderRadius, objectFit]);

  return (
    <div className={css.imageWrapper} style={styles} onClick={onClick}>
      <Image src={src || "/default.jpg"} alt={alt} layout="fill" objectFit={objectFit} />
    </div>
  );
};
