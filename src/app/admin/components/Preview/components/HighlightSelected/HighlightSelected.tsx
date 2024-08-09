import React, { FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./HighlightSelected.module.scss"; // Assuming you use SCSS for styling

interface HighlightSelectedProps {
  isHighlight: boolean;
  isGlobal: boolean;
  isContainer: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
}

const HighlightSelected: FC<HighlightSelectedProps> = ({
  isHighlight,
  isGlobal,
  isContainer,
  onClick,
  children,
}) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.highlight]: isHighlight,
        [styles.over]: !isGlobal,
        [styles.globalWrapper]: isGlobal,
        [styles.container]: isContainer,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default HighlightSelected;
