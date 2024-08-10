"use client";

import { FC, useMemo } from "react";
import { isNaN } from "lodash";
import { usePathname } from "next/navigation";
import css from "./Container.module.scss";
import ComponentProps from "../type";
import { useAdminContext } from "../../../AdminContext/AdminContext";

interface ContainerProps extends ComponentProps {
  path?: string[];
  width?: any;
  height?: any;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Container: FC<ContainerProps> = ({
  path,
  width,
  height,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap,
  children,
  ...restProps
}) => {
  const { createNewInstance, setMousePosition } = useAdminContext();
  const pathname = usePathname();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation(); // Stop event from bubbling up
    const type = event.dataTransfer.getData("type");
    createNewInstance(path || [], type);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const styles = useMemo<object>(() => {
    // Convert width to a string with 'px' if it is a numeric string
    const computedWidth = typeof width === "string" && !isNaN(Number(width)) ? `${width}px` : width;

    return {
      ...(pathname === "/admin" && { backgroundColor: "#F7EFE5" }),
      width: computedWidth,
      height,
      display,
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      gap,
    };
  }, [width, pathname, height, display, flexDirection, justifyContent, alignItems, flexWrap, gap]);

  return (
    <div
      {...(path?.length === 1 && { className: css.preview, onMouseMove: handleMouseMove })}
      {...(path?.length !== 1 && { className: css.container, style: styles })}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Container;
