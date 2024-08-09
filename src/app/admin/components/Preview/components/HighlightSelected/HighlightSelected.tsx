import React, { FC, ReactNode } from "react";
import styles from "./HighlightSelected.module.scss"; // Assuming you use SCSS for styling

interface HighlightSelectedProps {
  children: ReactNode;
}

const HighlightSelected: FC<HighlightSelectedProps> = ({ children }) => {
  return <div className={styles.highlight}>{children}</div>;
};

export default HighlightSelected;
