"use client";

import { FC, useMemo } from "react";
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
  const { createNewInstance, setMousePosition, setDragging } = useAdminContext();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation(); // Stop event from bubbling up
    const type = event.dataTransfer.getData("type");
    createNewInstance(path || [], type);
    setDragging("None");
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const styles = useMemo<object>(() => {
    return {
      width,
      height,
      display,
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      gap,
    };
  }, [width, height, display, flexDirection, justifyContent, alignItems, flexWrap, gap]);

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
