"use client";

import { ApIcon } from "@/components";
import { Paper } from "@mui/material";
import { FC } from "react";
import styles from "./ComponentPanel.module.scss";

interface ComponentProps {
  type: string;
  icon: any;
}

const Component: FC<ComponentProps> = ({ type, icon }) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("type", type);
  };

  return (
    <Paper className={styles.wrapper} elevation={3} draggable onDragStart={handleDragStart}>
      <ApIcon icon={icon} color="#D8AE7E" size={35} />
      <div className={styles.type}>{type}</div>
    </Paper>
  );
};

export default Component;
