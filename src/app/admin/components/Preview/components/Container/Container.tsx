"use client";

import { FC } from "react";
import styles from "./Container.module.scss";
import ComponentProps from "../type";
import { useAdminContext } from "../../../AdminContext/AdminContext";

interface ContainerProps extends ComponentProps {
  path?: string[];
  children: React.ReactNode;
  [key: string]: any;
}

const Container: FC<ContainerProps> = ({ path, children, ...restProps }) => {
  const { createNewInstance, setMousePosition } = useAdminContext();

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("type");
    createNewInstance(path || [], type);
    console.log("wtf");
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      {...(path?.length === 1 && { className: styles.preview, onMouseMove: handleMouseMove })}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Container;
